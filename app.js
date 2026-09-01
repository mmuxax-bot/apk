// app.js
const APP_VERSION = '1.1.1';

// ==================== STATE ====================
let learnedVerbs = JSON.parse(localStorage.getItem('learnedVerbs') || '[]');
let learnedDialogues = JSON.parse(localStorage.getItem('learnedDialogues') || '[]');
let answeredQuestions = JSON.parse(localStorage.getItem('answeredQuestions') || '[]');
let favoriteVerbs = JSON.parse(localStorage.getItem('favoriteVerbs') || '[]');
let notificationSettings = JSON.parse(localStorage.getItem('notificationSettings') || '{"enabled":false,"time":"19:00","lastNotifiedDate":null}');

// Cari mövqe indeksləri (bölmə daxilində irəli/geri getmək üçün)
let currentVerbIndex = 0;
let currentDialogueIndex = 0;
let currentQuestionIndex = 0;

// ==================== İRƏLİLƏYİŞ SİSTEMİ (XP, SƏVIYYƏ, SERİYA, NİŞANLAR) ====================
const XP_PER_VERB = 10;
const XP_PER_DIALOGUE = 10;
const XP_PER_CORRECT_ANSWER = 5;

const LEVELS = [
    { name: 'Başlanğıc', xpRequired: 0 },
    { name: 'A1', xpRequired: 100 },
    { name: 'A2', xpRequired: 300 },
    { name: 'B1', xpRequired: 600 },
    { name: 'B2', xpRequired: 1000 },
    { name: 'C1', xpRequired: 1500 },
    { name: 'C2', xpRequired: 2200 }
];

const BADGES = [
    { id: 'first_verb', icon: '🌱', name: 'İlk addım', desc: 'İlk feili öyrən', check: s => s.learnedVerbsCount >= 1 },
    { id: 'verbs_10', icon: '📗', name: '10 Söz', desc: '10 feil öyrən', check: s => s.learnedVerbsCount >= 10 },
    { id: 'verbs_50', icon: '📘', name: '50 Söz', desc: '50 feil öyrən', check: s => s.learnedVerbsCount >= 50 },
    { id: 'verbs_150', icon: '📙', name: '150 Söz', desc: '150 feil öyrən', check: s => s.learnedVerbsCount >= 150 },
    { id: 'verbs_all', icon: '🏅', name: 'Bütün feillər', desc: 'Bütün feilləri öyrən', check: s => s.learnedVerbsCount >= verbsData.length },
    { id: 'dialogues_all', icon: '💬', name: 'Dialoq ustası', desc: 'Bütün dialoqları bitir', check: s => s.learnedDialoguesCount >= dialoguesData.length },
    { id: 'tests_all', icon: '🏆', name: 'Test çempionu', desc: 'Bütün testləri həll et', check: s => s.answeredCount >= questionsData.length },
    { id: 'streak_7', icon: '🔥', name: '7 günlük seriya', desc: '7 gün ardıcıl davam et', check: s => s.longestStreak >= 7 },
    { id: 'streak_30', icon: '⚡', name: '30 günlük seriya', desc: '30 gün ardıcıl davam et', check: s => s.longestStreak >= 30 }
];

let xp = parseInt(localStorage.getItem('xp') || '0', 10);
let earnedBadges = JSON.parse(localStorage.getItem('earnedBadges') || '[]');
let testStats = JSON.parse(localStorage.getItem('testStats') || '{"attempts":0,"correct":0}');
let streakData = { lastActiveDate: null, currentStreak: 0, longestStreak: 0 };

function todayStr() { return new Date().toISOString().slice(0, 10); }

function updateStreakOnVisit() {
    const today = todayStr();
    let data = JSON.parse(localStorage.getItem('streakData') || '{"lastActiveDate":null,"currentStreak":0,"longestStreak":0}');
    if (data.lastActiveDate !== today) {
        const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
        data.currentStreak = (data.lastActiveDate === yesterday) ? data.currentStreak + 1 : 1;
        data.lastActiveDate = today;
        if (data.currentStreak > data.longestStreak) data.longestStreak = data.currentStreak;
        localStorage.setItem('streakData', JSON.stringify(data));
    }
    streakData = data;
}

function addXp(amount) {
    xp += amount;
    localStorage.setItem('xp', String(xp));
}

function getLevelInfo(currentXp) {
    let current = LEVELS[0];
    let next = null;
    for (let i = 0; i < LEVELS.length; i++) {
        if (currentXp >= LEVELS[i].xpRequired) {
            current = LEVELS[i];
            next = LEVELS[i + 1] || null;
        }
    }
    return { current, next };
}

function recordTestAttempt(isCorrect) {
    testStats.attempts += 1;
    if (isCorrect) testStats.correct += 1;
    localStorage.setItem('testStats', JSON.stringify(testStats));
}

function checkBadges() {
    const stats = {
        learnedVerbsCount: learnedVerbs.length,
        learnedDialoguesCount: learnedDialogues.length,
        answeredCount: answeredQuestions.length,
        currentStreak: streakData.currentStreak,
        longestStreak: streakData.longestStreak
    };
    const newlyEarned = [];
    BADGES.forEach(b => {
        if (!earnedBadges.includes(b.id) && b.check(stats)) {
            earnedBadges.push(b.id);
            newlyEarned.push(b);
        }
    });
    if (newlyEarned.length > 0) {
        localStorage.setItem('earnedBadges', JSON.stringify(earnedBadges));
        newlyEarned.forEach(showBadgeToast);
    }
}

function showBadgeToast(badge) {
    const toast = document.createElement('div');
    toast.className = 'badge-toast';
    toast.innerHTML = `<span style="font-size:1.6rem;">${badge.icon}</span><div><div class="font-bold" style="font-size:0.9rem;">Yeni nişan!</div><div class="text-white-75" style="font-size:0.8rem;">${badge.name}</div></div>`;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3200);
}

function getDailyWord() {
    const dayIndex = Math.floor(Date.now() / 86400000);
    return verbsData[dayIndex % verbsData.length];
}

function openDailyWord() {
    const dw = getDailyWord();
    const idx = verbsData.findIndex(v => v.id === dw.id);
    showVerbsSection(idx);
}

function renderHomeStats() {
    const container = document.getElementById('home-stats');
    if (!container) return;
    const { current, next } = getLevelInfo(xp);
    const dw = getDailyWord();
    const xpIntoLevel = xp - current.xpRequired;
    const xpForLevel = next ? next.xpRequired - current.xpRequired : xpIntoLevel || 1;
    const percent = next ? Math.min(100, Math.round((xpIntoLevel / xpForLevel) * 100)) : 100;

    container.innerHTML = `
        <div class="stats-bar">
            <div class="stat-pill">🔥 ${streakData.currentStreak} gün</div>
            <div class="stat-pill">📗 ${learnedVerbs.length}/${verbsData.length}</div>
            <div class="stat-pill">⭐ ${current.name}</div>
        </div>
        <div class="xp-bar-wrap">
            <div class="flex-between mb-1" style="font-size: 0.8rem;">
                <span class="font-semibold">${current.name}</span>
                <span class="text-white-75">${next ? xp + ' / ' + next.xpRequired + ' XP' : xp + ' XP (maksimum)'}</span>
            </div>
            <div class="xp-bar"><div class="xp-bar-fill" style="width:${percent}%"></div></div>
        </div>
        <div class="daily-word-card" onclick="openDailyWord()">
            <div class="text-white-75" style="font-size: 0.75rem;">📅 Gündəlik söz</div>
            <div class="arabic-text text-2xl">${dw.arabic}</div>
            <div class="text-white-75">${dw.meaning}</div>
        </div>
    `;
}

