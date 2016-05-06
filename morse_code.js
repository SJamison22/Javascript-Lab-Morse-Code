var display = document.getElementById('result')
var promptText = "Enter a phrase to convert to morse code: "
var words = prompt(promptText);

var wordArr = words.toLowerCase().split('');
console.log(wordArr);

for(var i = 0; i < wordArr.length; i++){
	switch(wordArr[i]){
		case "a":
		wordArr[i] = "·−"; 	
		break;
		
		case "b":
		wordArr[i] = "−···"; 
		break;
		
		case "c":
		wordArr[i] = "-.-.";
		break;

		case "d":
		wordArr[i] = "-..";
		break;

		case "e":
		wordArr[i] = ".";
		break;

		case "f":
		wordArr[i] = "..-.";
		break;

		case "g":
		wordArr[i] = "--.";
		break;

		case "h":
		wordArr[i] = "....";
		break;

		case "i":
		wordArr[i] = "..";
		break;

		case "j":
		wordArr[i] = ".---";
		break;

		case "k":
		wordArr[i] = "-.-";
		break;

		case "l":
		wordArr[i] = ".-..";
		break;

		case "m":
		wordArr[i] = "--";
		break;

		case "n":
		wordArr[i] = "-.";
		break;

		case "o":
		wordArr[i] = "---";
		break;

		case "p":
		wordArr[i] = ".--.";
		break;

		case "q":
		wordArr[i] = "--.-";
		break;

		case "r":
		wordArr[i] = ".-.";
		break;

		case "s":
		wordArr[i] = "...";
		break;

		case "t":
		wordArr[i] = "-";
		break;

		case "u":
		wordArr[i] = "..-";
		break;

		case "v":
		wordArr[i] = "...-";
		break;

		case "w":
		wordArr[i] = ".--";
		break;

		case "x":
		wordArr[i] = "-..-";
		break;

		case "y":
		wordArr[i] = "-.--";
		break;

		case "z":
		wordArr[i] = "--..";
		break;

		case "1":
		wordArr[i] = ".----";
		break;

		case "2":
		wordArr[i] = "..---";
		break;

		case "3":
		wordArr[i] = "...--";
		break;

		case "4":
		wordArr[i] = "...._";
		break;

		case "5":
		wordArr[i] = ".....";
		break;

		case "6":
		wordArr[i] = "-....";
		break;

		case "7":
		wordArr[i] = "--...";
		break;

		case "8":
		wordArr[i] = "---..";
		break;

		case "9":
		wordArr[i] = "----.";
		break;

		case "0":
		wordArr[i] = "-----";
		break;

		case "$":
		wordArr[i] = "...-..-";
		break;

		case "'":
		wordArr[i] = ".----.";
		break;

		case "(":
		wordArr[i] = "-.--.";
		break;

		case ")":
		wordArr[i] = "-.--.-";
		break;

		case "[":
		wordArr[i] = "-.--.";
		break;

		case "]":
		wordArr[i] = "-.--.-";
		break;

		case "+":
		wordArr[i] = ".-.-.";
		break;

		case ",":
		wordArr[i] = "--..--";
		break;

		case "-":
		wordArr[i] = "-....-";
		break;

		case ".":
		wordArr[i] = ".-.-.-";
		break;

		case "/":
		wordArr[i] = "-..-.";
		break;

		case ":":
		wordArr[i] = "---...";
		break;

		case ";":
		wordArr[i] = "-.-.-.";
		break;

		case "=":
		wordArr[i] = "-...-";
		break;

		case "=":
		wordArr[i] = "-...-";
		break;

		case "?":
		wordArr[i] = "..--..";
		break;

		case "@":
		wordArr[i] = ".--.-.";
		break;

		case "_":
		wordArr[i] = "..--.-";
		break;

		case "!":
		wordArr[i] = "---."
		break;
	}
}

display.innerHTML = (wordArr.join("  "));