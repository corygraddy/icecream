$(function(){
  //show ice cream options menu if yes is selected
  $('input#yes').on('click', function(e) { 		
    $('div#iceCreamOptions').attr('id','iceCreamOptionsShown');
	});
  //hide toppings when cone selected
 $('input#no').on('click', function(e) {
	$('div#iceCreamOptionsShown').attr('id','iceCreamOptions');
	});
  //show toppings when cup selected
  $('input#cup').on('click', function(e) {
    $('div#toppings').attr('id','toppingsShown');
	});
  //hide toppings when cone selected
 $('input#cone').on('click', function(e) {
	$('div#toppingsShown').attr('id','toppings');
	});

var checked = 0;
//when checkbox is clicked, see if more than
//two are selected
$('input.top').on('click', function(e){
  checked++;
  if(checked > 2){
    alert("You can only select up to 2 toppings.");
    $('input.top').attr('checked', false);
    checked = 0;
  }
});
});