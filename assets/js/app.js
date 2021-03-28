const grid = $('.grid').hide();
const counters = $('.counters').hide();
const gameFunctions = $('.game-functions').hide();
const levels = $('.difficulty').hide();
let movesText = document.querySelector('.moves');
let moves = 0;
let second = 0,
  minute = 0;
let timer = document.querySelector('.timer');
let interval;

// create global variable for chosen theme and difficulty array
let cardsArrayChosen = [];

// Arrays
cardsSelected = [];
cardsSelectedId = [];
cardsMatched = [];

// create theme arrays easy to hard
// princess theme
const princessCardsArrayEasy = [
  {
    name: 'princess1',
    img: 'assets/img/princesses/princess1.png',
  },
  {
    name: 'princess1',
    img: 'assets/img/princesses/princess1.png',
  },
  {
    name: 'princess2',
    img: 'assets/img/princesses/princess2.png',
  },
  {
    name: 'princess2',
    img: 'assets/img/princesses/princess2.png',
  },
  {
    name: 'princess3',
    img: 'assets/img/princesses/princess3.png',
  },
  {
    name: 'princess3',
    img: 'assets/img/princesses/princess3.png',
  },
  {
    name: 'princess4',
    img: 'assets/img/princesses/princess4.png',
  },
  {
    name: 'princess4',
    img: 'assets/img/princesses/princess4.png',
  },
  {
    name: 'princess5',
    img: 'assets/img/princesses/princess5.png',
  },
  {
    name: 'princess5',
    img: 'assets/img/princesses/princess5.png',
  },
];
const princessCardsArrayMedium = [
  ...princessCardsArrayEasy,
  {
    name: 'dress1',
    img: 'assets/img/princesses/dress1.png',
  },
  {
    name: 'dress1',
    img: 'assets/img/princesses/dress1.png',
  },
  {
    name: 'dress2',
    img: 'assets/img/princesses/dress2.png',
  },
  {
    name: 'dress2',
    img: 'assets/img/princesses/dress2.png',
  },
  {
    name: 'dress3',
    img: 'assets/img/princesses/dress3.png',
  },
  {
    name: 'dress3',
    img: 'assets/img/princesses/dress3.png',
  },
  {
    name: 'dress4',
    img: 'assets/img/princesses/dress4.png',
  },
  {
    name: 'dress4',
    img: 'assets/img/princesses/dress4.png',
  },
  {
    name: 'dress5',
    img: 'assets/img/princesses/dress5.png',
  },
  {
    name: 'dress5',
    img: 'assets/img/princesses/dress5.png',
  },
];
const princessCardsArrayHard = [
  ...princessCardsArrayMedium,
  {
    name: 'hand-mirror',
    img: 'assets/img/princesses/hand-mirror.png',
  },
  {
    name: 'hand-mirror',
    img: 'assets/img/princesses/hand-mirror.png',
  },
  {
    name: 'frog',
    img: 'assets/img/princesses/frog.png',
  },
  {
    name: 'frog',
    img: 'assets/img/princesses/frog.png',
  },
  {
    name: 'flower',
    img: 'assets/img/princesses/flower.png',
  },
  {
    name: 'flower',
    img: 'assets/img/princesses/flower.png',
  },
  {
    name: 'apple',
    img: 'assets/img/princesses/apple.png',
  },
  {
    name: 'apple',
    img: 'assets/img/princesses/apple.png',
  },
  {
    name: 'cinderella-shoe',
    img: 'assets/img/princesses/cinderella-shoe.png',
  },
  {
    name: 'cinderella-shoe',
    img: 'assets/img/princesses/cinderella-shoe.png',
  },
];
// mining theme
const miningCardsArrayEasy = [
  {
    name: 'axe',
    img: 'assets/img/mining/axe.png',
  },
  {
    name: 'axe',
    img: 'assets/img/mining/axe.png',
  },
  {
    name: 'blacksmith',
    img: 'assets/img/mining/blacksmith.png',
  },
  {
    name: 'blacksmith',
    img: 'assets/img/mining/blacksmith.png',
  },
  {
    name: 'boots',
    img: 'assets/img/mining/boots.png',
  },
  {
    name: 'boots',
    img: 'assets/img/mining/boots.png',
  },
  {
    name: 'buyer',
    img: 'assets/img/mining/buyer.png',
  },
  {
    name: 'buyer',
    img: 'assets/img/mining/buyer.png',
  },
  {
    name: 'conveyor',
    img: 'assets/img/mining/conveyor.png',
  },
  {
    name: 'conveyor',
    img: 'assets/img/mining/conveyor.png',
  },
];
const miningCardsArrayMedium = [
  ...miningCardsArrayEasy,
  {
    name: 'pick',
    img: 'assets/img/mining/pick.png',
  },
  {
    name: 'pick',
    img: 'assets/img/mining/pick.png',
  },
  {
    name: 'excavator',
    img: 'assets/img/mining/excavator.png',
  },
  {
    name: 'excavator',
    img: 'assets/img/mining/excavator.png',
  },
  {
    name: 'hammer',
    img: 'assets/img/mining/hammer.png',
  },
  {
    name: 'hammer',
    img: 'assets/img/mining/hammer.png',
  },
  {
    name: 'saw',
    img: 'assets/img/mining/saw.png',
  },
  {
    name: 'saw',
    img: 'assets/img/mining/saw.png',
  },
  {
    name: 'shovel',
    img: 'assets/img/mining/shovel.png',
  },
  {
    name: 'shovel',
    img: 'assets/img/mining/shovel.png',
  },
];
const miningCardsArrayHard = [
  ...miningCardsArrayMedium,
  {
    name: 'cargo-truck',
    img: 'assets/img/mining/cargo-truck.png',
  },
  {
    name: 'cargo-truck',
    img: 'assets/img/mining/cargo-truck.png',
  },
  {
    name: 'wheelbarrow',
    img: 'assets/img/mining/wheelbarrow.png',
  },
  {
    name: 'wheelbarrow',
    img: 'assets/img/mining/wheelbarrow.png',
  },
  {
    name: 'flashlight',
    img: 'assets/img/mining/flashlight.png',
  },
  {
    name: 'flashlight',
    img: 'assets/img/mining/flashlight.png',
  },
  {
    name: 'wagon',
    img: 'assets/img/mining/wagon.png',
  },
  {
    name: 'wagon',
    img: 'assets/img/mining/wagon.png',
  },
  {
    name: 'money-bag',
    img: 'assets/img/mining/money-bag.png',
  },
  {
    name: 'money-bag',
    img: 'assets/img/mining/money-bag.png',
  },
];
// alphabet and numbers theme
const alphabetNumberCardsArrayEasy = [
  {
    name: 'letterB',
    img: 'assets/img/alphabet_numbers/b.png',
  },
  {
    name: 'letterB',
    img: 'assets/img/alphabet_numbers/b.png',
  },
  {
    name: 'letterR',
    img: 'assets/img/alphabet_numbers/r.png',
  },
  {
    name: 'letterR',
    img: 'assets/img/alphabet_numbers/r.png',
  },
  {
    name: 'letterM',
    img: 'assets/img/alphabet_numbers/m.png',
  },
  {
    name: 'letterM',
    img: 'assets/img/alphabet_numbers/m.png',
  },
  {
    name: 'letterS',
    img: 'assets/img/alphabet_numbers/s.png',
  },
  {
    name: 'letterS',
    img: 'assets/img/alphabet_numbers/s.png',
  },
  {
    name: 'letterE',
    img: 'assets/img/alphabet_numbers/e.png',
  },
  {
    name: 'letterE',
    img: 'assets/img/alphabet_numbers/e.png',
  },
];
const alphabetNumberCardsArrayMedium = [
  ...alphabetNumberCardsArrayEasy,
  {
    name: 'letterP',
    img: 'assets/img/alphabet_numbers/p.png',
  },
  {
    name: 'letterP',
    img: 'assets/img/alphabet_numbers/p.png',
  },
  {
    name: 'letterF',
    img: 'assets/img/alphabet_numbers/f.png',
  },
  {
    name: 'letterF',
    img: 'assets/img/alphabet_numbers/f.png',
  },
  {
    name: 'letterA',
    img: 'assets/img/alphabet_numbers/a.png',
  },
  {
    name: 'letterA',
    img: 'assets/img/alphabet_numbers/a.png',
  },
  {
    name: 'letterZ',
    img: 'assets/img/alphabet_numbers/z.png',
  },
  {
    name: 'letterZ',
    img: 'assets/img/alphabet_numbers/z.png',
  },
  {
    name: 'number2',
    img: 'assets/img/alphabet_numbers/2.png',
  },
  {
    name: 'number2',
    img: 'assets/img/alphabet_numbers/2.png',
  },
];
const alphabetNumberCardsArrayHard = [
  ...alphabetNumberCardsArrayMedium,
  {
    name: 'number3',
    img: 'assets/img/alphabet_numbers/3.png',
  },
  {
    name: 'number3',
    img: 'assets/img/alphabet_numbers/3.png',
  },
  {
    name: 'number5',
    img: 'assets/img/alphabet_numbers/5.png',
  },
  {
    name: 'number5',
    img: 'assets/img/alphabet_numbers/5.png',
  },
  {
    name: 'number7',
    img: 'assets/img/alphabet_numbers/7.png',
  },
  {
    name: 'number7',
    img: 'assets/img/alphabet_numbers/7.png',
  },
  {
    name: 'number9',
    img: 'assets/img/alphabet_numbers/9.png',
  },
  {
    name: 'number9',
    img: 'assets/img/alphabet_numbers/9.png',
  },
  {
    name: 'number0',
    img: 'assets/img/alphabet_numbers/0.png',
  },
  {
    name: 'number0',
    img: 'assets/img/alphabet_numbers/0.png',
  },
];
// shapes theme
const shapesCardsArrayEasy = [
  {
    name: 'circle',
    img: 'assets/img/shapes/circle.png',
  },
  {
    name: 'circle',
    img: 'assets/img/shapes/circle.png',
  },
  {
    name: 'cube',
    img: 'assets/img/shapes/cube.png',
  },
  {
    name: 'cube',
    img: 'assets/img/shapes/cube.png',
  },
  {
    name: 'cylinder',
    img: 'assets/img/shapes/cylinder.png',
  },
  {
    name: 'cylinder',
    img: 'assets/img/shapes/cylinder.png',
  },
  {
    name: 'rectangle',
    img: 'assets/img/shapes/rectangle.png',
  },
  {
    name: 'rectangle',
    img: 'assets/img/shapes/rectangle.png',
  },
  {
    name: 'square',
    img: 'assets/img/shapes/square.png',
  },
  {
    name: 'square',
    img: 'assets/img/shapes/square.png',
  },
];
const shapesCardsArrayMedium = [
  ...shapesCardsArrayEasy,
  {
    name: 'hexagon',
    img: 'assets/img/shapes/hexagon.png',
  },
  {
    name: 'hexagon',
    img: 'assets/img/shapes/hexagon.png',
  },
  {
    name: 'pentagon',
    img: 'assets/img/shapes/pentagon.png',
  },
  {
    name: 'pentagon',
    img: 'assets/img/shapes/pentagon.png',
  },
  {
    name: 'triangle',
    img: 'assets/img/shapes/triangle.png',
  },
  {
    name: 'triangle',
    img: 'assets/img/shapes/triangle.png',
  },
  {
    name: 'pyramid',
    img: 'assets/img/shapes/pyramid.png',
  },
  {
    name: 'pyramid',
    img: 'assets/img/shapes/pyramid.png',
  },
  {
    name: 'tetrahedron',
    img: 'assets/img/shapes/tetrahedron.png',
  },
  {
    name: 'tetrahedron',
    img: 'assets/img/shapes/tetrahedron.png',
  },
];
const shapesCardsArrayHigh = [
  ...shapesCardsArrayMedium,
  {
    name: 'dodecahedron',
    img: 'assets/img/shapes/dodecahedron.png',
  },
  {
    name: 'dodecahedron',
    img: 'assets/img/shapes/dodecahedron.png',
  },
  {
    name: 'dodecahedron2',
    img: 'assets/img/shapes/dodecahedron2.png',
  },
  {
    name: 'dodecahedron2',
    img: 'assets/img/shapes/dodecahedron2.png',
  },
  {
    name: 'octahedron',
    img: 'assets/img/shapes/octahedron.png',
  },
  {
    name: 'octahedron',
    img: 'assets/img/shapes/octahedron.png',
  },
  {
    name: 'hexahedron',
    img: 'assets/img/shapes/hexahedron.png',
  },
  {
    name: 'hexahedron',
    img: 'assets/img/shapes/hexahedron.png',
  },
  {
    name: 'sphere',
    img: 'assets/img/shapes/sphere.png',
  },
  {
    name: 'sphere',
    img: 'assets/img/shapes/sphere.png',
  },
];
// wireframes theme
const wireframesCardsArrayEasy = [
  {
    name: 'application',
    img: 'assets/img/wireframes/application.png',
  },
  {
    name: 'application',
    img: 'assets/img/wireframes/application.png',
  },
  {
    name: 'article',
    img: 'assets/img/wireframes/article.png',
  },
  {
    name: 'article',
    img: 'assets/img/wireframes/article.png',
  },
  {
    name: 'blocks',
    img: 'assets/img/wireframes/blocks.png',
  },
  {
    name: 'blocks',
    img: 'assets/img/wireframes/blocks.png',
  },
  {
    name: 'body',
    img: 'assets/img/wireframes/body.png',
  },
  {
    name: 'body',
    img: 'assets/img/wireframes/body.png',
  },
  {
    name: 'bullet_form',
    img: 'assets/img/wireframes/bullet-form.png',
  },
  {
    name: 'bullet_form',
    img: 'assets/img/wireframes/bullet-form.png',
  },
];
const wireframesCardsArrayMedium = [
  ...wireframesCardsArrayEasy,
  {
    name: 'criss_cross',
    img: 'assets/img/wireframes/criss-cross.png',
  },
  {
    name: 'criss_cross',
    img: 'assets/img/wireframes/criss-cross.png',
  },
  {
    name: 'dashboard',
    img: 'assets/img/wireframes/dashboard.png',
  },
  {
    name: 'dashboard',
    img: 'assets/img/wireframes/dashboard.png',
  },
  {
    name: 'elements',
    img: 'assets/img/wireframes/elements.png',
  },
  {
    name: 'elements',
    img: 'assets/img/wireframes/elements.png',
  },
  {
    name: 'header',
    img: 'assets/img/wireframes/header.png',
  },
  {
    name: 'header',
    img: 'assets/img/wireframes/header.png',
  },
  {
    name: 'index',
    img: 'assets/img/wireframes/index.png',
  },
  {
    name: 'index',
    img: 'assets/img/wireframes/index.png',
  },
];
const wireframesCardsArrayHard = [
  ...wireframesCardsArrayMedium,
  {
    name: 'instructions',
    img: 'assets/img/wireframes/instructions.png',
  },
  {
    name: 'instructions',
    img: 'assets/img/wireframes/instructions.png',
  },
  {
    name: 'media',
    img: 'assets/img/wireframes/media.png',
  },
  {
    name: 'media',
    img: 'assets/img/wireframes/media.png',
  },
  {
    name: 'parts',
    img: 'assets/img/wireframes/parts.png',
  },
  {
    name: 'parts',
    img: 'assets/img/wireframes/parts.png',
  },
  {
    name: 'searching',
    img: 'assets/img/wireframes/searching.png',
  },
  {
    name: 'searching',
    img: 'assets/img/wireframes/searching.png',
  },
  {
    name: 'sections',
    img: 'assets/img/wireframes/sections.png',
  },
  {
    name: 'sections',
    img: 'assets/img/wireframes/sections.png',
  },
];

