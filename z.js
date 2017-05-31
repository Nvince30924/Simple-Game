$(document).ready(function() {

  $("body").keydown(function(event) {
    //moves left
    if (event.which === 37) {
        
      if ($("#trunks").offset().left > 0 ) { 
        
        $("#trunks").css("left", $("#trunks").offset().left - 50);
        
      }
    
         

    } else if (event.which === 39) {

      if ($("#trunks").offset().left + 95 < $( window ).width() ) {  
        $("#trunks").css("left", $("#trunks").offset().left + 50);
      }
      
    }


  });
function random(min, max) {
  var range = Math.random() * max 
  return Math.floor (range)
}
setInterval(function() {
    
    $(".senzu").css("top", $(".senzu").offset().top + 50);
     
}, 1000);




    
});
function iscollison (playerPosition, objectPosition){
  console.log (objectPosition.top);
  var playerTop = playerPosition.top - 75;
  console.log(playerTop, "playerTop");
  var playerBottom = playerPosition.top + 75;
  console.log(playerBottom, "playerBottom");
  var objectTop = objectPosition.top - 50;
  console.log(objectTop, "objectTop");
  var objectBottom = objectPosition.top + 50;
  console.log(objectBottom, "objectBottom");
  var playerLeft = playerPosition.left - 50;
    console.log(playerLeft, "playerLeft");
  var playerRight = playerPosition.left + 50;
    console.log(playerRight, "playerRight");
  var objectLeft = objectPosition.left - 50;
    console.log(objectLeft, "objectLeft");
  var objectRight = objectPosition.left + 50;
    console.log(objectRight, "objectRight");
  if (playerLeft <= objectLeft && objectLeft <=playerRight){
   if ((playerTop <= objectTop && objectTop <= playerBottom)||(playerTop <= objectBottom && objectBottom <=playerBottom)){
   return true; 
   }
  }
    if(playerLeft<=objectRight && objectRight <=playerRight){
      if ((playerTop <= objectTop && objectTop <= playerBottom)||(playerTop <= objectBottom && objectBottom <=playerBottom)){
    return true;  
    }
  }
  return false;
}
