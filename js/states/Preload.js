Preload = function(game){}

Preload.prototype = {
	preload : function(){		

		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.pageAlignHorizontally = true;
		this.scale.pageAlignVertically = true;

		this.load.image("gameover","assets/images/gameover.png");
		this.load.image("gametitle","assets/images/gametitle.png");
		this.load.image("higher","assets/images/higher.png");
		this.load.image("lower","assets/images/lower.png");
		this.load.spritesheet("numbers","assets/images/numbers.png",100,100,10);
		this.load.image("play","assets/images/play.png");

	},
	create:function(){
		this.state.start("Menu");
	}
}