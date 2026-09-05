// app.js
const APP_VERSION = '1.0.0';

// ==================== STATE ====================
let learnedVerbs = JSON.parse(localStorage.getItem('learnedVerbs') || '[]');
let learnedDialogues = JSON.parse(localStorage.getItem('learnedDialogues') || '[]');
let answeredQuestions = JSON.parse(localStorage.getItem('answeredQuestions') || '[]');
let favoriteVerbs = JSON.parse(localStorage.getItem('favoriteVerbs') || '[]');
let learnedWords = JSON.parse(localStorage.getItem('learnedWords') || '[]');
let favoriteWords = JSON.parse(localStorage.getItem('favoriteWords') || '[]');
let notificationSettings = JSON.parse(localStorage.getItem('notificationSettings') || '{"enabled":false,"time":"19:00","lastNotifiedDate":null}');
let hideHarakat = localStorage.getItem('hideHarakat') === 'true';
let arabicFontScale = parseFloat(localStorage.getItem('arabicFontScale') || '1');
let dailyGoalXp = parseInt(localStorage.getItem('dailyGoalXp') || '50', 10);
let dailyXpLog = JSON.parse(localStorage.getItem('dailyXpLog') || '{}');
let difficultVerbs = JSON.parse(localStorage.getItem('difficultVerbs') || '[]');
let difficultQuestions = JSON.parse(localStorage.getItem('difficultQuestions') || '[]');
let srsData = JSON.parse(localStorage.getItem('srsData') || '{}');

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

    const today = todayStr();
    dailyXpLog[today] = (dailyXpLog[today] || 0) + amount;
    // Yalnız son 14 günü saxla, köhnə qeydləri təmizlə
    const keys = Object.keys(dailyXpLog).sort();
    if (keys.length > 14) {
        keys.slice(0, keys.length - 14).forEach(k => delete dailyXpLog[k]);
    }
    localStorage.setItem('dailyXpLog', JSON.stringify(dailyXpLog));
}

function getTodayXp() {
    return dailyXpLog[todayStr()] || 0;
}

function setDailyGoal(value) {
    dailyGoalXp = parseInt(value, 10);
    localStorage.setItem('dailyGoalXp', String(dailyGoalXp));
}

function onDailyGoalChange(select) {
    setDailyGoal(select.value);
    renderHomeStats();
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

    const todayXp = getTodayXp();
    const goalPercent = Math.min(100, Math.round((todayXp / dailyGoalXp) * 100));
    const circumference = 2 * Math.PI * 30;
    const ringOffset = circumference * (1 - goalPercent / 100);
    const goalOptions = [20, 50, 100].map(g =>
        `<option value="${g}" ${dailyGoalXp === g ? 'selected' : ''}>${g} XP (~${Math.round(g / 3.3)} dəq)</option>`
    ).join('');

    container.innerHTML = `
        <div class="stats-bar">
            <div class="stat-pill">🔥 ${streakData.currentStreak} gün</div>
            <div class="stat-pill">📗 ${learnedVerbs.length}/${verbsData.length}</div>
            <div class="stat-pill">⭐ ${current.name}</div>
        </div>
        <div class="notif-card" style="margin-top:0; margin-bottom:14px;">
            <div style="display:flex; align-items:center; gap:14px;">
                <svg width="70" height="70" viewBox="0 0 70 70" style="flex-shrink:0;">
                    <circle cx="35" cy="35" r="30" stroke="var(--overlay-15)" stroke-width="6" fill="none"/>
                    <circle cx="35" cy="35" r="30" stroke="#4ade80" stroke-width="6" fill="none"
                        stroke-dasharray="${circumference}" stroke-dashoffset="${ringOffset}"
                        stroke-linecap="round" transform="rotate(-90 35 35)"/>
                    <text x="35" y="40" text-anchor="middle" font-size="14" fill="currentColor">${goalPercent}%</text>
                </svg>
                <div style="flex:1;">
                    <div class="font-semibold mb-1">🎯 Gündəlik hədəf</div>
                    <div class="text-white-75" style="font-size: 0.8rem; margin-bottom: 6px;">${todayXp} / ${dailyGoalXp} XP bu gün</div>
                    <select class="notif-time-input" style="width:100%;" onchange="onDailyGoalChange(this)">${goalOptions}</select>
                </div>
            </div>
        </div>
        <div class="xp-bar-wrap">
            <div class="flex-between mb-1" style="font-size: 0.8rem;">
                <span class="font-semibold">${current.name}</span>
                <span class="text-white-75">${next ? xp + ' / ' + next.xpRequired + ' XP' : xp + ' XP (maksimum)'}</span>
            </div>
            <div class="xp-bar"><div class="xp-bar-fill" style="width:${percent}%"></div></div>
        </div>
        <div class="daily-word-card" onclick="openDailyWord()">
            <div class="flex-between">
                <div class="text-white-75" style="font-size: 0.75rem;">📅 Gündəlik söz</div>
                <button class="speak-btn-inline" onclick="event.stopPropagation(); speakArabic('${dw.arabic}')" title="Səsləndir">🔊</button>
            </div>
            <div class="arabic-text text-2xl">${displayArabic(dw.arabic)}</div>
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

            <button onclick="resetAllProgress()" class="glass-button mt-4" style="background: rgba(248,113,113,0.15); border-color: rgba(248,113,113,0.4);">Proqressi sıfırla</button>
        </div>
    `;
}

