$(function() {
    //Funzione per generare un numero random
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    //Genero 5 numeri random tra 1 e 100 e mi assicuro che siano diversi prima di inserirli nell'array
    
    var numeriPcRandom = [];
    
    while (numeriPcRandom.length !== 5) {
        var number = getRandomNumber(1, 100);
        if (! numeriPcRandom.includes(number)) {
            numeriPcRandom.push(number);
        }
    }
    
    console.log(numeriPcRandom.sort());

    //Un alert espone 5 numeri casuali diversi.
    alert(numeriPcRandom.sort());
    
    //Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
    
});

//Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.

