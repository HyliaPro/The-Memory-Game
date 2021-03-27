/* 

Ce script est la base du site, il permet de naviguer entre les pages lorsque l'on clique sur des boutons
Il permet aussi de récuperer les valeurs entrés et choisie par l'utilisateur, comme la difficulté,
le nombre de joueurs et les noms des joueurs.

Comme toutes les pages sont sur le même fichier HTMl, on alterne les div entre "hidden" et "show".
Pour afficher une page, on lui attribue la class "show" et on attribue la class "hidden" à toutes les autres.
De ce fait, quand un joueur clique sur "Rejouer", les prénoms qu'il a entré sont gardés en mémoire
*/

let difficulte; // déclaration des variables (difficulté choisie)
let nbjoueurs; // déclaration des variables (nombre de joueur)
let joueursarray_original = []; // déclaration des variables (noms des joueurs)
let joueursarray = []; // déclaration des variables (noms des joueurs après modification)

const array_tres_facile = [   // création de l'array avec toutes les cartes de la difficulté "Très Facile"
{
	name: 'joconde',
	img: 'Images_facile_moyen/joconde.jpg'
},	
]
const array_easy = [   // création de l'array avec toutes les cartes de la difficulté "facile"
{
	name: 'joconde',
	img: 'Images_facile_moyen/joconde.jpg'
},
{
	name: 'vagues',
	img: 'Images_facile_moyen/vagues.jpg'
},
{
	name: 'touresol',
	img: 'Images_facile_moyen/touresol.jpg'
},
{
	name: 'diamuertos',
	img: 'Images_facile_moyen/diamuertos.jpg'
},
{
	name: 'fantome',
	img: 'Images_facile_moyen/fantome.jpg'
},
{
	name: 'repas',
	img: 'Images_facile_moyen/repas.jpg'
},
{
	name: 'volcan',
	img: 'Images_facile_moyen/volcan.jpg'
},
{
	name: 'requin',
	img: 'Images_facile_moyen/requin.jpg'
},
{
	name: 'sphynx',
	img: 'Images_facile_moyen/sphynx.jpg'
},
]
const array_medium = [   // création de l'array avec toutes les cartes de la difficulté "moyen"
{
	name: 'annanas.jpg',
	img: 'Images_facile_moyen/annanas.jpg'
},
{
	name: 'ps5',
	img: 'Images_facile_moyen/ps5.jpg'
},
{
	name: 'astronaute',
	img: 'Images_facile_moyen/astronaute.jpg'
},
{
	name: 'auroreboreal',
	img: 'Images_facile_moyen/auroreboreal.jpg'
},
{
	name: 'bitcoin',
	img: 'Images_facile_moyen/bitcoin.jpg'
},
{
	name: 'chat',
	img: 'Images_facile_moyen/chat.jpg'
},
{
	name: 'chamot',
	img: 'Images_facile_moyen/chamot.jpg'
},
{
	name: 'coca',
	img: 'Images_facile_moyen/coca.jpg'
},
{
	name: 'coucherdesoleil',
	img: 'Images_facile_moyen/coucherdesoleil.jpg'
},
{
	name: 'dalailama',
	img: 'Images_facile_moyen/dalailama.jpg'
},
{
	name: 'doggo',
	img: 'Images_facile_moyen/doggo.jpg'
},
{
	name: 'pinguin',
	img: 'Images_facile_moyen/pinguin.jpg'
},
{
	name: 'eclair',
	img: 'Images_facile_moyen/eclair.jpg'
},
{
	name: 'elephant',
	img: 'Images_facile_moyen/elephant.jpg'
},
{
	name: 'lamma',
	img: 'Images_facile_moyen/lamma.jpg'
},
{
	name: 'montagne',
	img: 'Images_facile_moyen/montagne.jpg'
},
{
	name: 'meduse',
	img: 'Images_facile_moyen/meduse.jpg'
},
   {
	name: 'tigre',
	img: 'Images_facile_moyen/tigre.jpg'
}
]
const array_hard = [   // création de l'array avec toutes les cartes de la difficulté "difficile"
{
	name: 'eiffel 1',
	img: 'Images_difficile/eiffel1.jpg'
},
{
	name: 'eiffel 2',
	img: 'Images_difficile/eiffel2.jpg'
},
{
	name: 'eiffel 3',
	img: 'Images_difficile/eiffel3.jpg'
},
{
	name: 'eiffel 4',
	img: 'Images_difficile/eiffel4.jpg'
},
{
	name: 'eiffel 5',
	img: 'Images_difficile/eiffel5.jpg'
},
{
	name: 'eiffel 6',
	img: 'Images_difficile/eiffel6.jpg'
},
{
	name: 'eiffel 7',
	img: 'Images_difficile/eiffel7.jpg'
},
{
	name: 'eiffel 8.jpg',
	img: 'Images_difficile/eiffel8.jpg'
},
{
	name: 'eiffel 9',
	img: 'Images_difficile/eiffel9.jpg'
},
{
	name: 'eiffel 10',
	img: 'Images_difficile/eiffel10.jpg'
},
{
	name: 'eiffel 11',
	img: 'Images_difficile/eiffel11.jpg'
},
{
	name: 'eiffel 12',
	img: 'Images_difficile/eiffel12.jpg'
},
{
	name: 'eiffel 13',
	img: 'Images_difficile/eiffel13.jpg'
},
{
	name: 'eiffel 14',
	img: 'Images_difficile/eiffel14.jpg'
},
{
	name: 'eiffel 15',
	img: 'Images_difficile/eiffel15.jpg'
},
{
	name: 'eiffel 16',
	img: 'Images_difficile/eiffel16.jpg'
},
{
	name: 'eiffel 17',
	img: 'Images_difficile/eiffel17.jpg'
},
{
	name: 'eiffel 18.jpg',
	img: 'Images_difficile/eiffel18.jpg'
},
{
	name: 'eiffel 19',
	img: 'Images_difficile/eiffel19.jpg'
},
{
	name: 'eiffel 20',
	img: 'Images_difficile/eiffel20.jpg'
},
{
	name: 'eiffel 21',
	img: 'Images_difficile/eiffel21.jpg'
},
{
	name: 'eiffel 22',
	img: 'Images_difficile/eiffel22.jpg'
},
{
	name: 'eiffel 23',
	img: 'Images_difficile/eiffel23.jpg'
},
{
	name: 'eiffel 24',
	img: 'Images_difficile/eiffel24.jpg'
}
]

