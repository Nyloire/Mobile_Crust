function Paddle()
{
	this.install = function(target)
	{
		this.element = document.createElement("img");
		this.element.setAttribute("src", "Paddle.svg");
		this.element.style.width = "45%";
		this.element.style.bottom = "-10%";
		this.element.style.left = "28%"
		this.element.style.position = "fixed";

		main.appendChild(this.element);
	}

	this.install(document.getElementById("main"));
}