// Griglia 6x6, ad ogni click parte una richiesta AJAX
// che prende un numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato.
$(document).ready(function() {


  var numeroQuadrati = 36;

  for (var i = 0; i < numeroQuadrati; i++) {
    $(".wrapper").append("<div class='square'></div>");
  }


});///end//ready/
