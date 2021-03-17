/*Mitarbeiterkarte 1 ausgeblenden*/
var info1 = document.getElementById("mitarbeiter1");
info1.style.display =  "none"; //Inhalt ausblenden
info1.style.zIndex = 999;

/*Mitarbeiterkarte 2 ausgeblenden*/
var info2 = document.getElementById("mitarbeiter2");
info2.style.display =  "none"; //Inhalt ausblenden
info2.style.zIndex = 999;

/*Mitarbeiterkarte 3 ausgeblenden*/
var info3 = document.getElementById("mitarbeiter3");
info3.style.display =  "none"; //Inhalt ausblenden
info3.style.zIndex = 999;

/*Mitarbeiterkarte 4 ausgeblenden*/
var info4 = document.getElementById("mitarbeiter4");
info4.style.display =  "none"; //Inhalt ausblenden
info4.style.zIndex = 999;

/*Mitarbeiterkarte 5 ausgeblenden*/
var info5 = document.getElementById("mitarbeiter5");
info5.style.display =  "none"; //Inhalt ausblenden
info5.style.zIndex = 999;

/*Mitarbeiterkarte 1 Anzeigen und die anderen Schließen*/
function button1Show(){
    info1.style.display = "";
    info2.style.display = "none";
    info3.style.display = "none";
    info4.style.display = "none";
    info5.style.display = "none";
    }

/*Mitarbeiterkarte 2 Anzeigen und die anderen Schließen*/
function button2Show(){
    info1.style.display = "none";
    info2.style.display = "";
    info3.style.display = "none";
    info4.style.display = "none";
    info5.style.display = "none";
    }

/*Mitarbeiterkarte 3 Anzeigen und die anderen Schließen*/
function button3Show(){
    info1.style.display = "none";
    info2.style.display = "none";
    info3.style.display = "";
    info4.style.display = "none";
    info5.style.display = "none";
    }

/*Mitarbeiterkarte 4 Anzeigen und die anderen Schließen */
function button4Show(){
    info1.style.display = "none";
    info2.style.display = "none";
    info3.style.display = "none";
    info4.style.display = "";
    info5.style.display = "none";
    }

/*Mitarbeiterkarte 5 Anzeigen und die anderen Schließen*/
function button5Show(){
    info1.style.display = "none";
    info2.style.display = "none";
    info3.style.display = "none";
    info4.style.display = "none";
    info5.style.display = "";
    }
