const DEBUG = true;

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

function per(num, amount){
  return num*amount/100;
}


export default class Player {
    constructor(name, sps) {
        this.skill_points = sps;
        this.name = name;

        this.recreate = this.recreate.bind(this);
        this.recreate();
    }

    recreate() {
        // This function calculates player properties
        var properties = {
            "Health": 100,
            "MaxPhysicalDamage": 10,
            "MaxMagicDamage": 15,
            "AccuracyChance": 60, // %60
        };

        // Calculating Player Health
        for(var i=0; i < this.skill_points.Health; i++) {
            properties.Health += Math.round(per(properties.Health, 10)); // Increases health by %10
        }
        console.log(this.name + " Health: " + properties.Health);

        // Calculating Accuracy Chance
        var r = 0;
        for(var i=0; i < this.skill_points.Accuracy; i++) {
            r = properties.AccuracyChance + 5;
            if(r > 100) {
                r = 100;
            }
            properties.AccuracyChance = r;
        }
        console.log(this.name + " Accuracy Chance: " + properties.AccuracyChance);

        // Calculating max physical damage

        // For strength
        for(var i=0; i < this.skill_points.Strength; i++) {
            properties.MaxPhysicalDamage += 5;
        }
        // For attack
        for(var i=0; i < this.skill_points.Attack; i++) {
            properties.MaxPhysicalDamage += 3;
        }
        // For agility
        for(var i=0; i < this.skill_points.Agility; i++) {
            properties.MaxPhysicalDamage += 1;
        }
        console.log(this.name + " Max Physical Damage: " + properties.MaxPhysicalDamage);

        // Calculate magical damage
        for(var i=0; i < this.skill_points.Magic; i++) {
            properties.MaxMagicDamage += 3;
        }
        console.log(this.name + " Max Magical Damage: " + properties.MaxMagicDamage);

        this.properties = properties;
    }
}