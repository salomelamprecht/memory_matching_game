const grid = $(".grid").hide();
const counters = $(".counters").hide();
const gameFunctions = $(".game-functions").hide();
const levels = $(".difficulty").hide();

// Arrays //
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

// create gameboard //
function gameBoard() {
  for (i = 0; i < princessCardsArrayEasy.length; i++) {
    let card = document.createElement("img");
    card.setAttribute("src", "assets/img/card_reverse_pink.png");
    card.setAttribute("data-id", i);
    // card.addEventListener("click", flipcard); //
    $(".grid").append(card);
  } 
}

gameBoard();

function quit() {

  window.location.href="index.html";
  
}
