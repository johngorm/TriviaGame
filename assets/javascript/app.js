var quizGame = {
    questions: [{
        prompt: "Services like Heroku are refered to as what?",
        answers: ['SaaS', 'PaaS', 'NaaS', 'IaaS'],
        correctAnswer: 'PaaS'
    }, {
        prompt: "What is the name of the law that models the exponential increase in transistors per square inch on computer chips?",
        answers: ['Gates\' Law', 'Wozniak\'s Law', 'Lovelace\'s Law', 'Moore\'s Law'],
        correctAnswer: 'Moore\'s Law'
    }, {
        prompt: 'This webcomic makes frequent use humor based on computer science.',
        answers: ['XKCD', 'Archie', 'BitFlip', 'JS-WOTs'],
        correctAnswer: 'XKCD'
    }, {
        prompt: 'Which of these is not used in front-end web development' ,
        answers: ['HTML', 'SQL', 'Javascript', 'CSS'],
        correctAnswer: 'SQL'
    }, {
        prompt: 'The first Apple computer was released in: ' ,
        answers: ['1975', '1976', '1981', '1983'],
        correctAnswer: '1976'

    }, { 
        prompt: 'The minimum number of bits needed to write the number 1000 in binary is: ' ,
        answers: ['10', '15', '16', '22'],
        correctAnswer: '10'
    }, {
        prompt: 'Decorative strokes at the ends of a character are called:' ,
        answers: ['ticks', 'montunos', 'serifs', 'stroke marks'],
        correctAnswer: 'serifs'
    }, {
        prompt: 'The name of the logic that computers perform on bits' ,
        answers: ['Mealy', 'Boschian', 'Nate', 'Boolean'],
        correctAnswer: 'Boolean'
    },
    {
        prompt: 'In Javascript, Objects are ' ,
        answers: ['Volitile', 'Static', 'First Class Citizens', 'Nonexistent'],
        correctAnswer: 'First Class Citizens'
    },{

        prompt: 'A communication system that transfers data between computer architecture components is: ' ,
        answers: ['A Wire', 'A Net', 'A Bus', 'A Channel'],
        correctAnswer: 'A Bus'
    }]
};

var correctGuess = 0;
var numQuestions = quizGame.questions.length;
var array_incorrect = [];



$(document).ready(function() {
    var seconds = 100;
    var timerVar;
    // Display questions and answers
    var startGame = function() {
        $('#quiz_area').empty();
        var posPointer = 0;
        // Put seconds counter in top of #quiz_area
        var $secondCounter = $('<div>');
        $secondCounter.attr('id','timer');
        $secondCounter.html('<h2>C:>Time Remaining: ' + seconds + '</h2>')
        $('#quiz_area').append($secondCounter);
        //Copy questions to DOM
        quizGame.questions.forEach(function(question) {
            var $question = $('<div>');
            var $questionPrompt = $('<p class=question-prompt>');
            var $form = $('<form>'); //Why does this have to be outside the second for loop?

            $questionPrompt.text("C:>"+question.prompt);
            $question.append($questionPrompt).addClass('question');
            $question.attr('data-position', posPointer);
            //Copy the possible answers and assign a radio button for each
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
        //Add button to end quiz
        $stopTimeButton = $('<button class="btn btn-lrg btn-success">');
        $stopTimeButton.text('Submit Answers');
        $stopTimeButton.addClass('stop-btn');

        $('#quiz_area').append($stopTimeButton);

        startTimer();

    };

    var startTimer = function() {
        //Every second, decrement the seconds variable and display new value
        timerVar = setInterval(countdown, 1000);
    };

    function countdown() {
        seconds--;
        $('#timer').empty();
        $('#timer').html('<h2>C:>Time Remaining: ' + seconds + '</h2>');
        if (seconds === 0) {
            endGame();
        }
    };

    // $('#quiz_area').delegate('[type=radio]', 'click', function() {
    // $('#quiz_area').on('click', '[type=radio]', function() {
    //     console.log($(this).val());  //d
    // });

    $('.start-btn').on('click', function() {
        startGame();
    });

    $('#quiz_area').delegate('.stop-btn', 'click', function() {
        // 
        endGame();

    });

    function endGame(){
        clearInterval(timerVar);
        getResults();
    }


    var getResults = function() {
        var isAnsweredCorrect;
        var quizForms = $('.question form');
        //Loop through each question and  put all respective radio buttons into radioButtons, 
        for (var ii = 0; ii < quizForms.length; ii++) {
            var radioButtons = quizForms[ii].children;
            var currentQuestion = quizGame.questions[ii];
            isAnsweredCorrect = false;
            for (var jj = 0; jj < radioButtons.length; jj++) {
                var userAnswer = radioButtons[jj].getAttribute('value');
                //if user checked the radio button with the correct value, increment score
                if (radioButtons[jj].checked && (userAnswer === currentQuestion.correctAnswer)) {
                    correctGuess++;
                    isAnsweredCorrect = true;
                }
            }
            if(!isAnsweredCorrect){
                array_incorrect.push(ii+1);
            }
        };


        displayResults();
    };

    var displayResults = function() {
        $('#quiz_area').empty();
        $('#quiz_area').append($('<p>').html('C:>Results'));
        $('#quiz_area').append($('<p>').html('Correct: ' + correctGuess));
        $('#quiz_area').append($('<p>').html('Wrong: ' + (numQuestions - correctGuess)));
        $('#quiz_area').append($('<p>').html('Questions you got wrong: ' + array_incorrect))
    };
    //  for(var ii = 0; ii < 4; ii++){
    //  var $label = $('<label>');
    //  var answerValue = quizGame['questions'][0]['answers'][ii];
    //  var $input = $('<input type="checkbox" />');
    //  $input.attr('id','checkbox' + ii);
    //  $input.attr('value', answerValue);
    //  $answers.append($input);
    //  console.log($label[0]);
    //  //$label.html(answerValue);
    //  $label.attr('for','checkbox1');
    //  $label.text(answerValue);
    //  $answers.append($label);
    // }
    //  $('#quiz_area').append($answers);
});
