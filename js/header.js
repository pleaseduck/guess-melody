import {getHTMLFromTemplate} from "./getHTMLFromTemplate";
import {initialState, state} from './data';


const headerTemplate = (state) => `<div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
    <span class="timer-value-mins">${state.minutes}</span><!--
    --><span class="timer-value-dots">:</span><!--
    --><span class="timer-value-secs">${state.seconds}</span>
  </div>
</svg>
<div class="main-mistakes">
  ${new Array(state.mistakes)
  .fill(`<img class="main-mistake" src="img/wrong-answer.png" width="35" height="49">`)
   .join(``)}
</div>`;

export let generatedHeader = getHTMLFromTemplate(headerTemplate(state), `game-stats`);
console.log(generatedHeader.content);
