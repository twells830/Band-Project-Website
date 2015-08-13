function elResize(){
var width = $(window).width();
	if(width < 992 && width > 768){
		//small devices 768px - 992px
		$(".bandName").css("font-size", "50px");
		$("button").css("font-size", "16px");
		$("button").css("padding", "20px");
	}else if(width < 768){
		//extra small devices 0px - 768px
		$(".bandName").css("font-size", "25px");
		$("button").css("font-size", "12px");
		$("button").css("padding", "16px");
	}else{
		$(".bandName").css("font-size", "100px");
		$("button").css("font-size", "28px");
		$("button").css("padding", "30px");
	}
};

$(document).ready(elResize);
$(window).resize(elResize);

