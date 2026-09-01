// app.js
// ==================== STATE ====================
let learnedVerbs = JSON.parse(localStorage.getItem('learnedVerbs') || '[]');
let learnedDialogues = JSON.parse(localStorage.getItem('learnedDialogues') || '[]');
let answeredQuestions = JSON.parse(localStorage.getItem('answeredQuestions') || '[]');

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

function continueLesson() {
    if (getNextUnlearnedVerb()) { showVerbsSection(); return; }
    if (getNextUnlearnedDialogue()) { showDialoguesSection(); return; }
    if (getNextUnansweredQuestion()) { showTestsSection(); return; }
    showStatsSection();
}

function getContinueLabel() {
    if (getNextUnlearnedVerb()) return '▶ Davam et: Feil öyrən';
    if (getNextUnlearnedDialogue()) return '▶ Davam et: Dialoq oxu';
    if (getNextUnansweredQuestion()) return '▶ Davam et: Test həll et';
    return '🎉 Hamısı tamamlandı! Statistikaya bax';
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
        <button class="glass-button continue-btn" onclick="continueLesson()">${getContinueLabel()}</button>
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

// ==================== UTILITY FUNCTIONS ====================
function saveLearnedVerbs() { localStorage.setItem('learnedVerbs', JSON.stringify(learnedVerbs)); }
function saveLearnedDialogues() { localStorage.setItem('learnedDialogues', JSON.stringify(learnedDialogues)); }
function saveAnsweredQuestions() { localStorage.setItem('answeredQuestions', JSON.stringify(answeredQuestions)); }

function getNextUnlearnedVerb() { return verbsData.find(v => !learnedVerbs.includes(v.id)) || null; }
function getNextUnlearnedDialogue() { return dialoguesData.find(d => !learnedDialogues.includes(d.id)) || null; }
function getNextUnansweredQuestion() { return questionsData.find(q => !answeredQuestions.includes(q.id)) || null; }

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

// ==================== RENDER FUNCTIONS ====================
function showMainMenu() {
    document.getElementById('content-area').innerHTML = '';
    document.getElementById('content-area').style.display = 'none';
    document.getElementById('main-menu').style.display = 'block';
    renderHomeStats();
}

// Feillər bölməsi
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
                <button onclick="showMainMenu()" class="close-btn">✕</button>
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

function navigateVerb(delta) {
    showVerbsSection(currentVerbIndex + delta);
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
        examplesHtml += `
            <div class="rounded-xl mb-2" style="background: rgba(255,255,255,0.05); padding: 12px;">
                <p class="arabic-text mb-1">${ex.arabic}</p>
                <p class="text-white-75" style="font-size: 0.875rem; direction: ltr; text-align: left;">${ex.translation}</p>
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
    dialogue.dialogue.forEach((line) => {
        dialogueHtml += `
            <div class="rounded-xl mb-2" style="background: rgba(255,255,255,0.05); padding: 12px;">
                <p class="arabic-text mb-1">${line.arabic}</p>
                <p class="dialogue-translation">${line.translation}</p>
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

// ==================== EVENT LISTENERS ====================
document.getElementById('btn-verbs').addEventListener('click', () => showVerbsSection());
document.getElementById('btn-dialogues').addEventListener('click', () => showDialoguesSection());
document.getElementById('btn-tests').addEventListener('click', () => showTestModeSelect());
document.getElementById('btn-stats').addEventListener('click', () => showStatsSection());

// Başlanğıcda: seriyanı yenilə, nişanları yoxla, ana menyunu göstər
updateStreakOnVisit();
checkBadges();
showMainMenu();
