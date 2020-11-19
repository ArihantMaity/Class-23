class grounds{
    constructor(x,y,width,height){
        var ground_options ={
            isStatic: true
        }
    
        this.body = Bodies.rectangle(x,y,width,height,ground_options);
        this.height=height;
        this.width=width;
        World.add(world,this.body);
    }
  
    

    display(){
        var groundpose=this.body.position;
        rectMode(CENTER);
        fill("green");
        rect(groundpose.x,groundpose.y,this.width,this.height);

    }

    
}