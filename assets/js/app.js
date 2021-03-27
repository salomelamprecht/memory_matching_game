const grid = $('.grid').hide();
const counters = $('.counters').hide();
const gameFunctions = $('.game-functions').hide();
const levels = $('.difficulty').hide();
let score = document.querySelector('#score');
let moves = document.querySelector('.moves');
let second = 0, minute = 0;
let timer = document.querySelector('.timer');
let interval;

// create global variable for chosen theme and difficulty array //
let cardsArrayChosen = [];

// Arrays //
cardsSelected = [];
cardsSelectedId = [];
cardsMatched = [];

// create princess theme card arrays easy to hard //
// princess theme //
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
// mining theme //
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

// timer //
function startTime() {
  interval = setInterval(function () {
    timer.innerHTML = minute + 'mins ' + second + 'secs';
    second++;
    if (second == 60) {
      minute++;
      second = 0;
    }
    if (minute == 60) {
      hour++;
      minute = 0;
    }
  }, 1000);
}

// ADD A STOP FUNCTION TO PERHAPS REWORK STARTTIME TO DO BOTH
// show hide html theme difficulty and call gameBoard() //
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

// choose theme //
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
});

// show hide levels/difficulty when game is setup //
function toggleOn() {
  $(levels).hide();
  $(grid).show();
  $(counters).show();
  $(gameFunctions).show();
}
// once game is underway either restart or quit can be clicked //
function toggleOff() {
  $(".quit").click(function () {
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

// create gamesetup function //
let gameSetup = function () {
  toggleOn();
  startTime();
  toggleOff();
};

// create gameboard //
function gameBoard() {
  // randomise the cards //
  cardsArrayChosen.sort(() => 0.5 - Math.random());
  for (let i = 0; i < cardsArrayChosen.length; i++) {
    let card = document.createElement('img');
    card.setAttribute('src', 'assets/img/card_reverse_pink.png');
    card.setAttribute('data-id', i);
    card.addEventListener('click', flipcard);
    $('.grid').append(card);
  }
}

// check if the cards selected were a match //
function checkIfMatch() {
  let cards = document.querySelectorAll('img');
  const firstCardId = cardsSelectedId[0];
  const secondCardId = cardsSelectedId[1];
  if (
    cardsSelected[0] === cardsSelected[1] &&
    cardsSelectedId[0] !== cardsSelectedId[1]
  ) {
    cards[firstCardId].setAttribute('src', 'assets/img/blank.png'); 
    cards[secondCardId].setAttribute('src', 'assets/img/blank.png'); 
    cardsMatched.push(cardsSelected);
  } else {
    cards[firstCardId].setAttribute('src', 'assets/img/card_reverse_pink.png');
    cards[secondCardId].setAttribute('src', 'assets/img/card_reverse_pink.png');
  }
  cardsSelected = [];
  cardsSelectedId = [];
  score.textContent = cardsMatched.length;
  if (cardsMatched.length === cardsArrayChosen.length / 2) {
   // score.textContent =
   setInterval("timer", 500);
      alert("Well done! You have won.  Why not try a different level or theme.");
  }
  clearInterval();
}

// flip cards over when clicked //
function flipcard() {
  let cardId = this.getAttribute('data-id');
  // push cards selected into the emtpy array cardsSelected //
  cardsSelected.push(cardsArrayChosen[cardId].name);
  cardsSelectedId.push(cardId);
  // set the attributes of the cards selected to img in the princess cards array //
  this.setAttribute('src', cardsArrayChosen[cardId].img);
  // if two cards are selected then check for a match //
  if (cardsSelected.length === 2) {
    // set a timeout so that there is time to check for a match before user can select more cards //
    setTimeout(checkIfMatch, 500);
  }
}