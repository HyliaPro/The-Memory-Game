
function jeu(cardsArray,joueursarray,nbjoueurs) {
	/*
		Math.random () renvoie un nombre compris entre 0 et 1 (exclusif).
		Nous utilisons 0,5 parce que c'est la valeur moyenne.
		
		Array.sort () trie les paramètres en fonction de la valeur de retour. 
		Ainsi, 0,5 - Math.random () donnera une valeur positive ou négative avec une probabilité égale.
		Par conséquent, il triera les paramètres de manière aléatoire.
		
		Si la valeur de retour de Array.sort () est positive,
		l'indice du premier paramètre sera supérieur à celui du second.
		S'il est négatif, l'indice du deuxième paramètre sera supérieur à celui du premier.
		Et, si c'est 0, ne faites rien.
	*/
	console.log(joueursarray,nbjoueurs)
	var gameGrid = cardsArray.concat(cardsArray).sort(() => Math.random() - 0.5)
	var norepeat = true;  //declaration de variables
	let oldimg = null;
	let newimg = null;
	var clique = 0;
	var score = 0;
	var carteretourné = 0;
	var firstGuess = '';
	var secondGuess = '';
	var count = 0;
	var previousTarget = null;
	var delay = 500;
	ancienjoueurs = 0
	scoreplayerarray = [0,0,0,0]
	document.getElementById("score_j1").classList.add('bold');  
	var game = document.getElementById('game');  //recuperation de l element avec l'id game
	var grid = document.createElement('section');  //creation de l'element section 
	grid.setAttribute('class', 'grid');           //ajout de la classe grid a l elemet section
	grid.setAttribute('id', 'grid');
	game.appendChild(grid);                      //on place la section en dessous de l'element game
	//18
	for (let i = 0; i < cardsArray.length * 2; i++) {   //crée une div pour chaque carte X 2
		var name = gameGrid[i].name,            //recup le nom de la carte 
		img = gameGrid[i].img;              //recup l'arborescence de la carte
	
	var kart = document.createElement('div');   //creation de la variable correspondant a la carte
	kart.classList.add('carte');                //ajout de la classe carte 
	kart.dataset.name = name;                    //met son data-name sur le nom de la carte
	
    var recto = document.createElement('div');    //crée le recto de la carte
    recto.classList.add('face');                  //lui met la classe css du recto
	
	
    var verso = document.createElement('div');   //cree le verso de la carte
    verso.classList.add('dos');                   //lui ajoute la classe css du verso
    verso.style.backgroundImage = 'url(' + img + ')';  //lui applique l'image correspondant à la carte
	
    grid.appendChild(kart);                       //met l element kart sous l element grid
    kart.appendChild(recto);                      //met l element recto sous l element kart
    kart.appendChild(verso);                       //met l element verso sous l element kart
	};
	
	var match = function match() {                            //si on clique succecivement deux cartes correspondantes cette fonction est appelé
    var selected = document.querySelectorAll('.selected');  //on recupere tout les elements avec la classe selected
    carteretourné +=1        
    console.log(carteretourné)                                  //on ajoute 1 a la varaible contenant le nombre de carte retourné au total   
    // document.getElementById("result").innerHTML = score     //on met a jour le score sur la page html
    selected.forEach(function (carte) {                     //pour tout les elements avec la classe selected
	carte.classList.replace("carte", "trouve");                        //on leurs ajoutent la classe trouvé
    });
    if(carteretourné == cardsArray.length){                         // si le score est egale a la taille de l'array toutes les cartes ont été matché
    if(nbjoueurs > 1){ //si il y a plus de 1 joueur :
    var joueurmax = 0; // on définit la variable qui sera le l'indice du joueur ayant le plus haut score
	
    for (i=0; i<scoreplayerarray.length; i++){ // pour i allant de 0 au nombre de joueurs
	if (scoreplayerarray[i] > scoreplayerarray[joueurmax]){ // si le score d'un joueur est supérieur a celui précedent,
	joueurmax = i // on met l'indice du joueur ayant le score le plus élévé das la variable joueurmax
	}
    }
	
	scorejoueurgagnant = ("avec " + scoreplayerarray[joueurmax] + " points.") // comme c'est une partie avec plusieurs joueurs, affiche le nombre de points du joueur d'indice joueurmax
	win(joueursarray[joueurmax], scorejoueurgagnant) // on execute la fonction win avec le nom du joueur qui a gagné, suivit de son score
	}else{ // si c'est une partie avec un seul joueur
	var temps = document.getElementById("chronotime").innerText; //on va chercher la valeur du chronomètre et on la met dans la variable "temps"
	scorejoueurgagnant = ("en " + temps) // comme c'est une partie avec un joueur, on affiche le temps qu'il a mit a faire le mémory
	console.log(temps)
	win(joueursarray[0], scorejoueurgagnant) // on execute la fontion win avec le nom du joueur 1 (car c'est une partie à un joueur), suivit de son temps
	}
    console.log(joueurmax)
    
    }
	};
	
	var resetGuesses = function resetGuesses() {
	
	
    firstGuess = '';                                         //la variable correspondant à la premiere carte clique est reinitialisé 
    secondGuess = '';                                         //la variable correspondant à la deuxieme carte clique est reinitialisé 
    count = 0;                                                //le compteur de clique est remis a 0
    previousTarget = null;                                   //la carte precedente est remis a null
	
    var selected = document.querySelectorAll('.selected');       //on recupere tout les elements avec la classe selected
    selected.forEach(function (carte) {                          //pour tout les elements avec la classe selected
	carte.classList.remove('selected');                        //on leurs retire leurs classe
    });
	};
	
	grid.addEventListener('click', function (event) {             //des qu un clique a l'interieur du grid est fait :
	
    var clicked = event.target;                                 //on recup l'element cliqué
	//on verifie qu il ne soit pas déja cliqué / deja trouvé / que ce soit bien une carte
    if (clicked.nodeName === 'SECTION' || clicked.getElementById === 'game' || clicked.getElementById === 'grid' ||clicked === previousTarget || clicked.parentNode.classList.contains('selected') || clicked.parentNode.classList.contains('trouve')) {
	return;                                                     // si ca n est pas une carte ou qu elle a deja ete clique ou qu elle a deja ete touvé on ne fait rien
    }else{
	if(clicked.getElementById !== 'grid'){                                                      //si tout est bon
    chronoStart()
    if (count < 2) {                                              //si on est en dessous de 2 clique (pour debug)
	count++;                                                     //on ajoute 1 a clique 
	if (count === 1) {                                           //si c est la premiere fois qu on clique (on recommence une paire)
	firstGuess = clicked.parentNode.dataset.name;               //on stock le data-name dans la variable contenant la permiere carte 
	clicked.parentNode.classList.add('selected');               //on ajoute la classe selected pour que la carte soit retourné et que on puisse voir l'image
	} else {                                                       //si on clique pour la seconde fois (deuxieme carte cliqué sur une paire)
	secondGuess = clicked.parentNode.dataset.name;              //on stock le data-name dans la variable contenant la seconde carte 
	clicked.parentNode.classList.add('selected');               //on ajoute la classe selected pour que la carte soit retourné et que on puisse voir l'image
	}
	
	if (firstGuess && secondGuess) {                           //si la variable contenant la premiere carte n est pas egale a null et pareil pour la seconde si oui alors
	if (firstGuess === secondGuess) {                         //on verif si la variable de la permiere carte est la meme que la variable de la seconde carte si oui alors
	setTimeout(match, delay);   
	if(nbjoueurs == 1) {
	scoreplayerarray[0] +=1      
	document.getElementById("score_j1").innerHTML = (joueursarray[0] + " : " + scoreplayerarray[0]);
	}
	if(nbjoueurs == 2) {
	if(ancienjoueurs == 0){
	scoreplayerarray[0] +=1      
	document.getElementById("score_j1").innerHTML = (joueursarray[0] + " : " + scoreplayerarray[0]);
	}
	else if(ancienjoueurs == 1){
	scoreplayerarray[1] +=1      
	document.getElementById("score_j2").innerHTML = (joueursarray[1] + " : " + scoreplayerarray[1]);
	}
	}
	if(nbjoueurs == 3) {
	if(ancienjoueurs == 0){
	scoreplayerarray[0] +=1      
	document.getElementById("score_j1").innerHTML = (joueursarray[0] + " : " + scoreplayerarray[0]);
	}
	else if(ancienjoueurs == 1){
	scoreplayerarray[1] +=1      
	document.getElementById("score_j2").innerHTML = (joueursarray[1] + " : " + scoreplayerarray[1]);
	}
	else if(ancienjoueurs == 2){
	scoreplayerarray[2] +=1      
	document.getElementById("score_j3").innerHTML = (joueursarray[2] + " : " + scoreplayerarray[2]);
	}
	}
	if(nbjoueurs == 4) {
	if(ancienjoueurs == 0){
	scoreplayerarray[0] +=1      
	document.getElementById("score_j1").innerHTML = (joueursarray[0] + " : " + scoreplayerarray[0]);
	}
	else if(ancienjoueurs == 1){
	scoreplayerarray[1] +=1      
	document.getElementById("score_j2").innerHTML = (joueursarray[1] + " : " + scoreplayerarray[1]);
	}
	else if(ancienjoueurs == 2){
	scoreplayerarray[2] +=1      
	document.getElementById("score_j3").innerHTML = (joueursarray[2] + " : " + scoreplayerarray[2]);
	}
	else if(ancienjoueurs == 3){
	scoreplayerarray[3] +=1      
	document.getElementById("score_j4").innerHTML = (joueursarray[3] + " : " + scoreplayerarray[3]);
	}
	}                          //on appele la fonction match 
	}else{
	if(nbjoueurs == 1) {
	document.getElementById("score_j1").classList.add('bold');  
	
	}
	if(nbjoueurs == 2) {
	if(ancienjoueurs == 0){
	document.getElementById("score_j1").classList.remove('bold');  
	document.getElementById("score_j2").classList.add('bold');  
	ancienjoueurs += 1
	}
	else if(ancienjoueurs == 1){
	
	document.getElementById("score_j2").classList.remove('bold');  
	document.getElementById("score_j1").classList.add('bold');  
	ancienjoueurs = 0
	}
	}
	if(nbjoueurs == 3) {
	if(ancienjoueurs == 0){
	document.getElementById("score_j1").classList.remove('bold');  
	document.getElementById("score_j2").classList.add('bold');  
	ancienjoueurs += 1
	}
	else if(ancienjoueurs == 1){
	document.getElementById("score_j2").classList.remove('bold');  
	document.getElementById("score_j3").classList.add('bold');  
	ancienjoueurs += 1
	}
	else if(ancienjoueurs == 2){
	document.getElementById("score_j3").classList.remove('bold');  
	document.getElementById("score_j1").classList.add('bold');  
	ancienjoueurs = 0
	}
	}
	if(nbjoueurs == 4) {
	if(ancienjoueurs == 0){
	document.getElementById("score_j1").classList.remove('bold');  
	document.getElementById("score_j2").classList.add('bold');  
	ancienjoueurs += 1
	}
	else if(ancienjoueurs == 1){
	document.getElementById("score_j2").classList.remove('bold');  
	document.getElementById("score_j3").classList.add('bold');  
	ancienjoueurs += 1
	}
	else if(ancienjoueurs == 2){
	document.getElementById("score_j3").classList.remove('bold');  
	document.getElementById("score_j4").classList.add('bold');  
	ancienjoueurs += 1
	}
	else if(ancienjoueurs == 3){
	document.getElementById("score_j4").classList.remove('bold');  
	document.getElementById("score_j1").classList.add('bold');  
	ancienjoueurs = 0
	}
	}
	}
	setTimeout(resetGuesses, delay);        //on reinitialise dans tout les cas les cartes et a ce moment la variable contenant la premiere carte est egale a null et pareil pour la seconde
	}
	previousTarget = clicked;  //la variable previousTarget prend la valeur de la carte cliqué elle servira a verif qu on ne clique pas deux fois la meme carte        
    }
	}
	};
})}		