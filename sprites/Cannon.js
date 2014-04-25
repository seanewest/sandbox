exports = module.exports = function(engine) {
  var Q = engine.Q;
  Q.Sprite.extend('Cannon',{
    init: function(props) {
      this._super({
        shape:'polygon',
        color: 'black',
        points: [[ 0,0 ], [0,-5], [5,-10], [8, -11], [40, -11], 
        [ 40, 11], [8, 11], [5, 10], [0, 5] ],
        x: 10,
        y: 210
      });
      engine.onInput(["touchstart","mousemove","touchmove"], this.move, this);
      engine.onInput(["touchend","mouseup"], this.fire, this);
    },

    fire: function(e) {
      var dx = Math.cos(this.p.angle / 180 * Math.PI),
      dy = Math.sin(this.p.angle / 180 * Math.PI),
      ball = new Q.CannonBall({ dx: dx, dy: dy, angle: this.p.angle });
      Q.stage().insert(ball);
      ball.physics.velocity(dx*400,dy*400);
    },

    move: function(e) {
      var stage = Q.stage(), 
      touch = e.changedTouches ?  e.changedTouches[0] : e,
      point = stage.browserToWorld(touch.pageX,touch.pageY);

      var angle = Math.atan2(point.y - this.p.y, point.x - this.p.x);
      this.p.angle = angle * 180 / Math.PI;
    }
  });
}