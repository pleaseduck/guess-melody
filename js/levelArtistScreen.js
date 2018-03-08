import {getHTMLFromTemplate} from "./getHTMLFromTemplate";
import {generatedHeader} from "./header";
import {level1} from './data';

const levelArtistScreen = getHTMLFromTemplate(`<section class="main main--level main--level-artist">
  <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
    <circle
      cx="390" cy="390" r="370"
      class="timer-line"
      style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>
      ${generatedHeader.content.firstElementChild.outerHTML}
      ${generatedHeader.content.lastElementChild.outerHTML}
  <div class="main-wrap">
    ${level1.description}
    <form class="main-list">
      ${[...level1.answers.entries()].map(([answer]) =>
      `<div class="main-answer-wrapper">${answer}</div>`).join(``)}
    </form>
  </div>
</section>`, `main--level-artist`);

export const switchToLevelArtistScreen = (mainSection) => {
  let currentScreen = levelArtistScreen.content.firstElementChild;
  console.log(currentScreen);
  mainSection.appendChild(currentScreen);
};
