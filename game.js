const letters= "abcdefghijklmnopqrstuvwxyz";

let lettersArray=Array.from(letters);
//console.log(lettersArray);

let lettersContainer=document.querySelector(".letters");

lettersArray.forEach((letter)=>{
    let span=document.createElement("span");
    let theletter=document.createTextNode(letter);
    span.appendChild(theletter);
    span.className="letter-box";
    lettersContainer.appendChild(span);
});

const words= {
    programming: ["php","javascript","go","scala","fortran","r","mysql","python"],
    movies: ["prestige","inception","parasite","interstellar","whiplash","memento","coco","up"],
    people: ["albert einstein","hitchcock","alexander","cleopatra","mahatma ghandi"],
    countries: ["syria","palestine","yemen","egypt","bahrian","qatar"],
};

let allKeys=Object.keys(words);
//console.log(allKeys);

let randomPropNumber = Math.floor(Math.random()*allKeys.length);

let randomPropName=allKeys[randomPropNumber];

let randomPropValue=words[randomPropName];
//console.log(words[randomPropName]);

let randomValueNumber=Math.floor(Math.random()*randomPropValue.length);
let randomValueValue=randomPropValue[randomValueNumber];

document.querySelector(".game-info .category span").innerHTML=randomPropName;

let lettersGuessContainer =document.querySelector(".letter-guess");

let lettersAndSpace=Array.from(randomValueValue);
//console.log(lettersAndSpace);

lettersAndSpace.forEach(letter=>{
    let emptySpan=document.createElement("span");
    if(letter===" "){
        emptySpan.className="has-space";
    }
    lettersGuessContainer.appendChild(emptySpan);
});

let guessSpans=document.querySelectorAll(".letter-guess span");

let wrongAttempts=0;

let theDraw=document.querySelector(".hangman-draw");


//let theStatus=false;

document.addEventListener("click",(e)=>{

    let theStatus=false;

    if(e.target.className==="letter-box"){
        e.target.classList.add("clicked");

        let theClickedLetter=e.target.innerHTML.toLowerCase();
        //console.log(theClickedLetter);
        //console.log(lettersAndSpace);

        let theChosenWord=Array.from(randomValueValue.toLowerCase());
        //console.log(theChosenWord);

        theChosenWord.forEach((wordLetter, wordIndex) => {

            if(theClickedLetter== wordLetter){

                theStatus= true;

                guessSpans.forEach((span,spanIndex)=>{

                    if(wordIndex === spanIndex) {
                        span.innerHTML= theClickedLetter;

                    }

                });



            } 

         });
         if(theStatus!==true){

            wrongAttempts++;

            theDraw.classList.add(`wrong-${wrongAttempts}`);

            // document.getElementById("fail").play();

            if(wrongAttempts=== 8){
                endGame();
                lettersContainer.classList.add("finished");
            }


         } else {
            // document.getElementById("success").play();


         }

         //console.log(theStatus);

    }
});


function endGame(){
    let div=document.createElement("div");
    let divText=document.createTextNode(`Game Over, the word is ${randomValueValue}`);

    div.appendChild(divText);

    div.className="popup";

    document.body.appendChild(div);
}

