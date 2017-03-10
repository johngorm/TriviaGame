var quizGame = {
    questions: [{
        prompt: "What year were you born?",
        answers: ['1988', '1990', '1993', '1998'],
        correctAnswer: '1993'
    }, {
        prompt: "What is your favorite instrument?",
        answers: ['Guitar', 'Drums', 'Piano', 'Saxophone'],
        correctAnswer: 'Guitar'
    }]
};

var correctGuess = 0;
var numQuestions = quizGame.questions.length;



$(document).ready(function() {
	var seconds = 10;
	var timerVar;
    // Display questions and answers
    var startGame = function() {
        $('#quiz_area').empty();
        var posPointer = 0;
  
        quizGame.questions.forEach(function(question) {
            var $question = $('<div>');
            var $questionPrompt = $('<p>');
            var $form = $('<form>'); //Why does this have to be outside the second for loop?

            $questionPrompt.text(question.prompt);
            $question.append($questionPrompt).addClass('question');
           	$question.attr('data-position',posPointer);

            question.answers.forEach(function(answer) {
                var $input = $('<input>');
                var label = answer;

                $input.attr('type', 'radio');
                $input.attr('value', label);
                $input.attr('name', 'answer');

                $form.append($input);
                $form.append(label)
                $form.addClass('answers');
            });

            $question.append($form);
            $divSpace = $('<br>');
            $('#quiz_area').append($question);
            $('#quiz_area').append($divSpace);
            posPointer++;

        });
        $stopTimeButton = $('<button>');
        $stopTimeButton.text('Stop Time');
        $stopTimeButton.addClass('stop-btn');

        $('#quiz_area').append($stopTimeButton);

        startTimer();

    };

    var startTimer = function() {
    	 
   		 timerVar = setInterval(countdown, 1000);
    };

    function countdown(){
    	console.log(seconds--);
    	if(seconds === -1){
    		clearInterval(timerVar);
    	}
    };	

    // $('#quiz_area').delegate('[type=radio]', 'click', function() {
    $('#quiz_area').on( 'click', '[type=radio]', function() {
    	console.log($(this).val());
    });

    $('.start-btn').on('click', function() {
        startGame();
    });

    $('#quiz_area').delegate('.stop-btn','click', function() {
        clearInterval(timerVar);
        getResults();
        
    });


    var getResults = function () {
    
	
		var quizForms = $('.question form');
		
		for(var ii = 0; ii < quizForms.length; ii++){
			var questionInput = quizForms[ii].children;
			var currentQuestion = quizGame.questions[ii];
			
			for(var jj = 0; jj < questionInput.length; jj++){
				if(questionInput[jj].checked && (questionInput[jj].getAttribute('value') === currentQuestion.correctAnswer)){
					correctGuess++;
				}
			}
		};	
	

    	displayResults();
    };

    var displayResults = function(){
    	$('#quiz_area').empty();
    	$('#quiz_area').append($('<p>').html('Results'));
    	$('#quiz_area').append($('<p>').html('Correct: ' + correctGuess));
    	$('#quiz_area').append($('<p>').html('Wrong: ' + (numQuestions - correctGuess)));
    };
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
