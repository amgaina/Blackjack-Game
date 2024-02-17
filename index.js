let cards = []
let hasBlackJack = false
let message = ""
let alive = true
let sum = 0
let start = 1
let player = {name: "Per", chips: 145}

let sumEl = document.querySelector("#sum-el")
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.querySelector("#player-el")

playerEl.textContent = player.name + ": $" + player.chips;

function startgame(){
    if(alive === true && hasBlackJack === false && start === 1){
    start +=1
    let firstCard = getRandomNumber()
    let secondCard = getRandomNumber()
    cards.push(firstCard, secondCard);
    alive = true
    sum = firstCard + secondCard 
    if(sum < 22 ){
    rendergame()
    }
    }
}
function rendergame(){
if(sum > 21 ){
    message = "Sorry ! You're out of the game."
    alive = false
}
if(sum == 21 ){
    message = "Hurray ! You have won the game."
    alive = false
}
if(sum < 21 ){
    message = "Do you still want to be in the game ?"
}
 cardsEl.textContent = "Cards: "
for (let i = 0; i<cards.length; i++)
{
    cardsEl.textContent += cards[i] +" "
}
messageEl.textContent = message;
sumEl.textContent = "Sum: " + sum;
   
}

function newcard(){
    if(alive === true){
    let newCard = getRandomNumber();
    sum += newCard;
    cards.push(newCard)
    rendergame()
    }
}
function getRandomNumber(){
    let random  = Math.ceil(Math.random()*13)
    if(random > 10)
    {
        return 10
    }
    else if (random === 1){
        return 11
    }
    else{
        return random
    }
    
}
