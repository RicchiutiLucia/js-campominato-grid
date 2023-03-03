/*L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro 
ed emetto un messaggio in console con il numero della cella cliccata.*/

const containerDom = document.querySelector('.container');
const playDom = document.getElementById('play');

const titleDom = document.getElementById('title');

for( let i = 1; i <= 100; i++){

    const currentSquare = createNewSquare();

    currentSquare.append(i);

    currentSquare.addEventListener('click', function() {
        this.classList.toggle('bg-color');
        console.log(`Hai scelto la casella numero: ${i}`)
    }
    )

    containerDom.append(currentSquare);
}

playDom.addEventListener('click', function(){
    titleDom.classList.add('d-none');
    
}
)
//funzione per creare un nuovo quadrato
function createNewSquare(){
    const currentElement = document.createElement('div');
    currentElement.classList.add('square');
    return currentElement
}