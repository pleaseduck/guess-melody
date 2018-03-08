import getHTMLFromTemplate from "./getHTMLFromTemplate";

const welcomeScreen = getHTMLFromTemplate(`<section class="main main--welcome">
  <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
  <button class="main-play">Начать игру</button>
  <h2 class="title main-title">Правила игры</h2>
  <p class="text main-text">
    Правила просты&nbsp;— за&nbsp;5 минут ответить на все вопросы.<br>
    Ошибиться можно 3 раза.<br>
    Удачи!
  </p>
</section>`, `main--welcome`);
let currentScreen = welcomeScreen.content.firstElementChild;
const switchToWelcomeScreen = (mainSection) => {
    console.log(welcomeScreen);
  mainSection.appendChild(currentScreen);
};

export default switchToWelcomeScreen;
