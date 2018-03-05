import welcomeScreen from "./welcomeScreen";

let mainSection = document.querySelector(`.main`);

window.addEventListener(`load`, function () {
  mainSection.innerHtml = welcomeScreen;
});
