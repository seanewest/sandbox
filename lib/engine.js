exports = module.exports = function() {
	var domready = require('domready');
	var Q = require('./Quintus')();
  var util = require('./util.js');
  
  var globals = require('../config/globals');
  var engine_opts = require('../config/engine_opts');
  var sprites = require('../sprites/');
  var scenes = require('../scenes/');

  return new function() {
    var self = this;
    this.Q = Q;
    this.util = util(self);
    this.globals = globals;
    this.engine_opts = engine_opts;
    this.onInput = function(arr, cb, that) {
      if (that) {
        cb = cb.bind(that);
      }
      Q._each(arr, function(evt) {
        Q.wrapper.addEventListener(evt,function(e) {
          cb(e);
          e.preventDefault();
        });
      }); 
    };

    domready(function(e) {
      Q.include('Input,Sprites,Scenes,SVG,Physics')
      .svgOnly()
      .setup('quintus',{ maximize: true });

      Object.keys(sprites).forEach(function(key) {
        sprites[key](self);
      });
      Object.keys(scenes).forEach(function(key) {
        scenes[key](self);
      });

      Q.stageScene(engine_opts.initial_scene);
    });
  };
}