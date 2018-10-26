/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
// console.log('hi');





// var myInterval = window.setInterval(function(){
//   alert("Keep cliking!");
// }, 2000);

// $(document).click(function() {
//     clearInterval(myInterval);
//     myInterval = window.setInterval(function(){
//       alert("Keep clicking!");
//     }, 2000);
// });


let audio = document.createElement('audio')

audio.src = "https://cdn.glitch.com/e957ac3b-e9d7-4ce2-b3ab-42d7471d8786%2FCutting1.wav?1539913597716"


let scrollingDown = true


document.addEventListener('click',function(){

  
  
  
  
  audio.play() 
  
  
  let amIAtBottom = window.scrollY + window.innerHeight == document.body.clientHeight
  let amIAtTop = window.scrollY == 0
  
  if(amIAtTop && scrollingDown == false){
    scrollingDown = true
  }
  
  if(amIAtBottom){
    scrollingDown = false
  }

  if(scrollingDown){
    window.scrollBy(0,window.innerHeight)   
  } else {
    window.scrollBy(0,-window.innerHeight)   
  }
  // }
  
  
})

