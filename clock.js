var date, hours, minutes, seconds, colour, normTime, chosenTime;
 
function toggle() {
  if (btn.innerHTML == "HEX CLOCK") {
    btn.innerHTML = "NORMAL CLOCK";
  } else {
    btn.innerHTML = "HEX CLOCK";
  }
}

function displayTime() {
	date = new Date(); 
	hours = date.getHours();
	minutes = date.getMinutes();
	seconds = date.getSeconds();

	//add zero to the left of the numbers if they are single digits
	if (hours <= 9) {
		hours = '0' + hours;
	}
	if (minutes <= 9) {
		minutes = '0' + minutes;
	}
	if (seconds <= 9) {
		seconds = '0' + seconds;
	}

	//create colour code
	colour = '#'+hours+minutes+seconds;
	//time code
	normTime = hours+":"+minutes+":"+seconds;
	//set backgroud colour
	document.body.style.background = colour;

	if(btn.innerHTML == "HEX CLOCK") {
      chosenTime = normTime;
    }          else {
      chosenTime = colour;
    }

	//set color code time display
	document.getElementById('time').innerHTML = chosenTime;

	//retrigger every second
	setTimeout(displayTime, 100);

}

//call function
displayTime();
