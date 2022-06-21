//Spieler

const player = {
  name: "Edgar",
  points: 100,
  round: 0,
} 

//Merlins Texte
const merlin=[
  {reaction: ""},
  {reaction: ""},
  {reaction: ""},
  {reaction: ""},
  {reaction: ""},
  {reaction: ""},
  {reaction: ""},
  {reaction: ""},
]


//Antworten auf Spieler Reaktion
const question=[
  {antwortPos: "pos1", antwortNeu: "neu1",antwortNegativ: "neg1"},
  {antwortPos: "pos2", antwortNeu: "neu2",antwortNegativ: "neg2"},
  {antwortPos: "pos3", antwortNeu: "neu3",antwortNegativ: "neg3"},
  {antwortPos: "pos4", antwortNeu: "neu4",antwortNegativ: "neg4"},
  {antwortPos: "pos5", antwortNeu: "neu5",antwortNegativ: "neg5"},
  {antwortPos: "pos6", antwortNeu: "neu6",antwortNegativ: "neg6"},
  {antwortPos: "pos7", antwortNeu: "neu7",antwortNegativ: "neg7"},
  {antwortPos: "pos8", antwortNeu: "neu8",antwortNegativ: "neg8"},
  {antwortPos: "pos9", antwortNeu: "neu9",antwortNegativ: "neg9"},
]

//Buttons
//brauch ich nicht mehr?
const form = document.querySelector('#form')

const antwortBox = document.querySelector('.antwortBox')

//brauch ich nicht mehr?
const btnSubmit = document.querySelector("#answer");

const merlinText = document.querySelector('.merlin')


// Punke Sytem
let positive = 5;
let neutral = 0;
let negative = -5;

//Funktion die Punkte zuordnet, je nach dem was wir geantwortet haben
function next (antwort){
console.log('Antwort des Spielers: ', antwort);
  if ("antwortPos" === antwort) {
  player.points += positive;
} else if ("antwortNegativ" === antwort){
  player.points += negative;
} 
player.round++
console.log("Runde ist:"+player.round)
console.log("Punkte sind:"+player.points)
newQuestion()
// return player.points
}

//Merlins neuer Text
function clearMerlin(){
  merlinText.innerHTML= '<p></p>'
}

//In der funktion soll Merlins text aus der const genommen werden
function newMerlinText(){
  merlinText.innerHTML= '<p>Ich bin neuer Text</p>'
}

//nächste Frage des Spielers und neuer Melrin text?
function newQuestion(){
  clearMerlin()
  antwortBox.innerHTML = `
  <button class="antwortBtn" onclick="checkAnswer(this)">
  ${question[player.round].antwortPos}
  </button>
  <button class="antwortBtn" onclick="checkAnswer(this)">
  ${question[player.round].antwortNeu}
  </button>
  <button class="antwortBtn" onclick="checkAnswer(this)">
  ${question[player.round].antwortNegativ}
  </button>
  `
  newMerlinText()
}

//funktion die schaut was der Spieler geantwortet hat
function checkAnswer(e){
  let answer = e.innerText
  console.log('Unsere Antwort: ',answer);
  //Check if neutral or pos ...
  //such den Value und sag mir den key
  for (const elem in question[player.round]){
    if(question[player.round][elem] === answer ){
      next(elem)
    }
  }
}



answer.onclick = () => {
  newQuestion()
}




