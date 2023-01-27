// Description: This is the main file for the game. It contains the game logic for how the game works.

// table of all the cards in the deck
const cardnumber = [
  //hearts
  {name: "Ace of Heart's",       value: "1<br>♥",    colvalue: "r",    facevalue: 1,    emoji: "♥",    indeckno:0,   facecardval: 0,    numberof: [0,1,0]},
  {name: "2 of Heart's",       value: "2<br>♥",    colvalue: "r",    facevalue: 2,    emoji: "♥",    indeckno:1,   facecardval: 0,    numberof: [0,2,0]},
  {name: "3 of Heart's",       value: "3<br>♥",    colvalue: "r",    facevalue: 3,    emoji: "♥",    indeckno:2,   facecardval: 0,    numberof: [0,3,0]},    
  {name: "4 of Heart's",       value: "4<br>♥",    colvalue: "r",    facevalue: 4,    emoji: "♥",    indeckno:3,   facecardval: 0,    numberof: [2,0,2]},
  {name: "5 of Heart's",       value: "5<br>♥",    colvalue: "r",    facevalue: 5,    emoji: "♥",    indeckno:4,   facecardval: 0,    numberof: [2,1,2]},
  {name: "6 of Heart's",       value: "6<br>♥",    colvalue: "r",    facevalue: 6,    emoji: "♥",    indeckno:5,   facecardval: 0,    numberof: [3,0,3]},
  {name: "7 of Heart's",       value: "7<br>♥",    colvalue: "r",    facevalue: 7,    emoji: "♥",    indeckno:6,   facecardval: 0,    numberof: [3,1,3]},
  {name: "8 of Heart's",       value: "8<br>♥",    colvalue: "r",    facevalue: 8,    emoji: "♥",    indeckno:7,   facecardval: 0,    numberof: [4,0,4]},
  {name: "9 of Heart's",       value: "9<br>♥",    colvalue: "r",    facevalue: 9,    emoji: "♥",    indeckno:8,   facecardval: 0,    numberof: [4,1,4]},
  {name: "10 of Heart's",       value: "10<br>♥",   colvalue: "r",    facevalue: 10,    emoji: "♥",   indeckno:9,   facecardval: 0,    numberof: [4,2,4]},
  {name: "Jack of Heart's",       value: "J<br>♥",    colvalue: "r",    facevalue: 10,    emoji: "♥",    indeckno:10,   facecardval: 1,    numberof: [0,0,0]},
  {name: "Queen of Heart's",       value: "Q<br>♥",    colvalue: "r",    facevalue: 10,    emoji: "♥",    indeckno:11,   facecardval: 2,    numberof: [0,0,0]},
  {name: "King of Heart's",       value: "K<br>♥",    colvalue: "r",    facevalue: 10,    emoji: "♥",    indeckno:12,   facecardval: 3,    numberof: [0,0,0]},
  //hearts End //
  //Diamonds
  {name: "Ace of Diamond's",    value: "1<br>♦",    colvalue: "r",    facevalue: 1,    emoji: "♦",    indeckno:13,   facecardval: 0,    numberof: [0,1,0]},
  {name: "2 of Diamond's",    value: "2<br>♦",    colvalue: "r",    facevalue: 2,    emoji: "♦",    indeckno:14,   facecardval: 0,    numberof: [0,2,0]},
  {name: "3 of Diamond's",    value: "3<br>♦",    colvalue: "r",    facevalue: 3,    emoji: "♦",    indeckno:15,   facecardval: 0,    numberof: [0,3,0]},
  {name: "4 of Diamond's",    value: "4<br>♦",    colvalue: "r",    facevalue: 4,    emoji: "♦",    indeckno:16,   facecardval: 0,    numberof: [2,0,2]},
  {name: "5 of Diamond's",    value: "5<br>♦",    colvalue: "r",    facevalue: 5,    emoji: "♦",    indeckno:17,   facecardval: 0,    numberof: [2,1,2]},
  {name: "6 of Diamond's",    value: "6<br>♦",    colvalue: "r",    facevalue: 6,    emoji: "♦",    indeckno:18,   facecardval: 0,    numberof: [3,0,3]},
  {name: "7 of Diamond's",    value: "7<br>♦",   colvalue: "r",     facevalue: 7,    emoji: "♦",    indeckno:19,   facecardval: 0,    numberof: [3,1,3]},
  {name: "8 of Diamond's",    value: "8<br>♦",    colvalue: "r",    facevalue: 8,    emoji: "♦",    indeckno:20,   facecardval: 0,    numberof: [4,0,4]},
  {name: "9 of Diamond's",    value: "9<br>♦",    colvalue: "r",    facevalue: 9,    emoji: "♦",    indeckno:21,   facecardval: 0,    numberof: [4,1,4]},
  {name: "10 of Diamond's",    value: "10<br>♦",   colvalue: "r",    facevalue: 10,    emoji: "♦",   indeckno:22,   facecardval: 0,   numberof: [4,2,4]},
  {name: "Jack of Diamond's",    value: "J<br>♦",    colvalue: "r",    facevalue: 10,    emoji: "♦",    indeckno:23,   facecardval: 1,   numberof: [0,0,0]},
  {name: "Queen of Diamond's",    value: "Q<br>♦",    colvalue: "r",    facevalue: 10,    emoji: "♦",    indeckno:24,   facecardval: 2,    numberof: [0,0,0]},
  {name: "King of Diamond's",    value: "K<br>♦",    colvalue: "r",    facevalue: 10,    emoji: "♦",    indeckno:25,   facecardval: 3,    numberof: [0,0,0]},
  //Diamonds End //
      //Spade
  {name: "Ace of Spade's",    value: "1<br>♠",    facevalue: 1,    emoji: "♠",    indeckno:26,   facecardval: 0,    numberof: [0,1,0]},
  {name: "2 of Spade's",    value: "2<br>♠",    facevalue: 2,    emoji: "♠",    indeckno:27,   facecardval: 0,    numberof: [0,2,0]},
  {name: "3 of Spade's",    value: "3<br>♠",    facevalue: 3,    emoji: "♠",    indeckno:28,   facecardval: 0,    numberof: [0,3,0]},
  {name: "4 of Spade's",    value: "4<br>♠",    facevalue: 4,    emoji: "♠",    indeckno:29,   facecardval: 0,    numberof: [2,0,2]},
  {name: "5 of Spade's",    value: "5<br>♠",    facevalue: 5,    emoji: "♠",    indeckno:30,   facecardval: 0,    numberof: [2,1,2]},
  {name: "6 of Spade's",    value: "6<br>♠",    facevalue: 6,    emoji: "♠",    indeckno:31,   facecardval: 0,    numberof: [3,0,3]},
  {name: "7 of Spade's",    value: "7<br>♠",    facevalue: 7,    emoji: "♠",    indeckno:32,   facecardval: 0,    numberof: [3,1,3]},
  {name: "8 of Spade's",    value: "8<br>♠",    facevalue: 8,    emoji: "♠",    indeckno:33,   facecardval: 0,    numberof: [4,0,4]},
  {name: "9 of Spade's",    value: "9<br>♠",    facevalue: 9,    emoji: "♠",    indeckno:34,   facecardval: 0,    numberof: [4,1,4]},
  {name: "10 of Spade's",    value: "10<br>♠",   facevalue: 10,   emoji: "♠",    indeckno:35,   facecardval: 0,    numberof: [4,2,4]},
  {name: "Jack of Spade's",    value: "J<br>♠",    facevalue: 10,    emoji: "♠",    indeckno:36,   facecardval: 1,    numberof: [0,0,0]},
  {name: "Queen of Spade's",    value: "Q<br>♠",    facevalue: 10,    emoji: "♠",    indeckno:37,   facecardval: 2,    numberof: [0,0,0]},
  {name: "King of Spade's",    value: "K<br>♠",    facevalue: 10,    emoji: "♠",    indeckno:38,   facecardval: 3,    numberof: [0,0,0]},
  //Spade End //
  //Clubs
  {name: "Ace of Clubs's",    value: "1<br>♣",    facevalue: 1,    emoji: "♣",    indeckno:39,   facecardval: 0,    numberof: [0,1,0]},
  {name: "2 of Clubs's",    value: "2<br>♣",    facevalue: 2,    emoji: "♣",    indeckno:40,   facecardval: 0,    numberof: [0,2,0]},
  {name: "3 of Clubs's",    value: "3<br>♣",    facevalue: 3,    emoji: "♣",    indeckno:41,   facecardval: 0,    numberof: [0,3,0]},
  {name: "4 of Clubs's",    value: "4<br>♣",    facevalue: 4,    emoji: "♣",    indeckno:42,   facecardval: 0,    numberof: [2,0,2]},
  {name: "5 of Clubs's",    value: "5<br>♣",    facevalue: 5,    emoji: "♣",    indeckno:43,   facecardval: 0,    numberof: [2,1,2]},
  {name: "6 of Clubs's",    value: "6<br>♣",    facevalue: 6,    emoji: "♣",    indeckno:44,   facecardval: 0,    numberof: [3,0,3]},
  {name: "7 of Clubs's",    value: "7<br>♣",    facevalue: 7,    emoji: "♣",    indeckno:45,   facecardval: 0,    numberof: [3,1,3]},
  {name: "8 of Clubs's",    value: "8<br>♣",    facevalue: 8,    emoji: "♣",    indeckno:46,   facecardval: 0,    numberof: [4,0,4]},
  {name: "9 of Clubs's",    value: "9<br>♣",    facevalue: 9,    emoji: "♣",    indeckno:47,   facecardval: 0,    numberof: [4,1,4]},    
  {name: "10 of Clubs's",    value: "10<br>♣",   facevalue: 10,   emoji: "♣",    indeckno:48,   facecardval: 0,    numberof: [4,2,4]},
  {name: "Jack of Clubs's",    value: "J<br>♣",    facevalue: 10,   emoji: "♣",    indeckno:49,   facecardval: 1,    numberof: [0,0,0]},
  {name: "Queen of Clubs's",    value: "Q<br>♣",    facevalue: 10,   emoji: "♣",    indeckno:50,   facecardval: 2,    numberof: [0,0,0]},
  {name: "King of Clubs's",    value: "K<br>♣",    facevalue: 10,   emoji: "♣",    indeckno:51,   facecardval: 3,    numberof: [0,0,0]},
  //club End //
];

