 console.log('running');
 // establishing character class
class Fighter{
    constructor(name){
        this.name = '';
        this.hp = 10;
        this.dmg = 0;
        this.moves = [];
        this.attack = '';
        
    }
}
class Die {
    constructor(sides){
        this.sides = 0;
    }
}
// Creating player1
const playerOne = new Fighter ('Ben');
// input player name.
// Creating computer fighter
const computer = new Fighter('opponent');


// establishing fighter moves
playerOne.moves = ['kick', 'lunge', 'punch'];
computer.moves = ['kick', 'lunge', 'punch'];

//============================
//          Variables
//============================

// create d20 var
const d20 = new Die (20);
// create d6 var
const d6  = new Die (6);
// create d4 var
const d4 = new Die (4);

//============================
//          DMG mechanics
//============================

// d20 roll check to see if move hits
let hitRoll = 0;
let d6DmgRoll = 0;
let d4DmgRoll = 0;
const d20Roll = () => {
     hitRoll = Math.floor(Math.random() * 20) + 1;
        // $('.d20Roll').hide();
        console.log('d20 was rolled.');
        console.log(hitRoll);
    // if the number is 20 then it is a critical hit.
}
// Have a d6 check for lunge/kick dmg.
const d6Roll = (e) => {
    console.log('d6 was rolled.');
    d6DmgRoll = Math.floor(Math.random() * 6) + 1;
    return d6DmgRoll;
    $('.hit-sound').play();
}
// have a d4 check for punch dmg. 
const d4Roll = (e) => {
    console.log('d4 was rolled.');
     d4DmgRoll = Math.floor(Math.random() * 4) + 1;
     console.log(d4DmgRoll);
     let audio = $('.hit-sound')[0]; audio.play();
     return d4DmgRoll
     
}
// have whoever is hit, have hp - dmg. 
const  kickDmg = () => {
    if (d4DmgRoll >= 1){
        computer.hp -= computer.hp - d4DmgRoll;
        $('#cHp').text(computer['hp']); 
        $('#pHp').text(playerOne['hp']);
    }
}
const  LungeDmg = () => {
    if (d6DmgRoll >= 1){
        computer.hp -= computer.hp - d6DmgRoll;
        $('#pHp').text(computer['hp']); 
        $('#cHp').text(playerOne['hp']);
    }
}
const  punchDmg = () => {
    if (d4DmgRoll >= 1){
        computer.hp -= computer.hp - d4DmgRoll;
        $('#cHp').text(computer['hp']); 
        $('#pHp').text(playerOne['hp']);
    }
}
// check if each character is alive
const aliveCheck = () => {
    if(playerOne.hp > 0){
        console.log('player is alive.')
    
    } else {
        console.log('player has died! YOU LOSE!');
        playerDeath();
    }
    if(computer.hp > 0) {
        console.log('computer is alive.')
    } else {
        console.log('computer has died! next round');
    }
    // if both computer and player are alive move to next turn. 
}
// stop game when player dies.
const playerDeath = () => {
    prompt('you died! play again?', 'y/n?');
}



//==============================
//              Buttons
//==============================
//create start button
$('.start').click(function (e) {
 console.log('new game has started.');
    $('#cHp').text(computer['hp']); 
    $('#pHp').text(playerOne['hp']);
    $(this).hide();
});
// display 3 attack buttons
$('.lunge').on('click', (e) => {
    console.log('lunge was clicked.');
    // if lunge is <= 15 its a hit ------> d6
    d20Roll();
    if(hitRoll >= 15) {
        $('#stats').text('lunge roll passed, damage roll next');
        console.log('hit roll passed, damage roll next');
    } else {
        $('#stats').text('hit roll failed, computers turn.');
        console.log('hit roll failed, computers turn.');
        computerAttack();
    }
});
// if kick is <= 11 hit -----> d4
$('.kick').on('click', (e) => {
    console.log('kick was clicked.');
    d20Roll();
    if(hitRoll >= 11) {
        $('#stats').text('Kick hit check has passed.');
        console.log('hit roll was greater than 11.');
    } else {
        $('#stats').text('kick attempt failed.')
        console.log('hit roll failed, computers turn.');
        computerAttack();
    }
});
// if punch is <= 12 hit ------> d4
$('.punch').on('click', (e) => {
    console.log('punch was clicked.');
    d20Roll();
    if(hitRoll >= 12){
        $('#stats').text('punch hit check has passed.');
        console.log('hit roll passed.');
    } else {
        $('#stats').text('punch hit check failed.');
        console.log('hit roll failed, computers turn.'); 
        computerAttack();
    }
});


