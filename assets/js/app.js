const grid = $(".grid").hide();
const counters = $(".counters").hide();
const gameFunctions = $(".game-functions").hide();
const levels = $(".difficulty").hide();

// Arrays //
cardsSelected = [];
cardsSelectedId = [];
cardsMatched =[];

// create princess theme card array easy level 10 cards //
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

// show hide html theme difficulty and call gameBoard() //
$(function chooseTheme() {
  $('.princesses').click(function () {
    $(levels).show();
    $('.theme').hide();
  });
  $('.easy').click(function () {
    $(levels).hide();
    $(grid).show();
    $(counters).show();
    $(gameFunctions).show();
    $('.quit').click(function () {
      $('.theme').show();
      $(grid).hide();
      $(counters).hide();
      $(gameFunctions).hide();
    });
  });
});

// randomise the cards //
princessCardsArrayEasy.sort(() => 0.5 - Math.random());

// create gameboard //
function gameBoard() {
  for (i = 0; i < princessCardsArrayEasy.length; i++) {
    let card = document.createElement("img");
    card.setAttribute("src", "assets/img/card_reverse_pink.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipcard); 
    $(".grid").append(card);
  } 
}

// check if the cards selected were a match //
function checkIfMatch() {
  let cards = document.querySelectorAll('img');
  const firstCardId = cardsSelectedId[0];
  const secondCardId = cardsSelectedId[1];
  if (cardsSelected[0] === cardsSelected[1]) {
    cards[firstCardId].setAttribute("src", "assets/img/blank.png");
    cards[secondCardId].setAttribute("src", "assets/img/blank.png");
    cardsMatched.push(cardsSelected);
  } else {
    cards[firstCardId].setAttribute("src", "assets/img/card_reverse_pink.png");
    cards[secondCardId].setAttribute("src", "assets/img/card_reverse_pink.png");
  }
  cardsSelected = [];
  cardsSelectedId = [];
}

// flip cards over when clicked //
function flipcard() {
  let cardId = this.getAttribute("data-id");
  // push cards selected into the emtpy array cardsSelected //
  cardsSelected.push(princessCardsArrayEasy[cardId].name);
  cardsSelectedId.push(cardId);
  // set the attributes of the cards selected to img in the princess cards array //
  this.setAttribute("src", princessCardsArrayEasy[cardId].img);
  // if two cards are selected then check for a match //
  if (cardsSelected.length === 2) {
    // set a timeout so that there is time to check for a match before user can select more cards //
    setTimeout(checkIfMatch, 750);
  } 
}

gameBoard();

function quit() {

  window.location.href="index.html";
  
}
