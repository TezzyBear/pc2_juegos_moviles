Menu = function(game){}

Menu.prototype = {

	create:function(){

        this.gametitle = this.game.add.sprite(this.game.world.centerX,100,"gametitle");
        this.gametitle.anchor.setTo(0.5);
        
        this.play = this.game.add.sprite(this.game.world.centerX,300,"play");
        this.play.anchor.setTo(0.5);
        this.play.inputEnabled = true;
        this.play.events.onInputDown.add(this.goGame, this);
		
    },
    goGame:function(){
        this.state.start("Game");
    }
}