$('.d20').on('click', (e) => {
    d20Roll();
    console.log('attempting to roll d20');
    console.log(hitRoll);
});


$('.d6').on('click', (e) => {
    d6Roll();
    console.log('rolling d6');
    console.log(d6DmgRoll);
    let audio = $('.hit-sound')[0]; audio.play();
    playerOne.dmg = d6DmgRoll;
    console.log(playerOne.dmg + ' is players dmg');
    playerAttackDmg();
});


$('.d4').on('click', (e) => {
    d4Roll();
    console.log('rolling d4');
    console.log(d4DmgRoll)
    let audio = $('.hit-sound')[0]; audio.play();
    playerOne.dmg = d4DmgRoll;
    console.log(playerOne.dmg + ' is players dmg');
    playerAttackDmg();
});
// if hit show corresponding die button.
// $('.d20Roll').hide();
// use result to call dmg mechanics.


// ================================
//       Damage comparrison
// ================================

// compare how much damage has been done to computer 
const playerAttackDmg = () => {
   console.log('player is attacking');
   computer.hp -= computer.hp - playerOne.dmg;
   $('#cHp').text(computer.hp);
   computerAttack();
}
const computerAttackDmg = () => {
    console.log('computer is attacking');
    playerOne.hp -= playerOne.hp - computer.dmg;
    $('#pHp').text(playerOne.hp);
}
// and the user.
// subtract how much damage has been dealt to corrisponding hp.
// if user or computer's hp is =< 0 then end the round.
// declare the victor.
// prompt to play to next round or quit. 



// computer takes turn to attack player.
let computerChoice = 2;
const computerAttack = () => {
    let computerAlive = true;
    if(computer.hp > 0) {
        console.log('computer attacks player.');
        computerAlive = true;
        computer.attack = playerOne;
       computerChoice = Math.floor(Math.random() * 3) + 1;
        console.log(computerChoice);
    } else {
        computerAlive = false;
        console.log('computer is dead, moving to next round.')
    } if (computerChoice === 1) { // Lunge choice
        // $('#stats').text('computer chose to lunge.')
        d20Roll();
            if(hitRoll >= 11) {
                        $('#stats').text('computers hit roll was successful.')

                console.log('hit roll was greater than 11.');
                d4Roll();
                console.log('hit roll passed onto damage roll');
                computer.dmg = d6DmgRoll;
                computerAttackDmg();
            } else {
                console.log('hit roll failed, players turn.');
            }
    } else if(computerChoice === 2) { // kick choice
        console.log('computer chose to kick.');
        d20Roll();
            if(hitRoll >= 11) {
                console.log('hit roll was greater than 11.');
                d4Roll();
                console.log('hit roll passed onto damage roll');
                computer.dmg = d4DmgRoll
                computerAttackDmg();
                } else {
                    console.log('hit roll failed, players turn.');
                }
    } else if(computerChoice === 3) { // punch choice
        console.log('computer chose to punch.');
        d20Roll();
        if(hitRoll >= 11) {
            console.log('hit roll was greater than 11.');
            d4Roll();
            console.log('hit roll passed onto damage roll');
            computer.dmg = d4DmgRoll;
            computerAttackDmg();
        } else {
            console.log('hit roll failed, players turn.');
            
        }
    }
}
// Do I need to create an attack function for the player as well? 
// Create a function to go onto the next round.
const nextRound = () => {
    if (computer.hp === 0){
        playerOne.hp = 10;
        // increase computer hp by 1 each round. 

    }
}
  // reset function to show all of the buttons again.
  const showAll = () => {
      $('.d6').show();
      $('.d4').show();
      $('.kick').show();
      $('.lunge').show();
      $('.punch').show();
  }