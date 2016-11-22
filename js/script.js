$(document).ready(function(){
var numOfBoxes = Math.pow(16,2);	
	for(i=1; i<numOfBoxes;i++){
		$("#outline").append("<div class = 'box'></div>")
		$(".box").css("borderStyle","solid")
	}
})

