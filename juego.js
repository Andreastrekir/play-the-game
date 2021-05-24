let opcion = 0
function verify(userNumber,ComputerNumber){
	console.log(ComputerNumber)
	attempts++
	if (attempts<3) {
		if(parseInt(userNumber)==ComputerNumber){
			alert ("You win!!")
			return true
		} else if(parseInt(userNumber)>ComputerNumber){
			userNumber = verify(prompt("Your number is bigger then the computer"),computerNumber)

		}else{
			userNumber = verify(prompt("Your number is smaller than the computer"),ComputerNumber)
		}
	}else{
		alert("no more chances")
	}
}


function playTheGame(){

let answer = confirm("Would you like to play the game?");
if ( !answer){
	alert("No problem, Goodbye");

}else{
	prompt("Can you enter a number between 0 and 10? Please")
	function theNumber(userNumber){
		if (isNaN(parseInt(usernumber))){

			theNumber(prompt("Sorry is not a number"))
			return false;

		}else if(parseInt(userNumber)<0 || parseInt(userNumber)>10){
			theNumber(prompt("It is not a number"))
			return false
		}else{
			let ComputerNumber = Math.floor(Math.random() * 11)
			test(userNumber, ComputerNumber)
		}
	}

	theNumber(prompt("Enter a number between 0 and 10"))
}
}

	 



	//if (isNaN(playerNumber) == true){
	//	alert("Sorry Not a number, Goodbye");
	//}
	//if (playerNumber >= 0 && playerNumber <= 10){
		//ComputerNumber = Math.floor(Math.random() * 11);
	//	test(userNumber,ComputerNumber)
	//}
	//else {
	//	alert("It's not a good number, Goodbye")
	//}
  //} 

//function test(userNumber,ComputerNumber){
	//console.log(playerNumber , ComputerNumber)
//}



















