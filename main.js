//REQUIRES
var Player = require("./class/player.js");

//GAME
var firstLevelCompleted = 0;

var oPlayer1 = new Player(5, 5, 6);

//RENDER
$(function () {

    $('#hp').html(oPlayer1.hp);

    /*affiche la barre de statuts avec effet fadeIn*/
    //$( "#statusBar" ).fadeIn( "slow", function() {});

    //Level0
    if(firstLevelCompleted === 0) {
      showBubble('Ou est ce que je suis ?',10000);
      showBubble('Il fait noir !',10000);
      showBubble('Je ne comprend pas ...',10000);
      showBubble("Je dois je trouver l'interrupteur",10000);

      firstLevelCompleted = 1;
    }

    $('#interrupteur').on('click', function() {

      if($('body').hasClass('allWhite')) {
        $('body').toggleClass('allWhite');
        $('body').toggleClass('allBlack');
      } else {
        $('body').toggleClass('allBlack');
        $('body').toggleClass('allWhite');
      }
    })

    //ouvre la porte
    $('#jailKey').on('click', function() {
      $('#bonhomme').css('left','360px');
      $('#jailDoor').css('display','block');
      $('#jailKey').remove();
      showBubble("Je suis libre !!",10000);
      setTimeout(function (){
        $('#chat').css('display','block');
      }, 5000);
    });

    // ouvre l'autre page
    $('#chat').on('click', function() {
      $('#game1').css('display', 'none');
    });
});

//BULLE
function showBubble(texte,timeout) {

  var bulle = '<div class="bulle">'+texte+'</div>';

  var random = Math.floor(Math.random() * 500 + 1);

  $('#main').append(bulle);
  $('.bulle').last().css('position','absolute');
  $('.bulle').last().css('left',Math.floor(Math.random() * 500 + 1));
  $('.bulle').last().css('top',Math.floor(Math.random() * 500 + 1));

  setTimeout(function () {
    $('.bulle').hide("slow");
  }, timeout);

}
