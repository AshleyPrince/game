//Spieler

const player = {
  name: "",
  points: 110,
  round: 0,
} 

//verknüpfung

let sprechblase = document.querySelector('.sprechblase')

let merlinImgs = document.querySelector('.lin');

const antwortBox = document.querySelector('.antwortBox');

const merlinText = document.querySelector('.merlin');

const playerNameDiv = document.querySelector('.spielerName');

const klickSound = new Audio("./sounds/click.wav");

const klickSoundAnswer = new Audio("./sounds/click_answer.wav")

let merlin = []
let answer = []
let reactions = []
let reactionImgs = []


//Funktion die die Elemente Sichtbar macht
function makeVisible(element){
  element.classList.remove('notvisible')
}

//Funktion die die Elemente Unsichtbar macht
function makeUnvisible(element){
  element.classList.add('notvisible')
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
  }else if(emotion === 'bad_end'){
    merlinImgs.src='./bilder/bad_end.jpg'
  }else if(emotion === 'happy_end'){
    merlinImgs.src='./bilder/happyend.jpg'
  }else if(emotion === 'neutral_end'){
    merlinImgs.src='./bilder/neutral_end.jpg'
  }else{
    merlinImgs.src='./bilder/lin_neutral.jpg'
  }
}


//START DES SPIELS
//Spieler Name wird eingefügt und Spiel wird gestartet(beginnt mit erster Text)
document.getElementById("answer").onclick = () => {
  klickSound.play();
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
   /*1*/ {question: "Oh, Hallo. Willkommen im Hexen Laden 'Amahara'. Kann ich dir irgendwie weiterhelfen?"},
    
   /*2*/{question: "Lass es mich wissen, wenn ich dir weiter helfen kann."},
    
   /*3*/{question: "Verrätst du mir noch wie du heißt?"},
    
   /*4*/{question: "Hmm.... Interessant."},
    
   /*5*/{question: "In deinen Karten sehe ich, dass dir ein Neuanfang bevor steht, mit neuen, unbekannten Ängsten."},
    
   /*6*/{question: `Interessierst du dich nur fürs Karten legen oder generell für Magie und Okkultes, ${player.name}?`},
    
   /*7*/{question:"Gibt es sonst noch etwas, was du wissen willst?"},
    
   /*8*/{question:`Du bist ja ganz schön Neugierig, ${player.name}.`},
    
   /*9*/{question:"Wusstest du, dass es hier in Chicago viele Vampire gibt?"},
    
   /*10*/{question:"Aber die wenigsten Vampire haben was mit Hexerei am Hut."},
    
   /*11*/{question: "Also wenn du möchtest, kann ich dir gerne mehr über Hexerei und Magie erzählen."},
  ]
  
  //Spieler Antwort Möglichkeiten
  answer=[
    /*1*/{antwortPos: "Ein Freund hat mir diesen Laden empfohlen. Er hat gesagt es würde hier jemanden geben, der in die Zukunft sehen kann.", 
    antwortNeu: "Ich bin mir nicht sicher...",
    antwortNegativ: "Ein Freund meinte hier gibt es eine Magierin die in die Zukunft gucken kann, ist das aber nicht Blödsinn?"},
    
    /*2*/{antwortPos: "Also wenn du mir sagen könntest, was mich in naher Zukunft erwarten wird, wäre das echt cool! Ich finde sowas super spannend!", 
    antwortNeu: "Kannst du bitte eine Vorhersage für mich machen?",
    antwortNegativ: "Na dann zeig mal was die Zukunft für mich bereit hält, kleine Hexe."},
    
    /*3*/{antwortPos: `Ich heiße ${player.name}, freut mich dich kenne zu lernen. Und wie heißt du?`, 
    antwortNeu: `Ich heiße ${player.name}. Und wie heißt du?`,
    antwortNegativ: `Ich heiße ${player.name}, dachte du kannst sowas 'sehen'. Und wie heißt du?`},

    /*4*/{antwortPos: "Kannst du etwas sehen? Ich hoffe es ist nichts schlimmes?", 
    antwortNeu: "Was ist interessant?",
    antwortNegativ: "Weißt du, eigentlich interessiert mich sowas ja gar nicht, ich bin nur wegen dir hier."},

    /*5*/{antwortPos: "Kannst du mir das bitte genauer erklären?", 
    antwortNeu: "Und was soll das genau heißen?",
    antwortNegativ: "Woooow, was für eien krasse Vorhersage."},

    /*6*/{antwortPos: "Ja, ich finde Vampire total cool!", 
    antwortNeu: "Ich finde Werwölfe ziemlich cool.",
    antwortNegativ: "Nein, eigentlich nicht. Hätte mein Kumpel mir den Laden nicht empfohlen, wäre ich nicht hier"},

    /*7*/{antwortPos: "Sei bitte ehrlich, bist du wirklich eine Hexe?", 
    antwortNeu: "Warum bist du eigentlich so…extrem weiß? Ist das deine Naturhaarfarbe?",
    antwortNegativ: "Was ist das Ding mit den Schmetterlingen hier?"},

    /*8*/{antwortPos: "Oh sorry, ich wollte nicht unhöflich sein! Aber das ist alles ziemlich spannend! Kannst du mir mehr über dich erzählen?", 
    antwortNeu: "Ich bin ziemlich neugierig, tut mir leid. Kannst du eigentlich noch andere Dinge tun, außer Karten legen?",
    antwortNegativ: "Tut mir leid, aber das war zumindest interessanter als die Sache mit den Karten. Kannst du sonst noch was Cooles?"},

    /*9*/{antwortPos: "Echt jetzt? Wie viele und kennst du die alle?", 
    antwortNeu: "Oh was ehrlich? Jagen die uns Menschen? Die sind doch sicher gefährlich!",
    antwortNegativ: "…ehrlich? Was sind das für welche? Sind die so wie du?"},

    /*10*/{antwortPos: "Das heißt du hast mehr mit Hexen zu tun als mit Vampiren?",
     antwortNeu: "Verstehe. Kann jeder Mensch Hexerei erlernen?",
     antwortNegativ: "Finden Vampire das öde oder was?"},

    /*11*/{antwortPos: "Was wirklich? Klar gerne!",
     antwortNeu: "Wieso nicht, hast du Bücher darüber oder sowas?",
     antwortNegativ: "Na klar, glaubst du wirklich daran, das du eine 'echte' Hexe bist?."},

  ]
  
  //Merlins Reaktionen auf den Spieler
  reactions=[
    /*1*/{antwortPos: "Also, so weit würde ich jetzt nicht gehen. Aber ich kann grobe Vorahnung über die Zukunft einer Person heraufbeschwören.", 
    antwortNeu: "Du kannst dich gerne erstmal umsehen, wenn du möchtest. Ich kann dir auch die Karten legen wenn du Interesse daran hast.",
    antwortNegativ: "Also, ersteinmal bin ich eine Hexe, keine Magierin! Ganz großer Unterschied!"},
  
    /*2*/{antwortPos: "Natürlich, sehr gerne!", 
    antwortNeu: "Gerne doch.",
    antwortNegativ: "...wieso nicht."},
    
    /*3*/{antwortPos: "Ich heiße Merlin, freut mich ebenso.",
     antwortNeu: "Ich heiße Merlin.",
     antwortNegativ: "Ich kann zumindest sehen, ohne dir die Karten legen zu müssen, dass deine Zukunft sicher nicht rosig aussehen wird. ....Aber du kannst mich Merlin nennen."},

    /*4*/{antwortPos: "Nein, mach dir keine Sorgen!", 
    antwortNeu: "Deine Karten sind interessant. Mach dir keine Sorgen, ist nichts schlimmes.",
    antwortNegativ: "Tja, also ich kann dir nur mit den Karten dienen."},

    /*5*/{antwortPos: "Es bedeutet, wenn du.... standhaft bleibst, wird alles gut.~",
     antwortNeu: "Es heißt so viel wie, wenn du standhaft bleibst, wird alles gut.",
     antwortNegativ: "Weißt du, hier steht eigentlich, das alles gut wird, wenn du nur standhaft bleibst. Solangsam glaube ich aber das sich die Karten da irren..."},

     /*6*/{antwortPos: "Vampire also? Ja die… mag ich auch. Auch wenn sie ziemlich gefährlich sein können. Aber große Macht ist nun mal auch immer gefährlich. Zumindest in den Falschen Händen.",
     antwortNeu: "Werwölfe sind cool, das stimmt. Leider greifen die mich an sobald sie auch nur Sichtkontakt bekommen. Die scheinen meine Sippe nicht sonderlich zu mögen.",
     antwortNegativ: "Na zumindest hat dein Kumpel einen guten Geschmack."},

     /*7*/{antwortPos: "Ja und nein. Ich bin ein Vampir. Darum hat der Laden hier auch nur nachts geöffnet. Aber ich bin als Hexe geboren worden. Und lange bevor ich in einen Vampir verwandelt wurde, konnte ich schon zaubern. Ich bin also irgendwie beides.",
     antwortNeu: "Die Frage höre ich öfter. Ich bin ein Albino. Mein Zwillingsbruder hat kein Albinismus und sieht mir daher null ähnlich. Im Gegensatz zu mir kann man bei ihm unsere persischen Wurzeln sehr gut erkennen.",
     antwortNegativ: "Das Ding? Nun Ich kann mit allen Tieren sprechen. Und Schmetterlinge fallen jetzt im Sommer nicht auf. Ich lass sie in der ganzen Stadt fliegen und sie versorgen mich mit Informationen."},

     /*8*/{antwortPos: "Über mich? Puh. Naja ich bin eine ganz passable Heilerin, ich kann Auren sehen und mich und andere Lebewesen in Tiere verwandeln. Und da ich ein Vampir bin, eben auch Vampir-Kram.",
     antwortNeu: "Hmmm, ja ich habe ein paar…nette Tricks auf Lager. Und da ich ein Vampir bin, eben auch Vampir-Kram.",
     antwortNegativ: "Das wüsstest du wohl gern! Ich verrate dir so viel: Alles was ein Vampir kann, kann ich auch. "},

     /*9*/{antwortPos: "Um die 70 glaube ich. Und ja tatsächlich kenne ich alle. Wir treffen uns ab und an. In größeren Städten wie dieser hier, gibt es eine klare Hierarchi und regeln bei uns Vampiren.",
     antwortNeu: "Es ist streng genommen verboten einen Menschen zu töten also mach dir keine Sorgen. Viele kaufen sich Blut im Krankenhaus. Die, die kein Geld für sowas haben gehen in Clubs, verführen Menschen und trinken dann beim rummachen ein paar schlucke. Aber nie so viel das es auffällt.",
     antwortNegativ: "Was genau meinst du mit 'wie ich'? Wir sind genau so individuell wie ihr Menschen. Aber ich gehöre definitiv zu den…freundlicheren."},

     /*10*/{antwortPos: "Nein. Die überaus meisten Hexen und Magier verstecken sich vor Vampiren. Es gibt einige die mich noch aus meiner sterblichen Zeit kennen. Aber mittlerweile habe ich mehr mit Vampiren zu tun.",
     antwortNeu: "In gewisser Weise ja. Manche haben dafür mehr Talent als andere. Aber wenn man sich wirklich reinkniet, kann man auf jeden Fall zaubern lernen.",
     antwortNegativ: "NIEMAND findet Hexerei öde! Im Gegensatz zu Menschen könne nicht alle Vampire Magie wirken. Und Vampire sind da wie Menschen: Was sie nicht können und verstehe finden sie meistens gruselig."},


    /*11*/{antwortPos: "Wie wäre es wenn ich dir bei einem Date mehr davon erzähle?~",
     antwortNeu: "Hier hast du einpaar Broschüren, ich wünsche dir noch einen schönen Tag!",
     antwortNegativ: "Wie wäre es, wenn ich dir meine Hexerei am eigenen Leib präsentiere?"},
    ]
  }