// how many cards are in the deck
var cardsindeck = 52;

// picking a random card
function pickedcard() {
  cardpicked = Math.floor(Math.random() * cardsindeck);
  cardsindeck = cardsindeck - 1;
  console.log(cardsindeck);
}

// listening for click
document.addEventListener("click", function () {
  pickedcard();
  createcard();
  generatecard();
  calscore();
  console.log(cardpicked);
  num = num + 1;
});

//calculating hand score
var cardsinhand = 1;
var cardscore = 0;
function calscore() {
  if (cardsinhand >= 2) {
    if (cardscore >= 22) {
      console.log("bust");
    }
    console.log(`Return ${cardscore}`);
  }
  cardsinhand = cardsinhand + 1;
}

// creating card
function createcard() {
    var player = 1
if (player == 0) {
  console.log(`Dealer = ${player}`);
  console.log(`Dealer = ${player}`);
}
if (player == 1) {
  console.log(`player = ${player}`);
//   player = 0;
  console.log(`player = ${player}`);
  document.getElementsByClassName("newcard")[1];
}
const newcard = document.getElementsByClassName("newcard")[player];
newcard.innerHTML += `
<div class="card">
      <div class="topcardclass">
        <div class="suittop"></div>
      </div>
      <div class="numbercardcont">
        <div class="columns">
          <div class="column1">
          </div>
          <div class="column2">
          </div>
          <div class="column3">
          </div>
        </div>
      </div>
      <div class="bottomcard">
        <div class="suitbtm"></div>
    </div>
    </div>
`
}

