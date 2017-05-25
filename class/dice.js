class Dice {

	constructor(nbFace) {
		this.nbFace = nbFace;
	}

	roll() {
        var result = Math.floor((Math.random() * this.nbFace) + 1);
        return result;
	}
}

module.exports = Dice;