// Statistika səhifəsi
function showStatsSection() {
    const content = document.getElementById('content-area');
    content.style.display = 'block';
    document.getElementById('main-menu').style.display = 'none';

    const { current, next } = getLevelInfo(xp);
    const successRate = testStats.attempts > 0 ? Math.round((testStats.correct / testStats.attempts) * 100) : null;
    const lastActive = streakData.lastActiveDate || '-';

    let badgesHtml = '';
    BADGES.forEach(b => {
        const earned = earnedBadges.includes(b.id);
        badgesHtml += `
            <div class="badge-item ${earned ? '' : 'locked'}" title="${b.desc}">
                <div class="badge-icon">${b.icon}</div>
                <div class="badge-name">${b.name}</div>
            </div>
        `;
    });

    content.innerHTML = `
        <div class="glass-card fade-in">
            <div class="flex-between mb-4">
                <h2 class="text-2xl font-bold">📊 Statistika</h2>
                <button onclick="showMainMenu()" class="close-btn">✕</button>
            </div>

            <div class="mb-4">
                <div class="stat-row"><span class="text-white-75">Səviyyə</span><span class="font-bold">${current.name}</span></div>
                <div class="stat-row"><span class="text-white-75">Ümumi XP</span><span class="font-bold">${xp}</span></div>
                <div class="stat-row"><span class="text-white-75">Öyrənilən sözlər</span><span class="font-bold">${learnedVerbs.length} / ${verbsData.length}</span></div>
                <div class="stat-row"><span class="text-white-75">Öyrənilən dialoqlar</span><span class="font-bold">${learnedDialogues.length} / ${dialoguesData.length}</span></div>
                <div class="stat-row"><span class="text-white-75">Həll edilmiş testlər</span><span class="font-bold">${answeredQuestions.length} / ${questionsData.length}</span></div>
                <div class="stat-row"><span class="text-white-75">Uğur faizi</span><span class="font-bold">${successRate === null ? '-' : successRate + '%'}</span></div>
                <div class="stat-row"><span class="text-white-75">Cari seriya</span><span class="font-bold">🔥 ${streakData.currentStreak} gün</span></div>
                <div class="stat-row"><span class="text-white-75">Ən uzun seriya</span><span class="font-bold">${streakData.longestStreak} gün</span></div>
                <div class="stat-row"><span class="text-white-75">Son fəaliyyət</span><span class="font-bold">${lastActive}</span></div>
            </div>

            <h3 class="font-semibold mb-2">Nişanlar</h3>
            <div class="badge-grid">${badgesHtml}</div>

            ${renderNotificationCardHtml()}

            <div class="mt-4">
                <button onclick="exportProgress()" class="export-btn">⬇️ Proqressi yüklə (JSON)</button>
                <button onclick="document.getElementById('import-file').click()" class="export-btn" style="margin-top:8px;">⬆️ Proqressi yüklə</button>
                <input type="file" id="import-file" accept=".json,application/json" style="display:none" onchange="importProgress(event)">
            </div>

            <button onclick="resetAllProgress()" class="glass-button mt-4" style="background: rgba(248,113,113,0.15); border-color: rgba(248,113,113,0.4);">Proqressi sıfırla</button>
        </div>
    `;
}

function exportProgress() {
    const data = {
        version: APP_VERSION,
        exportedAt: new Date().toISOString(),
        learnedVerbs,
        learnedDialogues,
        answeredQuestions,
        favoriteVerbs,
        xp,
        earnedBadges,
        testStats,
        streakData,
        theme: localStorage.getItem('theme') || 'dark',
        notificationSettings
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `hergun-erebce-progress-${todayStr()}.json`;
    a.click();
    URL.revokeObjectURL(url);
}

function importProgress(event) {
    const file = event.target.files && event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const data = JSON.parse(e.target.result);
            if (Array.isArray(data.learnedVerbs)) { learnedVerbs = data.learnedVerbs; saveLearnedVerbs(); }
            if (Array.isArray(data.learnedDialogues)) { learnedDialogues = data.learnedDialogues; saveLearnedDialogues(); }
            if (Array.isArray(data.answeredQuestions)) { answeredQuestions = data.answeredQuestions; saveAnsweredQuestions(); }
            if (Array.isArray(data.favoriteVerbs)) { favoriteVerbs = data.favoriteVerbs; saveFavoriteVerbs(); }
            if (typeof data.xp === 'number') { xp = data.xp; localStorage.setItem('xp', String(xp)); }
            if (Array.isArray(data.earnedBadges)) { earnedBadges = data.earnedBadges; localStorage.setItem('earnedBadges', JSON.stringify(earnedBadges)); }
            if (data.testStats) { testStats = data.testStats; localStorage.setItem('testStats', JSON.stringify(testStats)); }
            if (data.streakData) { streakData = data.streakData; localStorage.setItem('streakData', JSON.stringify(streakData)); }
            if (data.theme) { localStorage.setItem('theme', data.theme); applyTheme(data.theme); }
            if (data.notificationSettings) { notificationSettings = data.notificationSettings; saveNotificationSettings(); }
            checkBadges();
            alert('Proqress uğurla yükləndi!');
            showStatsSection();
        } catch (err) {
            alert('Fayl oxuna bilmədi. Düzgün JSON formatında olmalıdır.');
        }
    };
    reader.readAsText(file);
    event.target.value = '';
}

// ==================== UTILITY FUNCTIONS ====================
function saveLearnedVerbs() { localStorage.setItem('learnedVerbs', JSON.stringify(learnedVerbs)); }
function saveLearnedDialogues() { localStorage.setItem('learnedDialogues', JSON.stringify(learnedDialogues)); }
function saveAnsweredQuestions() { localStorage.setItem('answeredQuestions', JSON.stringify(answeredQuestions)); }
function saveFavoriteVerbs() { localStorage.setItem('favoriteVerbs', JSON.stringify(favoriteVerbs)); }
function toggleFavorite(id) {
    if (favoriteVerbs.includes(id)) {
        favoriteVerbs = favoriteVerbs.filter(x => x !== id);
    } else {
        favoriteVerbs.push(id);
    }
    saveFavoriteVerbs();
}

function getNextUnlearnedVerb() { return verbsData.find(v => !learnedVerbs.includes(v.id)) || null; }
function getNextUnlearnedDialogue() { return dialoguesData.find(d => !learnedDialogues.includes(d.id)) || null; }
function getNextUnansweredQuestion() { return questionsData.find(q => !answeredQuestions.includes(q.id)) || null; }

// ==================== TEMA (QARANLIQ / AÇIQ) ====================
function applyTheme(theme) {
    const btn = document.getElementById('theme-toggle-btn');
    if (theme === 'light') {
        document.body.classList.add('light-theme');
        if (btn) btn.textContent = '🌙';
    } else {
        document.body.classList.remove('light-theme');
        if (btn) btn.textContent = '☀️';
    }
}

function initTheme() {
    const saved = localStorage.getItem('theme') || 'dark';
    applyTheme(saved);
}

function toggleTheme() {
    const current = localStorage.getItem('theme') || 'dark';
    const next = current === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', next);
    applyTheme(next);
}

function initVersionTag() {
    const el = document.getElementById('version-tag');
    if (el) el.textContent = 'v' + APP_VERSION;
}

function resetAllProgress() {
    localStorage.removeItem('learnedVerbs');
    localStorage.removeItem('learnedDialogues');
    localStorage.removeItem('answeredQuestions');
    localStorage.removeItem('xp');
    localStorage.removeItem('earnedBadges');
    localStorage.removeItem('testStats');
    localStorage.removeItem('streakData');
    learnedVerbs = [];
    learnedDialogues = [];
    answeredQuestions = [];
    xp = 0;
    earnedBadges = [];
    testStats = { attempts: 0, correct: 0 };
    currentVerbIndex = 0;
    currentDialogueIndex = 0;
    currentQuestionIndex = 0;
    updateStreakOnVisit();
    showMainMenu();
}

function normalizeArabic(str) {
    if (!str) return '';
    return str
        .replace(/[\u064B-\u0652\u0670\u0640]/g, '')
        .replace(/[أإآٱ]/g, 'ا')
        .replace(/ى/g, 'ي')
        .replace(/ة/g, 'ه')
        .trim()
        .toLowerCase();
}

function clampIndex(index, length) {
    if (index < 0) return 0;
    if (index > length - 1) return length - 1;
    return index;
}

// ==================== TTS (Tələffüz) ====================
let cachedVoices = [];

function loadVoices() {
    if (typeof speechSynthesis === 'undefined') return [];
    const voices = speechSynthesis.getVoices() || [];
    if (voices.length) cachedVoices = voices;
    return cachedVoices.length ? cachedVoices : voices;
}

if (typeof speechSynthesis !== 'undefined') {
    speechSynthesis.onvoiceschanged = () => { loadVoices(); };
    // Bəzi brauzerlərdə dərhal yükləməyə çalış
    try { loadVoices(); } catch (e) {}
}

