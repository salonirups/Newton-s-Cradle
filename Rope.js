class Rope{
constructor(bodyA,pointB){
var options={
bodyA:bodyA,
pointB:pointB,
stiffness:0.4,
length:12
}
 this.Rope=Constraint.create(options)
World.add(world,this.Rope)
}
display(){
var pointA=this.Rope.bodyA.position;
var pointB=this.pointB;
}
}