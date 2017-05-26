//REQUIRES
var Player = require("./class/player.js");

//GAME
var firstLevelCompleted = 0;
var pauseBulle = 0;

var oPlayer1 = new Player(5, 5, 6);

//RENDER
$(function () {

  $('#hp').html(oPlayer1.hp);

  /*affiche la barre de statuts avec effet fadeIn*/
  //$( "#statusBar" ).fadeIn( "slow", function() {});

  //Level0
  if (firstLevelCompleted === 0) {

    var msgStart = [
      "Ou est ce que je suis ?",
      "Il fait noir !",
      "Je ne comprend pas ...",
      "Je dois je trouver l'interrupteur"
    ];

    showBubble(msgStart, 5000);

    firstLevelCompleted = 1;
  }

  $('#interrupteur').on('click', function () {

    if ($('body').hasClass('allWhite')) {
      $('body').toggleClass('allWhite');
      $('body').toggleClass('allBlack');
    } else {
      $('body').toggleClass('allBlack');
      $('body').toggleClass('allWhite');
    }
  })

  //ouvre la porte
  $('#jailKey').on('click', function () {
    $('#bonhomme').css('display', 'block');
    $('#cage1').css('display', 'none');
    $('#cage2').css('display', 'block');
    $('#jailDoor').css('display', 'block');
    $('#jailKey').remove();
    showBubble("Je suis libre !!", 10000);
    setTimeout(function () {
      $('#chat').css('display', 'block');
    }, 5000);
  });

  // ouvre l'autre page
  $('#chat').on('click', function () {
    $('#game0').css('display', 'none');
  });
});

//BULLE RECURSIVE
function showBubble(texteArray, timeout) {

  var nbMessage = 0;

  //compte le nombre de message a afficher
  $.each(texteArray, function (key, value) {
    nbMessage++;
  });

  if (nbMessage > 0 && pauseBulle === 0) {

    var bulle = '<div class="bulle">' + texteArray[0] + '<div class="arrow-down"></div></div>';

    //affiche la bulle à une position aleatoire
    $('.gameWindow').append(bulle);
    $('.bulle').last().css('position', 'absolute');
    $('.bulle').last().css('left', Math.floor(Math.random() * $('.gameWindow').width()-30 + 30));
    $('.bulle').last().css('top', Math.floor(Math.random() * $('.gameWindow').height()-30 + 30));

    //supprime le 1er element du tableau
    texteArray.shift();

    //cache la bulle et rappel la function
    setTimeout(function () {

      $('.bulle').hide("slow");
      showBubble(texteArray, timeout);

    }, timeout);
  } else {
    pauseBulle = 0;
  }

}