function speakArabic(text) {
    if (!text) return;

    // file:// protokolunda çox vaxt işləmir
    if (typeof location !== 'undefined' && location.protocol === 'file:') {
        alert('Səsli tələffüz yalnız internetdə (https) işləyir.\nGitHub Pages və ya digər saytda açın.');
        return;
    }

    if (typeof window === 'undefined' || typeof speechSynthesis === 'undefined' || !window.speechSynthesis) {
        alert('Bu brauzer səsli tələffüzü dəstəkləmir.\nChrome və ya Samsung Internet tövsiyə olunur.');
        return;
    }

    try {
        speechSynthesis.cancel();

        const utter = new SpeechSynthesisUtterance(String(text));
        utter.lang = 'ar-SA';
        utter.rate = 0.85;
        utter.pitch = 1;
        utter.volume = 1;

        const voices = loadVoices();
        // Əvvəl ərəbcə səs axtar, yoxdursa hər hansı səs
        let chosen = voices.find(v => v.lang && (v.lang.startsWith('ar') || v.lang.includes('Arab')));
        if (!chosen && voices.length) {
            // Bəzi cihazlarda ərəbcə səs yoxdur, amma default ilə də oxuya bilər
            chosen = voices.find(v => v.default) || voices[0];
        }
        if (chosen) {
            utter.voice = chosen;
            // Əgər ərəbcə deyilsə belə lang-i saxla
            if (chosen.lang && chosen.lang.startsWith('ar')) {
                utter.lang = chosen.lang;
            }
        }

        utter.onerror = (e) => {
            console.warn('TTS error:', e);
            // Xəta olduqda istifadəçiyə məlumat ver (bir dəfə)
            if (e && e.error === 'not-allowed') {
                alert('Səs icazəsi verilməyib. Brauzer ayarlarından səsə icazə verin.');
            }
        };

        speechSynthesis.speak(utter);
    } catch (err) {
        console.warn('TTS failed:', err);
        alert('Tələffüz işə düşmədi. Brauzerinizi yeniləyin və ya Chrome istifadə edin.');
    }
}

// ==================== AXTARIŞ ====================
function searchVerbs(query) {
    if (!query || !query.trim()) return verbsData.slice();
    const q = query.trim().toLowerCase();
    const qAr = normalizeArabic(query);
    return verbsData.filter(v => {
        const meaning = (v.meaning || '').toLowerCase();
        const arabic = normalizeArabic(v.arabic || '');
        const past = normalizeArabic(v.forms?.past?.arabic || '');
        const present = normalizeArabic(v.forms?.present?.arabic || '');
        return meaning.includes(q) || arabic.includes(qAr) || past.includes(qAr) || present.includes(qAr) || String(v.id).includes(q);
    });
}

function searchDialogues(query) {
    if (!query || !query.trim()) return dialoguesData.slice();
    const q = query.trim().toLowerCase();
    const qAr = normalizeArabic(query);
    return dialoguesData.filter(d => {
        const title = (d.title || '').toLowerCase();
        const text = (d.dialogue || []).map(x => (x.arabic + ' ' + x.translation).toLowerCase()).join(' ');
        return title.includes(q) || text.includes(q) || normalizeArabic(text).includes(qAr) || String(d.id).includes(q);
    });
}

// ==================== RENDER FUNCTIONS ====================
function showMainMenu() {
    document.getElementById('content-area').innerHTML = '';
    document.getElementById('content-area').style.display = 'none';
    document.getElementById('main-menu').style.display = 'block';
    renderHomeStats();
}

// Feillər bölməsi
let verbListFilter = 'all'; // all | unlearned | learned | favorites
let verbSearchQuery = '';

function showVerbsSection(index) {
    const content = document.getElementById('content-area');
    content.style.display = 'block';
    document.getElementById('main-menu').style.display = 'none';

    // Əgər index verilməyibsə və axtarış/list rejimi aktivdirsə list göstər
    if (index === undefined && (verbSearchQuery || verbListFilter !== 'all')) {
        showVerbsList();
        return;
    }

    if (index === undefined) {
        const nextUnlearned = getNextUnlearnedVerb();
        if (!nextUnlearned) {
            content.innerHTML = `
                <div class="glass-card text-center">
                    <p style="font-size: 2rem; margin-bottom: 16px;">🎉</p>
                    <h2 class="text-xl font-bold mb-2">Bütün feilləri öyrəndiniz!</h2>
                    <p class="text-white-75 mb-4">Yeni feil əlavə edildikdə burada görünəcək.</p>
                    <button onclick="showVerbsList()" class="glass-button px-6 py-3 mb-3">Siyahıya bax</button>
                    <button onclick="resetAllProgress()" class="glass-button px-6 py-3">Proqressi sıfırla</button>
                </div>
            `;
            return;
        }
        index = verbsData.findIndex(v => v.id === nextUnlearned.id);
    }
    index = clampIndex(index, verbsData.length);
    currentVerbIndex = index;
    const verb = verbsData[currentVerbIndex];
    const isLearned = learnedVerbs.includes(verb.id);
    const isFavorite = favoriteVerbs.includes(verb.id);

    let formsHtml = '';
    const formLabels = { past: 'Keçmiş', present: 'İndiki', imperative: 'Əmr' };
    for (const [key, label] of Object.entries(formLabels)) {
        formsHtml += `
            <div class="flex-between border-b py-2 clickable" onclick="openFormExamples(${verb.id}, '${key}')">
                <span class="text-white-75">${label}</span>
                <span class="arabic-text font-bold">${verb.forms[key].arabic}</span>
                <span class="text-white-75" style="font-size: 0.875rem;">${verb.forms[key].translation}</span>
            </div>
        `;
    }

    content.innerHTML = `
        <div class="glass-card fade-in">
            <div class="flex-between mb-4">
                <div>
                    <h2 class="text-2xl font-bold">Feil öyrən</h2>
                    <p class="text-white-75" style="font-size: 0.875rem;">${verb.arabic} - ${verb.meaning}</p>
                </div>
                <div style="display:flex; align-items:center; gap:6px;">
                    <button onclick="speakArabic('${verb.arabic.replace(/'/g, "\\'")}')" class="tts-btn" title="Tələffüz et">🔊</button>
                    <button onclick="toggleFavoriteAndRerenderVerb(${verb.id})" class="fav-star-btn" title="Favoritə əlavə et">${isFavorite ? '⭐' : '☆'}</button>
                    <button onclick="showVerbsList()" class="mini-btn" title="Siyahı">☰</button>
                    <button onclick="showMainMenu()" class="close-btn">✕</button>
                </div>
            </div>
            <div class="progress-text">${currentVerbIndex + 1} / ${verbsData.length}</div>
            <div class="text-center mb-4">
                <p class="arabic-text text-4xl font-bold mb-2">${verb.arabic}</p>
                <p class="text-white-75 text-lg">${verb.meaning}</p>
            </div>
            <div class="mb-4">
                <h3 class="font-semibold mb-2">Formalar</h3>
                <div>${formsHtml}</div>
            </div>
            <button onclick="markVerbLearned(${verb.id})" class="glass-button py-3 font-bold text-lg">
                ${isLearned ? '✓ Öyrənilib' : '✓ Öyrəndim'}
            </button>
            <div class="nav-row">
                <button onclick="navigateVerb(-1)" class="glass-button" ${currentVerbIndex === 0 ? 'disabled' : ''}>◀ Əvvəlki</button>
                <button onclick="navigateVerb(1)" class="glass-button" ${currentVerbIndex === verbsData.length - 1 ? 'disabled' : ''}>Növbəti ▶</button>
            </div>
        </div>
    `;
}

