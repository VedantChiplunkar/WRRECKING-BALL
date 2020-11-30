class Boxes {
    constructor(x, y, w, h) {
        var options = {

            isStatic :false,
            restitution:0.8,
            friction:1,
            density:0.4
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push ();
        translate(pos.x,pos.y)
        rotate(this.body.angle)
        rectMode(CENTER);
        fill("white");
        rect(0,0, this.w, this.h);
        pop ();
    }
};