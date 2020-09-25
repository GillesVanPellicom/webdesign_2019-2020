window.onload = calculate;
function calculate(){
	let breedte;
	do{
		breedte = prompt("Geef de breedte:");
	} while (breedte <= 0 || typeOf breedte !== 'number');
}