function showVerbsList() {
    const content = document.getElementById('content-area');
    content.style.display = 'block';
    document.getElementById('main-menu').style.display = 'none';

    let list = searchVerbs(verbSearchQuery);
    if (verbListFilter === 'unlearned') list = list.filter(v => !learnedVerbs.includes(v.id));
    else if (verbListFilter === 'learned') list = list.filter(v => learnedVerbs.includes(v.id));
    else if (verbListFilter === 'favorites') list = list.filter(v => favoriteVerbs.includes(v.id));

    const itemsHtml = list.slice(0, 80).map(v => {
        const learned = learnedVerbs.includes(v.id);
        const fav = favoriteVerbs.includes(v.id);
        const statusClass = fav ? 'favorite' : (learned ? 'learned' : 'unlearned');
        const idx = verbsData.findIndex(x => x.id === v.id);
        return `
            <div class="verb-list-item" onclick="showVerbsSection(${idx})">
                <span class="status-dot ${statusClass}"></span>
                <span class="meaning">${v.meaning}</span>
                <span class="arabic-text">${v.arabic}</span>
            </div>
        `;
    }).join('');

    const moreNote = list.length > 80 ? `<p class="text-white-50 text-center mt-2" style="font-size:0.8rem;">İlk 80 nəticə göstərilir (${list.length} tapıldı). Axtarışı daraldın.</p>` : '';

    content.innerHTML = `
        <div class="glass-card fade-in">
            <div class="flex-between mb-3">
                <h2 class="text-xl font-bold">Feillər siyahısı</h2>
                <button onclick="showMainMenu()" class="close-btn">✕</button>
            </div>
            <input type="search" class="search-box" id="verb-search-input" placeholder="Axtar: məna, ərəbcə və ya ID..." value="${verbSearchQuery.replace(/"/g, '&quot;')}" oninput="onVerbSearch(this.value)">
            <div class="filter-row">
                <span class="filter-chip ${verbListFilter==='all'?'active':''}" onclick="setVerbFilter('all')">Hamısı</span>
                <span class="filter-chip ${verbListFilter==='unlearned'?'active':''}" onclick="setVerbFilter('unlearned')">Öyrənilməmiş</span>
                <span class="filter-chip ${verbListFilter==='learned'?'active':''}" onclick="setVerbFilter('learned')">Öyrənilmiş</span>
                <span class="filter-chip ${verbListFilter==='favorites'?'active':''}" onclick="setVerbFilter('favorites')">⭐ Favorit</span>
            </div>
            <p class="text-white-50 mb-2" style="font-size:0.8rem;">${list.length} feil</p>
            <div style="max-height: 55vh; overflow-y: auto;">${itemsHtml || '<p class="text-center text-white-50">Nəticə yoxdur</p>'}</div>
            ${moreNote}
            <button onclick="showVerbsSection()" class="glass-button mt-3 py-3">Öyrənməyə davam et</button>
        </div>
    `;
    const inp = document.getElementById('verb-search-input');
    if (inp) { inp.focus(); const len = inp.value.length; inp.setSelectionRange(len, len); }
}

function onVerbSearch(val) {
    verbSearchQuery = val;
    showVerbsList();
}

function setVerbFilter(f) {
    verbListFilter = f;
    showVerbsList();
}

function navigateVerb(delta) {
    showVerbsSection(currentVerbIndex + delta);
}

function toggleFavoriteAndRerenderVerb(id) {
    toggleFavorite(id);
    showVerbsSection(currentVerbIndex);
}

function openFormExamples(verbId, formKey) {
    const verb = verbsData.find(v => v.id === verbId);
    if (!verb) return;
    const formData = verb.forms[formKey];
    const content = document.getElementById('content-area');
    content.style.display = 'block';
    document.getElementById('main-menu').style.display = 'none';

    let examplesHtml = '';
    formData.examples.forEach(ex => {
        const safeAr = (ex.arabic || '').replace(/'/g, "\\'").replace(/"/g, '&quot;');
        examplesHtml += `
            <div class="rounded-xl mb-2" style="background: rgba(255,255,255,0.05); padding: 12px;">
                <div style="display:flex; align-items:flex-start; gap:8px;">
                    <button onclick="speakArabic('${safeAr}')" class="tts-btn" title="Tələffüz">🔊</button>
                    <div style="flex:1;">
                        <p class="arabic-text mb-1">${ex.arabic}</p>
                        <p class="text-white-75" style="font-size: 0.875rem; direction: ltr; text-align: left;">${ex.translation}</p>
                    </div>
                </div>
            </div>
        `;
    });

    content.innerHTML = `
        <div class="glass-card fade-in">
            <div class="flex-between mb-4">
                <h2 class="text-xl font-bold">Nümunə Cümlələr</h2>
                <button onclick="showVerbsSection(${currentVerbIndex})" class="close-btn">✕</button>
            </div>
            <div class="text-center mb-4">
                <p class="arabic-text text-3xl font-bold">${formData.arabic}</p>
                <p class="text-white-75">${verb.meaning} (${formData.translation})</p>
            </div>
            ${examplesHtml}
            <button onclick="showVerbsSection(${currentVerbIndex})" class="glass-button py-3 font-bold mt-3">Geri</button>
        </div>
    `;
}

function markVerbLearned(id) {
    if (!learnedVerbs.includes(id)) {
        learnedVerbs.push(id);
        saveLearnedVerbs();
        addXp(XP_PER_VERB);
        checkBadges();
    }
    if (currentVerbIndex < verbsData.length - 1) {
        showVerbsSection(currentVerbIndex + 1);
    } else {
        showVerbsSection(currentVerbIndex);
    }
}

// Dialoqlar bölməsi
let dialogueSearchQuery = '';
let dialogueListFilter = 'all';

function showDialoguesSection(index) {
    const content = document.getElementById('content-area');
    content.style.display = 'block';
    document.getElementById('main-menu').style.display = 'none';

    if (index === undefined && (dialogueSearchQuery || dialogueListFilter !== 'all')) {
        showDialoguesList();
        return;
    }

    if (index === undefined) {
        const nextUnlearned = getNextUnlearnedDialogue();
        if (!nextUnlearned) {
            content.innerHTML = `
                <div class="glass-card text-center">
                    <p style="font-size: 2rem; margin-bottom: 16px;">🎉</p>
                    <h2 class="text-xl font-bold mb-2">Bütün dialoqları öyrəndiniz!</h2>
                    <p class="text-white-75 mb-4">Yeni dialoq əlavə edildikdə burada görünəcək.</p>
                    <button onclick="showDialoguesList()" class="glass-button px-6 py-3 mb-3">Siyahıya bax</button>
                    <button onclick="resetAllProgress()" class="glass-button px-6 py-3">Proqressi sıfırla</button>
                </div>
            `;
            return;
        }
        index = dialoguesData.findIndex(d => d.id === nextUnlearned.id);
    }
    index = clampIndex(index, dialoguesData.length);
    currentDialogueIndex = index;
    const dialogue = dialoguesData[currentDialogueIndex];
    const isLearned = learnedDialogues.includes(dialogue.id);

    let dialogueHtml = '';
    dialogue.dialogue.forEach((line) => {
        const safeAr = (line.arabic || '').replace(/'/g, "\\'").replace(/"/g, '&quot;');
        dialogueHtml += `
            <div class="rounded-xl mb-2" style="background: rgba(255,255,255,0.05); padding: 12px;">
                <div style="display:flex; align-items:flex-start; gap:8px;">
                    <button onclick="speakArabic('${safeAr}')" class="tts-btn" title="Tələffüz">🔊</button>
                    <div style="flex:1;">
                        <p class="arabic-text mb-1">${line.arabic}</p>
                        <p class="dialogue-translation">${line.translation}</p>
                    </div>
                </div>
            </div>
        `;
    });

    content.innerHTML = `
        <div class="glass-card fade-in">
            <div class="flex-between mb-4">
                <h2 class="text-2xl font-bold">${dialogue.title}</h2>
                <div style="display:flex; align-items:center; gap:6px;">
                    <button onclick="showDialoguesList()" class="mini-btn" title="Siyahı">☰</button>
                    <button onclick="showMainMenu()" class="close-btn">✕</button>
                </div>
            </div>
            <div class="progress-text">${currentDialogueIndex + 1} / ${dialoguesData.length}</div>
            <div class="text-right mb-2">
                <button class="translation-toggle" onclick="toggleTranslations(this)">Tərcümələri gizlət</button>
            </div>
            <div class="mb-4">
                ${dialogueHtml}
            </div>
            <button onclick="markDialogueLearned(${dialogue.id})" class="glass-button py-3 font-bold text-lg">
                ${isLearned ? '✓ Öyrənilib' : '✓ Öyrəndim'}
            </button>
            <div class="nav-row">
                <button onclick="navigateDialogue(-1)" class="glass-button" ${currentDialogueIndex === 0 ? 'disabled' : ''}>◀ Əvvəlki</button>
                <button onclick="navigateDialogue(1)" class="glass-button" ${currentDialogueIndex === dialoguesData.length - 1 ? 'disabled' : ''}>Növbəti ▶</button>
            </div>
        </div>
    `;
}

