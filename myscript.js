// Griglia 6x6, ad ogni click parte una richiesta AJAX
// che prende un numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato.
$(document).ready(function() {

  //genero una griglia di quadrati
  var numeroQuadrati = 36;

  for (var i = 0; i < numeroQuadrati; i++) {
    $(".wrapper").append("<div class='square'></div>");
  }

  //cliccando su un quadrato parte una richiesta ajax
	$('.square').click(function() {
      //specifico il contesto di this
  		var cliccato = this;

  		$.ajax({
        //chiedo un numero random all'API apposita
  			url: 'https://flynn.boolean.careers/exercises/api/random/int',
  			method: 'GET',
  			success: function(dati)

          {
            var numeroCasuale = dati.response;
  					$(cliccato).text(numeroCasuale);

            if(numeroCasuale <= 5) {
              $(cliccato).addClass('yellow');
              $(cliccato).removeClass('green');
            } else {
              $(cliccato).addClass('green');
              $(cliccato).removeClass('yellow');
            }
    			},

  			error: function(richiesta, stato, errori)

          {
      			alert("Si è verificato un errore: " + errori);
    			}

  		});

	});

  // $('.wrapper').mouseleave(function() {
  //
  //   $(".square").empty();
  //
  // });


});///end//ready/