const array_sauvages = [   // création de l'array avec toutes les cartes de la difficulté des animaux sauvages
{
	name: 'gorille',
	img: 'Images_animaux/gorille.jpg'
},
{
	name: 'aigle',
	img: 'Images_animaux/aigle.jpg'
},
{
	name: 'loup',
	img: 'Images_animaux/loup.jpg'
},
{
	name: 'tigre',
	img: 'Images_animaux/tigre.jpg'
},
{
	name: 'girafe',
	img: 'Images_animaux/girafe.jpg'
},
{
	name: 'zebre',
	img: 'Images_animaux/zebre.jpg'
},
{
	name: 'ours',
	img: 'Images_animaux/ours.jpg'
},
{
	name: 'crocodile',
	img: 'Images_animaux/crocodile.jpg'
},
{
	name: 'leopard',
	img: 'Images_animaux/leopard.jpg'
},
{
	name: 'serpent',
	img: 'Images_animaux/serpent.jpg'
},
{
	name: 'renard',
	img: 'Images_animaux/renard.jpg'
},
{
	name: 'hibou',
	img: 'Images_animaux/hibou.jpg'
}
]

const array_ferme = [   // création de l'array avec toutes les cartes de la difficulté des animaux de la ferme
{
	name: 'poule',
	img: 'Images_animaux/poule.jpg'
},
{
	name: 'brebis',
	img: 'Images_animaux/brebis.jpg'
},
{
	name: 'paon',
	img: 'Images_animaux/paon.jpg'
},
{
	name: 'cheval',
	img: 'Images_animaux/cheval.jpg'
},
{
	name: 'lapin',
	img: 'Images_animaux/lapin.jpg'
},
{
	name: 'âne',
	img: 'Images_animaux/âne.jpg'
},
{
	name: 'cochon',
	img: 'Images_animaux/cochon.jpg'
},
{
	name: 'cygne',
	img: 'Images_animaux/cygne.jpg'
},
{
	name: 'vache',
	img: 'Images_animaux/vache.jpg'
},
{
	name: 'perroquet',
	img: 'Images_animaux/perroquet.jpg'
},
{
	name: 'tortue',
	img: 'Images_animaux/tortue.jpg'
},
{
	name: 'chat1',
	img: 'Images_animaux/chat1.jpg'
}
]


