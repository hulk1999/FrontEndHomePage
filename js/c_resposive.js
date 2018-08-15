/*jslint browser: true*/
/*global $*/


$(".menu_hidden_c a").css("display", "none");

$("#drop_down_menu_c").on("click", function(){
	$(".menu_background_c").toggle();
	$(".menu-background").toggle();
    $(".menu_hidden_c a").toggle();
	$(".decoration_menu_c").toggle();
});