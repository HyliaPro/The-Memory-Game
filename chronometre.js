/* 

Script qui gère le chronomètre de la partie

*/

// initialisation des variables
var startTime = 0;
var start = 0;
var end = 0;
var diff = 0;
var timerID = 0;
let msec;
let sec;
let min;
let hr ;
var separateur = 0;

function chrono(){
	
	end = new Date() // on met dans end l'heure
	diff = end - start
	diff = new Date(diff) // on met dans diff la différence de temps

	var sec = diff.getSeconds() // la variable sec contient les secondes
	var min = diff.getMinutes() // la variable min contient les minutes

	if (min === 0) { // si le chrono affiche n'a pas dépassé une minute, on affiche pas les minutes
		document.getElementById("chronotime").innerHTML =  sec + " secondes." 
    } else if (min === 1) { // si le chrono affiche une minute, on écrit minute sans s
		if (sec < 10){
		sec = "0" + sec
		}
		document.getElementById("chronotime").innerHTML =  min + "," + sec + " minute."
    } else { // si le chrono contient plusieurs minutes, on met un s à minute
		if (sec < 10){
		sec = "0" + sec
		}
		document.getElementById("chronotime").innerHTML =  min + "," + sec + " minutes."
	}
	timerID = setTimeout("chrono()", 10)
}

function chronoStart(){ // fonction pour démarrer le chronomètre
	if(separateur == 0){
		separateur = 1;
		start = new Date()
		chrono()
	}
}

function chronoReset(){ // fonction pour reset le chronomètre
	document.getElementById("chronotime").innerHTML = "0 secondes"
	start = new Date()
	separateur = 0;
}

function chronoStop(){ // fonction pour arreter le chronomètre
	clearTimeout(timerID)
}