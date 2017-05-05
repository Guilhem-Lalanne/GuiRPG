class Player {

    constructor(hp, strength) {
        this.hp = hp;
        this.strength = strength;
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

}

module.exports = Player;
