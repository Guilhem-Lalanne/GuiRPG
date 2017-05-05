class Player {

    constructor(hp, strength, mana) {
        this.hp = hp;
        this.strength = strength;
        this.mana = mana;
    }

    attack() {
        console.log("paf");
    }

    ok() {
        return true;
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
