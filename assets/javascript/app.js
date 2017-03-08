

var quizGame = 
{
	"questions":
	[
		{
			"prompt": "What year were you born?",
			"answers": [ '1988', '1990', '1993', '1998'],
			"correctAnswer": '1993'
		},
		{
			'prompt': "What is your favorite instrument?",
			'answers': ['Guitar','Drums','Piano', 'Saxophone'],
			'correctAnswer': 'Guitar'
		}

	]

}

$(document).ready(function() {
	


	var stopTimer = function() {
		console.log('foo');
	}

	var startGame = function (){//Display questions and answers to computer screen

		for(var jj = 0; jj < quizGame.questions.length; jj++){
			var $question = $('<div>');
			var $questionPrompt = $('<p>');
			$questionPrompt.text(quizGame['questions'][jj]['prompt']);
			$question.append($questionPrompt);
			$question.addClass('question');
			var $form = $('<form>'); //Why does this have to be outside the second for loop?
			$('#quiz_area').append($question);		
			for(var ii = 0; ii < 4; ii++){
				
				var $input = $('<input>');
				var label = " " + quizGame['questions'][jj]['answers'][ii] + "  " ;
				$input.attr('type','radio');
				$input.attr('value', label);
				$input.attr('name','answer');
				$form.append($input);
				$form.append(label)
				$form.addClass('answers');
			}
			$('#quiz_area').append($form);
			$divSpace = $('<br>');
			$('#quiz_area').append($divSpace);
		}
		$stopTimeButton = $('<button>');
		$stopTimeButton.text('Stop Time');
		$stopTimeButton.addClass('timeButton');
		
		$('#quiz_area').append($stopTimeButton);

	};

	startGame();
	var seconds = 60;
	var myVar = setInterval(secondTimer, 1000);
	function secondTimer(){
		console.log(--seconds);
	}	

	$('input').on('click', function() {
		console.log($('input [type=radio]').val());
	});

	$('.timeButton').on('click',function () {
		clearInterval(myVar);
	})
	
//  for(var ii = 0; ii < 4; ii++){
	// 	var $label = $('<label>');
	// 	var answerValue = quizGame['questions'][0]['answers'][ii];
	// 	var $input = $('<input type="checkbox" />');
	// 	$input.attr('id','checkbox' + ii);
	// 	$input.attr('value', answerValue);
	// 	$answers.append($input);
	// 	console.log($label[0]);
	// 	//$label.html(answerValue);
	// 	$label.attr('for','checkbox1');
	// 	$label.text(answerValue);
	// 	$answers.append($label);
	// }
	// 	$('#quiz_area').append($answers);






	

});