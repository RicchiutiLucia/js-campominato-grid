/*L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro 
ed emetto un messaggio in console con il numero della cella cliccata.*/

const containerDom = document.getElementById('container');
const playDom = document.getElementById('play');
const titleDom = document.getElementById('title');

const selectedDom = document.getElementById('difficult');
const squareArray =[];

playDom.addEventListener('click', function(){
    titleDom.classList.add('d-none');
    if(squareArray.length == 0){
        

        if(selectedDom.value == "easy"){

            for( let i = 1; i <= 100; i++){

                const currentSquare = createNewSquare();

                currentSquare.classList.add('square-1');
            
                currentSquare.append(i);
            
                currentSquare.addEventListener('click', function() {
                    this.classList.toggle('bg-color');
                    console.log(`Hai scelto la casella numero: ${i}`);
                }
                )
            
                containerDom.append(currentSquare);
                squareArray.push(currentSquare);
    
            }
    
            console.log(squareArray);
        }else if(selectedDom.value == "medium"){

            for( let i = 1; i <= 81; i++){

                const currentSquare = createNewSquare();

                currentSquare.classList.add('square-2');
            
                currentSquare.append(i);
            
                currentSquare.addEventListener('click', function() {
                    this.classList.toggle('cyan');
                    console.log(`Hai scelto la casella numero: ${i}`)
                }
                )
            
                containerDom.append(currentSquare);
                squareArray.push(currentSquare);
    
            }
    
            console.log(squareArray);
        }else if(selectedDom.value == "hard"){

            for( let i = 1; i <= 49; i++){

                const currentSquare = createNewSquare();

                currentSquare.classList.add('square-3');
            
                currentSquare.append(i);
            
                currentSquare.addEventListener('click', function() {
                    this.classList.toggle('bg-color');
                    console.log(`Hai scelto la casella numero: ${i}`)
                }
                )
            
                containerDom.append(currentSquare);
                squareArray.push(currentSquare);
    
            }
    
            console.log(squareArray);
        }
    }

    }
)

//funzione per creare un nuovo quadrato
function createNewSquare(){
    const currentElement = document.createElement('div');
    currentElement.classList.add('square');
    return currentElement
}