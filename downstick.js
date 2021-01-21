class Downstick{
    constructor(x,y,width,height){
        var option= {
            isStatic : true
        }
        this.body=Bodies.rectangle(x,y,width,height,option)
        this.x=x
        this.y=y
        this.width=width
        this.height=height
    }
    display(){
        push();
        rectMode(CENTER);
        fill("yellow")
        rect(this.x,this.y,this.width,this.height);
     pop();  
    }
}