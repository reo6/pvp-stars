const DEBUG = true;

import Player from "./Player";

/*
Skill Point example:


const player1_skill_points = {
    "Strength": 4,
    "Magic": 2,
    "Agility": 0,
    "Defence": 0,
    "Accuracy": 2,
    "Attack": 0,
    "Health": 0,
}
*/

if(!DEBUG) { // Disable console logs if we are not in debugging.
    console.log = function(_) {}
}

export default class Game {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.queue = player1;
    }

    match() {
        console.log("Player: "+this.queue.name);
    }
}