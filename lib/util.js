var deleteKey = require('key-del');

exports = module.exports = function(engine) {
  var Q = engine.Q;

  return {
    insertMany: function(objs, stage) {
      if (!stage) { 
        stage = Q.stage()
      }

      var newQ = this.newQ;
      Q._each(objs, function(obj) {
        stage.insert(newQ(obj));
      });
    },

    newQ: function(opts) {
      var type = opts["entity"] || "Sprite";
      var components = opts["components"];
      var opts = deleteKey(opts, ["entity", "components"]);

      var newq;

      if (type == "Sprite") {
        newq = new Q.Sprite(opts);
      }
      else if (type == "Target") {
        newq = new Q.Target(opts);
      }
      else if (type == "Cannon") {
        newq = new Q.Cannon(opts);
      }
      else if (type == "CannonBall") {
        newq = new Q.CannonBall(opts);
      }

      if (components) {
        newq.add(components);
      } else if (type == "Sprite" && components != false) {
        newq.add("physics");
      }

      return newq;
    }
  };
};