function showDialoguesList() {
    const content = document.getElementById('content-area');
    content.style.display = 'block';
    document.getElementById('main-menu').style.display = 'none';

    let list = searchDialogues(dialogueSearchQuery);
    if (dialogueListFilter === 'unlearned') list = list.filter(d => !learnedDialogues.includes(d.id));
    else if (dialogueListFilter === 'learned') list = list.filter(d => learnedDialogues.includes(d.id));

    const itemsHtml = list.slice(0, 80).map(d => {
        const learned = learnedDialogues.includes(d.id);
        const idx = dialoguesData.findIndex(x => x.id === d.id);
        return `
            <div class="verb-list-item" onclick="showDialoguesSection(${idx})">
                <span class="status-dot ${learned ? 'learned' : 'unlearned'}"></span>
                <span class="meaning" style="min-width:auto;flex:1;">${d.title}</span>
                <span class="text-white-50" style="font-size:0.75rem;">#${d.id}</span>
            </div>
        `;
    }).join('');

    content.innerHTML = `
        <div class="glass-card fade-in">
            <div class="flex-between mb-3">
                <h2 class="text-xl font-bold">Dialoqlar siyahısı</h2>
                <button onclick="showMainMenu()" class="close-btn">✕</button>
            </div>
            <input type="search" class="search-box" id="dialogue-search-input" placeholder="Axtar: başlıq və ya söz..." value="${dialogueSearchQuery.replace(/"/g, '&quot;')}" oninput="onDialogueSearch(this.value)">
            <div class="filter-row">
                <span class="filter-chip ${dialogueListFilter==='all'?'active':''}" onclick="setDialogueFilter('all')">Hamısı</span>
                <span class="filter-chip ${dialogueListFilter==='unlearned'?'active':''}" onclick="setDialogueFilter('unlearned')">Öyrənilməmiş</span>
                <span class="filter-chip ${dialogueListFilter==='learned'?'active':''}" onclick="setDialogueFilter('learned')">Öyrənilmiş</span>
            </div>
            <p class="text-white-50 mb-2" style="font-size:0.8rem;">${list.length} dialoq</p>
            <div style="max-height: 55vh; overflow-y: auto;">${itemsHtml || '<p class="text-center text-white-50">Nəticə yoxdur</p>'}</div>
            <button onclick="showDialoguesSection()" class="glass-button mt-3 py-3">Öyrənməyə davam et</button>
        </div>
    `;
    const inp = document.getElementById('dialogue-search-input');
    if (inp) { inp.focus(); const len = inp.value.length; inp.setSelectionRange(len, len); }
}

function onDialogueSearch(val) {
    dialogueSearchQuery = val;
    showDialoguesList();
}

function setDialogueFilter(f) {
    dialogueListFilter = f;
    showDialoguesList();
}

function navigateDialogue(delta) {
    showDialoguesSection(currentDialogueIndex + delta);
}

function toggleTranslations(btn) {
    const card = btn.closest('.glass-card');
    const translations = card.querySelectorAll('.dialogue-translation');
    if (translations.length === 0) return;
    const isHidden = translations[0].style.display === 'none';
    if (isHidden) {
        translations.forEach(el => el.style.display = 'block');
        btn.textContent = 'Tərcümələri gizlət';
    } else {
        translations.forEach(el => el.style.display = 'none');
        btn.textContent = 'Tərcümələri göstər';
    }
}

function markDialogueLearned(id) {
    if (!learnedDialogues.includes(id)) {
        learnedDialogues.push(id);
        saveLearnedDialogues();
        addXp(XP_PER_DIALOGUE);
        checkBadges();
    }
    if (currentDialogueIndex < dialoguesData.length - 1) {
        showDialoguesSection(currentDialogueIndex + 1);
    } else {
        showDialoguesSection(currentDialogueIndex);
    }
}

// Test rejimi seçimi
function showTestModeSelect() {
    const content = document.getElementById('content-area');
    content.style.display = 'block';
    document.getElementById('main-menu').style.display = 'none';
    content.innerHTML = `
        <div class="glass-card fade-in">
            <div class="flex-between mb-4">
                <h2 class="text-2xl font-bold">📝 Testlər</h2>
                <button onclick="showMainMenu()" class="close-btn">✕</button>
            </div>
            <div class="mode-select-card" onclick="showTestsSection()">
                <div class="mode-select-icon">📝</div>
                <div>
                    <div class="mode-select-title">Adi test</div>
                    <div class="mode-select-desc">Sual-sual, öz sürətinizlə</div>
                </div>
            </div>
            <div class="mode-select-card" onclick="startSpeedRound()">
                <div class="mode-select-icon">⚡</div>
                <div>
                    <div class="mode-select-title">Sürətli cavab</div>
                    <div class="mode-select-desc">10 sual, hər birinə 10 saniyə</div>
                </div>
            </div>
            <div class="mode-select-card" onclick="startMatchingGame()">
                <div class="mode-select-icon">🔗</div>
                <div>
                    <div class="mode-select-title">Söz birləşdirmə</div>
                    <div class="mode-select-desc">Ərəbcə sözü mənası ilə uyğunlaşdır</div>
                </div>
            </div>
        </div>
    `;
}

function highlightSelectedOption(radio) {
    const label = radio.closest('.option-label');
    const group = label.parentElement;
    group.querySelectorAll('.option-label').forEach(l => l.classList.remove('selected'));
    label.classList.add('selected');
}

// Testlər bölməsi
function showTestsSection(index) {
    const content = document.getElementById('content-area');
    content.style.display = 'block';
    document.getElementById('main-menu').style.display = 'none';

    if (index === undefined) {
        const nextUnanswered = getNextUnansweredQuestion();
        if (!nextUnanswered) {
            content.innerHTML = `
                <div class="glass-card text-center">
                    <p style="font-size: 2rem; margin-bottom: 16px;">🏆</p>
                    <h2 class="text-xl font-bold mb-2">Test tamamlandı!</h2>
                    <p class="text-white-75 mb-4">Bütün suallara düzgün cavab verdiniz.</p>
                    <button onclick="resetAllProgress()" class="glass-button px-6 py-3">Proqressi sıfırla</button>
                </div>
            `;
            return;
        }
        index = questionsData.findIndex(q => q.id === nextUnanswered.id);
    }
    index = clampIndex(index, questionsData.length);
    currentQuestionIndex = index;
    const question = questionsData[currentQuestionIndex];

    const navRowHtml = `
        <div class="nav-row">
            <button onclick="navigateQuestion(-1)" class="glass-button" ${currentQuestionIndex === 0 ? 'disabled' : ''}>◀ Əvvəlki</button>
            <button onclick="navigateQuestion(1)" class="glass-button" ${currentQuestionIndex === questionsData.length - 1 ? 'disabled' : ''}>Növbəti ▶</button>
        </div>
    `;

    if (question.type === 'choice') {
        let optionsHtml = '';
        question.options.forEach((opt, idx) => {
            optionsHtml += `
                <label class="option-label">
                    <input type="radio" name="q${question.id}" value="${idx}" onchange="highlightSelectedOption(this)">
                    <span class="arabic-text text-lg">${opt}</span>
                </label>
            `;
        });
        content.innerHTML = `
            <div class="glass-card fade-in">
                <div class="flex-between mb-4">
                    <h2 class="text-xl font-bold">Test sualı</h2>
                    <button onclick="showTestModeSelect()" class="close-btn">✕</button>
                </div>
                <div class="progress-text">${currentQuestionIndex + 1} / ${questionsData.length}</div>
                <p class="text-lg mb-4">${question.question}</p>
                <div class="mb-4">${optionsHtml}</div>
                <button onclick="checkChoiceAnswer(${question.id})" class="glass-button py-3 font-bold">Cavabı yoxla</button>
                <div id="feedback-${question.id}" class="feedback"></div>
                ${navRowHtml}
            </div>
        `;
    } else if (question.type === 'input') {
        content.innerHTML = `
            <div class="glass-card fade-in">
                <div class="flex-between mb-4">
                    <h2 class="text-xl font-bold">Boşluğu doldur</h2>
                    <button onclick="showTestModeSelect()" class="close-btn">✕</button>
                </div>
                <div class="progress-text">${currentQuestionIndex + 1} / ${questionsData.length}</div>
                <p class="text-lg mb-4">${question.question}</p>
                <input type="text" id="input-${question.id}" class="input-field mb-4" placeholder="Cavabınızı yazın" autocomplete="off">
                <button onclick="checkInputAnswer(${question.id})" class="glass-button py-3 font-bold">Cavabı yoxla</button>
                <div id="feedback-${question.id}" class="feedback"></div>
                ${navRowHtml}
            </div>
        `;
    }
}

