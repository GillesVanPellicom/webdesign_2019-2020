//function to change form color
function swapColors() {
    document.getElementById("innerShadow").style.background = "yellow";
}

//Bool to store visibility state of footer
var footerHidden = true;
//Function to control footer visibility
function footerHide() {
    if (footerHidden) {
        document.getElementById("footer").style.visibility = "visible";
        footerHidden = false;
    } else {
        document.getElementById("footer").style.visibility = "hidden";
        footerHidden = true;
    }
}

//Bool to store change state of footer
var footerChanged = true;
//Function to change footer
function footerChange() {
    if (footerChanged) {
        document.getElementById("footer").innerHTML = "Heilige BimBam, hier gaat het buizen regenen!"
        document.getElementById("footer").style.color = "white";
        footerChanged = false;
    } else {
        document.getElementById("footer").innerHTML = "© ik&mijzelf - toets webdesign 5INF - Mei 2020"
        document.getElementById("footer").style.color = "black";
        footerChanged = true;
    }
}

//function to read form
function leesUit() {
    //variables to store form readout
    var naamEnVoornaam = input.naamEnVoornaam.value;
    var postcode = input.postcode.value;
    var email = input.emailAdres.value;
    var studeerVoldoende = input.studeerVoldoendeRadio.value;
    //if statement to inform user of errors and to complete task
    //Wrong name error
    if (naamEnVoornaam == "" || !isNaN(naamEnVoornaam)) {
        alert("naam en lvoornaam invoeren please...");
        //Wrong postcode error
    } else if (postcode > 9999 || isNaN(postcode)) {
        alert("En nu een deftige postcode...");
        //Wrong email error
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        alert("Echt waar? Nu een goede email...");
        //Slagen and bissen at the same time message
    } else if (input.slagenCheckbox.checked && input.bissenCheckbox.checked) {
        alert("Uw naam is: " + naamEnVoornaam + ", uw postcode is: " + postcode + " en uw email is: " + email + ". Studeer jij voldoende? Het antwoord is " + studeerVoldoende + ". En voor een of ander reden wil jij bissen en slagen tegelijkertijd.")
        //Not slagen and not bissen at the same time message
    } else if (!input.slagenCheckbox.checked && !input.bissenCheckbox.checked) {
        alert("Uw naam is: " + naamEnVoornaam + ", uw postcode is: " + postcode + " en uw email is: " + email + ". Studeer jij voldoende? Het antwoord is " + studeerVoldoende + ". En jij wil niet slagen, maar ook niet bissen. Speciaal persoon.")
    } else if (input.slagenCheckbox.checked) {
        //Slagen message
        alert("Uw naam is: " + naamEnVoornaam + ", uw postcode is: " + postcode + " en uw email is: " + email + ". Studeer jij voldoende? Het antwoord is " + studeerVoldoende + ". En jij wil slagen.")
        //Bissen message
    } else {
        alert("Uw naam is: " + naamEnVoornaam + ", uw postcode is: " + postcode + " en uw email is: " + email + ". Studeer jij voldoende? Het antwoord is " + studeerVoldoende + ". En jij wil bissen.")
    }
}

function colors() {
    if (paginaKleurSelect.value == 2) {
        document.body.style.backgroundColor = "red";
        document.getElementById("form").style.color = "red";
    } else if (paginaKleurSelect.value == 3) {
        document.body.style.backgroundColor = "yellow";
        document.getElementById("form").style.color = "yellow";
    } else if (paginaKleurSelect.value == 4) {
        document.body.style.backgroundColor = "blue";
        document.getElementById("form").style.color = "blue";
    } else if (paginaKleurSelect.value == 1) {
        document.body.style.backgroundColor = "white";
        document.getElementById("form").style.color = "black";
    }

}
