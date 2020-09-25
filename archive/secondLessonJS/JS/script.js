window.onload = calculate;
function calculate(){
	var tijd;
	do{
		tijd = Number(prompt("Geef de tijd:",1));
	}while(!tijd || tijd <= 0);
	var snelheid; 
	do{
		snelheid = Number(prompt("Geef de snelheid:",1));
	}while(!snelheid || snelheid <= 0);
	var afstand = snelheid * tijd / 60;
	afstand = Math.round(afstand*100)/100;
	var text = "De afstand is " + afstand + " km.";
	document.write(text);
	confirm(text);
}