// timer
function startTime() {
  interval = setInterval(function () {
    timer.innerHTML = `${minute} mins ${second} secs`;
    second++;
    if (second == 60) {
      minute++;
      second = 0;
    }
  }, 1000);
}

// ADD A STOP FUNCTION TO PERHAPS REWORK STARTTIME TO DO BOTH
// show hide html theme difficulty and call gameBoard()
let choosePrincesstheme = function () {
  $('.easy').click(function () {
    gameSetup();
    cardsArrayChosen = princessCardsArrayEasy;
    gameBoard();
  });
  $('.medium').click(function () {
    gameSetup();
    cardsArrayChosen = princessCardsArrayMedium;
    gameBoard();
  });
  $('.hard').click(function () {
    gameSetup();
    cardsArrayChosen = princessCardsArrayHard;
    gameBoard();
  });
};
let chooseMiningTheme = function () {
  $('.easy').click(function () {
    gameSetup();
    cardsArrayChosen = miningCardsArrayEasy;
    gameBoard();
  });
  $('.medium').click(function () {
    gameSetup();
    cardsArrayChosen = miningCardsArrayMedium;
    gameBoard();
  });
  $('.hard').click(function () {
    gameSetup();
    cardsArrayChosen = miningCardsArrayHard;
    gameBoard();
  });
};
let chooseAlphabetNumberTheme = function () {
  $('.easy').click(function () {
    gameSetup();
    cardsArrayChosen = alphabetNumberCardsArrayEasy;
    gameBoard();
  });
  $('.medium').click(function () {
    gameSetup();
    cardsArrayChosen = alphabetNumberCardsArrayMedium;
    gameBoard();
  });
  $('.hard').click(function () {
    gameSetup();
    cardsArrayChosen = alphabetNumberCardsArrayHard;
    gameBoard();
  });
};
let chooseShapesTheme = function () {
  $('.easy').click(function () {
    gameSetup();
    cardsArrayChosen = shapesCardsArrayEasy;
    gameBoard();
  });
  $('.medium').click(function () {
    gameSetup();
    cardsArrayChosen = shapesCardsArrayMedium;
    gameBoard();
  });
  $('.hard').click(function () {
    gameSetup();
    cardsArrayChosen = shapesCardsArrayHigh;
    gameBoard();
  });
};
let chooseWireFramesTheme = function () {
  $('.easy').click(function () {
    gameSetup();
    cardsArrayChosen = wireframesCardsArrayEasy;
    gameBoard();
  });
  $('.medium').click(function () {
    gameSetup();
    cardsArrayChosen = wireframesCardsArrayMedium;
    gameBoard();
  });
  $('.hard').click(function () {
    gameSetup();
    cardsArrayChosen = wireframesCardsArrayHard;
    gameBoard();
  });
};

