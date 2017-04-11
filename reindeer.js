console.log("reindeer.js loaded")

var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];


var hohohoElement = document.getElementById("reindeer");
var coloredDeer = "";
for (n=0; n<reindeer.length; n+=1) {
	coloredDeer += colors[n] + " " + reindeer[n] + "<br>";
	console.log(coloredDeer);
}
hohohoElement.innerHTML = coloredDeer;


