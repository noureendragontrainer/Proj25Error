class BaseClass
{
	constructor(x,y,width,height)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2
			}
		this.x=x;
		this.y=y;
        this.width=width;
        this.height = height;
		this.body=Bodies.rect(this.x, this.y, this.width, this.height, options);
		
		World.add(world, this.body);
	}
	display()
	{
			var paperpos=this.body.position;		
			push()
			translate(paperpos.x, paperpos.y);
			imageMode(CENTER)
			image(this.image,this.x,this.y,this.r);
			
			//strokeWeight(1);
			//fill("blue");
			//ellipse(0,0,this.r, this.r);
			pop()
	}
}