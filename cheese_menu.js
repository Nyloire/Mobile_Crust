function CheeseMenu()
{
	this.install = function(target)
	{
		this.element = document.createElement("img");
		this.element.setAttribute("src", "Mozzarella.svg");
		this.element.style.padding = "5%";
		this.element.style.width = "12%";
		this.element.style.bottom = "10%";
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

		var cheeseMenu = document.getElementById('cheeseMenu')
		console.log(cheeseMenu.style.visibility)

		if (cheeseMenu.style.visibility == "visible")
		{
			cheeseMenu.style.visibility = "hidden"
			cheeseMenu.style.position = "fixed"
			console.log("menu closed")
		}
		else if (cheeseMenu.style.visibility == "hidden")
		{
			cheeseMenu.style.visibility = "visible"
			cheeseMenu.style.position = "relative"
			console.log("menu open")
		}
	}


	this.install(document.getElementById("main"));
}