function navigateQuestion(delta) {
    showTestsSection(currentQuestionIndex + delta);
}

function checkChoiceAnswer(qid) {
    const question = questionsData.find(q => q.id === qid);
    const selected = document.querySelector(`input[name="q${qid}"]:checked`);
    const feedback = document.getElementById(`feedback-${qid}`);
    if (!selected) {
        feedback.innerHTML = '<span class="warning">Zəhmət olmasa bir variant seçin.</span>';
        return;
    }
    const selectedIdx = parseInt(selected.value);
    const selectedLabel = selected.closest('.option-label');
    if (selectedIdx === question.correct) {
        selectedLabel.classList.add('correct-choice');
        feedback.innerHTML = '<span class="success">✅ Düzgün!</span>';
        recordTestAttempt(true);
        if (!answeredQuestions.includes(qid)) {
            answeredQuestions.push(qid);
            saveAnsweredQuestions();
            addXp(XP_PER_CORRECT_ANSWER);
            checkBadges();
        }
        setTimeout(() => showTestsSection(currentQuestionIndex + 1), 1200);
    } else {
        selectedLabel.classList.add('wrong-choice');
        recordTestAttempt(false);
        feedback.innerHTML = `
            <span class="error">❌ Səhvdir, yenidən cəhd edin.</span>
            <div class="correct-answer-box">
                <span class="text-white-75" style="font-size: 0.85rem;">Düzgün cavab:</span>
                <p class="arabic-text">${question.options[question.correct]}</p>
            </div>
        `;
    }
}

function checkInputAnswer(qid) {
    const question = questionsData.find(q => q.id === qid);
    const input = document.getElementById(`input-${qid}`);
    const feedback = document.getElementById(`feedback-${qid}`);
    const userAnswer = input.value.trim();
    const correct = question.correctAnswer.trim();

    const normalizedUser = normalizeArabic(userAnswer);
    const normalizedCorrect = normalizeArabic(correct);

    if (normalizedUser === normalizedCorrect) {
        feedback.innerHTML = '<span class="success">✅ Düzgün!</span>';
        recordTestAttempt(true);
        if (!answeredQuestions.includes(qid)) {
            answeredQuestions.push(qid);
            saveAnsweredQuestions();
            addXp(XP_PER_CORRECT_ANSWER);
            checkBadges();
        }
        setTimeout(() => showTestsSection(currentQuestionIndex + 1), 1200);
    } else {
        recordTestAttempt(false);
        feedback.innerHTML = `
            <span class="error">❌ Səhvdir, yenidən cəhd edin.</span>
            <div class="correct-answer-box">
                <span class="text-white-75" style="font-size: 0.85rem;">Düzgün cavab:</span>
                <p class="arabic-text">${question.correctAnswer}</p>
            </div>
        `;
    }
}

// ==================== SÜRƏTLİ CAVAB REJİMİ ====================
let speedRound = null; // { questions, index, score, timerId, timeLeft }

