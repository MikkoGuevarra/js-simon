$(document).ready(function(){
// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi, vengono rimossi i numeri dalla pagina e l'utente deve inserire (tramite prompt) i numeri che ha visto precedentemente, uno alla volta.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// var ran = [];
// var seconds = 10;
// //genero numeri 5 numeri casuali
// $('.random-numbers').each(function(){
//     var randomNumber = getRndInteger(1, 50);
//     $(this).text(randomNumber);
//     ran.push(randomNumber);
// });
// console.log(ran);

var maxRandomNumbers = 5;
var ran = [];
var randomNumber;
var seconds = 10;
//genero numeri 5 numeri casuali
    while (ran.length < maxRandomNumbers ) {
        $('.random-numbers').each(function(){
            randomNumber = getRndInteger(1, 50);
            if (!ran.includes(randomNumber)) {
                ran.push(randomNumber);
                $(this).text(randomNumber);
            }

        });
    }
console.log(ran);

var clock = setInterval(function(){
    $('#secs').text("It will disappear in " + seconds);
    seconds--;
    if (seconds < 0) {
        clearInterval(clock);
    }
}, 1000);
//imposto un contatore di 30 secondi per poi nascondere i numeri generati
setTimeout(function(){
    $('#secs').hide();
    $('.random-numbers').hide();
}, 11000);

//genero un altro contatore maggiore a quello di prima dove chiede i numeri che si ricorda
var getNumber = [];
setTimeout(function(){
    $('.random-numbers').each(function(){
        var declaredNumber = parseInt(prompt('quali sono i numeri?'));
        //creo if per controllare se il numero inserito è compreso tra i numeri generati casualmente se contiene stampo il numero se no niente
        if (ran.includes(declaredNumber)) {
            getNumber.push(declaredNumber);
            $('.getted').append("<div>" + declaredNumber + "</div>");
        }
    });
    console.log(getNumber);
    var indovinati = getNumber.length;
    console.log(indovinati);
    //comunico i numeri indovinati q quali sono
    if (indovinati == ran.length) {
        $('.getted').prepend("<div>" + "hai indovinato " + indovinati + " numeri" + " complimenti hai vinto" + "</div>");

    } else {
        $('.getted').prepend("<div>" + "hai indovinato solo " + indovinati + " numeri su 5" + "</div>");

    }
}, 12000);

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

});
