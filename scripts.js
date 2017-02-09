$('.redButton').on('click', function() {
	$('.colorBox').css('background','red');
  $('.message').text('The circle is red');
});

$('.blueButton').on('click', function() {
	$('.colorBox').css('background','blue');
  $('.message').text('The circle is blue');
});

$('.greenButton').on('click', function() {
	$('.colorBox').css('background','green');
  $('.message').text('The circle is green');
});