





// https://stackoverflow.com/questions/46716945/generate-random-background-color-by-clicking-on-link
var red = document.getElementById("red");
let body = document.getElementByClass("red");
var output1 = document.getElementById("output1");

red.addEventListener('click',function(){
	var r = Math.floor(Math.random()*256);
	document.body.style.backgroundColor = resultColorR;
}) 

          // Random between 0-255
var g = Math.floor(Math.random()*256);          // Random between 0-255
var b = Math.floor(Math.random()*256);
      

  
var resultColorR = 'rgb(' + r + ',' + 0 + ',' + 0 + ')';
var resultColorG = 'rgb(' + 0 + ',' + g + ',' + 0 + ')';
var resultColorB = 'rgb(' + 0 + ',' + 0 + ',' + b + ')';
  

      
// function getRandom(){

// 	          // Random between 0-255
	
//         // 16777215 (decimal) == ffffff in hexidecimal
// 	// var newColor = '#'+Math.floor(Math.random()*16777215).toString(16);
        
//  //        // Convert hex to RGB:
//  //    var rgbColor = newColor.replace('#','');
//  //    var r = parseInt(rgbColor.substring(0,2), 16);
//  //    var g = parseInt(rgbColor.substring(2,4), 0);
//  //    var b = parseInt(rgbColor.substring(4,6), 0);
//  //    var result1 = 'rgba(' + r + ',' + 0 + ',' + 0 + ')';
        
//         document.body.style.backgroundColor = resultColor;
//         output1.textContent = r;
//       };
      
//       // We want the background to get a random color as soon as the page loads
//       // as well as when the link is clicked, so the function will be called right away      
//       getRandom();