// choose theme
$(function chooseTheme() {
  $('.princesses').click(function () {
    $(levels).show();
    $('.theme').hide();
    choosePrincesstheme();
  });
  $('.mining').click(function () {
    $(levels).show();
    $('.theme').hide();
    chooseMiningTheme();
  });
  $('.alphabetNumber').click(function () {
    $(levels).show();
    $('.theme').hide();
    chooseAlphabetNumberTheme();
  });
  $('.shapes').click(function () {
    $(levels).show();
    $('.theme').hide();
    chooseShapesTheme();
  });
  $('.wireframes').click(function () {
    $(levels).show();
    $('.theme').hide();
    chooseWireFramesTheme();
  });
});

// show hide levels/difficulty when game is setup
function toggleOn() {
  $(levels).hide();
  $(grid).show();
  $(counters).show();
  $(gameFunctions).show();
}
// once game is underway either restart or quit can be clicked
function toggleOff() {
  $('.quit').click(function () {
    window.location.href = 'index.html';
    $('.theme').show();
    $(grid).hide();
    $(counters).hide();
    $(gameFunctions).hide();
  });
  /* $(".restart").click(function() {
  chosenTheme();
  }); */
  clearInterval(timer);
}

// create gamesetup function
let gameSetup = function () {
  toggleOn();
  startTime();
  toggleOff();
};

