import {getHTMLFromTemplate} from "./getHTMLFromTemplate";
import {generatedHeader} from "./header";
import {level2} from './data';

const levelGenreScreen = getHTMLFromTemplate(`<section class="main main--level main--level-genre">
  <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
    <circle
      cx="390" cy="390" r="370"
      class="timer-line"
      style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>
      ${generatedHeader.content.firstElementChild.outerHTML}
      ${generatedHeader.content.lastElementChild.outerHTML}
  <div class="main-wrap">
    ${level2.description}
    <form class="genre">
    ${[...level2.answers.entries()].map(([answer]) =>
    `<div class="genre-answer">${answer}</div>`).join(``)}
    <button class="genre-answer-send" type="submit">Ответить</button>
    </form>
  </div>
</section>`, `main--level-genre`);
export const switchToLevelGenreScreen = (mainSection) => {
  let currentScreen = levelGenreScreen.content.firstElementChild;
  mainSection.appendChild(currentScreen);
};