function showSettingsSection() {
    const content = document.getElementById('content-area');
    content.style.display = 'block';
    document.getElementById('main-menu').style.display = 'none';

    content.innerHTML = `
        <div class="glass-card fade-in">
            <div class="flex-between mb-4">
                <h2 class="text-2xl font-bold">⚙️ Ayarlar</h2>
                <button onclick="showMainMenu()" class="close-btn">✕</button>
            </div>
            ${renderSettingsCardHtml()}
            ${renderNotificationCardHtml()}
            ${renderBackupCardHtml()}
        </div>
    `;
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

// ==================== MƏNİM SƏHVLƏRİM (ÇƏTİN SÖZLƏR/SUALLAR) ====================
function saveDifficultVerbs() { localStorage.setItem('difficultVerbs', JSON.stringify(difficultVerbs)); }
function saveDifficultQuestions() { localStorage.setItem('difficultQuestions', JSON.stringify(difficultQuestions)); }

function markVerbDifficult(id) {
    if (!difficultVerbs.includes(id)) {
        difficultVerbs.push(id);
        saveDifficultVerbs();
    }
}
function unmarkVerbDifficult(id) {
    if (difficultVerbs.includes(id)) {
        difficultVerbs = difficultVerbs.filter(x => x !== id);
        saveDifficultVerbs();
    }
}
function markQuestionDifficult(id) {
    if (!difficultQuestions.includes(id)) {
        difficultQuestions.push(id);
        saveDifficultQuestions();
    }
}
function unmarkQuestionDifficult(id) {
    if (difficultQuestions.includes(id)) {
        difficultQuestions = difficultQuestions.filter(x => x !== id);
        saveDifficultQuestions();
    }
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
    localStorage.removeItem('difficultVerbs');
    localStorage.removeItem('difficultQuestions');
    localStorage.removeItem('srsData');
    localStorage.removeItem('dailyXpLog');
    learnedVerbs = [];
    learnedDialogues = [];
    answeredQuestions = [];
    xp = 0;
    earnedBadges = [];
    testStats = { attempts: 0, correct: 0 };
    difficultVerbs = [];
    difficultQuestions = [];
    srsData = {};
    dailyXpLog = {};
    currentVerbIndex = 0;
    currentDialogueIndex = 0;
    currentQuestionIndex = 0;
    testDeck = questionsData;
    testMode = 'normal';
    updateStreakOnVisit();
    showMainMenu();
}

function normalizeArabic(str) {
    return str
        .replace(/[\u064B-\u0652\u0670\u0640]/g, '')
        .replace(/[أإآٱ]/g, 'ا')
        .replace(/ى/g, 'ي')
        .replace(/ة/g, 'ه')
        .trim()
        .toLowerCase();
}

// ==================== HƏRƏKƏSIZ OXU REJIMI & ŞRİFT ÖLÇÜSÜ ====================
function stripHarakat(text) {
    return text.replace(/[\u064B-\u0652\u0670\u0640]/g, '');
}

function displayArabic(text) {
    return hideHarakat ? stripHarakat(text) : text;
}

function setHideHarakat(value) {
    hideHarakat = value;
    localStorage.setItem('hideHarakat', String(value));
}

function toggleHideHarakatSetting(checkbox) {
    setHideHarakat(checkbox.checked);
    // Açıq olan istənilən ekranı təzələmək üçün ən sadə yol: statistika ekranını yenidən çək
    showSettingsSection();
}

function applyArabicFontScale() {
    document.documentElement.style.setProperty('--arabic-scale', String(arabicFontScale));
}

function setArabicFontScale(value) {
    arabicFontScale = parseFloat(value);
    localStorage.setItem('arabicFontScale', String(arabicFontScale));
    applyArabicFontScale();
}

function onArabicFontSliderChange(slider) {
    setArabicFontScale(slider.value);
    const label = document.getElementById('arabic-scale-label');
    if (label) label.textContent = Math.round(arabicFontScale * 100) + '%';
}

function clampIndex(index, length) {
    if (index < 0) return 0;
    if (index > length - 1) return length - 1;
    return index;
}

// ==================== RENDER FUNCTIONS ====================
function showMainMenu() {
    document.getElementById('content-area').innerHTML = '';
    document.getElementById('content-area').style.display = 'none';
    document.getElementById('main-menu').style.display = 'block';
    renderHomeStats();
}

// Feillər bölməsi
// ==================== SÖZ ÖYRƏNMƏYƏ BAŞLA (Feillər / Sözlər / Qarışıq) ====================
function showVocabModeSelect() {
    const content = document.getElementById('content-area');
    content.style.display = 'block';
    document.getElementById('main-menu').style.display = 'none';
    content.innerHTML = `
        <div class="glass-card fade-in">
            <div class="flex-between mb-4">
                <h2 class="text-2xl font-bold">📚 Söz öyrənməyə başla</h2>
                <button onclick="showMainMenu()" class="close-btn">✕</button>
            </div>
            <div class="mode-select-card" onclick="showVerbsSection()">
                <div class="mode-select-icon">🔤</div>
                <div>
                    <div class="mode-select-title">Feillər</div>
                    <div class="mode-select-desc">${verbsData.length} fel</div>
                </div>
            </div>
            <div class="mode-select-card" onclick="showWordsSection()">
                <div class="mode-select-icon">🧩</div>
                <div>
                    <div class="mode-select-title">Sözlər</div>
                    <div class="mode-select-desc">${wordsData.length} söz (isim, sifət və s.)</div>
                </div>
            </div>
            <div class="mode-select-card" onclick="showMixedSection()">
                <div class="mode-select-icon">🔀</div>
                <div>
                    <div class="mode-select-title">Qarışıq</div>
                    <div class="mode-select-desc">Feillər və sözlərin hər ikisi (${verbsData.length + wordsData.length})</div>
                </div>
            </div>
        </div>
    `;
}

function saveLearnedWords() { localStorage.setItem('learnedWords', JSON.stringify(learnedWords)); }
function saveFavoriteWords() { localStorage.setItem('favoriteWords', JSON.stringify(favoriteWords)); }
function toggleWordFavorite(id) {
    if (favoriteWords.includes(id)) favoriteWords = favoriteWords.filter(x => x !== id);
    else favoriteWords.push(id);
    saveFavoriteWords();
}

let currentWordIndex = 0;

function showWordsSection(index) {
    const content = document.getElementById('content-area');
    content.style.display = 'block';
    document.getElementById('main-menu').style.display = 'none';

    if (index === undefined) {
        const nextUnlearned = wordsData.find(w => !learnedWords.includes(w.id));
        index = nextUnlearned ? wordsData.findIndex(w => w.id === nextUnlearned.id) : currentWordIndex;
        if (!nextUnlearned && learnedWords.length >= wordsData.length) {
            content.innerHTML = `
                <div class="glass-card text-center">
                    <p style="font-size: 2rem; margin-bottom: 16px;">🎉</p>
                    <h2 class="text-xl font-bold mb-2">Bütün sözləri öyrəndiniz!</h2>
                    <button onclick="showVocabModeSelect()" class="glass-button px-6 py-3">Geri</button>
                </div>
            `;
            return;
        }
    }
    index = clampIndex(index, wordsData.length);
    currentWordIndex = index;
    const word = wordsData[currentWordIndex];
    const isLearned = learnedWords.includes(word.id);
    const isFavorite = favoriteWords.includes(word.id);

    content.innerHTML = `
        <div class="glass-card fade-in">
            <div class="flex-between mb-4">
                <h2 class="text-2xl font-bold">Söz öyrən</h2>
                <div style="display:flex; align-items:center; gap:6px;">
                    <button onclick="toggleWordFavoriteAndRerender(${word.id})" class="fav-star-btn" title="Favoritə əlavə et">${isFavorite ? '⭐' : '☆'}</button>
                    <button onclick="showMainMenu()" class="close-btn">✕</button>
                </div>
            </div>
            <div class="progress-text">${currentWordIndex + 1} / ${wordsData.length}</div>
            <div class="text-center mb-4">
                <div style="display:flex; align-items:center; justify-content:center; gap:10px;">
                    <p class="arabic-text text-4xl font-bold mb-2">${displayArabic(word.arabic)}</p>
                    <button class="speak-btn" onclick="speakArabicFromEvent(event, '${word.arabic}')" title="Səsləndir">🔊</button>
                    <button class="speak-btn" onclick="checkPronunciation('${word.arabic}', 'pronun-feedback-word', event)" title="Tələffüzünü yoxla">🎤</button>
                </div>
                <p class="text-white-75 text-lg">${word.meaning}</p>
                <div id="pronun-feedback-word" class="feedback"></div>
            </div>
            <button onclick="markWordLearned(${word.id})" class="glass-button py-3 font-bold text-lg">
                ${isLearned ? '✓ Öyrənilib' : '✓ Öyrəndim'}
            </button>
            <div class="nav-row">
                <button onclick="navigateWord(-1)" class="glass-button" ${currentWordIndex === 0 ? 'disabled' : ''}>◀ Əvvəlki</button>
                <button onclick="navigateWord(1)" class="glass-button" ${currentWordIndex === wordsData.length - 1 ? 'disabled' : ''}>Növbəti ▶</button>
            </div>
        </div>
    `;
}

function navigateWord(delta) {
    showWordsSection(currentWordIndex + delta);
}

function toggleWordFavoriteAndRerender(id) {
    toggleWordFavorite(id);
    showWordsSection(currentWordIndex);
}

function markWordLearned(id) {
    if (!learnedWords.includes(id)) {
        learnedWords.push(id);
        saveLearnedWords();
        addXp(XP_PER_VERB);
        checkBadges();
    }
    if (currentWordIndex < wordsData.length - 1) {
        showWordsSection(currentWordIndex + 1);
    } else {
        showWordsSection(currentWordIndex);
    }
}

// Qarışıq: Feillər + Sözlər birləşdirilmiş siyahı
let currentMixedIndex = 0;
function getMixedPool() {
    return [
        ...verbsData.map(v => ({ kind: 'verb', item: v })),
        ...wordsData.map(w => ({ kind: 'word', item: w }))
    ];
}

function showMixedSection(index) {
    const pool = getMixedPool();
    const content = document.getElementById('content-area');
    content.style.display = 'block';
    document.getElementById('main-menu').style.display = 'none';

    index = clampIndex(index === undefined ? currentMixedIndex : index, pool.length);
    currentMixedIndex = index;
    const entry = pool[currentMixedIndex];
    const isVerb = entry.kind === 'verb';
    const item = entry.item;
    const isLearned = isVerb ? learnedVerbs.includes(item.id) : learnedWords.includes(item.id);
    const isFavorite = isVerb ? favoriteVerbs.includes(item.id) : favoriteWords.includes(item.id);

    let formsHtml = '';
    if (isVerb) {
        const formLabels = { past: 'Keçmiş', present: 'İndiki', imperative: 'Əmr' };
        for (const [key, label] of Object.entries(formLabels)) {
            formsHtml += `
                <div class="flex-between border-b py-2 clickable" onclick="openFormExamples(${item.id}, '${key}', 'mixed')">
                    <span class="text-white-75">${label}</span>
                    <span style="display:flex; align-items:center; gap:6px;">
                        <button class="speak-btn-inline" onclick="speakArabicFromEvent(event, '${item.forms[key].arabic}')" title="Səsləndir">🔊</button>
                        <span class="arabic-text font-bold">${displayArabic(item.forms[key].arabic)}</span>
                    </span>
                    <span class="text-white-75" style="font-size: 0.875rem;">${item.forms[key].translation}</span>
                </div>
            `;
        }
    }

    content.innerHTML = `
        <div class="glass-card fade-in">
            <div class="flex-between mb-4">
                <h2 class="text-2xl font-bold">Qarışıq — ${isVerb ? 'Fel' : 'Söz'}</h2>
                <div style="display:flex; align-items:center; gap:6px;">
                    <button onclick="toggleMixedFavorite(${item.id}, '${entry.kind}')" class="fav-star-btn" title="Favoritə əlavə et">${isFavorite ? '⭐' : '☆'}</button>
                    <button onclick="showMainMenu()" class="close-btn">✕</button>
                </div>
            </div>
            <div class="progress-text">${currentMixedIndex + 1} / ${pool.length}</div>
            <div class="text-center mb-4">
                <div style="display:flex; align-items:center; justify-content:center; gap:10px;">
                    <p class="arabic-text text-4xl font-bold mb-2">${displayArabic(item.arabic)}</p>
                    <button class="speak-btn" onclick="speakArabicFromEvent(event, '${item.arabic}')" title="Səsləndir">🔊</button>
                </div>
                <p class="text-white-75 text-lg">${item.meaning}</p>
            </div>
            ${isVerb ? `<div class="mb-4"><h3 class="font-semibold mb-2">Formalar</h3><div>${formsHtml}</div></div>` : ''}
            <button onclick="markMixedLearned(${item.id}, '${entry.kind}')" class="glass-button py-3 font-bold text-lg">
                ${isLearned ? '✓ Öyrənilib' : '✓ Öyrəndim'}
            </button>
            <div class="nav-row">
                <button onclick="navigateMixed(-1)" class="glass-button" ${currentMixedIndex === 0 ? 'disabled' : ''}>◀ Əvvəlki</button>
                <button onclick="navigateMixed(1)" class="glass-button" ${currentMixedIndex === pool.length - 1 ? 'disabled' : ''}>Növbəti ▶</button>
            </div>
        </div>
    `;
}

function navigateMixed(delta) {
    showMixedSection(currentMixedIndex + delta);
}

function toggleMixedFavorite(id, kind) {
    if (kind === 'verb') toggleFavorite(id);
    else toggleWordFavorite(id);
    showMixedSection(currentMixedIndex);
}

function markMixedLearned(id, kind) {
    if (kind === 'verb') {
        if (!learnedVerbs.includes(id)) {
            learnedVerbs.push(id);
            saveLearnedVerbs();
            addXp(XP_PER_VERB);
            checkBadges();
        }
    } else {
        if (!learnedWords.includes(id)) {
            learnedWords.push(id);
            saveLearnedWords();
            addXp(XP_PER_VERB);
            checkBadges();
        }
    }
    if (currentMixedIndex < getMixedPool().length - 1) {
        showMixedSection(currentMixedIndex + 1);
    } else {
        showMixedSection(currentMixedIndex);
    }
}

function showVerbsSection(index) {
    const content = document.getElementById('content-area');
    content.style.display = 'block';
    document.getElementById('main-menu').style.display = 'none';

    if (index === undefined) {
        const nextUnlearned = getNextUnlearnedVerb();
        if (!nextUnlearned) {
            content.innerHTML = `
                <div class="glass-card text-center">
                    <p style="font-size: 2rem; margin-bottom: 16px;">🎉</p>
                    <h2 class="text-xl font-bold mb-2">Bütün feilləri öyrəndiniz!</h2>
                    <p class="text-white-75 mb-4">Yeni feil əlavə edildikdə burada görünəcək.</p>
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
                <span style="display:flex; align-items:center; gap:6px;">
                    <button class="speak-btn-inline" onclick="speakArabicFromEvent(event, '${verb.forms[key].arabic}')" title="Səsləndir">🔊</button>
                    <span class="arabic-text font-bold">${displayArabic(verb.forms[key].arabic)}</span>
                </span>
                <span class="text-white-75" style="font-size: 0.875rem;">${verb.forms[key].translation}</span>
            </div>
        `;
    }

    content.innerHTML = `
        <div class="glass-card fade-in">
            <div class="flex-between mb-4">
                <div>
                    <h2 class="text-2xl font-bold">Feil öyrən</h2>
                    <p class="text-white-75" style="font-size: 0.875rem;">${displayArabic(verb.arabic)} - ${verb.meaning}</p>
                </div>
                <div style="display:flex; align-items:center; gap:6px;">
                    <button onclick="showVerbSearch()" class="fav-star-btn" title="Axtar">🔍</button>
                    <button onclick="toggleFavoriteAndRerenderVerb(${verb.id})" class="fav-star-btn" title="Favoritə əlavə et">${isFavorite ? '⭐' : '☆'}</button>
                    <button onclick="showMainMenu()" class="close-btn">✕</button>
                </div>
            </div>
            <div class="progress-text">${currentVerbIndex + 1} / ${verbsData.length}</div>
            <div class="text-center mb-4">
                <div style="display:flex; align-items:center; justify-content:center; gap:10px;">
                    <p class="arabic-text text-4xl font-bold mb-2">${displayArabic(verb.arabic)}</p>
                    <button class="speak-btn" onclick="speakArabicFromEvent(event, '${verb.arabic}')" title="Səsləndir">🔊</button>
                    <button class="speak-btn" onclick="checkPronunciation('${verb.arabic}', 'pronun-feedback-verb', event)" title="Tələffüzünü yoxla">🎤</button>
                </div>
                <p class="text-white-75 text-lg">${verb.meaning}</p>
                <div id="pronun-feedback-verb" class="feedback"></div>
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

// ==================== AXTARIŞ (FEİLLƏR) ====================
function showVerbSearch() {
    const content = document.getElementById('content-area');
    content.style.display = 'block';
    document.getElementById('main-menu').style.display = 'none';

    content.innerHTML = `
        <div class="glass-card fade-in">
            <div class="flex-between mb-4">
                <h2 class="text-xl font-bold">🔍 Söz axtar</h2>
                <button onclick="showVerbsSection(${currentVerbIndex})" class="close-btn">✕</button>
            </div>
            <input type="text" id="verb-search-input" class="input-field mb-4" placeholder="Ərəbcə və ya azərbaycanca yazın..." autocomplete="off" oninput="filterVerbSearch(this.value)">
            <div id="verb-search-results"></div>
        </div>
    `;
    document.getElementById('verb-search-input').focus();
    filterVerbSearch('');
}

function filterVerbSearch(query) {
    const resultsDiv = document.getElementById('verb-search-results');
    if (!resultsDiv) return;
    const q = query.trim().toLowerCase();
    const qNormalized = normalizeArabic(query.trim());

    let matches;
    if (q === '') {
        matches = verbsData.slice(0, 30);
    } else {
        matches = verbsData.filter(v =>
            v.meaning.toLowerCase().includes(q) ||
            (qNormalized && normalizeArabic(v.arabic).includes(qNormalized))
        ).slice(0, 60);
    }

    if (matches.length === 0) {
        resultsDiv.innerHTML = `<p class="text-white-75 text-center" style="padding: 20px 0;">Nəticə tapılmadı</p>`;
        return;
    }

    resultsDiv.innerHTML = matches.map(v => {
        const idx = verbsData.findIndex(x => x.id === v.id);
        const learned = learnedVerbs.includes(v.id) ? '✓ ' : '';
        return `
            <div class="flex-between border-b py-2 clickable" onclick="showVerbsSection(${idx})">
                <span class="arabic-text">${displayArabic(v.arabic)}</span>
                <span class="text-white-75" style="font-size: 0.875rem;">${learned}${v.meaning}</span>
            </div>
        `;
    }).join('');
}

function navigateVerb(delta) {
    showVerbsSection(currentVerbIndex + delta);
}

function toggleFavoriteAndRerenderVerb(id) {
    toggleFavorite(id);
    showVerbsSection(currentVerbIndex);
}

function openFormExamples(verbId, formKey, returnTo) {
    const verb = verbsData.find(v => v.id === verbId);
    if (!verb) return;
    const formData = verb.forms[formKey];
    const content = document.getElementById('content-area');
    content.style.display = 'block';
    document.getElementById('main-menu').style.display = 'none';

    const backAction = returnTo === 'mixed' ? `showMixedSection(${currentMixedIndex})` : `showVerbsSection(${currentVerbIndex})`;

    let examplesHtml = '';
    formData.examples.forEach(ex => {
        examplesHtml += `
            <div class="rounded-xl mb-2" style="background: rgba(255,255,255,0.05); padding: 12px;">
                <div style="display:flex; align-items:center; gap:8px;">
                    <button class="speak-btn-inline" onclick="speakArabicFromEvent(event, '${ex.arabic}')" title="Səsləndir">🔊</button>
                    <p class="arabic-text mb-1" style="flex:1;">${displayArabic(ex.arabic)}</p>
                </div>
                <p class="text-white-75" style="font-size: 0.875rem; direction: ltr; text-align: left;">${ex.translation}</p>
            </div>
        `;
    });

    content.innerHTML = `
        <div class="glass-card fade-in">
            <div class="flex-between mb-4">
                <h2 class="text-xl font-bold">Nümunə Cümlələr</h2>
                <button onclick="${backAction}" class="close-btn">✕</button>
            </div>
            <div class="text-center mb-4">
                <div style="display:flex; align-items:center; justify-content:center; gap:10px;">
                    <p class="arabic-text text-3xl font-bold">${displayArabic(formData.arabic)}</p>
                    <button class="speak-btn" onclick="speakArabicFromEvent(event, '${formData.arabic}')" title="Səsləndir">🔊</button>
                </div>
                <p class="text-white-75">${verb.meaning} (${formData.translation})</p>
            </div>
            ${examplesHtml}
            <button onclick="${backAction}" class="glass-button py-3 font-bold mt-3">Geri</button>
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
function showDialoguesSection(index) {
    const content = document.getElementById('content-area');
    content.style.display = 'block';
    document.getElementById('main-menu').style.display = 'none';

    if (index === undefined) {
        const nextUnlearned = getNextUnlearnedDialogue();
        if (!nextUnlearned) {
            content.innerHTML = `
                <div class="glass-card text-center">
                    <p style="font-size: 2rem; margin-bottom: 16px;">🎉</p>
                    <h2 class="text-xl font-bold mb-2">Bütün dialoqları öyrəndiniz!</h2>
                    <p class="text-white-75 mb-4">Yeni dialoq əlavə edildikdə burada görünəcək.</p>
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
    dialogue.dialogue.forEach((line, lineIdx) => {
        const feedbackId = `pronun-feedback-d${dialogue.id}-${lineIdx}`;
        dialogueHtml += `
            <div class="rounded-xl mb-2" style="background: rgba(255,255,255,0.05); padding: 12px;">
                <div style="display:flex; align-items:center; gap:8px;">
                    <button class="speak-btn-inline" onclick="speakArabicFromEvent(event, '${line.arabic}')" title="Səsləndir">🔊</button>
                    <button class="speak-btn-inline" onclick="checkPronunciation('${line.arabic}', '${feedbackId}', event)" title="Tələffüzünü yoxla">🎤</button>
                    <p class="arabic-text mb-1" style="flex:1;">${displayArabic(line.arabic)}</p>
                </div>
                <p class="dialogue-translation">${line.translation}</p>
                <div id="${feedbackId}" class="feedback" style="text-align:left;"></div>
            </div>
        `;
    });

    content.innerHTML = `
        <div class="glass-card fade-in">
            <div class="flex-between mb-4">
                <h2 class="text-2xl font-bold">${dialogue.title}</h2>
                <button onclick="showMainMenu()" class="close-btn">✕</button>
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
let testDeck = questionsData;
let testMode = 'normal';

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
            <div class="mode-select-card" onclick="startNormalTest()">
                <div class="mode-select-icon">📝</div>
                <div>
                    <div class="mode-select-title">Adi test</div>
                    <div class="mode-select-desc">3 500 dini sual • sual-sual, öz sürətinizlə</div>
                </div>
            </div>
            <div class="mode-select-card" onclick="startDifficultQuestionsReview()">
                <div class="mode-select-icon">❌</div>
                <div>
                    <div class="mode-select-title">Çətin suallar</div>
                    <div class="mode-select-desc">${difficultQuestions.length} sual</div>
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

function startNormalTest() {
    testMode = 'normal';
    testDeck = questionsData;
    showTestsSection();
}

function startDifficultQuestionsReview() {
    if (difficultQuestions.length === 0) {
        const content = document.getElementById('content-area');
        content.style.display = 'block';
        document.getElementById('main-menu').style.display = 'none';
        content.innerHTML = `
            <div class="glass-card text-center fade-in">
                <p style="font-size: 2rem; margin-bottom: 12px;">🎉</p>
                <h2 class="text-xl font-bold mb-2">Çətin sualınız yoxdur</h2>
                <p class="text-white-75 mb-4">Səhv cavabladığınız suallar buraya avtomatik toplanır.</p>
                <button onclick="showTestModeSelect()" class="glass-button py-3">Geri</button>
            </div>
        `;
        return;
    }
    testMode = 'difficult';
    testDeck = questionsData.filter(q => difficultQuestions.includes(q.id));
    showTestsSection(0);
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
        const nextUnanswered = testDeck.find(q => !answeredQuestions.includes(q.id));
        if (!nextUnanswered) {
            const isNormal = testMode === 'normal';
            content.innerHTML = `
                <div class="glass-card text-center">
                    <p style="font-size: 2rem; margin-bottom: 16px;">🏆</p>
                    <h2 class="text-xl font-bold mb-2">${isNormal ? 'Test tamamlandı!' : 'Bütün suallar öyrənildi!'}</h2>
                    <p class="text-white-75 mb-4">Bütün suallara düzgün cavab verdiniz.</p>
                    ${isNormal
                        ? '<button onclick="resetAllProgress()" class="glass-button px-6 py-3">Proqressi sıfırla</button>'
                        : '<button onclick="showTestModeSelect()" class="glass-button px-6 py-3">Geri</button>'}
                </div>
            `;
            return;
        }
        index = testDeck.findIndex(q => q.id === nextUnanswered.id);
    }
    index = clampIndex(index, testDeck.length);
    currentQuestionIndex = index;
    const question = testDeck[currentQuestionIndex];

    const navRowHtml = `
        <div class="nav-row">
            <button onclick="navigateQuestion(-1)" class="glass-button" ${currentQuestionIndex === 0 ? 'disabled' : ''}>◀ Əvvəlki</button>
            <button onclick="navigateQuestion(1)" class="glass-button" ${currentQuestionIndex === testDeck.length - 1 ? 'disabled' : ''}>Növbəti ▶</button>
        </div>
    `;

    if (question.type === 'choice') {
        let optionsHtml = '';
        question.options.forEach((opt, idx) => {
            optionsHtml += `
                <label class="option-label">
                    <input type="radio" name="q${question.id}" value="${idx}" onchange="highlightSelectedOption(this)">
                    <span class="arabic-text text-lg">${displayArabic(opt)}</span>
                </label>
            `;
        });
        content.innerHTML = `
            <div class="glass-card fade-in">
                <div class="flex-between mb-4">
                    <h2 class="text-xl font-bold">Test sualı</h2>
                    <button onclick="showTestModeSelect()" class="close-btn">✕</button>
                </div>
                <div class="progress-text">${currentQuestionIndex + 1} / ${testDeck.length}</div>
                <div class="flex-between" style="align-items:flex-start; gap:8px;">
                    <p class="text-lg mb-4" style="flex:1;">${question.question}</p>
                    ${question.hint ? `<button class="fav-star-btn" style="font-size:1.1rem;" onclick="toggleQuestionHint(${question.id})" title="Azərbaycanca kömək">❓</button>` : ''}
                </div>
                ${question.hint ? `<div id="hint-${question.id}" class="notif-status" style="display:none; margin-top:-10px; margin-bottom:14px;">💡 ${question.hint}</div>` : ''}
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
                <div class="progress-text">${currentQuestionIndex + 1} / ${testDeck.length}</div>
                <div class="flex-between" style="align-items:flex-start; gap:8px;">
                    <p class="text-lg mb-4" style="flex:1;">${question.question}</p>
                    ${question.hint ? `<button class="fav-star-btn" style="font-size:1.1rem;" onclick="toggleQuestionHint(${question.id})" title="Azərbaycanca kömək">❓</button>` : ''}
                </div>
                ${question.hint ? `<div id="hint-${question.id}" class="notif-status" style="display:none; margin-top:-10px; margin-bottom:14px;">💡 ${question.hint}</div>` : ''}
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

function toggleQuestionHint(id) {
    const el = document.getElementById('hint-' + id);
    if (!el) return;
    el.style.display = el.style.display === 'none' ? 'block' : 'none';
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
        unmarkQuestionDifficult(qid);
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
        markQuestionDifficult(qid);
        feedback.innerHTML = `
            <span class="error">❌ Səhvdir, yenidən cəhd edin.</span>
            <div class="correct-answer-box">
                <span class="text-white-75" style="font-size: 0.85rem;">Düzgün cavab:</span>
                <p class="arabic-text">${displayArabic(question.options[question.correct])}</p>
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
        unmarkQuestionDifficult(qid);
        if (!answeredQuestions.includes(qid)) {
            answeredQuestions.push(qid);
            saveAnsweredQuestions();
            addXp(XP_PER_CORRECT_ANSWER);
            checkBadges();
        }
        setTimeout(() => showTestsSection(currentQuestionIndex + 1), 1200);
    } else {
        recordTestAttempt(false);
        markQuestionDifficult(qid);
        feedback.innerHTML = `
            <span class="error">❌ Səhvdir, yenidən cəhd edin.</span>
            <div class="correct-answer-box">
                <span class="text-white-75" style="font-size: 0.85rem;">Düzgün cavab:</span>
                <p class="arabic-text">${displayArabic(question.correctAnswer)}</p>
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
        optionsHtml += `<button class="glass-button mb-2" style="text-align:left;" onclick="answerSpeedRound(${idx})"><span class="arabic-text text-lg">${displayArabic(opt)}</span></button>`;
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
    if (isCorrect) { speedRound.score += 1; unmarkQuestionDifficult(q.id); } else { markQuestionDifficult(q.id); }
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
            <span class="arabic-text">${displayArabic(verb.arabic)}</span>
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
    const difficultCount = difficultVerbs.length;
    const dueSrsCount = getDueSrsVerbs().length;

    content.innerHTML = `
        <div class="glass-card fade-in">
            <div class="flex-between mb-4">
                <h2 class="text-2xl font-bold">🃏 Flash kartlar</h2>
                <button onclick="showMainMenu()" class="close-btn">✕</button>
            </div>
            <div class="mode-select-card" onclick="startFlashcards('srs')">
                <div class="mode-select-icon">🧠</div>
                <div>
                    <div class="mode-select-title">Ağıllı təkrar (SRS)</div>
                    <div class="mode-select-desc">${dueSrsCount} söz növbədə</div>
                </div>
            </div>
            <div class="mode-select-card" onclick="startFlashcards('difficult')">
                <div class="mode-select-icon">❌</div>
                <div>
                    <div class="mode-select-title">Çətin sözlər</div>
                    <div class="mode-select-desc">${difficultCount} söz</div>
                </div>
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

function getDueSrsVerbs() {
    const today = todayStr();
    return verbsData.filter(v => {
        const rec = srsData[v.id];
        return !rec || rec.nextReview <= today;
    }).sort((a, b) => {
        const da = srsData[a.id] ? srsData[a.id].nextReview : today;
        const db = srsData[b.id] ? srsData[b.id].nextReview : today;
        return da.localeCompare(db);
    });
}

function updateSrsOnAnswer(id, knewIt) {
    const schedule = [1, 3, 7, 16, 35, 90, 180];
    const rec = srsData[id] || { interval: 0, reps: 0 };
    if (knewIt) {
        rec.reps = (rec.reps || 0) + 1;
        rec.interval = schedule[Math.min(rec.reps - 1, schedule.length - 1)];
    } else {
        rec.reps = 0;
        rec.interval = 1;
    }
    const next = new Date();
    next.setDate(next.getDate() + rec.interval);
    rec.nextReview = next.toISOString().slice(0, 10);
    srsData[id] = rec;
    localStorage.setItem('srsData', JSON.stringify(srsData));
}

function startFlashcards(filterType) {
    let pool;
    if (filterType === 'unlearned') pool = verbsData.filter(v => !learnedVerbs.includes(v.id));
    else if (filterType === 'favorites') pool = verbsData.filter(v => favoriteVerbs.includes(v.id));
    else if (filterType === 'difficult') pool = verbsData.filter(v => difficultVerbs.includes(v.id));
    else if (filterType === 'srs') pool = getDueSrsVerbs();
    else pool = verbsData.slice();

    if (pool.length === 0) {
        const emptyMessages = {
            favorites: 'Hələ favorit söz əlavə etməmisiniz.',
            difficult: 'Çətin söz siyahınız boşdur — əla nəticədir! 🎉',
            srs: 'Bugün üçün təkrarlanacaq söz yoxdur, sabah yenidən baxın! 🎉',
            unlearned: 'Bütün sözləri artıq öyrənmisiniz!'
        };
        const content = document.getElementById('content-area');
        content.innerHTML = `
            <div class="glass-card text-center fade-in">
                <p style="font-size: 2rem; margin-bottom: 12px;">🤷</p>
                <h2 class="text-xl font-bold mb-2">Bu siyahı boşdur</h2>
                <p class="text-white-75 mb-4">${emptyMessages[filterType] || 'Bu siyahı hazırda boşdur.'}</p>
                <button onclick="showFlashcardModeSelect()" class="glass-button py-3">Geri</button>
            </div>
        `;
        return;
    }

    const deck = filterType === 'srs' ? pool : shuffleArray(pool);
    flashcardSession = { deck, index: 0, knownCount: 0, unknownCount: 0, mode: filterType, requeueCount: {} };
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
                            <button class="speak-btn" style="position:absolute; top:10px; left:14px;" onclick="event.stopPropagation(); speakArabic('${verb.arabic}')" title="Səsləndir">🔊</button>
                            <p class="arabic-text text-4xl font-bold">${displayArabic(verb.arabic)}</p>
                            <p class="flip-hint">Çevirmək üçün toxunun</p>
                        </div>
                        <div class="flashcard-face flashcard-back">
                            <button class="speak-btn" style="position:absolute; top:10px; left:14px;" onclick="event.stopPropagation(); speakArabic('${verb.forms.past.arabic}')" title="Səsləndir">🔊</button>
                            <p class="text-2xl font-bold mb-2">${verb.meaning}</p>
                            <p class="text-white-75" style="font-size: 0.85rem;">${displayArabic(verb.forms.past.arabic)} — ${verb.forms.past.translation}</p>
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
    const verb = flashcardSession.deck[flashcardSession.index];

    if (knewIt) {
        flashcardSession.knownCount += 1;
        unmarkVerbDifficult(verb.id);
    } else {
        flashcardSession.unknownCount += 1;
        markVerbDifficult(verb.id);
    }

    if (flashcardSession.mode === 'srs') {
        updateSrsOnAnswer(verb.id, knewIt);
        if (!knewIt) {
            const reqCount = flashcardSession.requeueCount[verb.id] || 0;
            if (reqCount < 2) {
                flashcardSession.requeueCount[verb.id] = reqCount + 1;
                const insertAt = Math.min(flashcardSession.deck.length, flashcardSession.index + 3);
                flashcardSession.deck.splice(insertAt, 0, verb);
            }
        }
    }

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

function isCapacitorApp() {
    return typeof window !== 'undefined' &&
        window.Capacitor &&
        typeof window.Capacitor.isNativePlatform === 'function' &&
        window.Capacitor.isNativePlatform();
}

function getLocalNotificationsPlugin() {
    if (!isCapacitorApp()) return null;
    return (window.Capacitor.Plugins && window.Capacitor.Plugins.LocalNotifications) || null;
}

// ==================== SƏSLƏNDİRMƏ (TEXT-TO-SPEECH) ====================
// ==================== EHTİYAT NÜSXƏ (BACKUP / BƏRPA) ====================
function buildBackupObject() {
    return {
        app: 'hergun-erebce',
        appVersion: APP_VERSION,
        exportedAt: new Date().toISOString(),
        data: {
            learnedVerbs, learnedDialogues, answeredQuestions, favoriteVerbs,
            xp, earnedBadges, testStats, streakData,
            difficultVerbs, difficultQuestions, srsData, dailyXpLog, dailyGoalXp,
            hideHarakat, arabicFontScale,
            theme: localStorage.getItem('theme') || 'dark'
        }
    };
}

async function exportBackup() {
    const jsonStr = JSON.stringify(buildBackupObject(), null, 2);
    const filename = `hergun-erebce-backup-${todayStr()}.json`;

    const capFS = isCapacitorApp() && window.Capacitor.Plugins.Filesystem;
    const capShare = isCapacitorApp() && window.Capacitor.Plugins.Share;

    if (capFS) {
        try {
            const result = await capFS.writeFile({
                path: filename,
                data: jsonStr,
                directory: 'CACHE',
                encoding: 'utf8'
            });
            if (capShare && capShare.share) {
                await capShare.share({ title: 'Hər Gün Ərəbcə - Ehtiyat nüsxə', url: result.uri });
            } else {
                alert('Ehtiyat nüsxə yaradıldı: ' + result.uri);
            }
        } catch (e) {
            alert('Ehtiyat nüsxə yaradıla bilmədi: ' + (e && e.message ? e.message : e));
        }
        return;
    }

    // Veb fallback: brauzer vasitəsilə fayl yükləmək
    try {
        const blob = new Blob([jsonStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    } catch (e) {
        alert('Ehtiyat nüsxə yaradıla bilmədi.');
    }
}

function triggerImportPicker() {
    const input = document.getElementById('backup-file-input');
    if (input) input.click();
}

function handleBackupFileSelected(input) {
    const file = input.files && input.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const parsed = JSON.parse(e.target.result);
            applyBackupData(parsed);
        } catch (err) {
            alert('Fayl oxuna bilmədi — düzgün ehtiyat nüsxə faylı deyil.');
        }
    };
    reader.readAsText(file);
    input.value = '';
}

function applyBackupData(parsed) {
    if (!parsed || !parsed.data) {
        alert('Fayl formatı tanınmadı.');
        return;
    }
    const confirmed = confirm('Bu, cari proqresinizi ehtiyat nüsxədəki ilə əvəz edəcək. Davam edilsin?');
    if (!confirmed) return;

    const d = parsed.data;
    learnedVerbs = d.learnedVerbs || [];
    learnedDialogues = d.learnedDialogues || [];
    answeredQuestions = d.answeredQuestions || [];
    favoriteVerbs = d.favoriteVerbs || [];
    xp = d.xp || 0;
    earnedBadges = d.earnedBadges || [];
    testStats = d.testStats || { attempts: 0, correct: 0 };
    streakData = d.streakData || { lastActiveDate: null, currentStreak: 0, longestStreak: 0 };
    difficultVerbs = d.difficultVerbs || [];
    difficultQuestions = d.difficultQuestions || [];
    srsData = d.srsData || {};
    dailyXpLog = d.dailyXpLog || {};
    dailyGoalXp = d.dailyGoalXp || 50;
    hideHarakat = !!d.hideHarakat;
    arabicFontScale = d.arabicFontScale || 1;

    saveLearnedVerbs();
    saveLearnedDialogues();
    saveAnsweredQuestions();
    saveFavoriteVerbs();
    localStorage.setItem('xp', String(xp));
    localStorage.setItem('earnedBadges', JSON.stringify(earnedBadges));
    localStorage.setItem('testStats', JSON.stringify(testStats));
    localStorage.setItem('streakData', JSON.stringify(streakData));
    saveDifficultVerbs();
    saveDifficultQuestions();
    localStorage.setItem('srsData', JSON.stringify(srsData));
    localStorage.setItem('dailyXpLog', JSON.stringify(dailyXpLog));
    localStorage.setItem('dailyGoalXp', String(dailyGoalXp));
    localStorage.setItem('hideHarakat', String(hideHarakat));
    localStorage.setItem('arabicFontScale', String(arabicFontScale));
    if (d.theme) {
        localStorage.setItem('theme', d.theme);
        applyTheme(d.theme);
    }
    applyArabicFontScale();

    alert('Ehtiyat nüsxə uğurla bərpa edildi!');
    showMainMenu();
}

function renderBackupCardHtml() {
    return `
        <div class="notif-card">
            <h3 class="font-semibold mb-2">💾 Ehtiyat nüsxə</h3>
            <p class="notif-status mb-3">Proqresiniz (öyrənilən sözlər, XP, seriya, favoritlər) yalnız bu telefonda saxlanılır. Tətbiqi silsəniz və ya telefon dəyişsəniz itməməsi üçün ehtiyat nüsxə çıxarın.</p>
            <button class="glass-button mb-2" onclick="exportBackup()">⬆️ Ehtiyat nüsxə çıxar</button>
            <button class="glass-button" onclick="triggerImportPicker()">⬇️ Nüsxədən bərpa et</button>
            <input type="file" id="backup-file-input" accept="application/json" style="display:none" onchange="handleBackupFileSelected(this)">
        </div>
    `;
}

// ==================== ANDROID GERİ DÜYMƏSİ ====================
// ==================== YAZI MƏŞQİ (ƏRƏB ƏLİFBASI) ====================
const ARABIC_LETTERS = [
    { letter: 'ا', name: 'əlif' }, { letter: 'ب', name: 'bə' }, { letter: 'ت', name: 'tə' },
    { letter: 'ث', name: 'sə' }, { letter: 'ج', name: 'cim' }, { letter: 'ح', name: 'ha' },
    { letter: 'خ', name: 'xa' }, { letter: 'د', name: 'dəl' }, { letter: 'ذ', name: 'zəl' },
    { letter: 'ر', name: 'ra' }, { letter: 'ز', name: 'zey' }, { letter: 'س', name: 'sin' },
    { letter: 'ش', name: 'şin' }, { letter: 'ص', name: 'sad' }, { letter: 'ض', name: 'dad' },
    { letter: 'ط', name: 'ta' }, { letter: 'ظ', name: 'za' }, { letter: 'ع', name: 'ayn' },
    { letter: 'غ', name: 'ğayn' }, { letter: 'ف', name: 'fə' }, { letter: 'ق', name: 'qaf' },
    { letter: 'ك', name: 'kəf' }, { letter: 'ل', name: 'ləm' }, { letter: 'م', name: 'mim' },
    { letter: 'ن', name: 'nun' }, { letter: 'ه', name: 'hə' }, { letter: 'و', name: 'vav' },
    { letter: 'ي', name: 'yə' }
];

let currentLetterIndex = 0;
let isDrawingOnCanvas = false;
let lastDrawPoint = null;

function showWritingSection(index) {
    index = clampIndex(index === undefined ? currentLetterIndex : index, ARABIC_LETTERS.length);
    currentLetterIndex = index;
    const item = ARABIC_LETTERS[index];
    const content = document.getElementById('content-area');
    content.style.display = 'block';
    document.getElementById('main-menu').style.display = 'none';

    content.innerHTML = `
        <div class="glass-card fade-in">
            <div class="flex-between mb-2">
                <h2 class="text-xl font-bold">✍️ Yazı məşqi</h2>
                <button onclick="showMainMenu()" class="close-btn">✕</button>
            </div>
            <div class="progress-text">${index + 1} / ${ARABIC_LETTERS.length} — ${item.name}</div>
            <p class="text-center text-white-75 mb-2" style="font-size: 0.8rem;">Boz hərfin üzərindən barmağınızla keçin</p>
            <div class="writing-canvas-wrap">
                <canvas id="writing-canvas" width="300" height="300"></canvas>
            </div>
            <button class="glass-button mb-3" onclick="clearWritingCanvas()">🧹 Təmizlə</button>
            <div class="nav-row">
                <button class="glass-button" onclick="navigateWriting(-1)" ${index === 0 ? 'disabled' : ''}>◀ Əvvəlki</button>
                <button class="glass-button" onclick="navigateWriting(1)" ${index === ARABIC_LETTERS.length - 1 ? 'disabled' : ''}>Növbəti ▶</button>
            </div>
        </div>
    `;

    setupWritingCanvas(item.letter);
}

function navigateWriting(delta) {
    showWritingSection(currentLetterIndex + delta);
}

function drawGuideLetter(letter) {
    const canvas = document.getElementById('writing-canvas');
    if (!canvas || !canvas.getContext) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.direction = 'rtl';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = '200px "Traditional Arabic", "Scheherazade New", "Amiri", serif';
    ctx.fillStyle = 'rgba(150,150,150,0.4)';
    ctx.fillText(letter, canvas.width / 2, canvas.height / 2 + 10);
    ctx.restore();
}

function clearWritingCanvas() {
    const item = ARABIC_LETTERS[currentLetterIndex];
    drawGuideLetter(item.letter);
}

function setupWritingCanvas(letter) {
    const canvas = document.getElementById('writing-canvas');
    if (!canvas || !canvas.getContext) return;
    const ctx = canvas.getContext('2d');
    drawGuideLetter(letter);

    const getPos = (evt) => {
        const rect = canvas.getBoundingClientRect();
        const clientX = evt.touches ? evt.touches[0].clientX : evt.clientX;
        const clientY = evt.touches ? evt.touches[0].clientY : evt.clientY;
        return {
            x: (clientX - rect.left) * (canvas.width / rect.width),
            y: (clientY - rect.top) * (canvas.height / rect.height)
        };
    };

    const start = (evt) => {
        evt.preventDefault();
        isDrawingOnCanvas = true;
        lastDrawPoint = getPos(evt);
    };
    const move = (evt) => {
        if (!isDrawingOnCanvas) return;
        evt.preventDefault();
        const pos = getPos(evt);
        ctx.strokeStyle = '#4ade80';
        ctx.lineWidth = 6;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.beginPath();
        ctx.moveTo(lastDrawPoint.x, lastDrawPoint.y);
        ctx.lineTo(pos.x, pos.y);
        ctx.stroke();
        lastDrawPoint = pos;
    };
    const end = () => { isDrawingOnCanvas = false; lastDrawPoint = null; };

    canvas.onmousedown = start;
    canvas.onmousemove = move;
    canvas.onmouseup = end;
    canvas.onmouseleave = end;
    canvas.ontouchstart = start;
    canvas.ontouchmove = move;
    canvas.ontouchend = end;
}

function initNativeBackButton() {
    if (!isCapacitorApp()) return;
    const CapApp = window.Capacitor.Plugins.App;
    if (!CapApp || !CapApp.addListener) return;
    CapApp.addListener('backButton', () => {
        const mainMenu = document.getElementById('main-menu');
        const isOnMainMenu = mainMenu && mainMenu.style.display !== 'none';
        if (isOnMainMenu) {
            CapApp.exitApp();
        } else {
            showMainMenu();
        }
    });
}

function getSplashScreenPlugin() {
    if (!isCapacitorApp()) return null;
    return (window.Capacitor.Plugins && window.Capacitor.Plugins.SplashScreen) || null;
}

function hideSplashScreen() {
    const plugin = getSplashScreenPlugin();
    if (plugin && plugin.hide) {
        plugin.hide().catch(() => {});
    }
}


// ==================== SƏSLƏNDİRMƏ (TEXT-TO-SPEECH) ====================
function getTextToSpeechPlugin() {
    if (!isCapacitorApp()) return null;
    return (window.Capacitor.Plugins && window.Capacitor.Plugins.TextToSpeech) || null;
}

function pickArabicWebVoice() {
    if (typeof speechSynthesis === 'undefined') return null;
    const voices = speechSynthesis.getVoices() || [];
    return voices.find(v => /^ar([-_]|$)/i.test(v.lang)) || null;
}

// Android TTS mühərriklərində ar-SA həmişə ayrıca mövcud olmur.
// Əvvəl cihazın həqiqətən dəstəklədiyi ərəb dilini tapırıq.
async function getSupportedArabicNativeLanguage(nativePlugin) {
    const candidates = ['ar-SA', 'ar', 'ar-XA', 'ar-AE', 'ar-EG', 'ar-JO', 'ar-KW', 'ar-MA'];

    if (!nativePlugin) return null;

    try {
        if (typeof nativePlugin.getSupportedLanguages === 'function') {
            const result = await nativePlugin.getSupportedLanguages();
            const languages = Array.isArray(result?.languages) ? result.languages : [];

            // Tam uyğunluğa üstünlük ver, sonra istənilən ərəb locale-ni qəbul et.
            const exact = candidates.find(c => languages.some(l => String(l).toLowerCase() === c.toLowerCase()));
            if (exact) return exact;

            const arabic = languages.find(l => /^ar(?:[-_]|$)/i.test(String(l)));
            if (arabic) return arabic;
        }

        if (typeof nativePlugin.isLanguageSupported === 'function') {
            for (const lang of candidates) {
                const result = await nativePlugin.isLanguageSupported({ lang });
                if (result?.supported) return lang;
            }
        }
    } catch (e) {
        console.warn('Ərəb TTS dili yoxlanarkən xəta:', e);
    }

    return null;
}

function showTtsWarning(message) {
    // Səs düyməsinə basıldıqda istifadəçiyə nə baş verdiyini göstər.
    // Əsas UI-nı pozmamaq üçün qısa toast istifadə edirik.
    let toast = document.getElementById('tts-warning-toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'tts-warning-toast';
        toast.style.cssText = 'position:fixed;left:16px;right:16px;bottom:88px;z-index:99999;padding:14px 16px;border-radius:14px;background:rgba(15,44,63,.96);color:#fff;text-align:center;font-size:14px;box-shadow:0 8px 30px rgba(0,0,0,.25);';
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.style.display = 'block';
    clearTimeout(window.__ttsWarningTimer);
    window.__ttsWarningTimer = setTimeout(() => { toast.style.display = 'none'; }, 3500);
}

// text: mütləq hərəkəli (harakatlı) orijinal mətn ötürülməlidir.
async function speakArabic(text) {
    if (!text) return;

    const nativePlugin = getTextToSpeechPlugin();
    if (nativePlugin) {
        try {
            // Əvvəlki danışığı dayandır ki, sürətli kliklərdə növbə yaranmasın.
            if (typeof nativePlugin.stop === 'function') {
                try { await nativePlugin.stop(); } catch (_) {}
            }

            let lang = await getSupportedArabicNativeLanguage(nativePlugin);

            if (!lang) {
                // Ərəb səs paketi quraşdırılmayıbsa Android-in TTS quraşdırma ekranını aç.
                if (typeof nativePlugin.openInstall === 'function') {
                    try {
                        await nativePlugin.openInstall();
                        showTtsWarning('Ərəb səs paketi tapılmadı. Açılan TTS bölməsindən ərəb dili/səsini quraşdırın.');
                    } catch (_) {
                        showTtsWarning('Ərəb səs paketi tapılmadı. Telefonun TTS ayarlarından ərəb dilini quraşdırın.');
                    }
                } else {
                    showTtsWarning('Ərəb səs paketi tapılmadı. Telefonun TTS ayarlarından ərəb dilini quraşdırın.');
                }
                return;
            }

            await nativePlugin.speak({
                text: text,
                lang: lang,
                rate: 0.85,
                pitch: 1.0,
                volume: 1.0,
                queueStrategy: 0,
                category: 'ambient'
            });
            return;
        } catch (e) {
            console.error('Native Arabic TTS xətası:', e);
            showTtsWarning('Səsləndirmə alınmadı. Telefonun TTS mühərrikində ərəb dili/səsinin aktiv olduğuna əmin olun.');
            return;
        }
    }

    // Brauzer/PWA fallback.
    if (typeof speechSynthesis !== 'undefined') {
        try {
            speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'ar-SA';
            const arVoice = pickArabicWebVoice();
            if (!arVoice) {
                showTtsWarning('Brauzerdə ərəb səsi tapılmadı.');
                return;
            }
            utterance.voice = arVoice;
            utterance.rate = 0.85;
            utterance.pitch = 1.0;
            utterance.volume = 1.0;
            speechSynthesis.speak(utterance);
        } catch (e) {
            console.error('Web Arabic TTS xətası:', e);
            showTtsWarning('Səsləndirmə alınmadı.');
        }
    } else {
        showTtsWarning('Bu cihazda mətn səsləndirməsi dəstəklənmir.');
    }
}

function speakArabicFromEvent(event, text) {
    if (event) event.stopPropagation();
    void speakArabic(text);
}

// ==================== TƏLƏFFÜZ YOXLAMASI (MİKROFON) ====================
function getSpeechRecognitionPlugin() {
    if (!isCapacitorApp()) return null;
    return (window.Capacitor.Plugins && window.Capacitor.Plugins.SpeechRecognition) || null;
}

async function checkPronunciation(targetText, feedbackElId, event) {
    if (event) event.stopPropagation();
    const feedbackEl = document.getElementById(feedbackElId);
    const plugin = getSpeechRecognitionPlugin();

    if (!plugin) {
        if (feedbackEl) feedbackEl.innerHTML = '<span class="warning">Bu funksiya yalnız quraşdırılmış tətbiqdə (APK) işləyir.</span>';
        return;
    }

    try {
        const availability = await plugin.available();
        if (!availability || !availability.available) {
            if (feedbackEl) feedbackEl.innerHTML = '<span class="warning">Bu telefonda nitq tanıma xidməti yoxdur.</span>';
            return;
        }

        let permStatus = await plugin.checkPermissions();
        if (permStatus.speechRecognition !== 'granted') {
            permStatus = await plugin.requestPermissions();
        }
        if (permStatus.speechRecognition !== 'granted') {
            if (feedbackEl) feedbackEl.innerHTML = '<span class="error">Mikrofon icazəsi verilmədi. Ayarlar → Tətbiqlər → Hər Gün Ərəbcə → İcazələr bölməsindən aça bilərsiniz.</span>';
            return;
        }

        if (feedbackEl) feedbackEl.innerHTML = '<span class="warning">🎤 Dinləyir... indi tələffüz edin</span>';

        const result = await plugin.start({
            language: 'ar-SA',
            maxResults: 3,
            partialResults: false,
            popup: false
        });

        const matches = (result && result.matches) || [];
        if (matches.length === 0) {
            if (feedbackEl) feedbackEl.innerHTML = '<span class="warning">Heç nə eşidilmədi, yenidən cəhd edin.</span>';
            return;
        }

        const normalizedTarget = normalizeArabic(targetText);
        const exactMatch = matches.find(m => normalizeArabic(m) === normalizedTarget);

        if (exactMatch) {
            if (feedbackEl) feedbackEl.innerHTML = '<span class="success">✅ Əla! Düzgün tələffüz etdiniz.</span>';
        } else {
            if (feedbackEl) feedbackEl.innerHTML = `<span class="error">❌ Bir az fərqli səsləndi.</span><div class="correct-answer-box"><span class="text-white-75" style="font-size:0.85rem;">Eşidilən:</span><p class="arabic-text">${matches[0]}</p></div>`;
        }
    } catch (e) {
        if (feedbackEl) feedbackEl.innerHTML = '<span class="error">Xəta baş verdi, yenidən cəhd edin.</span>';
    }
}

function getNotificationSupportInfo() {
    const capacitor = isCapacitorApp();
    const hasNotificationApi = typeof Notification !== 'undefined';
    const hasServiceWorker = typeof navigator !== 'undefined' && 'serviceWorker' in navigator;
    // Capacitor-da real native bildiriş imkanı brauzer API-sindən asılı deyil
    return { capacitor, hasNotificationApi: capacitor || hasNotificationApi, hasServiceWorker };
}

async function showLocalNotification(message) {
    const plugin = getLocalNotificationsPlugin();
    if (plugin) {
        try {
            await plugin.schedule({
                notifications: [{
                    id: 999,
                    title: 'Hər Gün Ərəbcə',
                    body: message,
                    schedule: { at: new Date(Date.now() + 1000) }
                }]
            });
        } catch (e) {
            // native bildiriş göstərilə bilmədi
        }
        return;
    }

    const { hasNotificationApi, hasServiceWorker } = getNotificationSupportInfo();
    if (!hasNotificationApi || typeof Notification === 'undefined' || Notification.permission !== 'granted') return;
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

// Native (Capacitor) rejimdə hər gün eyni saatda TƏKRARLANAN bildiriş qur —
// bu, tətbiq tam bağlı olsa belə Android sistemi tərəfindən işə salınır
async function scheduleNativeDailyReminder() {
    const plugin = getLocalNotificationsPlugin();
    if (!plugin) return;
    const [h, m] = (notificationSettings.time || '19:00').split(':').map(Number);
    const msg = REMINDER_MESSAGES[Math.floor(Math.random() * REMINDER_MESSAGES.length)];
    try {
        await plugin.cancel({ notifications: [{ id: 1 }] });
        await plugin.schedule({
            notifications: [{
                id: 1,
                title: 'Hər Gün Ərəbcə',
                body: msg,
                schedule: { on: { hour: h, minute: m }, repeats: true }
            }]
        });
    } catch (e) {
        // Planlaşdırma alınmadı
    }
}

async function cancelNativeDailyReminder() {
    const plugin = getLocalNotificationsPlugin();
    if (!plugin) return;
    try {
        await plugin.cancel({ notifications: [{ id: 1 }] });
    } catch (e) {
        // -
    }
}

async function registerPeriodicReminder() {
    // Yalnız veb (brauzer/PWA) mühiti üçün — Capacitor-da native planlaşdırma istifadə olunur
    try {
        if (isCapacitorApp() || !('serviceWorker' in navigator)) return;
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
    const plugin = getLocalNotificationsPlugin();

    if (plugin) {
        try {
            const result = await plugin.requestPermissions();
            const granted = result && result.display === 'granted';
            notificationSettings.enabled = granted;
            notificationSettings.nativePermissionGranted = granted;
            if (granted) {
                notificationSettings.time = time || notificationSettings.time;
                saveNotificationSettings();
                await scheduleNativeDailyReminder();
            } else {
                saveNotificationSettings();
            }
        } catch (e) {
            notificationSettings.enabled = false;
            saveNotificationSettings();
        }
        showSettingsSection();
        return;
    }

    const { hasNotificationApi } = getNotificationSupportInfo();
    if (!hasNotificationApi || typeof Notification === 'undefined') {
        notificationSettings.enabled = false;
        saveNotificationSettings();
        showSettingsSection();
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
    showSettingsSection();
}

function disableNotifications() {
    notificationSettings.enabled = false;
    saveNotificationSettings();
    cancelNativeDailyReminder();
    showSettingsSection();
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
    if (notificationSettings.enabled) {
        scheduleNativeDailyReminder();
    }
    showSettingsSection();
}

function sendTestNotification() {
    const plugin = getLocalNotificationsPlugin();
    if (plugin) {
        showLocalNotification('Bu bir sınaq bildirişidir 👋');
        return;
    }
    const { hasNotificationApi } = getNotificationSupportInfo();
    if (!hasNotificationApi || typeof Notification === 'undefined') {
        alert('Bu mühit bildirişləri dəstəkləmir.');
        return;
    }
    if (Notification.permission === 'granted') {
        showLocalNotification('Bu bir sınaq bildirişidir 👋');
    } else {
        enableNotifications(notificationSettings.time);
    }
}

function maybeShowDailyReminder() {
    // Capacitor-da bildiriş artıq native sistem tərəfindən planlaşdırılıb, bura ehtiyac yoxdur
    if (isCapacitorApp()) return;

    const { hasNotificationApi } = getNotificationSupportInfo();
    if (!hasNotificationApi || typeof Notification === 'undefined' || !notificationSettings.enabled) return;
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


function renderSettingsCardHtml() {
    const percentLabel = Math.round(arabicFontScale * 100) + '%';
    return `
        <div class="notif-card">
            <h3 class="font-semibold mb-2">🔤 Görünüş və oxu</h3>
            <div class="notif-row">
                <span class="text-white-75">Ərəb şrifti ölçüsü</span>
                <span id="arabic-scale-label" class="text-white-75">${percentLabel}</span>
            </div>
            <input type="range" min="0.8" max="1.6" step="0.05" value="${arabicFontScale}" style="width:100%; margin-bottom: 6px;" oninput="onArabicFontSliderChange(this)">
            <p class="arabic-text text-2xl text-center mb-3" style="direction: rtl;">أَجَابَ</p>
            <div class="notif-row">
                <span class="text-white-75">👁️ Hərəkəsiz oxu rejimi</span>
                <label class="switch">
                    <input type="checkbox" ${hideHarakat ? 'checked' : ''} onchange="toggleHideHarakatSetting(this)">
                    <span class="slider-toggle"></span>
                </label>
            </div>
            <p class="notif-status">Aktiv olanda hərəkələr (fəthə, kəsrə, damma) gizlədilir — orta/yuxarı səviyyə üçün faydalıdır.</p>
        </div>
    `;
}

function renderNotificationCardHtml() {
    const { capacitor, hasNotificationApi } = getNotificationSupportInfo();
    let permission;
    if (capacitor) {
        permission = notificationSettings.nativePermissionGranted ? 'granted'
            : (notificationSettings.nativePermissionGranted === false ? 'denied' : 'default');
    } else {
        permission = hasNotificationApi && typeof Notification !== 'undefined' ? Notification.permission : 'unsupported';
    }
    const checked = notificationSettings.enabled && permission === 'granted' ? 'checked' : '';
    const isDisabled = !hasNotificationApi || permission === 'denied';

    let statusText = '';
    if (!hasNotificationApi) {
        statusText = 'Bu mühit bildirişləri dəstəkləmir.';
    } else if (permission === 'denied') {
        statusText = capacitor
            ? 'Bildirişlərə icazə verilməyib. Telefonun Ayarlar → Tətbiqlər → Hər Gün Ərəbcə → Bildirişlər bölməsindən icazəni aça bilərsiniz.'
            : 'Bildirişlərə icazə verilməyib. Brauzer ayarlarından sayt icazələrini dəyişməlisiniz.';
    } else if (notificationSettings.enabled) {
        statusText = capacitor
            ? `Hər gün ${notificationSettings.time} vaxtı Android sistemi tərəfindən etibarlı bildiriş göndəriləcək (tətbiq bağlı olsa belə).`
            : `Hər gün ~${notificationSettings.time} vaxtı xatırlatma göndəriləcək (tətbiq açıq və ya bəzi telefonlarda arxa fonda olduqda). Zəmanətli deyil, brauzer dəstəyindən asılıdır.`;
    } else {
        statusText = 'Xatırlatmaları aktiv etmək üçün düyməni açın.';
    }

    return `
        <div class="notif-card">
            <h3 class="font-semibold mb-2">🔔 Günlük xatırlatma</h3>
            <div class="notif-row">
                <span class="text-white-75">Bildirişlər</span>
                <label class="switch">
                    <input type="checkbox" ${checked} ${isDisabled ? 'disabled' : ''} onchange="onNotificationToggle(this)">
                    <span class="slider-toggle"></span>
                </label>
            </div>
            <div class="notif-row">
                <span class="text-white-75">Xatırlatma vaxtı</span>
                <input type="time" id="notif-time-input" class="notif-time-input" value="${notificationSettings.time}" onchange="saveNotificationTime()" ${isDisabled ? 'disabled' : ''}>
            </div>
            <p class="notif-status">${statusText}</p>
            <button class="glass-button notif-test-btn" onclick="sendTestNotification()" ${isDisabled ? 'disabled' : ''}>Sınaq bildirişi göndər</button>
        </div>
    `;
}

// ==================== EVENT LISTENERS ====================
document.getElementById('btn-vocab').addEventListener('click', () => showVocabModeSelect());
document.getElementById('btn-dialogues').addEventListener('click', () => showDialoguesSection());
document.getElementById('btn-tests').addEventListener('click', () => showTestModeSelect());
document.getElementById('btn-flashcards').addEventListener('click', () => showFlashcardModeSelect());
document.getElementById('btn-writing').addEventListener('click', () => showWritingSection(0));
document.getElementById('btn-stats').addEventListener('click', () => showStatsSection());
document.getElementById('theme-toggle-btn').addEventListener('click', () => toggleTheme());
document.getElementById('settings-toggle-btn').addEventListener('click', () => showSettingsSection());

// Başlanğıcda: temanı tətbiq et, versiyanı göstər, seriyanı yenilə, nişanları yoxla, ana menyunu göstər
initTheme();
applyArabicFontScale();
initVersionTag();
updateStreakOnVisit();
checkBadges();
showMainMenu();
initNativeBackButton();
hideSplashScreen();

// Offline istifadə üçün Service Worker qeydiyyatı (yalnız veb/PWA mühitində — native Capacitor tətbiqinə lazım deyil)
if (!isCapacitorApp() && typeof navigator !== 'undefined' && 'serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').catch(() => {
            // Qeydiyyat alınmasa (məs. fayl protokolu ilə açılıbsa) tətbiq normal işləməyə davam edir
        });
    });
}

// Günlük bildiriş:
// - Capacitor (native APK): aktivdirsə, planı Android sisteminə yenidən tanıdırıq (məs. tətbiq yenilənəndən sonra)
// - Veb/PWA: yüklənəndə yoxla, açıq qalarsa hər dəqiqə yenidən yoxla, arxa fon sinxronizasiyasını qeydə al
if (isCapacitorApp()) {
    if (notificationSettings.enabled) {
        scheduleNativeDailyReminder();
    }
} else {
    maybeShowDailyReminder();
    if (typeof window !== 'undefined' && window.setInterval) {
        window.setInterval(maybeShowDailyReminder, 60000);
    }
    if (notificationSettings.enabled) {
        registerPeriodicReminder();
    }
}
