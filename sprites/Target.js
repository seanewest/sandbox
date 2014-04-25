exports = module.exports = function(engine) {
  var Q = engine.Q;
  Q.Sprite.extend('Target',{
    init: function(props) {
      this._super( Q._extend(props,{
        shape: 'circle',
        color: 'pink',
        r: 8
      }));
      engine.globals.targetCount++;
      this.add('physics');
      this.on('contact',this,'checkHit');
    },

    checkHit: function(sprite) {
      if(sprite instanceof Q.CannonBall) {
        engine.globals.targetCount--;
        this.destroy();
        if(engine.globals.targetCount == 0) { Q.stageScene('level1'); }
      }
    }
  });
}