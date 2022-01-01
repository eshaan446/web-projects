//quiz system on web pages;
var questions=
	[
	{
		ask:"Who invented JavaScript ?\n\n a:Brendan Eich\n b: Dennis Ritchie\n c:Guido Van Rossum",
		ans:"a",
	},
	{
		ask:"Who invented Python ?\n\n a:Brendan Eich\n b: Dennis Ritchie\n c:Guido Van Rossum",
		ans:"c",
	},
	{
		ask:"Who invented C Language ?\n\n a:Brendan Eich\n b: Dennis Ritchie\n c:Guido Van Rossum",
		ans:"b",
	},
  ]
var score=0;

for(var i=0;i<questions.length;i++){
	var response=window.prompt(questions[i].ask)
	if(response==questions[i].ans){
		alert("Correct");
		score++
	}
	else{
		alert('Incorrrect');
	}
}
alert("You scored "+score+"/"+questions.length);
