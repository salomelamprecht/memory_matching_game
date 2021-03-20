const grid = $(".grid").hide();
const counters = $(".counters").hide();
const gameFunctions = $(".game-functions").hide();
const levels = $(".difficulty").hide();

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

function quit() {

  window.location.href="index.html";
  
}
