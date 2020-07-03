Number = function (game) {    
    
    this.startPos = {x: game.world.width+50, y:game.world.centerY};
    this.endPos = {x: -50, y:game.world.centerY};
    Phaser.Sprite.call(this,game,this.startPos.x,this.startPos.y,"numbers");
    this.game = game;
    this.anchor.setTo(0.5);
    let randNumber = this.game.rnd.integerInRange(0, 9);
    this.frame = randNumber;
    this.slideIn();
    this.game.add.existing(this);
}

Number.prototype = Object.create(Phaser.Sprite.prototype);
Number.prototype.constructor = Number;

Number.prototype.slideIn = function () {
    let tweenIn = this.game.add.tween(this).to({ x: this.game.world.centerX}, 1000, "Sine.easeInOut", true);
}

Number.prototype.slideOut = function () {
    let tweenOut = this.game.add.tween(this).to({ x: this.endPos.x}, 1000, "Sine.easeInOut", true);
}