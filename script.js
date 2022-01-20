//METODO COMPATTO
/*
//chiedi età
let eta = prompt('inserisci età')

//chiedo km
let km = prompt('quanti km devi fare');

//operazione
if (eta < 18) {
    document.getElementById('biglietto').innerHTML = 'Il costo del tuo biglietto è ' + ((km * 0.21) - ((km * 0.21) / 100) * 20).toFixed(2);
} else if (eta >= 65) {
    document.getElementById('biglietto').innerHTML = 'Il costo del tuo biglietto è ' + ((km * 0.21) - ((km * 0.21) / 100) * 40).toFixed(2);
} else {
    document.getElementById('biglietto').innerHTML = 'Il costo del tuo biglietto è ' + (km * 0.21).toFixed(2);
};
*/



//METODO ESTESO
//chiedi età
let eta = prompt('inserisci età');

//chiedo km
let km = prompt('quanti km devi fare');

//operazione
if (eta < 18) {
    var risultato = ((km * 0.21) - ((km * 0.21) / 100) * 20);
} else if (eta >= 65) {
    var risultato = ((km * 0.21) - ((km * 0.21) / 100) * 40);
} else {
    var risultato = (km * 0.21);
};

document.getElementById('biglietto').innerHTML = 'Il costo del tuo biglietto è ' + risultato.toFixed(2);
