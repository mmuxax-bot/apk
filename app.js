// app.js
// ==================== STATE ====================
let learnedVerbs = JSON.parse(localStorage.getItem('learnedVerbs') || '[]');
let learnedDialogues = JSON.parse(localStorage.getItem('learnedDialogues') || '[]');
let answeredQuestions = JSON.parse(localStorage.getItem('answeredQuestions') || '[]');

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
    learnedVerbs = [];
    learnedDialogues = [];
    answeredQuestions = [];
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

// ==================== RENDER FUNCTIONS ====================
function showMainMenu() {
    document.getElementById('content-area').innerHTML = '';
    document.getElementById('content-area').style.display = 'none';
    document.getElementById('main-menu').style.display = 'block';
}

// Feillər bölməsi
function showVerbsSection() {
    const verb = getNextUnlearnedVerb();
    const content = document.getElementById('content-area');
    content.style.display = 'block';
    document.getElementById('main-menu').style.display = 'none';

    if (!verb) {
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
            <div class="text-center mb-4">
                <p class="arabic-text text-4xl font-bold mb-2">${verb.arabic}</p>
                <p class="text-white-75 text-lg">${verb.meaning}</p>
            </div>
            <div class="mb-4">
                <h3 class="font-semibold mb-2">Formalar</h3>
                <div>${formsHtml}</div>
            </div>
            <button onclick="markVerbLearned(${verb.id})" class="glass-button py-3 font-bold text-lg">✓ Öyrəndim</button>
        </div>
    `;
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
                <button onclick="showVerbsSection()" class="close-btn">✕</button>
            </div>
            <div class="text-center mb-4">
                <p class="arabic-text text-3xl font-bold">${formData.arabic}</p>
                <p class="text-white-75">${verb.meaning} (${formData.translation})</p>
            </div>
            ${examplesHtml}
            <button onclick="showVerbsSection()" class="glass-button py-3 font-bold mt-3">Geri</button>
        </div>
    `;
}

function markVerbLearned(id) {
    if (!learnedVerbs.includes(id)) {
        learnedVerbs.push(id);
        saveLearnedVerbs();
    }
    showVerbsSection();
}

// Dialoqlar bölməsi
function showDialoguesSection() {
    const dialogue = getNextUnlearnedDialogue();
    const content = document.getElementById('content-area');
    content.style.display = 'block';
    document.getElementById('main-menu').style.display = 'none';

    if (!dialogue) {
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
            <div class="text-right mb-2">
                <button class="translation-toggle" onclick="toggleTranslations(this)">Tərcümələri gizlət</button>
            </div>
            <div class="mb-4">
                ${dialogueHtml}
            </div>
            <button onclick="markDialogueLearned(${dialogue.id})" class="glass-button py-3 font-bold text-lg">✓ Öyrəndim</button>
        </div>
    `;
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
    }
    showDialoguesSection();
}

// Testlər bölməsi
function showTestsSection() {
    const question = getNextUnansweredQuestion();
    const content = document.getElementById('content-area');
    content.style.display = 'block';
    document.getElementById('main-menu').style.display = 'none';

    if (!question) {
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

    if (question.type === 'choice') {
        let optionsHtml = '';
        question.options.forEach((opt, idx) => {
            optionsHtml += `
                <label class="option-label">
                    <input type="radio" name="q${question.id}" value="${idx}">
                    <span class="arabic-text text-lg">${opt}</span>
                </label>
            `;
        });
        content.innerHTML = `
            <div class="glass-card fade-in">
                <div class="flex-between mb-4">
                    <h2 class="text-xl font-bold">Test sualı</h2>
                    <button onclick="showMainMenu()" class="close-btn">✕</button>
                </div>
                <p class="text-lg mb-4">${question.question}</p>
                <div class="mb-4">${optionsHtml}</div>
                <button onclick="checkChoiceAnswer(${question.id})" class="glass-button py-3 font-bold">Cavabı yoxla</button>
                <div id="feedback-${question.id}" class="feedback"></div>
            </div>
        `;
    } else if (question.type === 'input') {
        content.innerHTML = `
            <div class="glass-card fade-in">
                <div class="flex-between mb-4">
                    <h2 class="text-xl font-bold">Boşluğu doldur</h2>
                    <button onclick="showMainMenu()" class="close-btn">✕</button>
                </div>
                <p class="text-lg mb-4">${question.question}</p>
                <input type="text" id="input-${question.id}" class="input-field mb-4" placeholder="Cavabınızı yazın" autocomplete="off">
                <button onclick="checkInputAnswer(${question.id})" class="glass-button py-3 font-bold">Cavabı yoxla</button>
                <div id="feedback-${question.id}" class="feedback"></div>
            </div>
        `;
    }
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
    if (selectedIdx === question.correct) {
        feedback.innerHTML = '<span class="success">✅ Düzgün!</span>';
        if (!answeredQuestions.includes(qid)) {
            answeredQuestions.push(qid);
            saveAnsweredQuestions();
        }
        setTimeout(() => showTestsSection(), 1200);
    } else {
        feedback.innerHTML = '<span class="error">❌ Səhvdir, yenidən cəhd edin.</span>';
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
        if (!answeredQuestions.includes(qid)) {
            answeredQuestions.push(qid);
            saveAnsweredQuestions();
        }
        setTimeout(() => showTestsSection(), 1200);
    } else {
        feedback.innerHTML = '<span class="error">❌ Səhvdir, yenidən cəhd edin.</span>';
    }
}

// ==================== EVENT LISTENERS ====================
document.getElementById('btn-verbs').addEventListener('click', showVerbsSection);
document.getElementById('btn-dialogues').addEventListener('click', showDialoguesSection);
document.getElementById('btn-tests').addEventListener('click', showTestsSection);

// Başlanğıcda ana menyunu göstər
showMainMenu();