// Punke Sytem
let positive = 5;
let neutral = 0;
let negative = -10;

//Merlins Text Reaktionen (Runde 4 bei positiver antwort, spezielles Bild)
function showReaction(antwort, round){

  if(player.round == 10){//Zeigt Ende bei runde 10 nach spieler antwort
    endResultat(player)
    makeUnvisible(sprechblase)
    makeUnvisible(playerNameDiv)
  }else if(player.round == 4 && antwort === 'antwortPos'){
    changePicture('wink')
  }else{
    changePicture(antwort)  
  }
  
  if(player.round == 10){
    antwortBox.innerHTML = `Das Spiel ist zu ende`
  }else{
    merlinText.innerHTML = reactions[round][antwort]
    antwortBox.innerHTML = `
      <button class="antwortBtn" onclick="newQuestion()">
      weiter
      </button>`
  }
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
    console.log(player.points)
    showReaction(antwort, player.round) 
    player.round++
  
}



//Antwortmöglichkeiten des Spielers(Bei runde 3 spezielles Bild)
function newQuestion(){
  if(player.round == 3){
    changePicture("karten")
  }else{
    changePicture()
  }
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
    //console.log(Math.random()*3)
    let x = Math.floor(Math.random() * (usedAnswer.length)) 
    antwortBox.innerHTML += currentQuestions[usedAnswer[x]]
    usedAnswer.splice(x,1)
  }

}

//funktion die schaut was der Spieler geantwortet hat
function checkAnswer(e){
  let currentAnswer = e.innerText
  klickSoundAnswer.play();

  //Check if neutral or pos ...
  //such den Value und sag mir den key
  for (const elem in answer[player.round]){
      if(answer[player.round][elem] === currentAnswer ){
      next(elem)
    }
  }
}

//Ende des Spiels(End Bild)

function endResultat(player){
  if (player.points <= 50 ) {
    changePicture("bad_end")
  }else if(player.points >= 145 ){
    changePicture("happy_end")
  }else{
    changePicture("neutral_end")
  }
}