function obtenir_difficulte() {	// fonction exécutée après avoir selectionné la difficulté  et cliqué sur "jouer"
	var formulaire_difficulte = document.getElementById("select_difficulte");		
	var diff = formulaire_difficulte.options[formulaire_difficulte.selectedIndex].text; // On récupère la difficulté choisie par le joueur
	difficulte = diff
	document.getElementById("accueil").setAttribute("class", "hidden") // On cache la page d'accueil

	if (difficulte==="Enfant") { // Si la difficulté choisie est "enfant", on affiche la page du choix des deux catégories pour enfant : animaux de la ferme ou sauvages
		document.getElementById("choix_enfant").setAttribute("class", "show")
	} else { // Si la difficulté choisie n'est pas "enfant", on affiche la page pour choisir le nombre de joueurs
		document.getElementById("choix_nombre_de_joueurs").setAttribute("class", "show")
	} 
	return difficulte // on return la difficulté car on va l'utiliser après
}

function afficher_choix_nombre_de_joueurs(categorie_enfant) { // Fonction qui permet, après avoir cliqué sur une catégorie pour enfant, de mettre la difficulté en "Sauvage" Ou "Ferme" en fonction de l'image cliqué
	difficulte = categorie_enfant
	document.getElementById("choix_enfant").setAttribute("class", "hidden") // On cache la page du choix de la catégorie
	document.getElementById("choix_nombre_de_joueurs").setAttribute("class", "show") // On affiche la page du choix du nombre de joueurs
	return difficulte // on return la difficulté car on va l'utiliser après
}

function afficher_regles() { // fonction qui affiche les règles après avoir cliqué sur l'icone des règles
	document.getElementById("accueil").setAttribute("class", "hidden") // on cache l'accueil
	document.getElementById("regles").setAttribute("class", "show") // on affiche la page des règles
}

function revenir_accueil() { // fonction qui revient à l'accueil après avoir cliqué sur l'image retour de la page des règles
	document.getElementById("regles").setAttribute("class", "hidden") // on cache la page des règlesa
	document.getElementById("accueil").setAttribute("class", "show") // on affiche l'accueil
}


