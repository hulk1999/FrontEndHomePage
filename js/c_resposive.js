/*jslint browser: true*/
/*global $*/


$(".menu_hidden_c a").css("display", "none");

$("#drop_down_menu_c").on("click", function(){
    $(".menu_hidden_c a").toggle();
	$(".menu-background").toggleClass("menu_background_big_c");
});