$(document).ready(function(){

// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi, vengono rimossi i numeri dalla pagina e l'utente deve inserire (tramite prompt) i numeri che ha visto precedentemente, uno alla volta.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


//genero numeri 5 numeri casuali
$('.random-numbers').each(function(){
    var randomNumber = getRndInteger(1, 50);
    $(this).text(randomNumber);
});

//imposto un contatore di 30 secondi per poi nascondere i numeri generati
setTimeout(function(){
$('.random-numbers').hide();
}, 30000);




function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

});
