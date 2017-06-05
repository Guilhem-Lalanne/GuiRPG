//REQUIRES
var Player = require("./class/player.js");
var Dice = require("./class/dice.js");

//GAME
var currentScene = null;
var stopBulle = false;
var firstSceneCompleted = 0;

var upTakeCountdown = 2;

var oPlayer1 = new Player(3, 5, 6);
var oD10 = new Dice(10);

//RENDER
$(function () {

  $('#hp').html(oPlayer1.hp);
  $('#hpMax').html(oPlayer1.hpMax);

  $('#overlayBlack').on('click', function () {
    loadScene(0);
    $(this).fadeOut("slow");
  });

  //debugui(0);
  //pour debug
  function debugui(levelId) {
    loadScene(levelId);
    $('body').removeClass('allBlack');
    $("#statusBar").show();
    $('#overlayBlack').hide();
  }

  //BOUCLE DU JEU
  setInterval(function () {
    //ajoute de l'energie chaque second
    oPlayer1.energy += oPlayer1.energyBonus * oPlayer1.energyMultiplier;
    $('#energy').html(oPlayer1.energy);
    $('#energyLabel').attr('aria-label', oPlayer1.energyBonus * oPlayer1.energyMultiplier + '/s');

    //masque l'energie consommé
    if (upTakeCountdown > 0) {
      upTakeCountdown--;
      if (upTakeCountdown === 0) {
        $("#uptake").fadeOut("slow");
      }
    }

  }, 1000);
  //END BOUCLE DU JEU

  function loadScene(id) {
    $('.game').hide();
    switch (id) {
      case 0:
        currentScene = 0;
        initScene0();
        break;
      case 1:
        currentScene = 1;
        initScene1();
        break;
      case 2:
        currentScene = 2;
        initScene2();
        break;

      default:
        initScene0();
        break;
    }
  }

  //START LEVEL0
  function initScene0() {

    if (currentScene === 0 && firstSceneCompleted === 0) {

      $('#game0').show("fast");
      $("#console").hide();

      let msgStart = [
        "Ou est ce que je suis ?",
        "Il fait noir ...",
        "Qu'est ce qui se passe ?!!",
        "Je dois trouver l'interrupteur"
      ];

      showDialog(msgStart, 2000);

      printConsole("Ou est ce que je suis ?", function () {
        printConsole("Il fait noir ...", function () {
          printConsole("Qu'est ce qui se passe ?!!", function () {
            printConsole("Je dois trouver l'interrupteur", function () {});
          });
        });
      });

      firstSceneCompleted = 1;

      $('#cage1').on('click', function () {
        printConsole('Secoue les barreaux, rien ne bouge ...');
        consumeEnergy(5);
      });

      //allume la lumiere
      $('#interrupteur').on('click', function () {
        $("#console").toggle();
        if ($('body').hasClass('allWhite')) {
          $('body').toggleClass('allWhite allBlack');
          printConsole('clack..');
        } else {
          $('body').toggleClass('allWhite allBlack');
          printConsole('click..');
        }
        stopBulle = true;
      });

      //ouvre la porte de la cage
      $('#jailKey').on('click', function () {
        printConsole('Vous avez trouvé la clé de la cage', function () {
          printConsole('Vous sortez de la cage');
        });
        $("#statusBar").fadeIn("slow");
        $('#bonhomme').css('display', 'block');
        $('#cage1').css('display', 'none');
        $('#cage2').css('display', 'block');
        $('#jailDoor').css('display', 'block');
        $('#outJailDoor').css('display', 'block');
        $('#jailKey').remove();
      });

      //sort du donjon
      $('#outJailDoor').on('click', function () {
        if (consumeEnergy(10)) {
          $('.bulle').remove();
          printConsole('Vous entrez dans les couloirs du donjon');
          loadScene(1);
        }

      });
    }
  }
  //END LEVEL0

  //START LEVEL1
  function initScene1() {
    if (currentScene === 1) {

      $('#game1').show("fast");

      //clique sur une porte
      $('.dungeon0Door').on('click', function (e) {
        console.log(currentScene);
        if (consumeEnergy(10)) {
          if (oD10.roll() >= 8) {
            printConsole('Vous vous echappez du donjon');
            loadScene(2);
          } else {
            printConsole("Ce n'est pas la bonne porte ..");
            $('.dungeon0Door').animate({
              opacity: '0'
            }, 'slow', function () {
              $('.dungeon0Door').animate({
                opacity: '1'
              }, 'fast');
            });
          }
        }
      });
    }
  }
  //END LEVEL1

  //START LEVEL2
  function initScene2() {
    if (currentScene === 2) {
      $('#game2').show("fast");
      moveMiniHero(5, 60, 100);
    }
  }
  //END LEVEL2

  //affiche/cache la console
  $('#btnResizeConsole').on('click', function () {
    $('#console').toggle();
    $('#btnResizeConsole').toggleClass('fa-minus fa-plus');
  });

  function moveMiniHero(margin, duration, speed) {

    var movement = setInterval(function () {

      let current_margin = parseInt($("#miniHero").css("margin-left"));
      $('#miniHero').css('margin-left', current_margin + margin);

      duration--;

      if (duration <= 0) {
        clearInterval(movement);
      }
    }, speed);

  }

  //BULLE RECURSIVE
  function showDialog(texteArray, timeout) {

    if (!stopBulle) {
      var nbMessage = 0;

      //compte le nombre de message a afficher
      $.each(texteArray, function (key, value) {
        nbMessage++;
      });

      if (nbMessage > 0) {

        //var bulleId = Math.floor(Math.random() * 1000 + 1);

        var bulle = '<div class="bulle">' + texteArray[0] + '<div class="arrow-down"></div></div>';

        //affiche la bulle à une position aleatoire
        $('.gameWindow').append(bulle);

        $('.bulle').last().css('position', 'absolute');

        var maxWidth = $('.gameWindow').width() - $('.bulle').last().width();
        var maxHeight = $('.gameWindow').height() - $('.bulle').last().height();

        $('.bulle').last().css('left', Math.floor(Math.random() * maxWidth) + 1);
        $('.bulle').last().css('top', Math.floor(Math.random() * maxHeight) + 1);
        $('.bulle').last().animate({
          opacity: '1'
        }, 'slow');

        //supprime le 1er element du tableau
        texteArray.shift();

        //cache la bulle et rappel la function
        setTimeout(function () {
          $('.bulle').last().animate({
            opacity: '0'
          }, 'slow', function () {
            showDialog(texteArray, timeout);
          });
        }, timeout);
      }
    } else {
      stopBulle = !stopBulle;
    }

  }

  var idMsgCons = 0;

  function printConsole(text, callback) {

    idMsgCons++;
    let current_id = idMsgCons;

    $('#console').prepend('<span id="msgCons' + current_id + '" class="msgCons"></span>');

    //decoupe les lettres de la phrases
    var msgArray = [];
    for (var i = 0; i < text.length; i++) {
      msgArray[i] = text.charAt(i);
    }

    var j = 0;
    //affiche une lettre chaque 50milisecond
    var print = setInterval(function () {
      $('#msgCons' + current_id).html($('#msgCons' + current_id).html() + msgArray[j]);
      j++;
      //stop à la fin du texte
      if (j === text.length) {
        clearInterval(print);
        if (typeof callback === "function")
          callback();
      }
    }, 50);
  }

  function consumeEnergy(value) {
    var temp = oPlayer1.energy - value;
    //verifie que l'energie n'est pas negatif
    if (temp >= 0) {
      upTakeCountdown = 3;
      oPlayer1.energy -= value;
      $("#uptake").hide();
      $('#uptake').html(' -' + value);
      $("#uptake").fadeIn("fast");
      return true;
    } else {
      printConsole("Pas assez d'énergie !");
      return false;
    }
  }

});