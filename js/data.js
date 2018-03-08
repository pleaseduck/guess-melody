export const initialState = Object.freeze({
    minutes: `05`,
    seconds: `00`,
    mistakes : 0
});
export const state = {
  minutes: `05`,
  seconds: `00`,
  mistakes : 1
}
export const level1 = {
  description : `<h2 class="title main-title">Кто исполняет эту песню?</h2>
  <div class="player-wrapper">
    <div class="player">
      <audio></audio>
      <button class="player-control player-control--pause"></button>
      <div class="player-track">
        <span class="player-status"></span>
      </div>
    </div>
  </div>`,
  answers: new Set([
    `<input class="main-answer-r" type="radio" id="answer-1" name="answer" value="val-1"/>
    <label class="main-answer" for="answer-1">
      <img class="main-answer-preview" src="http://placehold.it/134x134"
           alt="Пелагея" width="134" height="134">
      Пелагея
    </label>`,
`<input class="main-answer-r" type="radio" id="answer-2" name="answer" value="val-2"/>
  <label class="main-answer" for="answer-2">
    <img class="main-answer-preview" src="http://placehold.it/134x134"
         alt="Краснознаменная дивизия имени моей бабушки" width="134" height="134">
    Краснознаменная дивизия имени моей бабушки
  </label>`,
`<input class="main-answer-r" type="radio" id="answer-3" name="answer" value="val-3"/>
  <label class="main-answer" for="answer-3">
    <img class="main-answer-preview" src="http://placehold.it/134x134"
         alt="Lorde" width="134" height="134">
    Lorde
  </label>`])
};
export const level2 = {
  description: `<h2 class="title">Выберите инди-рок треки</h2>`,
  answers: new Set([
    `<div class="player-wrapper">
      <div class="player">
        <audio></audio>
        <button class="player-control player-control--pause"></button>
        <div class="player-track">
          <span class="player-status"></span>
        </div>
      </div>
    </div>
    <input type="checkbox" name="answer" value="answer-1" id="a-1">
    <label class="genre-answer-check" for="a-1"></label>`,
    `<div class="player-wrapper">
      <div class="player">
        <audio></audio>
        <button class="player-control player-control--play"></button>
        <div class="player-track">
          <span class="player-status"></span>
        </div>
      </div>
    </div>
    <input type="checkbox" name="answer" value="answer-1" id="a-2">
    <label class="genre-answer-check" for="a-2"></label>`,
    `<div class="player-wrapper">
      <div class="player">
        <audio></audio>
        <button class="player-control player-control--play"></button>
        <div class="player-track">
          <span class="player-status"></span>
        </div>
      </div>
    </div>
    <input type="checkbox" name="answer" value="answer-1" id="a-3">
    <label class="genre-answer-check" for="a-3"></label>`,
    `<div class="player-wrapper">
      <div class="player">
        <audio></audio>
        <button class="player-control player-control--play"></button>
        <div class="player-track">
          <span class="player-status"></span>
        </div>
      </div>
    </div>
    <input type="checkbox" name="answer" value="answer-1" id="a-4">
    <label class="genre-answer-check" for="a-4"></label>`
  ])
};
