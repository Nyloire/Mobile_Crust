function OrderSlip(l, type)
{
	this.install = function(target)
	{
		this.element = document.createElement("img");
		this.element.setAttribute("src", "OrderSlip.svg");
		this.element.style.width = "15%";
		this.element.style.top = "0px";
		this.element.style.left = l;
		this.element.style.position = "fixed";

		this.addMouseDown(this.element, this);

		main.appendChild(this.element);
	}

	this.addMouseDown = function(elem, obj)
	{
		elem.addEventListener("mousedown", function(){obj.mouseDown();}, false);
	}

	this.mouseDown = function()
	{
		this.element.style.opacity = .5;
	}


	this.install(document.getElementById("main"));
}