function shuffleArray(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function startSpeedRound() {
    const pool = shuffleArray(questionsData.filter(q => q.type === 'choice'));
    const chosen = pool.slice(0, Math.min(10, pool.length));
    speedRound = { questions: chosen, index: 0, score: 0, timeLeft: 10, timerId: null };
    renderSpeedRoundQuestion();
}

function renderSpeedRoundQuestion() {
    clearInterval(speedRound.timerId);
    const content = document.getElementById('content-area');
    content.style.display = 'block';
    document.getElementById('main-menu').style.display = 'none';

    if (speedRound.index >= speedRound.questions.length) {
        content.innerHTML = `
            <div class="glass-card fade-in text-center">
                <p style="font-size: 2rem; margin-bottom: 12px;">⚡</p>
                <h2 class="text-xl font-bold mb-2">Nəticə: ${speedRound.score} / ${speedRound.questions.length}</h2>
                <p class="text-white-75 mb-4">Sürətli cavab rejimi tamamlandı!</p>
                <button onclick="startSpeedRound()" class="glass-button py-3 font-bold mb-3">Yenidən oyna</button>
                <button onclick="showTestModeSelect()" class="glass-button py-3">Geri</button>
            </div>
        `;
        speedRound = null;
        return;
    }

    const q = speedRound.questions[speedRound.index];
    speedRound.timeLeft = 10;
    let optionsHtml = '';
    q.options.forEach((opt, idx) => {
        optionsHtml += `<button class="glass-button mb-2" style="text-align:left;" onclick="answerSpeedRound(${idx})"><span class="arabic-text text-lg">${opt}</span></button>`;
    });

    content.innerHTML = `
        <div class="glass-card fade-in">
            <div class="flex-between mb-2">
                <h2 class="text-xl font-bold">⚡ Sürətli cavab</h2>
                <button onclick="stopSpeedRound()" class="close-btn">✕</button>
            </div>
            <div class="progress-text">${speedRound.index + 1} / ${speedRound.questions.length} &nbsp;•&nbsp; Xal: ${speedRound.score}</div>
            <div class="timer-bar-wrap"><div id="speed-timer-fill" class="timer-bar-fill" style="width:100%"></div></div>
            <p class="text-lg mb-4">${q.question}</p>
            <div id="speed-options">${optionsHtml}</div>
        </div>
    `;

    speedRound.timerId = setInterval(() => {
        speedRound.timeLeft -= 0.1;
        const pct = Math.max(0, (speedRound.timeLeft / 10) * 100);
        const fill = document.getElementById('speed-timer-fill');
        if (fill) fill.style.width = pct + '%';
        if (speedRound.timeLeft <= 0) {
            clearInterval(speedRound.timerId);
            answerSpeedRound(-1);
        }
    }, 100);
}

function answerSpeedRound(chosenIdx) {
    if (!speedRound) return;
    clearInterval(speedRound.timerId);
    const q = speedRound.questions[speedRound.index];
    const isCorrect = chosenIdx === q.correct;
    if (isCorrect) speedRound.score += 1;
    recordTestAttempt(isCorrect);

    const optionsDiv = document.getElementById('speed-options');
    if (optionsDiv) {
        const buttons = optionsDiv.querySelectorAll('button');
        buttons.forEach((btn, idx) => {
            if (idx === q.correct) btn.style.background = 'rgba(74,222,128,0.35)';
            else if (idx === chosenIdx) btn.style.background = 'rgba(248,113,113,0.35)';
        });
    }

    speedRound.index += 1;
    setTimeout(renderSpeedRoundQuestion, 700);
}

function stopSpeedRound() {
    if (speedRound) clearInterval(speedRound.timerId);
    speedRound = null;
    showTestModeSelect();
}

// ==================== SÖZ BİRLƏŞDİRMƏ OYUNU ====================
let matchGame = null; // { pairs, leftOrder, rightOrder, selectedLeft, selectedRight, matched, mistakes }

function startMatchingGame() {
    const source = learnedVerbs.length >= 6 ? verbsData.filter(v => learnedVerbs.includes(v.id)) : verbsData;
    const chosen = shuffleArray(source).slice(0, 6);
    matchGame = {
        pairs: chosen,
        leftOrder: shuffleArray(chosen.map(v => v.id)),
        rightOrder: shuffleArray(chosen.map(v => v.id)),
        selectedLeft: null,
        selectedRight: null,
        matched: [],
        mistakes: 0
    };
    renderMatchingGame();
}

function renderMatchingGame() {
    const content = document.getElementById('content-area');
    content.style.display = 'block';
    document.getElementById('main-menu').style.display = 'none';

    if (matchGame.matched.length === matchGame.pairs.length) {
        content.innerHTML = `
            <div class="glass-card fade-in text-center">
                <p style="font-size: 2rem; margin-bottom: 12px;">🔗</p>
                <h2 class="text-xl font-bold mb-2">Əla! Bütün cütlər tapıldı</h2>
                <p class="text-white-75 mb-4">Səhv sayı: ${matchGame.mistakes}</p>
                <button onclick="startMatchingGame()" class="glass-button py-3 font-bold mb-3">Yenidən oyna</button>
                <button onclick="showTestModeSelect()" class="glass-button py-3">Geri</button>
            </div>
        `;
        return;
    }

    const leftHtml = matchGame.leftOrder.map(id => {
        const verb = matchGame.pairs.find(v => v.id === id);
        const isMatched = matchGame.matched.includes(id);
        const isSelected = matchGame.selectedLeft === id;
        return `<div class="match-tile ${isMatched ? 'matched' : ''} ${isSelected ? 'selected' : ''}" onclick="selectMatchTile('left', ${id})">
            <span class="arabic-text">${verb.arabic}</span>
        </div>`;
    }).join('');

    const rightHtml = matchGame.rightOrder.map(id => {
        const verb = matchGame.pairs.find(v => v.id === id);
        const isMatched = matchGame.matched.includes(id);
        const isSelected = matchGame.selectedRight === id;
        return `<div class="match-tile ${isMatched ? 'matched' : ''} ${isSelected ? 'selected' : ''}" onclick="selectMatchTile('right', ${id})">
            <span style="font-size: 0.9rem;">${verb.meaning}</span>
        </div>`;
    }).join('');

    content.innerHTML = `
        <div class="glass-card fade-in">
            <div class="flex-between mb-2">
                <h2 class="text-xl font-bold">🔗 Söz birləşdirmə</h2>
                <button onclick="showTestModeSelect()" class="close-btn">✕</button>
            </div>
            <p class="text-white-75 mb-3" style="font-size: 0.85rem;">Ərəbcə sözü mənası ilə uyğunlaşdırın · Səhv: ${matchGame.mistakes}</p>
            <div class="match-grid">
                <div class="match-col">${leftHtml}</div>
                <div class="match-col">${rightHtml}</div>
            </div>
        </div>
    `;
}

function selectMatchTile(side, id) {
    if (matchGame.matched.includes(id)) return;
    if (side === 'left') matchGame.selectedLeft = id;
    else matchGame.selectedRight = id;

    if (matchGame.selectedLeft !== null && matchGame.selectedRight !== null) {
        if (matchGame.selectedLeft === matchGame.selectedRight) {
            matchGame.matched.push(matchGame.selectedLeft);
            matchGame.selectedLeft = null;
            matchGame.selectedRight = null;
            renderMatchingGame();
        } else {
            matchGame.mistakes += 1;
            renderMatchingGame();
            setTimeout(() => {
                matchGame.selectedLeft = null;
                matchGame.selectedRight = null;
                renderMatchingGame();
            }, 600);
        }
    } else {
        renderMatchingGame();
    }
}

// ==================== FLASH KARTLAR ====================
let flashcardSession = null; // { deck, index, knownCount, unknownCount }

function showFlashcardModeSelect() {
    const content = document.getElementById('content-area');
    content.style.display = 'block';
    document.getElementById('main-menu').style.display = 'none';

    const unlearnedCount = verbsData.filter(v => !learnedVerbs.includes(v.id)).length;
    const favCount = favoriteVerbs.length;

    content.innerHTML = `
        <div class="glass-card fade-in">
            <div class="flex-between mb-4">
                <h2 class="text-2xl font-bold">🃏 Flash kartlar</h2>
                <button onclick="showMainMenu()" class="close-btn">✕</button>
            </div>
            <div class="mode-select-card" onclick="startFlashcards('all')">
                <div class="mode-select-icon">📚</div>
                <div>
                    <div class="mode-select-title">Bütün sözlər</div>
                    <div class="mode-select-desc">${verbsData.length} söz</div>
                </div>
            </div>
            <div class="mode-select-card" onclick="startFlashcards('unlearned')">
                <div class="mode-select-icon">🆕</div>
                <div>
                    <div class="mode-select-title">Yalnız öyrənilməmiş</div>
                    <div class="mode-select-desc">${unlearnedCount} söz</div>
                </div>
            </div>
            <div class="mode-select-card" onclick="startFlashcards('favorites')">
                <div class="mode-select-icon">⭐</div>
                <div>
                    <div class="mode-select-title">Yalnız Favoritlər</div>
                    <div class="mode-select-desc">${favCount} söz</div>
                </div>
            </div>
        </div>
    `;
}

function startFlashcards(filterType) {
    let pool;
    if (filterType === 'unlearned') pool = verbsData.filter(v => !learnedVerbs.includes(v.id));
    else if (filterType === 'favorites') pool = verbsData.filter(v => favoriteVerbs.includes(v.id));
    else pool = verbsData.slice();

    if (pool.length === 0) {
        const content = document.getElementById('content-area');
        content.innerHTML = `
            <div class="glass-card text-center fade-in">
                <p style="font-size: 2rem; margin-bottom: 12px;">🤷</p>
                <h2 class="text-xl font-bold mb-2">Bu siyahı boşdur</h2>
                <p class="text-white-75 mb-4">${filterType === 'favorites' ? 'Hələ favorit söz əlavə etməmisiniz.' : 'Bütün sözləri artıq öyrənmisiniz!'}</p>
                <button onclick="showFlashcardModeSelect()" class="glass-button py-3">Geri</button>
            </div>
        `;
        return;
    }

    flashcardSession = { deck: shuffleArray(pool), index: 0, knownCount: 0, unknownCount: 0 };
    renderFlashcard();
}

function renderFlashcard() {
    const content = document.getElementById('content-area');
    content.style.display = 'block';
    document.getElementById('main-menu').style.display = 'none';

    if (flashcardSession.index >= flashcardSession.deck.length) {
        const { knownCount, unknownCount, deck } = flashcardSession;
        content.innerHTML = `
            <div class="glass-card text-center fade-in">
                <p style="font-size: 2rem; margin-bottom: 12px;">🃏</p>
                <h2 class="text-xl font-bold mb-2">Deste bitdi!</h2>
                <p class="text-white-75 mb-4">🟢 Bilirdim: ${knownCount} &nbsp;•&nbsp; 🔴 Bilmirdim: ${unknownCount} &nbsp;•&nbsp; Cəmi: ${deck.length}</p>
                <button onclick="showFlashcardModeSelect()" class="glass-button py-3 font-bold mb-3">Yeni deste</button>
                <button onclick="showMainMenu()" class="glass-button py-3">Ana menyu</button>
            </div>
        `;
        flashcardSession = null;
        return;
    }

    const verb = flashcardSession.deck[flashcardSession.index];
    const isFavorite = favoriteVerbs.includes(verb.id);

    content.innerHTML = `
        <div class="glass-card fade-in">
            <div class="flex-between mb-2">
                <h2 class="text-xl font-bold">🃏 Flash kart</h2>
                <button onclick="showFlashcardModeSelect()" class="close-btn">✕</button>
            </div>
            <div class="progress-text">${flashcardSession.index + 1} / ${flashcardSession.deck.length}</div>
            <div class="flashcard-scene">
                <div id="flashcard-el" class="flashcard" onclick="toggleFlashcardFlip()">
                    <div class="flashcard-inner">
                        <div class="flashcard-face flashcard-front">
                            <button class="fav-star-btn" style="position:absolute; top:10px; right:14px;" onclick="event.stopPropagation(); toggleFavoriteAndRerenderFlashcard(${verb.id})">${isFavorite ? '⭐' : '☆'}</button>
                            <button class="tts-btn" style="position:absolute; top:10px; left:14px;" onclick="event.stopPropagation(); speakArabic('${(verb.arabic || '').replace(/'/g, "\\'")}')" title="Tələffüz">🔊</button>
                            <p class="arabic-text text-4xl font-bold">${verb.arabic}</p>
                            <p class="flip-hint">Çevirmək üçün toxunun</p>
                        </div>
                        <div class="flashcard-face flashcard-back">
                            <p class="text-2xl font-bold mb-2">${verb.meaning}</p>
                            <p class="text-white-75" style="font-size: 0.85rem;">${verb.forms.past.arabic} — ${verb.forms.past.translation}</p>
                            <p class="flip-hint">Geri qayıtmaq üçün toxunun</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="know-row">
                <button class="glass-button btn-dontknow" onclick="answerFlashcard(false)">🔴 Bilmirdim</button>
                <button class="glass-button btn-know" onclick="answerFlashcard(true)">🟢 Bilirdim</button>
            </div>
        </div>
    `;
}

function toggleFlashcardFlip() {
    const el = document.getElementById('flashcard-el');
    if (el) el.classList.toggle('flipped');
}

function answerFlashcard(knewIt) {
    if (!flashcardSession) return;
    if (knewIt) flashcardSession.knownCount += 1;
    else flashcardSession.unknownCount += 1;
    flashcardSession.index += 1;
    renderFlashcard();
}

function toggleFavoriteAndRerenderFlashcard(id) {
    toggleFavorite(id);
    renderFlashcard();
}

// ==================== GÜNLÜK BİLDİRİŞ XATIRLATMASI ====================
const REMINDER_MESSAGES = [
    'Bugünkü gündəlik sözünü öyrənməyi unutma! 📖',
    '5 dəqiqəlik məşq et, seriyanı davam etdir! 🔥',
    'Gündəlik sözünə baxmağın vaxtıdır! 🕌',
    'Bir feil, bir dialoq — bu gün üçün kifayətdir! 💪',
    'Seriyanı qırma, indi bir sual həll et! 📝'
];

function saveNotificationSettings() {
    localStorage.setItem('notificationSettings', JSON.stringify(notificationSettings));
}

function getNotificationSupportInfo() {
    const hasNotificationApi = typeof Notification !== 'undefined';
    const hasServiceWorker = typeof navigator !== 'undefined' && 'serviceWorker' in navigator;
    return { hasNotificationApi, hasServiceWorker };
}

async function showLocalNotification(message) {
    const { hasNotificationApi, hasServiceWorker } = getNotificationSupportInfo();
    if (!hasNotificationApi || Notification.permission !== 'granted') return;
    try {
        if (hasServiceWorker) {
            const reg = await navigator.serviceWorker.ready;
            if (reg && reg.showNotification) {
                reg.showNotification('Hər Gün Ərəbcə', {
                    body: message,
                    icon: 'icons/icon-192.png',
                    badge: 'icons/icon-192.png'
                });
                return;
            }
        }
        new Notification('Hər Gün Ərəbcə', { body: message, icon: 'icons/icon-192.png' });
    } catch (e) {
        // Bildiriş göstərilə bilmədi, tətbiq normal işləməyə davam edir
    }
}

async function registerPeriodicReminder() {
    try {
        if (!('serviceWorker' in navigator)) return;
        const reg = await navigator.serviceWorker.ready;
        if (!('periodicSync' in reg)) return;
        const status = await navigator.permissions.query({ name: 'periodic-background-sync' });
        if (status.state === 'granted') {
            await reg.periodicSync.register('daily-reminder', { minInterval: 20 * 60 * 60 * 1000 });
        }
    } catch (e) {
        // Periodic Background Sync dəstəklənmir və ya icazə yoxdur — foreground fallback davam edir
    }
}

async function enableNotifications(time) {
    const { hasNotificationApi } = getNotificationSupportInfo();
    if (!hasNotificationApi) {
        notificationSettings.enabled = false;
        saveNotificationSettings();
        showStatsSection();
        return;
    }
    let permission = Notification.permission;
    if (permission === 'default') {
        permission = await Notification.requestPermission();
    }
    if (permission === 'granted') {
        notificationSettings.enabled = true;
        notificationSettings.time = time || notificationSettings.time;
        saveNotificationSettings();
        registerPeriodicReminder();
    } else {
        notificationSettings.enabled = false;
        saveNotificationSettings();
    }
    showStatsSection();
}

function disableNotifications() {
    notificationSettings.enabled = false;
    saveNotificationSettings();
    showStatsSection();
}

function onNotificationToggle(checkbox) {
    const timeInput = document.getElementById('notif-time-input');
    const time = timeInput ? timeInput.value : notificationSettings.time;
    if (checkbox.checked) {
        enableNotifications(time);
    } else {
        disableNotifications();
    }
}

function saveNotificationTime() {
    const timeInput = document.getElementById('notif-time-input');
    if (!timeInput) return;
    notificationSettings.time = timeInput.value;
    saveNotificationSettings();
    showStatsSection();
}

function sendTestNotification() {
    const { hasNotificationApi } = getNotificationSupportInfo();
    if (!hasNotificationApi) {
        alert('Bu brauzer bildirişləri dəstəkləmir.');
        return;
    }
    if (Notification.permission === 'granted') {
        showLocalNotification('Bu bir sınaq bildirişidir 👋');
    } else {
        enableNotifications(notificationSettings.time);
    }
}

function maybeShowDailyReminder() {
    const { hasNotificationApi } = getNotificationSupportInfo();
    if (!hasNotificationApi || !notificationSettings.enabled) return;
    if (Notification.permission !== 'granted') return;

    const now = new Date();
    const today = now.toISOString().slice(0, 10);
    if (notificationSettings.lastNotifiedDate === today) return;

    const [h, m] = (notificationSettings.time || '19:00').split(':').map(Number);
    const reminderMoment = new Date();
    reminderMoment.setHours(h, m, 0, 0);

    if (now >= reminderMoment) {
        const msg = REMINDER_MESSAGES[Math.floor(Math.random() * REMINDER_MESSAGES.length)];
        showLocalNotification(msg);
        notificationSettings.lastNotifiedDate = today;
        saveNotificationSettings();
    }
}

function renderNotificationCardHtml() {
    const { hasNotificationApi } = getNotificationSupportInfo();
    const permission = hasNotificationApi ? Notification.permission : 'unsupported';
    const checked = notificationSettings.enabled && permission === 'granted' ? 'checked' : '';

    let statusText = '';
    if (!hasNotificationApi) {
        statusText = 'Bu brauzer bildirişləri dəstəkləmir.';
    } else if (permission === 'denied') {
        statusText = 'Bildirişlərə icazə verilməyib. Brauzer ayarlarından sayt icazələrini dəyişməlisiniz.';
    } else if (notificationSettings.enabled) {
        statusText = `Hər gün ~${notificationSettings.time} vaxtı xatırlatma göndəriləcək (tətbiq açıq və ya bəzi telefonlarda arxa fonda olduqda). Zəmanətli deyil, brauzer dəstəyindən asılıdır.`;
    } else {
        statusText = 'Xatırlatmaları aktiv etmək üçün düyməni açın.';
    }

    return `
        <div class="notif-card">
            <h3 class="font-semibold mb-2">🔔 Günlük xatırlatma</h3>
            <div class="notif-row">
                <span class="text-white-75">Bildirişlər</span>
                <label class="switch">
                    <input type="checkbox" ${checked} ${!hasNotificationApi || permission === 'denied' ? 'disabled' : ''} onchange="onNotificationToggle(this)">
                    <span class="slider-toggle"></span>
                </label>
            </div>
            <div class="notif-row">
                <span class="text-white-75">Xatırlatma vaxtı</span>
                <input type="time" id="notif-time-input" class="notif-time-input" value="${notificationSettings.time}" onchange="saveNotificationTime()" ${!hasNotificationApi || permission === 'denied' ? 'disabled' : ''}>
            </div>
            <p class="notif-status">${statusText}</p>
            <button class="glass-button notif-test-btn" onclick="sendTestNotification()" ${!hasNotificationApi || permission === 'denied' ? 'disabled' : ''}>Sınaq bildirişi göndər</button>
        </div>
    `;
}

// ==================== EVENT LISTENERS ====================
document.getElementById('btn-verbs').addEventListener('click', () => showVerbsSection());
document.getElementById('btn-dialogues').addEventListener('click', () => showDialoguesSection());
document.getElementById('btn-tests').addEventListener('click', () => showTestModeSelect());
document.getElementById('btn-flashcards').addEventListener('click', () => showFlashcardModeSelect());
document.getElementById('btn-stats').addEventListener('click', () => showStatsSection());
document.getElementById('theme-toggle-btn').addEventListener('click', () => toggleTheme());

// Başlanğıcda: temanı tətbiq et, versiyanı göstər, seriyanı yenilə, nişanları yoxla, ana menyunu göstər
initTheme();
initVersionTag();
updateStreakOnVisit();
checkBadges();
showMainMenu();

// Offline istifadə üçün Service Worker qeydiyyatı (PWA)
if (typeof navigator !== 'undefined' && 'serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').catch(() => {
            // Qeydiyyat alınmasa (məs. fayl protokolu ilə açılıbsa) tətbiq normal işləməyə davam edir
        });
    });
}

// Günlük bildiriş: yüklənəndə yoxla, tətbiq açıq qalarsa hər dəqiqə yenidən yoxla,
// aktivdirsə arxa fon sinxronizasiyasını (dəstəklənən brauzerlərdə) qeydə al
maybeShowDailyReminder();
if (typeof window !== 'undefined' && window.setInterval) {
    window.setInterval(maybeShowDailyReminder, 60000);
}
if (notificationSettings.enabled) {
    registerPeriodicReminder();
}
