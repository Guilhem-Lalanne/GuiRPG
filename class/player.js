class Player {

	constructor(hp, strength, mana, agility, defense, attackDice, dodgeDice) {
		var Dice = require("../class/dice.js");
		//param
		this.energy = 0;
		this.energyBonus = 1;
		this.energyMultiplier = 1;
		this.hp = hp;
		this.hpMax = 5;
		this.strength = strength;
		this.mana = mana;
		this.agility = agility;
		this.defense = defense;
		this.oAttackDice = new Dice(attackDice);
        this.oDodgeDice = new Dice(dodgeDice);
	}

	attack() {
		console.log("paf");
		var damage = Math.floor((Math.random() * this.oAttackDice.roll()) + this.strength);
        return damage;
	}

	eatVegetable(type) {
		if (type === 1) {
			this.hp += 1;
		} else if (type === 2) {
			this.hp += 2;
		} else if (type === 3) {
			this.hp += 3;
		}
	}

	cooldown(time) {
		this.mana = 0;
	}

}

module.exports = Player;