class Ball{
    constructor(x,y,radius){
        var options={
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.image = loadImage("polygon.png");
        
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        fill("yellow")
        imageMode(CENTER);
        ellipseMode(CENTER)
        
        ellipse(pos.x,pos.y,this.radius=50);
        image(this.image,this.body.position.x,this.body.position.y,70,70)
    }
}