const highScoreListEasy = document.getElementById('highScoreListEasy');
const highScoresEasy = JSON.parse(localStorage.getItem('highScoresEasy')) || []; 

highScoreListEasy.innerHTML = highScoresEasy
  .map((score) => {
    return `<li class="high-score">${score.inputname} - ${score.score}</li>`;
  })
  .join('');

const highScoreListMedium = document.getElementById('highScoreListMedium');
const highScoresMedium = JSON.parse(localStorage.getItem('highScoresMedium')) || [];

highScoreListMedium.innerHTML = highScoresMedium
  .map((score) => {
    return `<li class="high-score">${score.inputname} - ${score.score}</li>`;
  })
  .join('');

const highScoreListHard = document.getElementById('highScoreListHard');
const highScoresHard = JSON.parse(localStorage.getItem('highScoresHard')) || [];

highScoreListHard.innerHTML = highScoresHard
  .map((score) => {
    return `<li class="high-score">${score.inputname} - ${score.score}</li>`;
  })
  .join('');