exports = module.exports = function(engine) {
  var Q = engine.Q;
	Q.Sprite.extend('CannonBall',{
		init: function(props) {
			this._super({
				shape: 'circle',
				color: 'red',
				r: 8,
				restitution: 0.5,
				density: 4,
				x: props.dx * 50 + 10,
				y: props.dy * 50 + 210,
				seconds: 5
			});
			this.add('physics');
			this.on('step',this,'countdown');
		},

		countdown: function(dt) {
			this.p.seconds -= dt;
			if(this.p.seconds < 0) { 
				this.destroy();
			} else if(this.p.seconds < 1) {
				this.set({ "fill-opacity": this.p.seconds });
			}
		}
	});
}