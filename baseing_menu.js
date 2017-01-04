function TomatoMenu()
{
	this.install = function(target)
	{
		this.element = document.createElement("img");
		this.element.setAttribute("src", "Tomato.svg");
		this.element.style.padding = "5%";
		this.element.style.width = "12%";
		this.element.style.bottom = "0px";
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

		var baseMenu = document.getElementById('menu')
		console.log(baseMenu.style.visibility)

		if (baseMenu.style.visibility == "visible")
		{
			baseMenu.style.visibility = "hidden"
			baseMenu.style.position = "fixed"
			console.log("menu closed")
		}
		else if (baseMenu.style.visibility == "hidden")
		{
			baseMenu.style.position = "relative"
			baseMenu.style.visibility = "visible"
			console.log("menu open")
		}

	}

	this.install(document.getElementById("main"));
}