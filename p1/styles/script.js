



let scrollPosition = 0





window.addEventListener('scroll',function(){
	scrollPosition = window.scrollY
})


let pageOne = document.querySelector('.page1')
let pageTwo = document.querySelector('.page2')
let pageThree = document.querySelector('.page3')
let pageFour = document.querySelector('.page4')



window.requestAnimationFrame(draw)

function draw(){
  

	if(scrollPosition > 0 && scrollPosition < window.innerHeight){
  	 pageOne.classList.add('lock')
  } else {
  	pageOne.classList.remove('lock')
  }

  if(scrollPosition > window.innerHeight && scrollPosition < window.innerHeight * 2){
  	 pageTwo.classList.add('lock')
  } else {
  	pageTwo.classList.remove('lock')
  }

  if(scrollPosition > window.innerHeight * 2 && scrollPosition < window.innerHeight * 3){
  	 pageThree.classList.add('lock')
  } else {
  	pageThree.classList.remove('lock')
  }

  if(scrollPosition > window.innerHeight * 3 && scrollPosition < window.innerHeight * 4){
  	 pageFour.classList.add('lock')
  } else {
  	pageFour.classList.remove('lock')
  }

  
  window.requestAnimationFrame(draw)
}