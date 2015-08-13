function elResize(){
var width = $(window).width();
	if(width <992){
		$(".bandName").css("font-size", "50px");
		$("button").css("font-size", "16px");
		$("button").css("padding", "20px");
	}else{
		$(".bandName").css("font-size", "100px");
		$("button").css("font-size", "28px");
		$("button").css("padding", "30px");


	}
};

$(document).ready(elResize);
$(window).resize(elResize);

