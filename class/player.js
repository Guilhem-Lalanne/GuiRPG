class Player {

    constructor(hp) {
        this.hp = hp;
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
		}else if (type === 3) {
			this.hp += 3;
		}
	}

}

module.exports = Player;
