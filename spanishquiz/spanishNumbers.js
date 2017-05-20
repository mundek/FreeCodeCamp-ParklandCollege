$(document).ready(function(){
  var questions = [{
	id: 1,
	question: 6,
	answer: "siete"
},
{
	id: 2,
	question: 20,
	answer: "viente"
},
{
	id: 3,
	question: 13,
	answer: "trece"
},
{
	id: 4,
	question: 16,
	answer: "dieceseis"
},
{
	id: 5,
	question: 8,
	answer: "ocho"
}
]

$('#startQuiz').click(function(){

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

var count = 9;

var index = 0;

var randQuestion = shuffle(questions);

var html = "What is the spanish number for " + randQuestion[index].question + '?';


$('#startQuiz').hide('slow');
$('h1').hide('slow');

$('#question').show('slow', function(){
$('#question').html(html);
count -= 1;
});
});
});
