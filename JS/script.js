

// 1. generatore random per 5 (su 100) numeri casuali e inserirli in un array (lista)
// 2. stampare in pagina l'array (appena caricata la pagina)
// 3. creare funzione timer con cui fare sparire i numeri casuali stampati (array) dopo 5 secondi.
// 4. attivare un prompt dopo 5 secondi (quando spariscono i numeri in pagina)
// 5. inserire in una nuova lista array i numeri inseriti dall'utente
// 6. confrontare le due liste e stampare il numero di numeri indovinati e quali sono.

// ######################

// Elementi

const arrNumeriUtente = []
const numeriRandom = randomNumbers();
const numeriOutput = document.querySelector('h1');
const messaggioEl = document.querySelector('h3')
const seconds = 5
let counter = seconds;

numeriOutput.innerHTML = numeriRandom;



// ############# FUNZIONI ###############



// Generazione 5 numeri casuali su 100
function randomNumbers() {
  const numeriCasuali = [];
  while (numeriCasuali.length < 5) {
    const numeroCasuale = Math.floor(Math.random() * 100) + 1;
      numeriCasuali.push(numeroCasuale);
  }
  return numeriCasuali;
}
console.log(numeriRandom);



// Timer 5 secondi
function countDown() {
  const clock = setInterval(function(){
    console.log(counter)

    counter--;

    if (counter === 0) {
      clearInterval(clock);
      numeriOutput.style.display = "none";

        setTimeout(function () {
          richiediNumeriUtente();
        }, 500);
    }
  },1000)
}
countDown()

// Confronta i numeri casuali con quelli inseriti dall'utente
function confrontaNumeri() {
  const numeriIndovinati = [];

  for (const numeroUtente of arrNumeriUtente) {
    if (numeriRandom.includes(numeroUtente)) {
      numeriIndovinati.push(numeroUtente);
    }
  }

  // Stampa il numero di numeri indovinati 
  if (numeriIndovinati.length === 0) {
    messaggioEl.innerHTML = 'Non hai indovinato nessun numero.';
  } else {
    messaggioEl.innerHTML = `Hai indovinato ${numeriIndovinati.length} numero/i: ${numeriIndovinati.join(', ')}`;
  }
}

// Richiede numeri utente
function richiediNumeriUtente() {
  while (arrNumeriUtente.length < 5) {
    const numeroUtente = parseInt(prompt('Inserisci un numero'));
    
    if (!isNaN(numeroUtente)) {
      arrNumeriUtente.push(numeroUtente);
    } else {
      alert('Devi inserire un numero valido.');
    }
  }
  // confronta i numeri
  confrontaNumeri(); 
}