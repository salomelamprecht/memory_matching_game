// create score calculation function to keep track of scores
function scoreCalc() {
  // easy levels
  if (
    cardsArrayChosen.length === 10 &&
    cardsArrayChosen.length === cardsMatched.length * 2
  ) {
  let minimumMoves = 5;
  let minimumTime = 10;
  let seconds = (minute*60) + second;
  let score = Math.round(((minimumTime/seconds)*(minimumMoves/moves))*100);
    if (moves <= 10) {
      alert(
        `That was excellent, well done! It took you ${moves} moves, ${minute} mins and ${second} secs. Your score is ${score} out of a possible 100.`
      );
    }
    if (moves > 10 && moves <= 15) {
      alert(
        `That was great, well done! It took you ${moves} moves, ${minute} mins and ${second} secs. Your score is ${score} out of a possible 100.`
      );
    } else if (moves > 15) {
      alert(
        `You're doing well, but keep on practicing! It took you ${moves} moves, ${minute} mins and ${second} secs. Your score is ${score} out of a possible 100.`
      );
    }
  } 
  
  // medium levels
  if (
    cardsArrayChosen.length === 20 &&
    cardsArrayChosen.length === cardsMatched.length * 2
  ) {
  let minimumMoves = 10;
  let minimumTime = 45;
  let seconds = (minute*60) + second;
  let score = Math.round(((minimumTime/seconds)*(minimumMoves/moves))*100);
    if (moves <= 20) {
      alert(
        `That was excellent, well done! It took you ${moves} moves, ${minute} mins and ${second} secs. Your score is ${score} out of a possible 100.`
      );
    }
    if (moves > 20 && moves <= 30) {
      alert(
        `That was great, well done! It took you ${moves} moves, ${minute} mins and ${second} secs. Your score is ${score} out of a possible 100.`
      );
    } else if (moves > 30) {
      alert(
        `You're doing well, but keep on practicing! It took you ${moves} moves, ${minute} mins and ${second} secs. Your score is ${score} out of a possible 100.`
      );
    }
  }
  
  // hard levels
  if (
    cardsArrayChosen.length === 30 &&
    cardsArrayChosen.length === cardsMatched.length * 2
  ) {
    let minimumMoves = 20;
  let minimumTime = 50;
  let seconds = (minute*60) + second;
  let score = Math.round(((minimumTime/seconds)*(minimumMoves/moves))*100);
    if (moves <= 30) {
      alert(
        `That was excellent, well done! It took you ${moves} moves, ${minute} mins and ${second} secs. Your score is ${score} out of a possible 100.`
      );
    }
    if (moves > 30 && moves <= 45) {
      alert(
        `That was great, well done! It took you ${moves} moves, ${minute} mins and ${second} secs. Your score is ${score} out of a possible 100.`
      );
    } else if (moves > 45) {
      alert(
        `You're doing well, but keep on practicing! It took you ${moves} moves, ${minute} mins and ${second} secs. Your score is ${score} out of a possible 100.`
      );
    }
  }
}