// create gameboard
function gameBoard() {
  // randomise the cards
  cardsArrayChosen.sort(() => 0.5 - Math.random());
  for (let i = 0; i < cardsArrayChosen.length; i++) {
    let card = document.createElement('img');
    card.setAttribute('src', 'assets/img/squarelightgrey.png');
    card.setAttribute('data-id', i);
    card.addEventListener('click', flipcard);
    $('.grid').append(card);
  }
}

// check if the cards selected were a match
function checkIfMatch() {
  let cards = document.querySelectorAll('img');
  const firstCardId = cardsSelectedId[0];
  const secondCardId = cardsSelectedId[1];
  if (cardsSelected[0] === cardsSelected[1] && firstCardId !== secondCardId) {
    cards[firstCardId].setAttribute('src', 'assets/img/blank.png');
    cards[secondCardId].setAttribute('src', 'assets/img/blank.png');
    cards[firstCardId].setAttribute('class', 'transparentImage');
    cards[secondCardId].setAttribute('class', 'transparentImage');
    cardsMatched.push(cardsSelected);
    scoreCalc();
  } else {
    cards[firstCardId].setAttribute('src', 'assets/img/squarelightgrey.png');
    cards[secondCardId].setAttribute('src', 'assets/img/squarelightgrey.png');
  }
  cardsSelected = [];
  cardsSelectedId = [];
  if (cardsMatched.length === cardsArrayChosen.length / 2) {
    clearInterval();
    window.location.reload();
  }
  moves++;
  movesText.textContent = `${moves} move(s)`;
}

