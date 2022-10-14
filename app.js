const cardnumber = [
    //hearts
    {suit: "heart",       value: "1h",    facevalue: 1,    emoji: "♥",    facecardval: 0,    numberof: [0,1,0]},
    {suit: "heart",       value: "2h",    facevalue: 2,    emoji: "♥",    facecardval: 0,    numberof: [0,2,0]},
    {suit: "heart",       value: "3h",    facevalue: 3,    emoji: "♥",    facecardval: 0,    numberof: [0,3,0]},    
    {suit: "heart",       value: "4h",    facevalue: 4,    emoji: "♥",    facecardval: 0,    numberof: [2,0,2]},
    {suit: "heart",       value: "5h",    facevalue: 5,    emoji: "♥",    facecardval: 0,    numberof: [2,1,2]},
    {suit: "heart",       value: "6h",    facevalue: 6,    emoji: "♥",    facecardval: 0,    numberof: [3,0,3]},
    {suit: "heart",       value: "7h",    facevalue: 7,    emoji: "♥",    facecardval: 0,    numberof: [3,1,3]},
    {suit: "heart",       value: "8h",    facevalue: 8,    emoji: "♥",    facecardval: 0,    numberof: [4,0,4]},
    {suit: "heart",       value: "9h",    facevalue: 9,    emoji: "♥",    facecardval: 0,    numberof: [4,1,4]},
    {suit: "heart",       value: "10h",   facevalue: 10,    emoji: "♥",   facecardval: 0,    numberof: [4,2,4]},
    {suit: "heart",       value: "Jh",    facevalue: 10,    emoji: "♥",    facecardval: 1,    numberof: [0,0,0]},
    {suit: "heart",       value: "Qh",    facevalue: 10,    emoji: "♥",    facecardval: 2,    numberof: [0,0,0]},
    {suit: "heart",       value: "Kh",    facevalue: 10,    emoji: "♥",    facecardval: 3,    numberof: [0,0,0]},
    //hearts End //
    //Diamonds
    {suit: "Diamonds",    value: "1d",    facevalue: 1,    emoji: "♦",    facecardval: 0,    numberof: [0,1,0]},
    {suit: "Diamonds",    value: "2d",    facevalue: 2,    emoji: "♦",    facecardval: 0,    numberof: [0,2,0]},
    {suit: "Diamonds",    value: "3d",    facevalue: 3,    emoji: "♦",    facecardval: 0,    numberof: [0,3,0]},
    {suit: "Diamonds",    value: "4d",    facevalue: 4,    emoji: "♦",    facecardval: 0,    numberof: [2,0,2]},
    {suit: "Diamonds",    value: "5d",    facevalue: 5,    emoji: "♦",    facecardval: 0,    numberof: [2,1,2]},
    {suit: "Diamonds",    value: "6d",    facevalue: 6,    emoji: "♦",    facecardval: 0,    numberof: [3,0,3]},
    {suit: "Diamonds",    value: "7d",    facevalue: 7,    emoji: "♦",    facecardval: 0,    numberof: [3,1,3]},
    {suit: "Diamonds",    value: "8d",    facevalue: 8,    emoji: "♦",    facecardval: 0,    numberof: [4,0,4]},
    {suit: "Diamonds",    value: "9d",    facevalue: 9,    emoji: "♦",    facecardval: 0,    numberof: [4,1,4]},
    {suit: "Diamonds",    value: "10d",   facevalue: 10,    emoji: "♦",   facecardval: 0,   numberof: [4,2,4]},
    {suit: "Diamonds",    value: "Jd",    facevalue: 10,    emoji: "♦",    facecardval: 1,   numberof: [0,0,0]},
    {suit: "Diamonds",    value: "Qd",    facevalue: 10,    emoji: "♦",    facecardval: 2,    numberof: [0,0,0]},
    {suit: "Diamonds",    value: "Kd",    facevalue: 10,    emoji: "♦",    facecardval: 3,    numberof: [0,0,0]},
    //Diamondss End //
        //Spade
    {suit: "spade",    value: "1h",    facevalue: 1,    emoji: "♠",    facecardval: 0,    numberof: [0,1,0]},
    {suit: "spade",    value: "2s",    facevalue: 2,    emoji: "♠",    facecardval: 0,    numberof: [0,2,0]},
    {suit: "spade",    value: "3s",    facevalue: 3,    emoji: "♠",    facecardval: 0,    numberof: [0,3,0]},
    {suit: "spade",    value: "4s",    facevalue: 4,    emoji: "♠",    facecardval: 0,    numberof: [2,0,2]},
    {suit: "spade",    value: "5s",    facevalue: 5,    emoji: "♠",    facecardval: 0,    numberof: [2,1,2]},
    {suit: "spade",    value: "6s",    facevalue: 6,    emoji: "♠",    facecardval: 0,    numberof: [3,0,3]},
    {suit: "spade",    value: "7s",    facevalue: 7,    emoji: "♠",    facecardval: 0,    numberof: [3,1,3]},
    {suit: "spade",    value: "8s",    facevalue: 8,    emoji: "♠",    facecardval: 0,    numberof: [4,0,4]},
    {suit: "spade",    value: "9s",    facevalue: 9,    emoji: "♠",    facecardval: 0,    numberof: [4,1,4]},
    {suit: "spade",    value: "10s",   facevalue: 10,   emoji: "♠",   facecardval: 0,    numberof: [4,2,4]},
    {suit: "spade",    value: "Js",    facevalue: 10,    emoji: "♠",    facecardval: 1,    numberof: [0,0,0]},
    {suit: "spade",    value: "Qs",    facevalue: 10,    emoji: "♠",    facecardval: 2,    numberof: [0,0,0]},
    {suit: "spade",    value: "Ks",    facevalue: 10,    emoji: "♠",    facecardval: 3,    numberof: [0,0,0]},
    //Spade End //
    //Clubs
    {suit: "club",    value: "1h",    facevalue: 1,    emoji: "♣",    facecardval: 0,    numberof: [0,1,0]},
    {suit: "club",    value: "2s",    facevalue: 2,    emoji: "♣",    facecardval: 0,    numberof: [0,2,0]},
    {suit: "club",    value: "3s",    facevalue: 3,    emoji: "♣",    facecardval: 0,    numberof: [0,3,0]},
    {suit: "club",    value: "4s",    facevalue: 4,    emoji: "♣",    facecardval: 0,    numberof: [2,0,2]},
    {suit: "club",    value: "5s",    facevalue: 5,    emoji: "♣",    facecardval: 0,    numberof: [2,1,2]},
    {suit: "club",    value: "6s",    facevalue: 6,    emoji: "♣",    facecardval: 0,    numberof: [3,0,3]},
    {suit: "club",    value: "7s",    facevalue: 7,    emoji: "♣",    facecardval: 0,    numberof: [3,1,3]},
    {suit: "club",    value: "8s",    facevalue: 8,    emoji: "♣",    facecardval: 0,    numberof: [4,0,4]},
    {suit: "club",    value: "9s",    facevalue: 9,    emoji: "♣",    facecardval: 0,    numberof: [4,1,4]},    
    {suit: "club",    value: "10s",   facevalue: 10,   emoji: "♣",    facecardval: 0,    numberof: [4,2,4]},
    {suit: "club",    value: "Js",    facevalue: 10,   emoji: "♣",    facecardval: 1,    numberof: [0,0,0]},
    {suit: "club",    value: "Qs",    facevalue: 10,   emoji: "♣",    facecardval: 2,    numberof: [0,0,0]},
    {suit: "club",    value: "Ks",    facevalue: 10,   emoji: "♣",    facecardval: 3,    numberof: [0,0,0]},
    //club End //
];
var cardreturned = "10h";
// card generator
document.addEventListener('click', function(){
    const col1 = document.getElementById('column1');
    const col2 = document.getElementById('column2');
    const col3 = document.getElementById('column3');
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
   
})