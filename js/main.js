import {switchToWelcomeScreen} from './welcomeScreen.js';
import {switchToLevelArtistScreen} from './levelArtistScreen.js';
import {switchToLevelGenreScreen} from './levelGenreScreen.js';
import {switchToResultScreen} from './resultScreen.js';
import {generatedHeader} from './header.js';
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
// export {mainSection};
