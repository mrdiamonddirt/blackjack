const cardnumber = [
    //hearts
    {suit: "heart",       value: "1h",    facevalue: 1,    emoji: "♥",    indeckno:0,   facecardval: 0,    numberof: [0,1,0]},
    {suit: "heart",       value: "2h",    facevalue: 2,    emoji: "♥",    indeckno:1,   facecardval: 0,    numberof: [0,2,0]},
    {suit: "heart",       value: "3h",    facevalue: 3,    emoji: "♥",    indeckno:2,   facecardval: 0,    numberof: [0,3,0]},    
    {suit: "heart",       value: "4h",    facevalue: 4,    emoji: "♥",    indeckno:3,   facecardval: 0,    numberof: [2,0,2]},
    {suit: "heart",       value: "5h",    facevalue: 5,    emoji: "♥",    indeckno:4,   facecardval: 0,    numberof: [2,1,2]},
    {suit: "heart",       value: "6h",    facevalue: 6,    emoji: "♥",    indeckno:5,   facecardval: 0,    numberof: [3,0,3]},
    {suit: "heart",       value: "7h",    facevalue: 7,    emoji: "♥",    indeckno:6,   facecardval: 0,    numberof: [3,1,3]},
    {suit: "heart",       value: "8h",    facevalue: 8,    emoji: "♥",    indeckno:7,   facecardval: 0,    numberof: [4,0,4]},
    {suit: "heart",       value: "9h",    facevalue: 9,    emoji: "♥",    indeckno:8,   facecardval: 0,    numberof: [4,1,4]},
    {suit: "heart",       value: "10h",   facevalue: 10,    emoji: "♥",   indeckno:9,   facecardval: 0,    numberof: [4,2,4]},
    {suit: "heart",       value: "Jh",    facevalue: 10,    emoji: "♥",    indeckno:10,   facecardval: 1,    numberof: [0,0,0]},
    {suit: "heart",       value: "Qh",    facevalue: 10,    emoji: "♥",    indeckno:11,   facecardval: 2,    numberof: [0,0,0]},
    {suit: "heart",       value: "Kh",    facevalue: 10,    emoji: "♥",    indeckno:12,   facecardval: 3,    numberof: [0,0,0]},
    //hearts End //
    //Diamonds
    {suit: "Diamonds",    value: "1d",    facevalue: 1,    emoji: "♦",    indeckno:13,   facecardval: 0,    numberof: [0,1,0]},
    {suit: "Diamonds",    value: "2d",    facevalue: 2,    emoji: "♦",    indeckno:14,   facecardval: 0,    numberof: [0,2,0]},
    {suit: "Diamonds",    value: "3d",    facevalue: 3,    emoji: "♦",    indeckno:15,   facecardval: 0,    numberof: [0,3,0]},
    {suit: "Diamonds",    value: "4d",    facevalue: 4,    emoji: "♦",    indeckno:16,   facecardval: 0,    numberof: [2,0,2]},
    {suit: "Diamonds",    value: "5d",    facevalue: 5,    emoji: "♦",    indeckno:17,   facecardval: 0,    numberof: [2,1,2]},
    {suit: "Diamonds",    value: "6d",    facevalue: 6,    emoji: "♦",    indeckno:18,   facecardval: 0,    numberof: [3,0,3]},
    {suit: "Diamonds",    value: "7d",    facevalue: 7,    emoji: "♦",    indeckno:19,   facecardval: 0,    numberof: [3,1,3]},
    {suit: "Diamonds",    value: "8d",    facevalue: 8,    emoji: "♦",    indeckno:20,   facecardval: 0,    numberof: [4,0,4]},
    {suit: "Diamonds",    value: "9d",    facevalue: 9,    emoji: "♦",    indeckno:21,   facecardval: 0,    numberof: [4,1,4]},
    {suit: "Diamonds",    value: "10d",   facevalue: 10,    emoji: "♦",   indeckno:22,   facecardval: 0,   numberof: [4,2,4]},
    {suit: "Diamonds",    value: "Jd",    facevalue: 10,    emoji: "♦",    indeckno:23,   facecardval: 1,   numberof: [0,0,0]},
    {suit: "Diamonds",    value: "Qd",    facevalue: 10,    emoji: "♦",    indeckno:24,   facecardval: 2,    numberof: [0,0,0]},
    {suit: "Diamonds",    value: "Kd",    facevalue: 10,    emoji: "♦",    indeckno:25,   facecardval: 3,    numberof: [0,0,0]},
    //Diamonds End //
        //Spade
    {suit: "spade",    value: "1h",    facevalue: 1,    emoji: "♠",    indeckno:26,   facecardval: 0,    numberof: [0,1,0]},
    {suit: "spade",    value: "2s",    facevalue: 2,    emoji: "♠",    indeckno:27,   facecardval: 0,    numberof: [0,2,0]},
    {suit: "spade",    value: "3s",    facevalue: 3,    emoji: "♠",    indeckno:28,   facecardval: 0,    numberof: [0,3,0]},
    {suit: "spade",    value: "4s",    facevalue: 4,    emoji: "♠",    indeckno:29,   facecardval: 0,    numberof: [2,0,2]},
    {suit: "spade",    value: "5s",    facevalue: 5,    emoji: "♠",    indeckno:30,   facecardval: 0,    numberof: [2,1,2]},
    {suit: "spade",    value: "6s",    facevalue: 6,    emoji: "♠",    indeckno:31,   facecardval: 0,    numberof: [3,0,3]},
    {suit: "spade",    value: "7s",    facevalue: 7,    emoji: "♠",    indeckno:32,   facecardval: 0,    numberof: [3,1,3]},
    {suit: "spade",    value: "8s",    facevalue: 8,    emoji: "♠",    indeckno:33,   facecardval: 0,    numberof: [4,0,4]},
    {suit: "spade",    value: "9s",    facevalue: 9,    emoji: "♠",    indeckno:34,   facecardval: 0,    numberof: [4,1,4]},
    {suit: "spade",    value: "10s",   facevalue: 10,   emoji: "♠",    indeckno:35,   facecardval: 0,    numberof: [4,2,4]},
    {suit: "spade",    value: "Js",    facevalue: 10,    emoji: "♠",    indeckno:36,   facecardval: 1,    numberof: [0,0,0]},
    {suit: "spade",    value: "Qs",    facevalue: 10,    emoji: "♠",    indeckno:37,   facecardval: 2,    numberof: [0,0,0]},
    {suit: "spade",    value: "Ks",    facevalue: 10,    emoji: "♠",    indeckno:38,   facecardval: 3,    numberof: [0,0,0]},
    //Spade End //
    //Clubs
    {suit: "club",    value: "1h",    facevalue: 1,    emoji: "♣",    indeckno:39,   facecardval: 0,    numberof: [0,1,0]},
    {suit: "club",    value: "2s",    facevalue: 2,    emoji: "♣",    indeckno:40,   facecardval: 0,    numberof: [0,2,0]},
    {suit: "club",    value: "3s",    facevalue: 3,    emoji: "♣",    indeckno:41,   facecardval: 0,    numberof: [0,3,0]},
    {suit: "club",    value: "4s",    facevalue: 4,    emoji: "♣",    indeckno:42,   facecardval: 0,    numberof: [2,0,2]},
    {suit: "club",    value: "5s",    facevalue: 5,    emoji: "♣",    indeckno:43,   facecardval: 0,    numberof: [2,1,2]},
    {suit: "club",    value: "6s",    facevalue: 6,    emoji: "♣",    indeckno:44,   facecardval: 0,    numberof: [3,0,3]},
    {suit: "club",    value: "7s",    facevalue: 7,    emoji: "♣",    indeckno:45,   facecardval: 0,    numberof: [3,1,3]},
    {suit: "club",    value: "8s",    facevalue: 8,    emoji: "♣",    indeckno:46,   facecardval: 0,    numberof: [4,0,4]},
    {suit: "club",    value: "9s",    facevalue: 9,    emoji: "♣",    indeckno:47,   facecardval: 0,    numberof: [4,1,4]},    
    {suit: "club",    value: "10s",   facevalue: 10,   emoji: "♣",    indeckno:48,   facecardval: 0,    numberof: [4,2,4]},
    {suit: "club",    value: "Js",    facevalue: 10,   emoji: "♣",    indeckno:49,   facecardval: 1,    numberof: [0,0,0]},
    {suit: "club",    value: "Qs",    facevalue: 10,   emoji: "♣",    indeckno:50,   facecardval: 2,    numberof: [0,0,0]},
    {suit: "club",    value: "Ks",    facevalue: 10,   emoji: "♣",    indeckno:51,   facecardval: 3,    numberof: [0,0,0]},
    //club End //
];
var cardreturned = "10h";
// card generator
var cardsindeck = 52;
function pickedcard(){
    cardpicked = Math.floor(Math.random() * cardsindeck)
    cardsindeck = cardsindeck - 1
    console.log(cardsindeck)
}
    document.addEventListener('click', function(){
    createcard()
    generatecard()
    pickedcard()
    console.log(cardpicked)
})

