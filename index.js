let card1;
let card2; 
let cards = [] 
let sum;
let ingame = true
let Blackjack = false
let messageEl = document.getElementById("message")
let sumEl = document.getElementById("sum")
let cardEl = document.getElementById("card")
let player = {
    name : "James",
    coins: 120
}
let playerEl = document.getElementById("playerEl")
let hasmoney = true



function randomcardno(){
    random =  Math.floor(Math.random() * 13) + 1
    if (random >= 11 ){
        return 10
    } else if(random === 1){
        return 11
    } else{
        return random
    }
    

}

function newcard(){
    if (ingame && Blackjack === false && hasmoney){
        cardnew = randomcardno()
        cards.push(cardnew)
        sum += cardnew
        gamefunction()
        //sub from the total money
        player.coins -= 2
        if (player.coins <= 0 ){
            player.coins = 0
            hasmoney = false
            messageEl.textContent = "You are out of money."
        }
    }
    
    playerEl.textContent = player.name + ": "+ player.coins + "$"
}

function gamefunction(){
    if (hasmoney){
        if (sum < 21){
            messageEl.textContent = "Do you want to draw another card?"
            
        } else if(sum === 21){
            messageEl.textContent = "You have got Blackjack!"
            Blackjack = true
            player.coins += 20
            playerEl.textContent = player.name + ": "+ player.coins + "$"
            
        } else{
            messageEl.textContent = " You lose."
            ingame = false
            
        }
    }
        
    sumEl.textContent = "Sum: " + sum
    cardEl.textContent = "Cards: "
    for (let x = 0 ; x < cards.length ; x += 1 ){
        cardEl.textContent += cards[x] + " "
    }
    
}

function startgame(){
    if (hasmoney){
        ingame = true
        Blackjack = false
        card1 = randomcardno()
        card2 = randomcardno()
        cards = [card1,card2]
        sum = card1+card2
        //sub from the total money
        player.coins -= 2
        playerEl.textContent = player.name + ": "+ player.coins + "$"
        gamefunction()
        //checks if player has money
        if (player.coins <= 0 ){
            player.coins = 0
            hasmoney = false
            messageEl.textContent = "You are out of money."
        }
    }
}


playerEl.textContent = player.name + ": "+ player.coins + "$"