var num = 0;
// generating card with just css and html from the config
function generatecard() {
  const col1 = document.getElementsByClassName("column1")[num];
  const col2 = document.getElementsByClassName("column2")[num];
  const col3 = document.getElementsByClassName("column3")[num];
  const suittp = document.getElementsByClassName("suittop")[num];
  const suitbm = document.getElementsByClassName("suitbtm")[num];
  // loops class
  for (i = 0; i < cardnumber.length; i++) {
    if (cardpicked == cardnumber[i].indeckno) {
      //adds value of cards together
      cardscore = cardscore + cardnumber[i].facevalue;
      // console.log(cardnumber[i])
      //check numbers in array
      console.log(cardnumber[i]);
      suittp.innerHTML = `<p class=suit>${cardnumber[i].value}</p>`;
      suitbm.innerHTML = `<p class=suit>${cardnumber[i].value}</p>`;
      if (cardnumber[i].colvalue == "r") {
        col1.style.color = "red";
        col2.style.color = "red";
        col3.style.color = "red";
        suittp.style.color = "red";
        suitbm.style.color = "red";
      }
      if (cardnumber[i].numberof[0] > 0) {
        for (k = 0; k < cardnumber[i].numberof[0]; k++) {
          //     console.log(cardnumber[i].numberof[j])
          col1.innerHTML += `<p class=suit>${cardnumber[i].emoji}</p>`;
          console.log(cardnumber[i].numberof[0]);
        }
      }
      if (cardnumber[i].numberof[1] >= 0) {
        for (k = 0; k < cardnumber[i].numberof[1]; k++) {
          //     console.log(cardnumber[i].numberof[j])
          col2.innerHTML += `<p class=suit>${cardnumber[i].emoji}</p>`;
          console.log(cardnumber[i].numberof[1]);
        }
      }
      if (cardnumber[i].numberof[0] > 0) {
        for (k = 0; k < cardnumber[i].numberof[2]; k++) {
          //     console.log(cardnumber[i].numberof[j])
          col3.innerHTML += `<p class=suit>${cardnumber[i].emoji}</p>`;
          console.log(cardnumber[i].numberof[2]);
        }
      }
    }
  }
}
