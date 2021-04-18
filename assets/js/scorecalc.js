// SCORING
// create score calculation function to keep track of scores
function scoreCalc() {
  document.querySelector('#username').style.display = 'inline';
  // easy levels
  if (
    cardsArrayChosen.length === 10 &&
    cardsArrayChosen.length === cardsMatched.length * 2
  ) {
    let minimumMoves = 5;
    let minimumTime = 10;
    let seconds = minute * 60 + second;
    let score = Math.round(
      (minimumTime / seconds) * (minimumMoves / moves) * 100
    );
    saveScoreBtnEasy.show();
    if (moves <= 5) {
      swal({
        text: `That was excellent, well done! It took you ${moves} moves, ${minute} mins and ${
          second - 1
        } secs. Your score is 100 out of a possible 100.\nPlease enter your name below and click save to see if you've made it to the High Scores list!`,
        icon: 'success',
      });
      yourScore.innerHTML = `Your Score: ${score}`;
      localStorage.setItem('lastScoreEasy', score);
    }
    if (moves > 5 && moves <= 10) {
      swal({
        text: `That was great, well done! It took you ${moves} moves, ${minute} mins and ${
          second - 1
        } secs. Your score is ${score} out of a possible 100.\nPlease enter your name below and click save to see if you've made it to the High Scores list!`,
        icon: 'success',
      });
      yourScore.innerHTML = `Your Score: ${score}`;
      localStorage.setItem('lastScoreEasy', score);
    }
    if (moves > 10 && moves <= 15) {
      swal({
        text: `That was good, well done! It took you ${moves} moves, ${minute} mins and ${
          second - 1
        } secs. Your score is ${score} out of a possible 100.\nPlease enter your name below and click save to see if you've made it to the High Scores list!`,
        icon: 'success',
      });
      yourScore.innerHTML = `Your Score: ${score}`;
      localStorage.setItem('lastScoreEasy', score);
    } else if (moves > 15) {
      swal({
        text: `You're doing well, but keep on practicing! It took you ${moves} moves, ${minute} mins and ${
          second - 1
        } secs. Your score is ${score} out of a possible 100.\nPlease enter your name below and click save to see if you've made it to the High Scores list!`,
        icon: 'success',
      });
      yourScore.innerHTML = `Your Score: ${score}`;
      localStorage.setItem('lastScoreEasy', score);
    }
  }

  // medium levels
  if (
    cardsArrayChosen.length === 20 &&
    cardsArrayChosen.length === cardsMatched.length * 2
  ) {
    let minimumMoves = 10;
    let minimumTime = 45;
    let seconds = minute * 60 + second;
    let score = Math.round(
      (minimumTime / seconds) * (minimumMoves / moves) * 100
    );
    saveScoreBtnMedium.show();
    if (moves <= 10) {
      swal({
        text: `That was excellent, well done! It took you ${moves} moves, ${minute} mins and ${
          second - 1
        } secs. Your score is 100 out of a possible 100.\nPlease enter your name below and click save to see if you've made it to the High Scores list!`,
        icon: 'success',
      });
      yourScore.innerHTML = `Your Score: ${score}`;
      localStorage.setItem('lastScoreMedium', score);
    }
    if (moves > 10 && moves <= 20) {
      swal({
        text: `That was great, well done! It took you ${moves} moves, ${minute} mins and ${
          second - 1
        } secs. Your score is ${score} out of a possible 100.\nPlease enter your name below and click save to see if you've made it to the High Scores list!`,
        icon: 'success',
      });
      yourScore.innerHTML = `Your Score: ${score}`;
      localStorage.setItem('lastScoreMedium', score);
    }
    if (moves > 20 && moves <= 30) {
      swal({
        text: `That was good, well done! It took you ${moves} moves, ${minute} mins and ${
          second - 1
        } secs. Your score is ${score} out of a possible 100.\nPlease enter your name below and click save to see if you've made it to the High Scores list!`,
        icon: 'success',
      });
      yourScore.innerHTML = `Your Score: ${score}`;
      localStorage.setItem('lastScoreMedium', score);
    } else if (moves > 30) {
      swal({
        text: `You're doing well, but keep on practicing! It took you ${moves} moves, ${minute} mins and ${
          second - 1
        } secs. Your score is ${score} out of a possible 100.\nPlease enter your name below and click save to see if you've made it to the High Scores list!`,
        icon: 'success',
      });
      yourScore.innerHTML = `Your Score: ${score}`;
      localStorage.setItem('lastScoreMedium', score);
    }
  }

  // hard levels
  if (
    cardsArrayChosen.length === 30 &&
    cardsArrayChosen.length === cardsMatched.length * 2
  ) {
    let minimumMoves = 20;
    let minimumTime = 50;
    let seconds = minute * 60 + second;
    let score = Math.round(
      (minimumTime / seconds) * (minimumMoves / moves) * 100
    );
    saveScoreBtnHard.show();
    if (moves <= 20) {
      swal({
        text: `That was excellent, well done! It took you ${moves} moves, ${minute} mins and ${
          second - 1
        } secs. Your score is 100 out of a possible 100.\nPlease enter your name below and click save to see if you've made it to the High Scores list!`,
        icon: 'success',
      });
      yourScore.innerHTML = `Your Score: ${score}`;
      localStorage.setItem('lastScoreHard', score);
    }
    if (moves > 20 && moves <= 30) {
      swal({
        text: `That was great, well done! It took you ${moves} moves, ${minute} mins and ${
          second - 1
        } secs. Your score is ${score} out of a possible 100.\nPlease enter your name below and click save to see if you've made it to the High Scores list!`,
        icon: 'success',
      });
      yourScore.innerHTML = `Your Score: ${score}`;
      localStorage.setItem('lastScoreHard', score);
    }
    if (moves > 30 && moves <= 45) {
      swal({
        text: `That was good, well done! It took you ${moves} moves, ${minute} mins and ${
          second - 1
        } secs. Your score is ${score} out of a possible 100.\nPlease enter your name below and click save to see if you've made it to the High Scores list!`,
        icon: 'success',
      });
      yourScore.innerHTML = `Your Score: ${score}`;
      localStorage.setItem('lastScoreHard', score);
    } else if (moves > 45) {
      swal({
        text: `You're doing well, but keep on practicing! It took you ${moves} moves, ${minute} mins and ${
          second - 1
        } secs. Your score is ${score} out of a possible 100.\nPlease enter your name below and click save to see if you've made it to the High Scores list!`,
        icon: 'success',
      });
      yourScore.innerHTML = `Your Score: ${score}`;
      localStorage.setItem('lastScoreHard', score);
    }
  }
}

