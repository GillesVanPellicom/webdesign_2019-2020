let snelheid = prompt("Geef uw snelheid:", 30);		//vragen snelheid
let remafstand = ((snelheid/10)*(snelheid/10))/2;

if(confirm("Is het wegdek nat?")){			//nakijken of het wegdek nat is, als het nat is; vermeigvuldigen met factor 1.5
	remafstand *= 1.5;
};

let reactieafstand = snelheid/10*3;
let stopafstand = remafstand + reactieafstand;

//output
document.writeln("<h1 align=\"center\">Uw stopafstand is " + Math.round(stopafstand*100)/100 + " m.</h1>");