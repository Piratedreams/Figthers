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
}
// have a d4 check for punch dmg. 
const d4Roll = (e) => {
    console.log('d4 was rolled.');
     d4DmgRoll = Math.floor(Math.random() * 4) + 1;
     console.log(d4DmgRoll);
     return d4DmgRoll
     
}
// have whoever is hit, have hp - dmg. 
const  kickDmg = () => {
    if (d4DmgRoll >= 1){
        computer.hp -= computer.hp - d4DmgRoll;
        $('.cHp').text(computer['hp']); 
        $('.pHp').text(playerOne['hp']);
    }
}
const  LungeDmg = () => {
    if (d6DmgRoll >= 1){
        computer.hp -= computer.hp - d6DmgRoll;
        $('.pHp').text(computer['hp']); 
        $('.cHp').text(playerOne['hp']);
    }
}
const  punchDmg = () => {
    if (d4DmgRoll >= 1){
        computer.hp -= computer.hp - d4DmgRoll;
        $('.cHp').text(computer['hp']); 
        $('.pHp').text(playerOne['hp']);
    }
}
// check if each character is alive
const aliveCheck = () => {
    if(playerOne.hp > 0){
        console.log('player is alive.')
    
    } 
    if(computer.hp > 0) {
        console.log('computer is alive.')
    
    }
    // if both computer and player are alive move to next turn. 
}



//==============================
//              Buttons
//==============================
//create start button
$('.start').click(function (e) {
 console.log('new game has started.');
    $('#cHp').text(computer['hp']); 
    $('#pHp').text(playerOne['hp']);
});
// display 3 attack buttons
$('.lunge').on('click', (e) => {
    console.log('lunge was clicked.');
    // if lunge is <= 15 its a hit ------> d6
    d20Roll();
    if(hitRoll >= 15) {
        d6Roll();
        console.log('hit roll passed, damage roll next');

    } else {
        console.log('hit roll failed, computers turn.');
        computerAttack();
    }
});
// if kick is <= 11 hit -----> d4
$('.kick').on('click', (e) => {
    console.log('kick was clicked.');
    d20Roll();
    if(hitRoll >= 11) {
        console.log('hit roll was greater than 11.');
        d4Roll();
        console.log('hit roll passed onto damage roll');
    } else {
        console.log('hit roll failed, computers turn.');
        computerAttack();
    }
});
// if punch is <= 12 hit ------> d4
$('.punch').on('click', (e) => {
    console.log('punch was clicked.');
    d20Roll();
    if(hitRoll >= 12){
        console.log('hit roll passed.');
        d4Roll();
    } else {
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
});
$('.d4').on('click', (e) => {
    d4Roll();
    console.log('rolling d4');
    console.log(d4DmgRoll)
});
// if hit show corresponding die button.
// $('.d20Roll').hide();
// use result to call dmg mechanics.


// ================================
//       Damage comparrison
// ================================

// compare how much damage has been done to computer 
const compareHp = () => {
    if (player.hp <= 0) {

        console.log('player has died. game over')
        // if else (computer.hp === 0) 
    } else if (computer.hp <= 0) {
        player.hp = 10;
        console.log('computer has died, onto next round.')
    }
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
    }
}
// Do I need to create an attack function for the player as well? 
// create a function for the computer to choose on which move to make. 