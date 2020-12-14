class Box{

    //properties
    constructor(x,y,width,height){

    var options={
        restitution: 0.8
    }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);


    }

    //functions
    display(){

    var pos = this.body.position;
    var angle = this.body.angle;
    //topling 
    // push - new setting // pop - old setting // translate - perfect angle
    push ()
    translate (pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    
    fill ("blue");
    rect (0,0,this.width,this.height);
    pop()

    }
}