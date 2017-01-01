function CookPizza()
{
	this.install = function(target)
	{
		this.element = document.createElement("img");
		this.element.setAttribute("src", "CookPizzaButton.svg");
		this.element.style.padding = "5%";
		this.element.style.width = "15%";
		this.element.style.bottom = "0px";
		this.element.style.right = "0px";
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