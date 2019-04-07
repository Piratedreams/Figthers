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
let d4DmgRoll = 0;git
const d20Roll = () => {
     hitRoll = Math.random(1, 20);
        // $('.d20Roll').hide();
        console.log('d20 was rolled.');
    // if the number is 20 then it is a critical hit.
}
// Have a d6 check for lunge/kick dmg.
const d6Roll = (e) => {
    console.log('d6 was rolled.');
    d6DmgRoll = Math.random(1, 6);
    return d6DmgRoll;
}
// have a d4 check for punch dmg. 
const d4Roll = (e) => {
    console.log('d4 was rolled.');
     d4DmgRoll = Math.random(1, 4);
     return d4DmgRoll
}
// have whoever is hit, have hp - dmg. 
const  kickDmg = () => {
    if (hitRoll >= 1){
        computer.hp -= computer.hp - d4DmgRoll;
        $('.computer-hp').text(computer.hp); 
        $('.player-hp').text(player.hp);
    }
}
const  LungeDmg = () => {
    if (hitRoll >= 1){
        computer.hp -= computer.hp - d6DmgRoll;
        $('.computer-hp').text(computer.hp); 
        $('.player-hp').text(player.hp);
    }
}
const  punchDmg = () => {
    if (hitRoll >= 1){
        computer.hp -= computer.hp - d4DmgRoll;
        $('.computer-hp').text(computer.hp); 
        $('.player-hp').text(player.hp);
    }
}
// check if each character is alive
const aliveCheck = () => {
    if(player.hp > 0){
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
});
// display 3 attack buttons
$('.lunge').on('click', (e) => {
    console.log('lunge was clicked.');
    // if lunge is <= 15 its a hit ------> d6
    d20Roll();
    if(hitRoll >= 15) {
        d6Roll();
        console.log('dealing' + d6DmgRoll);
    }
});
// if kick is <= 11 hit -----> d4
$('.kick').on('click', (e) => {
    console.log('kick was clicked.');
    d20Roll();
    if(hitRoll >= 11) {
        d4Roll();
        console.log('dealing' + d4DmgRoll);
    }
});
// if punch is <= 12 hit ------> d4
$('.punch').on('click', (e) => {
    console.log('punch was clicked.');
    d20Roll();
    if(hitRoll >= 12){
        d4Roll();
        console.log('dealing' + d4DmgRoll);
    }
});
$('#d20').on('click', (e) => {
    // d20Roll();
    console.log('attempting to roll d20');
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
const computerAttack = () => {
    let computerAlive = true;
    if(computer.hp > 0) {
        console.log('computer attacks player.');
        computerAlive = true;
        computer.attack = playerOne;
       Math.random( 0, 2);
    } else {
        computerAlive = false;
    }

}