function afficher_input_prenoms(nombre_de_joueurs) {                                    // Fonction exécutée lorsque l'on clique sur une des 4 images du nombre de joueurs avec le nombre en input
	document.getElementById("choix_nombre_de_joueurs").setAttribute("class", "hidden")                  // On cache maintenant la div "choix_nombre_de_joueurs" qui contient les images pour choisir le nombre de joueurs
	document.getElementById("lesprenoms").setAttribute("class", "show")                 // On fais maintenant apparaitre les inputs de texte des prénoms des joueurs
	bouton_cest_partit = document.getElementById("bouton_cest_partit")

	// Les "if" ont pour but d'ajuster le nombre d'inputs texte des prénoms en fonction du nombre de joueurs
	if (nombre_de_joueurs < 4) {                                                        // Si on a choisit 3 joueurs,
	document.getElementById("Joueur4Input").setAttribute("class", "hidden")         // On enleve l'input texte du prénom du 4 ème joueur
	document.getElementById("score_j4").setAttribute("class", "hidden")
	}
	if (nombre_de_joueurs < 3) {                                                        // Si on a choisit 2 joueurs,
	document.getElementById("Joueur3Input").setAttribute("class", "hidden")         // On enleve l'input texte du prénom du 3 ème joueur
	document.getElementById("score_j3").setAttribute("class", "hidden")
	}
	if (nombre_de_joueurs < 2) {                                                        // Si on a choisit 1 joueur,
	document.getElementById("Joueur2Input").setAttribute("class", "hidden")         // On enleve l'input texte du prénom du 2 ème joueur 
	document.getElementById("titre_modulable").innerHTML = "Prénom du  joueur :";   // On change le titre "Prénom des joueurs" en "Prénom du joueur" car il n'y a qu'un joueur
	document.getElementById("score_j2").setAttribute("class", "hidden")
	}
	nbjoueurs = nombre_de_joueurs

	return nbjoueurs;

}


function easteregg() { // easter egg qui ajoute une difficulté en plus
	document.getElementById("ultra_easy").setAttribute("class", "show");
}


function go() { // fonction exécuté après avoir rentré les prénoms, qui récupère les prénoms et les met dans l'array joueursarray_original
	let joueursarray_original = []

	joueursarray_original.push(document.getElementById("Joueur1Input").value || "Joueur 1"); // On recupere le texte mis dans l'input du prenom du joueur 1 et on le met dans l'array, si la case est vide, on met "Joueur 1" dans l'array

	if(nbjoueurs >= 2){ // si il y a au moins 2 joueurs
	joueursarray_original.push(document.getElementById("Joueur2Input").value || "Joueur 2"); // On recupere le texte mis dans l'input du prenom du joueur 2 et on le met dans l'array, si la case est vide, on met "Joueur 2" dans l'array

	}
	if(nbjoueurs >= 3){ // si il y a au moins 3 joueurs
	joueursarray_original.push(document.getElementById("Joueur3Input").value || "Joueur 3"); // On recupere le texte mis dans l'input du prenom du joueur 3 et on le met dans l'array, si la case est vide, on met "Joueur 3" dans l'array

	}
	if(nbjoueurs >= 4){ // si il y a au moins 4 joueurs
	joueursarray_original.push(document.getElementById("Joueur4Input").value || "Joueur 4"); // On recupere le texte mis dans l'input du prenom du joueur 4 et on le met dans l'array, si la case est vide, on met "Joueur 4" dans l'array

	}

	const joueursarray = joueursarray_original.map(joueursarray_original => { //easter egg qui change les prénoms "Sylvie" et "Nicolas"
		if (joueursarray_original.toLowerCase() === "sylvie") { // si le prénom en minuscule est égal à "sylvie" (on met en minuscule le prénom pour ne pas prendre en compte les majuscules)
			return "Meilleure prof de NSI" // On change le prénom en "Meilleure prof de NSI"
		} else if (joueursarray_original.toLowerCase() === "nicolas") { // si le prénom en minuscule est égal à "nicolas" (on met en minuscule le prénom pour ne pas prendre en compte les majuscules)
			return "Meilleur prof de NSI"  // On change le prénom en "Meilleur prof de NSI"
		} else { // si le prénom n'est ni "sylvie" ni "nicolas"
			return joueursarray_original; // return  le prénom original
		}
	})


	document.getElementById("lesprenoms").setAttribute("class", "hidden") // on cache la page de choix des prénoms
	document.getElementById("jeu").setAttribute("class", "show") // on affiche la variable du plateau de jeu
	document.getElementById("score_j1").innerHTML = (joueursarray[0] + " : 0"); //on initialise le leaderboard avec les noms des joueurs
	document.getElementById("score_j2").innerHTML = (joueursarray[1] + " : 0"); //on initialise le leaderboard avec les noms des joueurs
	document.getElementById("score_j3").innerHTML = (joueursarray[2] + " : 0"); //on initialise le leaderboard avec les noms des joueurs
	document.getElementById("score_j4").innerHTML = (joueursarray[3] + " : 0"); //on initialise le leaderboard avec les noms des joueurs



	if (difficulte == "Facile"){ // Si la difficulté séléctionnée est "Facile" : 
		jeu(array_easy,joueursarray,nbjoueurs) // On execute la fonction jeu avec en input : l'array de la difficulté "Facile", les prénoms des joueurs et le nombre de joueurs
	}
	else if (difficulte == "Moyen"){ // Si la difficulté séléctionnée est "Moyen" :
		jeu(array_medium,joueursarray,nbjoueurs) // On execute la fonction jeu avec en input : l'array de la difficulté "Moyen", les prénoms des joueurs et le nombre de joueurs
	}
	else if (difficulte == "Difficile"){ // Si la difficulté séléctionnée est "Difficile" :
		jeu(array_hard,joueursarray,nbjoueurs) // On execute la fonction jeu avec en input : l'array de la difficulté "Difficile", les prénoms des joueurs et le nombre de joueurs
	}
	else if (difficulte == "Très Facile"){ // Si la difficulté séléctionnée est "Très Facile" :
		jeu(array_tres_facile,joueursarray,nbjoueurs) // On execute la fonction jeu avec en input : l'array de la difficulté "Très Facile", les prénoms des joueurs et le nombre de joueurs
	}
	else if (difficulte == "Ferme"){ // Si la difficulté séléctionnée est "Enfant1" :
		jeu(array_ferme,joueursarray,nbjoueurs) // On execute la fonction jeu avec en input : l'array de la difficulté "Enfant1", les prénoms des joueurs et le nombre de joueurs
	}
	else if (difficulte == "Sauvage"){ // Si la difficulté séléctionnée est "Enfant2" :
		jeu(array_sauvages,joueursarray,nbjoueurs) // On execute la fonction jeu avec en input : l'array de la difficulté "Enfant2", les prénoms des joueurs et le nombre de joueurs
	}
}

