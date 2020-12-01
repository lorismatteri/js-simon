$(function() {
    //Alert con istruzioni
    alert('Ora vedrai 5 numeri, avrai a disposizione 30 secondi per memorizzarli, dopo di che dovrai inserire quelli che ti ricordi')

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

    //In un paragrafo visualizzo i numeri generati
    var numeriGenerati = $('#numeri_pc')

    $(numeriGenerati).text(numeriPcRandom);

    //Genero un countdown
    var countdown = 30;
    
    var userNumbers = [];

    var indovinati = [];
    
    var interval = setInterval(function () {  
        
        console.log(countdown);
        
        //Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
        if (countdown === 0) {
            $(numeriGenerati).hide();
            
            setTimeout(askNumber, 1000);

            function askNumber() {
                for (var i = 0;i < 5; i++) {
                    var numeroUtente = Number(prompt('Inserisci uno a uno i numeri che hai visto'));
                    
                    userNumbers.push(numeroUtente);

                    if(numeriPcRandom.includes(numeroUtente)) {
                        indovinati.push(numeroUtente);
                    }
                    
                };
                console.log(userNumbers);
                console.log(indovinati);
                
                //Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.
                $('#numeri_giusti').text('Hai indovinato ' + indovinati.length + ' numeri: ' + indovinati);
            }
            
            clearInterval(interval);
        
        } else {
            countdown--;
        }
        
    }, 1000);


});

