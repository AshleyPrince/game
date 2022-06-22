//Spieler

const player = {
  name: "",
  points: 100,
  round: 0,
} 

//verknüpfung

let sprechblase = document.querySelector('.sprechblase')

let merlinImgs = document.querySelector('.lin');

const antwortBox = document.querySelector('.antwortBox');

const merlinText = document.querySelector('.merlin');

const playerNameDiv = document.querySelector('.spielerName');


let merlin = []
let answer = []
let reactions = []
let reactionImgs = []


//Funktion die die Elemente Sichtbar macht

function makeVisible(element){
element.classList.remove('notvisible')
}

//funktion die Merlisn Reationen je nach Emotion ändert
function changePicture(emotion){
  if (emotion === 'antwortPos') {
    merlinImgs.src='./bilder/lin_happy.jpg'
  }else if (emotion === 'antwortNegativ'){
    merlinImgs.src='./bilder/lin_angry.jpg'
  }else if(emotion === 'wink'){
    merlinImgs.src='./bilder/lin_wink.jpg'
  }else if(emotion === 'karten'){
    merlinImgs.src='./bilder/lin.jpg'
  }else{
    merlinImgs.src='./bilder/lin_neutral.jpg'
  }
}

//START DES SPIELS
//Spieler Name wird eingefügt und Spiel wird gestartet(beginnt mit erster Text)
document.getElementById("answer").onclick = () => {
  player.name = document.getElementById("input_SpielerName").value

  if (player.name.length >= 2){
    makeVisible(playerNameDiv)
    makeVisible(sprechblase)
    changePicture()
    playerNameDiv.innerHTML = player.name
    createTexts()
    newQuestion()//das nächste mal parameter dazu geben
  }else{
    alert("Dein Name muss mindestens zwei Zeichen lang sein.")
  }
}


