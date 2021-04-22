class createDrops{
    constructor(x,y){
        var options = {
            'restitution':0.1,
            'friction':0.1
        }
        this.rain =  Bodies.circle(x, y, 5, options);
        this.radius = 5;
        World.add(world, this.body);

    }

 update(){
    if(this.rain.position.y > height){
        Matter.Body.setposition(this.rain,{x:random(0, 400), y:random(0, 400)});
    }
 }

  display(){
    fill(0,0,225);
    ellipseMode(RADIUS);
    ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
  }
}