Game = function (game) { }

Game.prototype = {
	create: function () {
		this.higher = this.game.add.sprite(0, 0, "higher");
		this.higher.inputEnabled = true;
		this.higher.events.onInputDown.add(this.evaluate, {contx:this, guess:"higher"});

		this.lower = this.game.add.sprite(this.game.world.width, this.game.world.height, "lower");
		this.lower.anchor.setTo(1);
		this.lower.inputEnabled = true;
		this.lower.events.onInputDown.add(this.evaluate, {contx:this, guess:"lower"});

		this.points = 20;

		this.currNumber = new Number(this.game);
	},
	evaluate: function () {

		let newNumber = new Number(this.contx.game);

		switch (this.guess) {
			case "higher": {
				if(newNumber.frame > this.contx.currNumber.frame){
					this.contx.points += 10;
				}else{
					this.contx.points -= 5;
				}				
				break;
			}
			case "lower": {
				if(newNumber.frame < this.contx.currNumber.frame){
					this.contx.points += 10;
				}else{
					this.contx.points -= 5;
				}	
				break;
			}
		}

		console.log("Points: " + this.contx.points);
		
		if(this.contx.points <= 0){
			this.contx.state.start("GameOver");
		}

		this.contx.currNumber.slideOut();
		this.contx.currNumber = newNumber;
	},

}