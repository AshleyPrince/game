//Spieler

const player = {
  name: "",
  points: 100,
  round: 0,
} 

const playerNameDiv = document.querySelector('.spielerName');

document.getElementById("answer").onclick = () => {

 
  player.name = document.getElementById("input_SpielerName").value

  console.log(player.name)
  console.log(player.name.length)
  if (player.name.length >= 2){
    console.log("hier wird der Playername zugewiesen")
    playerNameDiv.innerHTML = player.name
    createTexts()
    newQuestion()//das nächste mal parameter dazu geben
  }else{
    alert("dein Name scheint mir aber nicht richtig zu sein.")
  }
}

let merlin = []
let answer = []
let reactions = []
let reactionImgs = []

function createTexts(){
  //Merlins Texte
  merlin=[
    {question: "Oh, Hallo. Willkommen im Hexen Laden 'Amahara'. Kann ich dir irgendwie weiterhelfen?"},
    {question: "Lass es mich wissen, wenn ich dir weiter helfen kann."},
    {question: "Verrätst du mir noch wie du heißt?"},
    {question: "gespräch4"},
    {question: "gespräch5"},
    {question: "gespräch6"},
    {question: "gespräch7"},
    {question: "gespräch8"},
    {question: "gespräch9"},
  ]
  
  
  
  //Spieler Texte
  answer=[
    {antwortPos: "Ein Freund hat mir diesen Laden empfohlen. Er hat gesagt es würde hier jemanden geben, der in die Zukunft sehen kann.", 
    antwortNeu: "Ich bin mir nicht sicher...",
    antwortNegativ: "Ein Freund meinte hier gibt es eine Magierin die in die Zukunft gucken kann, ist das aber nicht Blödsinn?"},
    
    {antwortPos: "Also wenn du mir sagen könntest, was mich in naher Zukunft erwarten wird, erwarten wird, wäre das echt cool! Ich finde sowas super spannend!", 
    antwortNeu: "Kannst du bitte eine Vorhersage für mich machen?",
    antwortNegativ: "Na dann zeig mal was die Zukunft für mich bereit hält, kleine Hexe."},
    
    {antwortPos: `Ich heiße ${player.name}, freut mich dich kenne zu lernen. Und wie heißt du?`, 
    antwortNeu: `Ich heiße ${player.name}. Und wie heißt du?`,
    antwortNegativ: `Ich heiße ${player.name}, dachte du kannst sowas 'sehen'. Und wie heißt du?`},

    {antwortPos: "pos4", antwortNeu: "neu4",antwortNegativ: "neg4"},
    {antwortPos: "pos5", antwortNeu: "neu5",antwortNegativ: "neg5"},
    {antwortPos: "pos6", antwortNeu: "neu6",antwortNegativ: "neg6"},
    {antwortPos: "pos7", antwortNeu: "neu7",antwortNegativ: "neg7"},
    {antwortPos: "pos8", antwortNeu: "neu8",antwortNegativ: "neg8"},
    {antwortPos: "pos9", antwortNeu: "neu9",antwortNegativ: "neg9"},
  ]
  
  //Merlins reaktionen
  reactions=[
    {antwortPos: "Also, so weit würde ich jetzt nicht gehen. Aber ich kann grobe Vorahnung über die Zukunft einer Person heraufbeschwören.", 
    antwortNeu: "Du kannst dich gerne erstmal umsehen wenn du möchtest. Ich kann dir auch die Karten legen wenn du Interesse daran hast.",
    antwortNegativ: "Also, ersteinmal bin ich eine Hexe, keine Magierin! Ganz großer Unterschied!"},
  
    {antwortPos: "Natürlich, sehr gerne!", 
    antwortNeu: "Gerne doch.",
    antwortNegativ: "...wieso nicht."},
    
    {antwortPos: "pos3", antwortNeu: "neu3",antwortNegativ: "neg3"},
    {antwortPos: "pos4", antwortNeu: "neu4",antwortNegativ: "neg4"},
    {antwortPos: "pos5", antwortNeu: "neu5",antwortNegativ: "neg5"},
    {antwortPos: "pos6", antwortNeu: "neu6",antwortNegativ: "neg6"},
    {antwortPos: "pos7", antwortNeu: "neu7",antwortNegativ: "neg7"},
    {antwortPos: "pos8", antwortNeu: "neu8",antwortNegativ: "neg8"},
    {antwortPos: "pos9", antwortNeu: "neu9",antwortNegativ: "neg9"},
  ]
  
  reactionImgs = {antwortPos: "/imgPos.jpg", antwortNeu: "/imgNeutral.jpg",antwortNegativ: "/imgNeg.jpg"}
}


//verknüpfung

const antwortBox = document.querySelector('.antwortBox');

const merlinText = document.querySelector('.merlin');


// Punke Sytem
let positive = 5;
let neutral = 0;
let negative = -5;

//Merlins Reaktionen
function showReaction(antwort, round){
  console.log("Reaction suchen")
  merlinText.innerHTML = reactions[round][antwort]
  antwortBox.innerHTML = `
    <button class="antwortBtn" onclick="newQuestion()">
    weiter
    </button>`
  
}


//Funktion die Punkte zuordnet, je nach dem was wir geantwortet haben + nächste runde + merlin reaktion
function next (antwort){
console.log('Antwort des Spielers: ', antwort);
  if ("antwortPos" === antwort) {
  player.points += positive;
} else if ("antwortNegativ" === antwort){
  player.points += negative;
} 
showReaction(antwort, player.round) 
player.round++
console.log("Runde ist:"+player.round)
console.log("Punkte sind:"+player.points)
// return player.points
}

//Merlins Reaktion
function clearMerlin(){
  merlinText.innerHTML= '<p></p>'
}



//nächste Frage des Spielers und neuer Melrin text?
function newQuestion(){
  let currentQuestions=[
    `<button class="antwortBtn" onclick="checkAnswer(this)">
  ${answer[player.round].antwortPos}
  </button>`,
  `  <button class="antwortBtn" onclick="checkAnswer(this)">
  ${answer[player.round].antwortNeu}
  </button>`,
  `  <button class="antwortBtn" onclick="checkAnswer(this)">
  ${answer[player.round].antwortNegativ}
  </button>` ]

  merlinText.innerHTML= merlin[player.round].question
  antwortBox.innerHTML = ""
 
  let usedAnswer = [0,1,2]

//Setzt die Fragen in eine Random Reihnfolge
  for( let i = 0; i<3; i++){
    let x = Math.floor(Math.random() * (usedAnswer.length - 1)) 
    antwortBox.innerHTML += currentQuestions[usedAnswer[x]]
    usedAnswer.splice(x,1)
  }
}

//funktion die schaut was der Spieler geantwortet hat
function checkAnswer(e){
  let currentAnswer = e.innerText
  console.log('Unsere Antwort: ',currentAnswer);
  //Check if neutral or pos ...
  //such den Value und sag mir den key
  for (const elem in answer[player.round]){
    console.log(player.round)
    console.log(answer[player.round])
     if(answer[player.round][elem] === currentAnswer ){
      next(elem)
    }
  }
}






