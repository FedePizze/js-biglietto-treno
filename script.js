//chiedi età
let eta = prompt('inserisci età');
console.log(eta);

//chiedo km
let km = prompt('quanti km devi fare');
console.log(km);


if (eta < 18) {
    document.getElementById('biglietto').innerHTML = 'Il costo del tuo biglietto è ' + ((km * 0.21) - ((km * 0.21) / 100) * 20).toFixed(2);
} else if (eta >= 65) {
    document.getElementById('biglietto').innerHTML = 'Il costo del tuo biglietto è ' + ((km * 0.21) - ((km * 0.21) / 100) * 40).toFixed(2);
} else {
    document.getElementById('biglietto').innerHTML = 'Il costo del tuo biglietto è ' + (km * 0.21).toFixed(2);
};