function win(winner, scorejoueurgagnant) { // fonction qui s'execute a la fin de la partie, avec un input le joueur gagnant et son score
	chronoStop() // On execute la fonction qui arrète le chronomètre
	document.getElementById("scorejoueurgagnant").innerHTML = (scorejoueurgagnant); // On met le score du joueur gagnant dans le texte
	document.getElementById("joueurgagnant").innerHTML = (winner); // On met le prénom du joueur gagnant
	document.getElementById("jeu").setAttribute("class", "hidden") // On cache la page de jeu
	document.getElementById("haswin").setAttribute("class", "show") // On affiche la page de fin
	confetti.speed = 1; // On choisit la rapidité de la chutte des confetti
	confetti.start(); // On execute la fonction qui démarre les confetti
}


function reset() { // fonction exécutée lorsque l'on clique sur rejouer
	chronoReset() // on remet le chronomètre à 0
    var elementgame = document.getElementById("game"); // on selectionne le plateau
    var elementgridtotrow = document.getElementById("grid"); // on selectionne les cartes du plateau
    elementgame.removeChild(elementgridtotrow); // on supprime toutes les cartes du plateau
	document.getElementById("haswin").setAttribute("class", "hidden") // On cache maintenant la div "choix_nombre_de_joueurs" qui contient les images pour choisir le nombre de joueurs
	document.getElementById("accueil").setAttribute("class", "show") // On affiche l'accueil
	confetti.stop(); // On arrète les confettis qui se sont lancé indéfiniment
	confetti.start(1000); // On redémarre les confetti pour une durée de 1 seconde pour créer cet effet de gradation
}