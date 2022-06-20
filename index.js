//Spieler

const player = {
  name: "Edgar",
  points: 100
} 

//Antworten auf Spieler Reaktion
const question=[
  {antwortPos: "lorem", antwortNeu: "lorem Neutral",antwortNegativ: "meh"},
  {antwortPos: "lorem", antwortNeu: "lorem Neutral",antwortNegativ: "meh"},
  {antwortPos: "lorem", antwortNeu: "lorem Neutral",antwortNegativ: "meh"},
  {antwortPos: "lorem", antwortNeu: "lorem Neutral",antwortNegativ: "meh"},
  {antwortPos: "lorem", antwortNeu: "lorem Neutral",antwortNegativ: "meh"},
  {antwortPos: "lorem", antwortNeu: "lorem Neutral",antwortNegativ: "meh"},
  {antwortPos: "lorem", antwortNeu: "lorem Neutral",antwortNegativ: "meh"},
  {antwortPos: "lorem", antwortNeu: "lorem Neutral",antwortNegativ: "meh"},
  {antwortPos: "lorem", antwortNeu: "lorem Neutral",antwortNegativ: "meh"},
]

//Buttons
const btnPositiv = document.querySelector("#positive");
const btnNeutral = document.querySelector("#neutral");
const btnNegativ = document.querySelector("#negative");
const btnSubmit = document.querySelector("#answer");
btnNegativ.addEventListener("click", next)

// Punke Sytem
let positive = 5;
let neutral = 0;
let negative = -5;

//Funktion die Punkte zuordnet
function next (e){
if (btnPositiv.checked === true) {
  player.points + positive;
} else if (btnNegativ.checked === true){
  player.points + negative;
}
return player.points
}

//nächste Frage
