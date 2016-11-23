$(document).ready(function(){
	var grid = 16;
	
createGrid(grid);

$(".box").hover(function(){
	$(this).css("backgroundColor","black");	
})

	$("#reset").click(function(){
		$(".box").css("backgroundColor","white");
		grid2 = prompt("Enter new grid size",16);
		createGrid(grid2);
		$(".box").hover(function(){
			$(this).css("backgroundColor","black");	
		})
	})
	$("#color").click(function(){
		$(".box").hover(function(){
			$(this).css("backgroundColor",rand())
			})
		
	})
})
function createGrid(number){
	$("#outline").empty();
	var numOfBoxes = Math.pow(number,2);	
	for(i=0; i<numOfBoxes;i++){
		$("#outline").append("<div class = 'box'></div>");
	}
	var length = 800/Math.sqrt(numOfBoxes);
	$(".box").css({"width":length,"height":length});
}
function rand() {
	var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
	return hue;
}