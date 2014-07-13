
$(document).ready(function(){


  $('form').on('click', '#guessButton', function(e) {
    e.preventDefault();
   	var entNumber = $('#userGuess').val();
    var lastNum = Number($('#guessList > li').last().text());
    testInput(entNumber);
    if (lastNum == 0) {}
    else if ((Math.abs(entNumber - randomNumber)) > (Math.abs(lastNum - randomNumber))) {
      $('#feedback').append("....Getting Colder");
    }
    else {
      $('#feedback').append("...Getting Warmer");
    }


  });


	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

    $(".new").click(function(){
     window.location.reload(true);
    });

});

/*--- Creat Random Number ---*/
  var randomNumber = Math.floor((Math.random() * 100) + 1);


/*--- Function to Add User's Guesses to Running List ---*/
function addNumber(){
  $('#guessList').append('<li>'+$('#userGuess').last().val()+'</li>');
  $('#userGuess').val(" ");
  console.log(randomNumber);
};


/*--- Function to Count Number of User's guesses---*/
function counter(){
  $('#count').text($('#guessList > li').length);
};


/*--- Function to Compare User's Guess to Random Number---*/
function compare (num){
  if (num == randomNumber) {
    $('#feedback').text("Congratulations...You Won in " + $('#guessList > li').length + " Guesses!");
  }
  else if (Math.abs(randomNumber - num) > 50) {
    $('#feedback').text("Ice Cold...Try Again");
  }
   else if (Math.abs(randomNumber - num) > 30) {
    $('#feedback').text("Cold...Try Again");
  }
  else if (Math.abs(randomNumber - num) > 20) {
    $('#feedback').text("Warm...Try Again");
  }
  else if (Math.abs(randomNumber - num) > 10) {
    $('#feedback').text("Hot...Try Again");
  }
  else {
    $('#feedback').text("Very Hot...Try Again");
  }
};


function testInput (numInput) {
    if (numInput > 100) {
      $('#feedback').text("Guesses Shall be between 1 - 100");
    }
    else if (numInput < 1) {
      $('#feedback').text("Guesses Shall be between 1 - 100");
    }
    else if (isNaN(numInput)) {
      $('#feedback').text("Guesses Shall be a Number");
    }
    else {
      addNumber();
      counter();
      compare(numInput);
    }
  };