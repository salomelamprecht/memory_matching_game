let introduction = document.querySelector('#introduction');
let gameCounters = document.querySelector('#gameCounters');

function intro() {
  let heading = document.createElement('h1');
  heading.setAttribute('class', 'text-center');
  heading.textContent = 'Memory Matching Game';
  introduction.appendChild(heading);

  let themeParentDiv = document.createElement('div');
  themeParentDiv.setAttribute('class', 'container text-center');
  themeParentDiv.setAttribute('id', 'theme-options');
  introduction.appendChild(themeParentDiv);

  let themeDiv = document.createElement('div');
  themeDiv.setAttribute('class', 'text-center theme');
  themeParentDiv.appendChild(themeDiv);

  let themeHeading = document.createElement('h2');
  themeHeading.textContent = 'Select your theme below';
  themeDiv.appendChild(themeHeading);

  let princessesBtn = document.createElement('button');
  princessesBtn.setAttribute('class', 'btn btn-danger princesses');
  princessesBtn.textContent = 'Princesses';
  themeDiv.appendChild(princessesBtn);

  let miningBtn = document.createElement('button');
  miningBtn.setAttribute('class', 'btn btn-warning mining');
  miningBtn.textContent = 'Mining';
  themeDiv.appendChild(miningBtn);

  let alphabetNumberBtn = document.createElement('button');
  alphabetNumberBtn.setAttribute('class', 'btn btn-success alphabetNumber');
  alphabetNumberBtn.textContent = 'Letters & Numbers';
  themeDiv.appendChild(alphabetNumberBtn);

  let shapesBtn = document.createElement('button');
  shapesBtn.setAttribute('class', 'btn btn-primary shapes');
  shapesBtn.textContent = 'Shapes';
  themeDiv.appendChild(shapesBtn);

  let wireframesBtn = document.createElement('button');
  wireframesBtn.setAttribute('class', 'btn btn-light wireframes');
  wireframesBtn.textContent = 'Wireframes';
  themeDiv.appendChild(wireframesBtn);

  let playInstructionsDiv = document.createElement('div');
  playInstructionsDiv.setAttribute(
    'class',
    'container text-center play-instructions'
  );
  playInstructionsDiv.style.display = 'none';
  themeParentDiv.appendChild(playInstructionsDiv);

  let instructionTxt = document.createElement('p');
  instructionTxt.textContent =
    'Your timer has started Pick 2 cards. If your 2 cards match, pick another 2 cards! Continue selecting cards until you have matched them all! Have FUN!';
  playInstructionsDiv.appendChild(instructionTxt);

  let difficultyDiv = document.createElement('div');
  difficultyDiv.setAttribute('class', 'container text-center difficulty');
  difficultyDiv.style.display = 'none';
  themeParentDiv.appendChild(difficultyDiv);

  let chooseDiffDiv = document.createElement('div');
  chooseDiffDiv.setAttribute('class', 'chooseDiffDiv');
  difficultyDiv.appendChild(chooseDiffDiv);

  let diffHeading = document.createElement('h2');
  diffHeading.textContent = 'Choose the game difficulty';
  chooseDiffDiv.appendChild(diffHeading);

  let easyBtn = document.createElement('button');
  easyBtn.setAttribute('class', 'btn btn-success easy');
  easyBtn.textContent = 'Easy';
  chooseDiffDiv.appendChild(easyBtn);

  let mediumBtn = document.createElement('button');
  mediumBtn.setAttribute('class', 'btn btn-warning medium');
  mediumBtn.textContent = 'Medium';
  chooseDiffDiv.appendChild(mediumBtn);

  let hardBtn = document.createElement('button');
  hardBtn.setAttribute('class', 'btn btn-danger hard');
  hardBtn.textContent = 'hard';
  chooseDiffDiv.appendChild(hardBtn);

  let gameFunctions = document.createElement('div');
  gameFunctions.setAttribute('class', 'container text-center game-functions');
  gameFunctions.style.display = 'none';
  themeParentDiv.appendChild(gameFunctions);

  let quitBtn = document.createElement('button');
  quitBtn.setAttribute('class', 'btn btn-warning quit');
  quitBtn.textContent = 'Quit';
  gameFunctions.appendChild(quitBtn);
}

intro();

function gameCountersFunc() {
  let counterContainer = document.createElement('div');
  counterContainer.setAttribute('class', 'container text-center');
  gameCounters.appendChild(counterContainer);

  let highScoresBtn = document.createElement('button');
  highScoresBtn.setAttribute('class', 'btn btn-secondary');
  highScoresBtn.textContent = 'High Scores';
  highScoresBtn.addEventListener('click', function () {
    window.open('highscores.html');
  });
  counterContainer.appendChild(highScoresBtn);

  let countersDiv = document.createElement('div');
  countersDiv.setAttribute('class', 'counters');
  countersDiv.style.display = 'none';
  gameCounters.appendChild(countersDiv);

  let movesTimerdiv = document.createElement('div');
  movesTimerdiv.setAttribute('class', 'movesTimer');
  countersDiv.appendChild(movesTimerdiv);

  let movesEle = document.createElement('span');
  movesEle.setAttribute('class', 'moves');
  movesEle.textContent = '0 Move(s)';
  movesTimerdiv.appendChild(movesEle);

  let timeEle = document.createElement('span');
  timeEle.setAttribute('class', 'timer');
  timeEle.textContent = '0 Time Elapsed';
  movesTimerdiv.appendChild(timeEle);

  let scoringDiv = document.createElement('div');
  scoringDiv.setAttribute('class', 'scoring');
  countersDiv.appendChild(scoringDiv);

  let yourScoreEle = document.createElement('span');
  yourScoreEle.setAttribute('class', 'yourScore');
  yourScoreEle.textContent = 'Your Score: ';
  scoringDiv.appendChild(yourScoreEle);

  let nameEntryForm = document.createElement('form');
  countersDiv.appendChild(nameEntryForm);

  let formInput = document.createElement('input');
  formInput.type = 'text';
  formInput.name = 'username';
  formInput.setAttribute('id', 'username');
  formInput.placeholder = 'player name';
  nameEntryForm.appendChild(formInput);

  let scoreEasyBtn = document.createElement('button');
  scoreEasyBtn.setAttribute('class', 'btn btn-success');
  scoreEasyBtn.setAttribute('id', 'saveScoreBtnEasy');
  scoreEasyBtn.textContent = 'Save';
  nameEntryForm.appendChild(scoreEasyBtn);

  let scoreMedBtn = document.createElement('button');
  scoreMedBtn.setAttribute('class', 'btn btn-success');
  scoreMedBtn.setAttribute('id', 'saveScoreBtnMedium');
  scoreMedBtn.textContent = 'Save';
  nameEntryForm.appendChild(scoreMedBtn);

  let scoreHardBtn = document.createElement('button');
  scoreHardBtn.setAttribute('class', 'btn btn-success');
  scoreHardBtn.setAttribute('id', 'saveScoreBtnHard');
  scoreHardBtn.textContent = 'Save';
  nameEntryForm.appendChild(scoreHardBtn);
}

gameCountersFunc();
