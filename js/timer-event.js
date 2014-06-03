$(document).ready(function() {
// Timer Expire Event
  var timer = setInterval(function() {

    var count_sec = parseInt($('.h3-second').html());
    var count_min = parseInt($('.h3-minute').html());

    if (count_sec !== 0) {
      	$('.h3-second').html(count_sec - 1);
    } else if (count_sec == 0) {
    	$('.h3-minute').html(count_min - 1);
    	$('.h3-second').html(59);
    } else if (count_min == 0) {
    	clearInterval(timer);
    }
  }, 1000);

// Week earnings Timer Event
  var increase_amount = setInterval(function() {
  	var amount = parseInt($('.h2-amount').html().replace(",", ""));
  	var new_amt = amount + 250;
  	var rst = new_amt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  	$('.h2-amount').html(rst);
  }, 20000);

//Change the Member'name and Amount Event
  window.name_index = 0;
  var rotate_text = setInterval(function(){
  	var txt_1 = $(".name-1").html();
  	var txt_2 = $(".name-2").html();
  	var arr_1 = new Array( "David_1", "David_2", "David_3");
  	var arr_2 = new Array( "$23.234", "$2323.3", "$122.123");

  	arr_1.push(txt_1);
  	arr_2.push(txt_2);

	window.name_index = (window.name_index+1) % 4 ;

  	$(".name-1").html(arr_1[window.name_index]);
  	$(".name-2").html(arr_2[window.name_index]);

  }, 15000);
});