// let element = document.querySelector('.element')
// let hover = document.querySelector('.hover')
// let hang = document.querySelector('img.hang')





// element.addEventListener('click',function(){
  
//   hover.classList.toggle('.show');

// })


// $('element').hover(function(){ 
//     $('').css('opacity','0.5');
//   },
// );


let homepage = document.querySelector('#homepage')

let innerpageOne = document.querySelector('#innerpage1')

let clickRedElement = document.querySelector('#position1.image')
let redElement = document.querySelector('#position1')

clickRedElement.addEventListener('click',function(){
  clickRedElement.classList.add('hidden')

  redElement.animate([
 {
  top:'5vh',
  left:'40vw' 
 },
 {
  top:'10vh',
  left:'-15vw'
 }
],{
  duration:1000,
  fill:'forwards'
}) 

  redElement.classList.add('rotate')

  clickRedElement.style.display ='none'

setTimeout(function(){
homepage.style.display ='none'
document.body.classList.add('pageOne')
},1000)

})




let innerpage = document.querySelector('#homepage')