function createcard(){
const newcard = document.getElementById('newcard')
newcard.innerHTML += `
<div class="card">
      <div class="topcardclass">
        <p>A</p><p class="suit"></p>
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
        <p>A</p><p class="suit"></p>
    </div>
    </div>
`
}

function generatecard(){
const col1 = document.getElementsByClassName('column1')[0];
const col2 = document.getElementsByClassName('column2')[0];
const col3 = document.getElementsByClassName('column3')[0];
const suittp = document.getElementsByClassName('suit')[0];
const suitbm = document.getElementsByClassName('suit')[1];
// loops class
for (i=0; i < cardnumber.length; i++){
    //checks class
    if (cardreturned == cardnumber[i].value) {
        // console.log(cardnumber[i])
        //check numbers in array
    
        if (cardnumber[i].numberof[0] > 0) {

            for (k = 0; k < cardnumber[i].numberof[0]; k++) {
            //     console.log(cardnumber[i].numberof[j])
            col1.innerHTML += `<p class=suit>${cardnumber[i].emoji}</p>`
            console.log(cardnumber[i].numberof[0])
            }
        }
        if (cardnumber[i].numberof[1] >= 0) {

            for (k = 0; k < cardnumber[i].numberof[1]; k++) {
            //     console.log(cardnumber[i].numberof[j])
            col2.innerHTML += `<p class=suit>${cardnumber[i].emoji}</p>`
            console.log(cardnumber[i].numberof[1])
            }
        }
        if (cardnumber[i].numberof[0] > 0) {

            for (k = 0; k < cardnumber[i].numberof[2]; k++) {
            //     console.log(cardnumber[i].numberof[j])
            col3.innerHTML += `<p class=suit>${cardnumber[i].emoji}</p>`
            console.log(cardnumber[i].numberof[2])
            }
        }
        
    }
}
}