// flip cards over when clicked
function flipcard() {
  let cardId = this.getAttribute('data-id');
  // push cards selected into the emtpy array cardsSelected
  cardsSelected.push(cardsArrayChosen[cardId].name);
  cardsSelectedId.push(cardId);
  // set the attributes of the cards selected to img in the princess cards array
  this.setAttribute('src', cardsArrayChosen[cardId].img);
  // if two cards are selected then check for a match
  if (cardsSelected.length === 2) {
    // set a timeout so that there is time to check for a match before user can select more cards
    setTimeout(checkIfMatch, 500);
  }
}

// create score calculation function to keep track of scores
function scoreCalc() {
  // easy levels
  if (
    cardsArrayChosen.length === 10 &&
    cardsArrayChosen.length === cardsMatched.length * 2
  ) {
    if (moves <= 10) {
      alert(
        `That was excellent, well done! It took you ${moves} moves, ${minute} mins and ${second} secs.`
      );
    }
    if (moves > 10 && moves <= 15) {
      alert(
        `That was great, well done! It took you ${moves} moves, ${minute} mins and ${second} secs.`
      );
    } else if (moves > 15) {
      alert(
        `You're doing well, but keep on practicing! It took you ${moves} moves, ${minute} mins and ${second} secs.`
      );
    }
  } 
  // medium levels
  if (
    cardsArrayChosen.length === 20 &&
    cardsArrayChosen.length === cardsMatched.length * 2
  ) {
    if (moves <= 20) {
      alert(
        `That was excellent, well done! It took you ${moves} moves, ${minute} mins and ${second} secs.`
      );
    }
    if (moves > 20 && moves <= 30) {
      alert(
        `That was great, well done! It took you ${moves} moves, ${minute} mins and ${second} secs.`
      );
    } else if (moves > 30) {
      alert(
        `You're doing well, but keep on practicing! It took you ${moves} moves, ${minute} mins and ${second} secs.`
      );
    }
  }
  // hard levels
  if (
    cardsArrayChosen.length === 30 &&
    cardsArrayChosen.length === cardsMatched.length * 2
  ) {
    if (moves <= 30) {
      alert(
        `That was excellent, well done! It took you ${moves} moves, ${minute} mins and ${second} secs.`
      );
    }
    if (moves > 30 && moves <= 45) {
      alert(
        `That was great, well done! It took you ${moves} moves, ${minute} mins and ${second} secs.`
      );
    } else if (moves > 45) {
      alert(
        `You're doing well, but keep on practicing! It took you ${moves} moves, ${minute} mins and ${second} secs.`
      );
    }
  }
}
