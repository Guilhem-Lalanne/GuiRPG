class Dice {

	constructor(nbFace) {
		this.nbFace = nbFace;
	}

	roll(explicite) {
		let result; 
		if (explicite !== undefined) {

			let diceValue;
			try {
				diceValue = explicite.split('d');
				result = Math.floor((Math.random() * diceValue[1]) + 1) * diceValue[0];
				return result;

			} catch (error) {
				console.log('valeur incorrect : ' + error);
				return false;
			}
		} else {
			result = Math.floor((Math.random() * this.nbFace) + 1);
			return result;
		}
	}
}

module.exports = Dice;