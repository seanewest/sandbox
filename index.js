var engine = require('./lib/engine.js')();
var repl = require('./repl.js')(engine);

//for use in the browser console
window.engine = engine;
window.repl = repl;
window.Q = engine.Q;

