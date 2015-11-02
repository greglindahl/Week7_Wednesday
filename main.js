$(document).ready(function(){

	var userPrompt = prompt("What's your name?");

	var message = $("<span class='2016'>2016 projection</span>");

alert(userPrompt);

$('.badge-info').hover(function() {
	$(this).css('background-color', '#b20000');
});

$('.panel:odd').css('background-color', 'red');

$('.progress-bar-success').mouseenter(function() {
	$(this).append(message);
}).mouseleave(function() {
	$('.2016').remove();
});

$(".table-striped tr:nth-child(3)").nextAll().remove();

$('.btn-primary').click(function() {
	$(this).find('.glyphicon').hide();
	$(this).css('color', 'grey');
});

$('.btn-primary, .col-sm3').dblclick(function() {
	$(this).remove();
});

$('.close').click(function() {
	alert('YOU CAN NEVER GET THIS BACK');
	$('.alert-info').remove();
});

});