// save scores to local storage
const saveScoreBtnEasy = $('#saveScoreBtnEasy').hide();
const saveScoreBtnMedium = $('#saveScoreBtnMedium').hide();
const saveScoreBtnHard = $('#saveScoreBtnHard').hide();

// if no high scores available then set the local storage to an empty array
const highScoresEasy = JSON.parse(localStorage.getItem('highScoresEasy')) || [];
const highScoresMedium = JSON.parse(localStorage.getItem('highScoresMedium')) || [];
const highScoresHard = JSON.parse(localStorage.getItem('highScoresHard')) || [];
// last score and username entered and store in local storage
// function saveHighScores() {
function highScoresEasyFunc() {
  const lastScoreEasy = JSON.parse(localStorage.getItem('lastScoreEasy'));
  const myScores = {
    score: lastScoreEasy,
    inputname: document.getElementById('username').value,
  };
  localStorage.setItem('name', username.value);
  highScoresEasy.push(myScores);
  // sort the high scores into highest scores first to a max of 10 scores
  highScoresEasy.sort((a, b) => b.score - a.score);
  highScoresEasy.splice(10);
  localStorage.setItem('highScoresEasy', JSON.stringify(highScoresEasy));
}
document
  .getElementById('saveScoreBtnEasy')
  .addEventListener('click', highScoresEasyFunc);

function highScoresMediumFunc() {
  const lastScoreMedium = JSON.parse(localStorage.getItem('lastScoreMedium'));
  const myScores = {
    score: lastScoreMedium,
    inputname: document.getElementById('username').value,
  };
  localStorage.setItem('name', username.value);
  highScoresMedium.push(myScores);
  // sort the high scores into highest scores first to a max of 10 scores
  highScoresMedium.sort((a, b) => b.score - a.score);
  highScoresMedium.splice(10);
  localStorage.setItem('highScoresMedium', JSON.stringify(highScoresMedium));
}
document
  .getElementById('saveScoreBtnMedium')
  .addEventListener('click', highScoresMediumFunc);

function highScoresHardFunc() {
  const lastScoreHard = JSON.parse(localStorage.getItem('lastScoreHard'));
  const myScores = {
    score: lastScoreHard,
    inputname: document.getElementById('username').value,
  };
  localStorage.setItem('name', username.value);
  highScoresHard.push(myScores);
  // sort the high scores into highest scores first to a max of 10 scores
  highScoresHard.sort((a, b) => b.score - a.score);
  highScoresHard.splice(10);
  localStorage.setItem('highScoresHard', JSON.stringify(highScoresHard));
}
document
  .getElementById('saveScoreBtnHard')
  .addEventListener('click', highScoresHardFunc);
