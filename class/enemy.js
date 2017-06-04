
class Enemy {

    constructor(name, hp, strength, agility, defense, attackDice, dodgeDice) {
        var Dice = require("../class/dice.js");
        //param
        this.name = name;
        this.hp = hp;
        this.strength = strength;
        this.agility = agility;
        this.defense = defense;
        this.oAttackDice = new Dice(attackDice);
        this.oDodgeDice = new Dice(dodgeDice);

        this.status = "normal";
    }

    attack() {
        var damage = Math.floor((Math.random() * this.oAttackDice.roll()) + this.strength);
        return damage;
    }

    dodge() {
        var dodge = Math.floor((Math.random() * this.oDodgeDice.roll()) + this.dodge);
        return dodge;
    }

    takeDamage(damageTaken) {
        this.hp -= damageTaken-this.defense;
        if(this.hp <= 0) {
            this.die();
        }
    }

    die() {
        this.status = "dead";
    }
}

module.exports = Enemy;