//resize function
function elResize(){

	var width = $(window).width();

		if(width < 992 && width > 768){
			//small devices 768px - 992px
			$(".bandName").css("font-size", "50px");
			$(".bandName").css("color", "black");
			$("#subtitle").css("color", "black");
			$(".navLink").css("font-size", "30px");
			$("button").css("font-size", "16px");
			$("button").css("padding", "20px");
			$(".backgroundVideo").hide();
			$(".altBack").show();

		}else if(width < 768){
			//extra small devices 0px - 768px
			$(".bandName").css("font-size", "25px");
			$(".bandName").css("color", "black");
			$("#subtitle").css("color", "black");
			$(".navLink").css("font-size", "15px");
			$("button").css("font-size", "10px");
			$("button").css("padding", "14px");
			$(".backgroundVideo").hide();
			$(".altBack").show();

		}else{
			$(".bandName").css("font-size", "100px");
			$(".bandName").css("color", "#f6f6f6");
			$("#subtitle").css("color", "#f6f6f6");
			$("button").css("font-size", "28px");
			$("button").css("padding", "30px");
			$(".altBack").hide();
			$(".backgroundVideo").show();

		}
};

//hides all blocks except one clicked from nav
/*
var oldBlock = "#gigs";
var newBlock; 
$(function() {
    $('.navLink').on('click', function() {
    	//oldBlock.animate({width: 'toggle'}, 350);
    	newBlock = $('#'+$(this).data('id'));
    	newBlock.show().siblings('.textBlock').hide();
    	oldBlock = newBlock;
    });
});
*/

$(function(){
	$('.navLink').on('click', function(){
		newBlock = $('#' + $(this).data('id'));
		newBlock.show();
		newBlock.siblings('.textBlock').hide();
	});
});

/*$(function() {
    $('.navLink').on('click', function() {
    	$('#'+$(this).data('id')).show().siblings('.textBlock').hide();
    });
});*/

//$("#slide").animate({width:'toggle'},350);

//hides all except gigs for landing page
$(document).ready(function(){
	$(".page .textBlock").hide()
	$("#gigs").show();
});

//resize function on start
$(document).ready(elResize);
//resize on window change
$(window).resize(elResize);
