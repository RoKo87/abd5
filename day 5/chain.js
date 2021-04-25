class Chain {
    constructor(bodyA, bodyB){
        var options={
            bodyA: bodyA,
            bodyB: bodyB, 
            stiffness: 0.05,
            length: 102
        }
    this.chain=Constraint.create(options);
    World.add(world, this.chain);
    }
    

    display() {
        var pa = this.chain.bodyA.position;
        var pb = this.chain.bodyB.position;
        strokeWeight(6);
        line(pa.x, pa.y, pb.x, pb.y);
    }
}