//Alle Texte für das Spiel
function createTexts(){
  //Merlins Texte
  merlin=[
    {question: "Oh, Hallo. Willkommen im Hexen Laden 'Amahara'. Kann ich dir irgendwie weiterhelfen?"},
    {question: "Lass es mich wissen, wenn ich dir weiter helfen kann."},
    {question: "Verrätst du mir noch wie du heißt?"},
    {question: "Hmm.... Interessant."},
    {question: "In deinen Karten sehe ich, dass dir ein Neuanfang bevor steht, mit neuen, unbekannten Ängsten."},
    {question: `Interessierst du dich nur fürs Karten legen oder generell für Magie und Hexerei, ${player.name}?`},
    {question: "Also wenn du möchtest, kann ich dir gerne mehr über Hexerei und Magie erzählen."},
  ]
  
  //Spieler Antwort Möglichkeiten
  answer=[
    {antwortPos: "Ein Freund hat mir diesen Laden empfohlen. Er hat gesagt es würde hier jemanden geben, der in die Zukunft sehen kann.", 
    antwortNeu: "Ich bin mir nicht sicher...",
    antwortNegativ: "Ein Freund meinte hier gibt es eine Magierin die in die Zukunft gucken kann, ist das aber nicht Blödsinn?"},
    
    {antwortPos: "Also wenn du mir sagen könntest, was mich in naher Zukunft erwarten wird, wäre das echt cool! Ich finde sowas super spannend!", 
    antwortNeu: "Kannst du bitte eine Vorhersage für mich machen?",
    antwortNegativ: "Na dann zeig mal was die Zukunft für mich bereit hält, kleine Hexe."},
    
    {antwortPos: `Ich heiße ${player.name}, freut mich dich kenne zu lernen. Und wie heißt du?`, 
    antwortNeu: `Ich heiße ${player.name}. Und wie heißt du?`,
    antwortNegativ: `Ich heiße ${player.name}, dachte du kannst sowas 'sehen'. Und wie heißt du?`},

    {antwortPos: "Kannst du etwas sehen? Ich hoffe es ist nichts schlimmes?", 
    antwortNeu: "Was ist interessant?",
    antwortNegativ: "Weißt du, eigentlich interessiert mich sowas ja gar nicht, ich bin nur wegen dir hier."},

    {antwortPos: "Kannst du mir das bitte genauer erklären?", 
    antwortNeu: "Und was soll das genau heißen?",
    antwortNegativ: "Woooow, was für eien krasse Vorhersage."},

    {antwortPos: "Ich interessiere mich total dafür! Ich wünschte sowas gäbe es wirklich!", 
    antwortNeu: "Ich find es ganz cool. Iin Filmen und Spielen ist das echt cool.",
    antwortNegativ: "Quatsch. Sowas gibts doch nicht. Das haben sich Leute nur für Kinder ausgedacht oder um Leuten das Geld aus der Tasche zu ziehen."},

    {antwortPos: "Was wirklich? Klar gerne!",
     antwortNeu: "Wieso nicht, hast du Bücher darüber oder sowas?",
     antwortNegativ: "Na klar, glaubst du wirklich daran, das du eine 'echte' Hexe bist?."},

  ]
  
  //Merlins Reaktionen auf den Spieler
  reactions=[
    {antwortPos: "Also, so weit würde ich jetzt nicht gehen. Aber ich kann grobe Vorahnung über die Zukunft einer Person heraufbeschwören.", 
    antwortNeu: "Du kannst dich gerne erstmal umsehen, wenn du möchtest. Ich kann dir auch die Karten legen wenn du Interesse daran hast.",
    antwortNegativ: "Also, ersteinmal bin ich eine Hexe, keine Magierin! Ganz großer Unterschied!"},
  
    {antwortPos: "Natürlich, sehr gerne!", 
    antwortNeu: "Gerne doch.",
    antwortNegativ: "...wieso nicht."},
    
    {antwortPos: "Ich heiße Merlin, freut mich ebenso.",
     antwortNeu: "Ich heiße Merlin.",
     antwortNegativ: "Ich kann zumindest sehen, ohne dir die Karten legen zu müssen, dass deine Zukunft sicher nicht rosig aussehen wird. ....Aber du kannst mich Merlin nennen."},

    {antwortPos: "Nein, mach dir keine Sorgen!", 
    antwortNeu: "Deine Karten sind interessant. Mach dir keine Sorgen, ist nichts schlimmes.",
    antwortNegativ: "Tja, also ich kann dir nur mit den Karten dienen."},

    {antwortPos: "Es bedeutet, wenn du.... standhaft bleibst, wird alles gut.~",
     antwortNeu: "Es heißt so viel wie, wenn du standhaft bleibst, wird alles gut.",
     antwortNegativ: "Weißt du, hier steht eigentlich, das alles gut wird, wenn du nur standhaft bleibst. Solangsam glaube ich aber das sich die Karten da irren..."},

    {antwortPos: "Mir geht es genau so! Ich hab mich schon als kleines Kind für Okkulte Sachen interessiert!",
     antwortNeu: "Ah, verstehe. Geht mir ähnlich. Ich mochte es in Harry Potter sehr.",
     antwortNegativ: "Ist das so?"},

    {antwortPos: "Wie wäre es wenn ich dir bei einem Date mehr davon erzähle?~",
     antwortNeu: "Hier hast du einpaar Broschüren, ich wünsche dir noch einen schönen Tag!",
     antwortNegativ: "Wie wäre es, wenn ich dir meine Hexerei am eigenen Leib präsentiere?"},
    ]
  }


// Punke Sytem
let positive = 5;
let neutral = 0;
let negative = -5;

//Merlins Text Reaktionen
function showReaction(antwort, round){
  console.log("Reaction suchen")
  changePicture(antwort)
  merlinText.innerHTML = reactions[round][antwort]
  antwortBox.innerHTML = `
    <button class="antwortBtn" onclick="newQuestion()">
    weiter
    </button>`
}

//Merlins Reaktion
function clearMerlin(){
  merlinText.innerHTML= '<p></p>'
}


//Funktion die Punkte zuordnet, je nach dem was wir geantwortet haben + nächste runde + merlin reaktion
function next (antwort){
    if ("antwortPos" === antwort) {
    player.points += positive;
  } else if ("antwortNegativ" === antwort){
    player.points += negative;
  } 

  showReaction(antwort, player.round) 
  player.round++
}



//Antwortmöglichkeiten des Spielers
function newQuestion(){
  changePicture()
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

//Setzt die Fragen in eine random Reihnfolge
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



