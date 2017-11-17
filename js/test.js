$(document).ready(function() {

	var type = "animals"
	var count = 1; 
	for (var j = 0; j < 40; j++){
	for (var i =1; i<11; i++){

		var bodyWidth = document.body.clientWidth
  		var bodyHeight = document.body.clientHeight;
  		var randPosX = Math.floor((Math.random()*bodyWidth))+"px";
  		var randPosY = Math.floor((Math.random()*bodyHeight))+"px";

  		var img = "'icons/"+type+"/"+i+".png'"
		var style = " height='20px' width='20px' "
  		
  		$(".imageArea").append("<img src="+img+style+" class = 'icon' id = " + count+"></div>");
  
  		$("#"+count).css('left', randPosX);
  		$("#"+count).css('top', randPosY);
  		$("#"+count).css('position', 'absolute');
  
  		count++; 

		
	  	
    	//$("div").last().css({"position":"absolute","top": top + "px", "left": left + "px"});
	}
	}

    
    $('.icon').click(function() {
    	console.log("here")
    	console.log(this)
        $(this).css('background-color', 'yellow');
    });

});

