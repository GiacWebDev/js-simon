

// 2. creare math random per 5 (su 100) numeri casuali e inserirli in un array (lista)
// 2. stampare in pagina l'array (appena caricata la pagina)
// 3. creare funzione timer con cui fare sparire i numeri casuali stampati (array) dopo 5 secondi.
// 4. attivare un prompt dopo 5 secondi (quando spariscono i numeri in pagina)
// 5. inserire in una nuova lista array i numeri inseriti dall'utente
// 6. confrontare le due liste e stampare il numero di numeri indovinati e quali sono.

// ######################

// Elementi
const numeriRandom = randomNumbers();
const numeriOutput = document.querySelector('h1');

numeriOutput.innerHTML = numeriRandom;








// generazione 5 numeri casuali su 100
function randomNumbers() {
  const numeriCasuali = [];

  while (numeriCasuali.length < 5) {
    const numeroCasuale = Math.floor(Math.random() * 100) + 1;
      numeriCasuali.push(numeroCasuale);
  }

  return numeriCasuali;
}

console.log(numeriRandom);