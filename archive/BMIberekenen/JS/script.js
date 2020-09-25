window.onload = calculate;
function calculate(){
	var voornaam = prompt("Wat is uw naam?");
	var lengte;
	var gewicht;
	var bmi;
	var text;

	do{
		lengte = Number(prompt("Beste " + voornaam +",\nwat is uw lengte in cm:",170));
	}while(!lengte || lengte <= 0);			//nakijken totdat gewicht een getal is dat groter is dan 0.
	do{
		gewicht = Number(prompt("Beste " + voornaam +",\nwat is uw gewicht in kg:",60));
	}while(!gewicht || gewicht <= 0);		//nakijken totdat gewicht een getal is dat groter is dan 0


	bmi = gewicht/Math.pow(lengte/100, 2)		//berekenen BMI
	bmi = Math.round(bmi * 10) / 10;		//afronden BMI

	if(bmi < 20){
		text = "<p>Beste " + voornaam + ",<br>uw BMI is gelijk aan: " + bmi + "<br>dit is kleiner dan 20, dus u bent te mager.</p>";
	} else if(bmi <= 25) {
		text = "<p>Beste " + voornaam + ",<br>uw BMI is gelijk aan: " + bmi + "<br>dit ligt tussen 20 en 25, dus u bent gezond bezig.</p>";
	} else if(bmi < 30){
		text = "<p>Beste " + voornaam + ",<br>uw BMI is gelijk aan: " + bmi + "<br>dit ligt tussen 25 en 30, dus u bent te dik.</p>";
	} else {
		text = "<p>Beste " + voornaam + ",<br>uw BMI is gelijk aan: " + bmi + "<br>dit is groter dan 30, u hebt obesitas!</p>";
	}
	document.write(text);
}