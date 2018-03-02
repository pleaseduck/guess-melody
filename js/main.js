let template = document.getElementById(`templates`).content.cloneNode(true);

let welcomeScreen = template.querySelector(`.main--welcome`);
let levelGenreScreen = template.querySelector(`.main--level-genre`);
let levelArtistScreen = template.querySelector(`.main--level-artist`);
let mainResultWin = template.querySelector(`.main--result--win`);
let mainResultTimeLeft = template.querySelector(`.main--result--timeLeft`);
let mainResultNoAttempts = template.querySelector(`.main--result--noattempts`);

let screenList = [welcomeScreen, levelGenreScreen, levelArtistScreen, mainResultWin, mainResultTimeLeft, mainResultNoAttempts];

let showScreen = (number) => {
  let mainSection = document.querySelector(`.main`);
  if (mainSection.childElementCount === 0) {
  mainSection.appendChild(screenList[number - 1]).cloneNode(true);
} else {
  mainSection.removeChild(mainSection.firstChild);
  mainSection.appendChild(screenList[number - 1]).cloneNode(true);
};
};
showScreen(1);

let leftPointerKeyCode = 37;
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

})
// <- 37
// -> 39
