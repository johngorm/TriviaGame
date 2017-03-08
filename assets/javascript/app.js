

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
	console.log('app.js');
	
	//Display questions and answers to computer screen
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
			var label = quizGame['questions'][jj]['answers'][ii] + "  " ;
			$input.attr('type','radio');
			$input.attr('value', label);
			$input.attr('name','answer');
			$form.append($input);
			$form.append(label)
			$form.addClass('answers');
		}
		$('#quiz_area').append($form);
	}

	
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