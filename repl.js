exports = module.exports = function(engine) {
  var Q = engine.Q;

  return {
    Q: engine.Q,
    engine: engine,
    util: engine.util,

    random: function(num) {
      return Math.round(Math.random()*num);
    },

    blocks: function() {
      var r = this.random;
      var rr = function(num) {return r(num) + 14};
      var objs = [
        { w: rr(60), h:rr(30), x: r(250), y: 0 },
        { w: rr(60), h:rr(30), x: r(250), y: 0 },
        { w: rr(60), h:rr(30), x: r(250), y: 0 },
        { w: rr(60), h:rr(30), x: r(250), y: 0 },
      ]
      engine.util.insertMany(objs);
    },

    blockball: function() {
      var objs = [
        { w: 50, h:50, x: 300, y: 0 },
        { entity: "Target", w: 50, h:50, x: 100, y: 0, components: false }
      ];
      engine.util.insertMany(objs);
    }
  };
};