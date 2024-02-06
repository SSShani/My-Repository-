'use strict'

var gQuests
// Index of currently displayed question
var gCurrQuestIdx

function onInitGame() {
    gQuests = createQuests()
    gCurrQuestIdx = 0
    hideElement('.modal')
    renderQuest(gCurrQuestIdx);
}

function renderQuest() {
    const quest = gQuests[gCurrQuestIdx]

    const elH1 = document.querySelector('.quests h1')
    const elImg = document.querySelector('.quests img')
    elH1.innerText = quest.header
    elImg.src = `img/${gCurrQuestIdx + 1} `

    var btnsStrHTML = ``;
    const opts = quest.opts;
    for (var i = 0; i < opts.length; i++) {
        btnsStrHTML += `<button class="btn" onclick="checkAnswer(this, ${i})" >${opts[i]}</button>`;
    }
    const elQuests = document.querySelector('.quests .btns-container');
    elQuests.innerHTML = btnsStrHTML;
}

function checkAnswer(elBtn, optIdx) {
    console.log('optIdx:', optIdx)
    const correctAnsIdx = gQuests[gCurrQuestIdx].correctOptIdx;
    if (optIdx === correctAnsIdx) handleCorrectAnswer(elBtn);
    else handleWrongAnswer(elBtn);
}

function handleCorrectAnswer(elBtn) {
    elBtn.classList.add('correct-answer');
    if (gCurrQuestIdx === gQuests.length - 1) return victory();

    setTimeout(() => {
        elBtn.classList.remove('correct-answer');
        gCurrQuestIdx++;
        renderQuest();
    }, 1000);
}

function handleWrongAnswer(elBtn) {
    showElement('.try-again')
    elBtn.classList.add('wrong-answer');
    setTimeout(() => {
        elBtn.classList.remove('wrong-answer');
        hideElement('.try-again')
    }, 1000);
}

function victory() {
    // openModal();
    showElement('.modal')
}


function showElement(selector) {
    const el = document.querySelector(selector)
    el.classList.remove('hide')
}

function hideElement(selector) {
    const el = document.querySelector(selector)
    el.classList.add('hide')
}










function createQuests() {
    return [
        {
            id: 1,
            opts: ["green", "red", "purple"],
            correctOptIdx: 0,
            header: "What color is it?",
        },
        {
            id: 2,
            opts: ["yellow", "green", "white"],
            correctOptIdx: 2,
            header: "What color is it?",
        },
        {
            id: 3,
            opts: ["orange", "pink", "blue"],
            correctOptIdx: 1,
            header: "What color is it?",
        },
    
        {
        id: 4,
            opts: ["orange", "yellow", "black"],
            correctOptIdx: 1,
            header: "What color is it?",
        },
        {
            id: 4,
                opts: ["orange", "yellow", "black"],
                correctOptIdx: 0,
                header: "What color is it?",
            },
    ]
}