exports = module.exports = function(engine) {
  Q.scene('level1', new Q.Scene( function(stage) {
    engine.globals.targetCount = 0;
    stage.add("world");

    var objs = [
      { x: 250, y: 250, w: 700, h: 50, type:"static"},
      { w: 10, h:50, x: 500, y: 200 },
      { w: 10, h:50, x: 550, y: 200 },
      { w: 70, h:10, x: 525, y: 170 },
      { w: 10, h:50, x: 500, y: 130 },
      { w: 10, h:50, x: 550, y: 130 },
      { w: 70, h:10, x: 525, y: 110 },
      {
        points: [[ 0,0 ], [ 50, -50 ],[150, -50],[200,0]],
        x: 200,
        y: 225,
        type:'static',
        shape: 'polygon'
      },
      { w: 50, h:50, x: 300, y: 150 },
      { w: 25, h:25, x: 300, y: 115 },
      { entity: "Target", x: 525, y: 90, components: false },
      { entity: "Target", x: 300, y: 90, components: false },
      { entity: "Sprite", w: 30, h:30, x: 10, y: 210, color: 'blue', components: false },
      { entity: "Cannon", components: false}
    ];
    engine.util.insertMany(objs, stage);

    stage.viewport(600,400);
    stage.centerOn(300,100);

  }));
}