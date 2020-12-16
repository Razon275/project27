class Chain{
    constructor(body1,body2,offsetX,offsetY){
      this.offsetY=offsetY
      this.offsetX=offsetX
      var option={  
        bodyA: body1,
        bodyB: body2,
        stiffness:0.04,
        pointB:{x:this.offsetX,y:this.offsetY}
      }
      this.chain=Constraint.create(option);
     
      World.add(world,this.chain)
    }
   
    display(){
      if(this.chain.bodyA){
 
      
        var pointA=this.chain.bodyA.position;
        var pointB=this.pointB;
        strokeWeight(4)
        line(pointA.x,pointA.y,pointB.x,pointB.y)
      }
    }
    
 }