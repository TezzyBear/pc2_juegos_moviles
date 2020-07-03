GameOver = function(game){}

GameOver.prototype = {
    create:function(){       
        this.gameover = this.game.add.sprite(this.game.world.centerX,this.game.world.centerY,"gameover");
        this.gameover.anchor.setTo(0.5);
        this.gameover.inputEnabled = true;
        this.gameover.events.onInputDown.add(this.goGame, this);
		
    },
    goGame:function(){
        this.state.start("Game");
    }
}