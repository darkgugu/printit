const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

document.body.onload = createBulletPoints(slides);

function createBulletPoints(slidesTab){

	var ins = document.querySelector("#banner .dots")

	for (let i = 0; i < slidesTab.length; i++) {
		var div = document.createElement("div")
		if (i == slidesTab.length - 1) {
			div.classList.add("dot_selected")
		}
		div.classList.add("dot")
		div.setAttribute("id", "dot" + (slidesTab.length - i))
		ins.insertBefore(div, ins.firstChild)
	}
}

document.querySelector(".arrow_left").addEventListener("click", left)
document.querySelector(".arrow_right").addEventListener("click", right)

function left(){
	slider("left")
}

function right(){
	slider("right")
}


function slider(direction){

	let currentDot = document.querySelector(".dot_selected")
	let currentImg = document.querySelector(".banner-img")
	let tagLine = document.querySelector("#banner p")
	let dotIdNumber = currentDot.id.match(/\d+/)[0]
	currentDot.classList.remove("dot_selected")

	let firstDot = document.getElementById('dot1')
	let lastDot = document.getElementById('dot4')

	if(direction == 'right'){
		if(dotIdNumber != slides.length){
			currentDot.nextSibling.classList.add("dot_selected")
		}
		else{
			firstDot.classList.add("dot_selected")
			dotIdNumber = 0
		}
		currentImg.setAttribute("src", "./assets/images/slideshow/" + slides[dotIdNumber]["image"])
		tagLine.innerHTML = slides[dotIdNumber]["tagLine"]
	}
	else if(direction == 'left'){
		if(dotIdNumber != 1){
			currentDot.previousSibling.classList.add("dot_selected")
		}
		else{
			lastDot.classList.add("dot_selected")
			dotIdNumber = slides.length + 1
		}
		currentImg.setAttribute("src", "./assets/images/slideshow/" + slides[dotIdNumber - 2]["image"])
		tagLine.innerHTML = slides[dotIdNumber - 2]["tagLine"]
	}
	else{
		console.log('error')
	}
}
