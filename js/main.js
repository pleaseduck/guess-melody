/*
let welcomeScreen = template.querySelector(`.main--welcome`);
let levelGenreScreen = template.querySelector(`.main--level-genre`);
let levelArtistScreen = template.querySelector(`.main--level-artist`);
let mainResultWin = template.querySelector(`.main--result--win`);
let mainResultTimeLeft = template.querySelector(`.main--result--timeLeft`);
let mainResultNoAttempts = template.querySelector(`.main--result--noattempts`);

let screenList = [welcomeScreen, levelGenreScreen, levelArtistScreen, mainResultWin, mainResultTimeLeft, mainResultNoAttempts];
*/
/* let showScreen = (number) => {
  let mainSection = document.querySelector(`.main`);
  if (mainSection.childElementCount === 0) {
  mainSection.appendChild(screenList[number - 1]).cloneNode(true);
} else {
  mainSection.removeChild(mainSection.firstChild);
  mainSection.appendChild(screenList[number - 1]).cloneNode(true);
};
};
showScreen(1); */

/* let leftPointerKeyCode = 37;
let rightPointerKeyCode = 39;
let screenCounter = 0;
document.addEventListener('keydown', function(evt) {
  evt = evt || window.event;
  if (evt.ctrlKey && evt.keyCode == leftPointerKeyCode) {
    if (screenCounter < screenList.length) {
      --screenCounter
      showScreen(screenCounter);
    } else {
      screenCounter = 0;
    };
  } else if (evt.ctrlKey && evt.keyCode == rightPointerKeyCode) {
    if (screenCounter < screenList.length) {
      ++screenCounter
      showScreen(screenCounter);
    } else {
      screenCounter = 0;
    };
  }

}); */

// import welcomeScreen from './welcomeScreen.js';
import switchToWelcomeScreen from './welcomeScreen.js';
import switchToLevelArtistScreen from './levelArtistScreen.js';
import switchToLevelGenreScreen from './levelGenreScreen.js';
import switchToResultScreen from './resultScreen.js'

let mainSection = document.querySelector(`.main`);

// let template = document.querySelector(`#templates`);

window.addEventListener(`load`, function () {
  switchToWelcomeScreen(mainSection);
  let playBtn = mainSection.querySelector(`.main-play`);

  playBtn.addEventListener(`click`, function () {
    mainSection.removeChild(mainSection.firstElementChild);
    switchToLevelArtistScreen(mainSection);
    let optionsField = document.querySelector(`.main-list`);

    optionsField.addEventListener(`click`, function (evt) {
      let target = evt.target;
      evt.preventDefault();
      if (target.classList.contains(`main-answer-preview`)) {
        mainSection.removeChild(mainSection.firstElementChild);
        switchToLevelGenreScreen(mainSection);
      }
      let answerBtn = mainSection.querySelector(`.genre-answer-send`);
      let inputList = mainSection.querySelectorAll(`input`);

      answerBtn.addEventListener(`click`, function (evt) {
        evt.preventDefault();
        if (inputList[0].checked === true || inputList[1].checked === true || inputList[2].checked === true || inputList[3].checked === true) {
          answerBtn.disabled = `false`;
          mainSection.removeChild(mainSection.firstElementChild);
          switchToResultScreen(mainSection);
          let playAgain = document.querySelector(`.main-replay`)
          playAgain.addEventListener(`click`, function () {
            window.location.reload();
          });
        }
      });

    });

  });

});
