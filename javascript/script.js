// Variables globales des joueurs et de la partie.
let player_1 = undefined;
let player_2 = undefined;
let partie = undefined;

// Génération des flèches cliquables par les joueurs.
document.addEventListener("DOMContentLoaded", function() {
 	const arrow_list = document.getElementById("arrow_list");
	for (let i = 0; i < 7; i++) {
        const arrow = document.createElement("td");
        arrow.id = "select_col"+String(i);
        arrow.className = "arrow_container";

        const arrow_img = document.createElement("img");
        arrow_img.src = "./images/down_arrow.svg";
        arrow_img.className = "arrow_img";

        arrow.appendChild(arrow_img);
        arrow_list.appendChild(arrow);
   }
});

// Fonction de lancement de la partie.
function launch() {
    // On récupère les joueurs séléctionnés dans les menus déroulants du jeu.
    const selected_1 = document.getElementById("player_1");
    const selected_2 = document.getElementById("player_2");
    
    player_1 = selected_1.options[selected_1.selectedIndex];
    player_2 = selected_2.options[selected_2.selectedIndex];
    
    // Si aucun joueur n'a été entré, on redirige le focus vers la boite de texte permettant d'en entrer.
    // On indique également l'erreur dans la console.
    if (player_1 === undefined) {
        console.error("Entrer un joueur");
        document.getElementById("playerInput").focus();
    // Sinon si ce n'est pas la première partie, on réinitialise les cellules du jeu et on active toutes les flèches.
    } else if (partie !== undefined) {
        let cells = document.getElementsByClassName("cell");
        Array.prototype.forEach.call(cells, (cell) => {
            cell.innerHTML = " ";
        });
        partie.resetPartie(7,6);
        arrowUpdate();
    // Sinon on initialise la partie et ajoute les fonctions nécéssaire à l'utilisation des flèches pour ensuite toutes les activer.
    } else {
        partie = new Partie(7,6);

        fleches = document.getElementsByClassName("arrow_img");
        Array.prototype.forEach.call(fleches, (fleche, count) => {
            fleche.addEventListener("click", () => {
                partie.updatePlateau(count);
                updateToken(count, partie.currentPlayer);
                if (partie.win !== 0) {
                    displayWin();
                }
                arrowUpdate();
            });
        });
        arrowUpdate();
    }
}

// Fonction qui affiche le joueur gagnant et entre son nom dans la liste des résultats.
function displayWin() {
    const res = document.getElementById("result_list");
    const gagnant = document.createElement("li");
    if (partie.win === 1) {
        alert("Le joueur "+player_1.text+" a gagné avec la couleur rouge !!!");
        gagnant.innerHTML = player_1.text;
    } else if (partie.win === 2) {
        alert("Le joueur "+player_2.text+" a gagné avec la couleur jaune !!!");
        gagnant.innerHTML = player_2.text;
    }
    res.appendChild(gagnant);
}

/*
Fonction qui ajoute l'image du jeton.
- x : colonne sur laquelle l'imager sera ajoutée.
- couleur : couleur correspondant au joueur posant le jeton.
*/
function updateToken(x, couleur) {

    let td = document.getElementById("row"+String(partie.plateau.last.y+1)+"_col"+String(x+1));
    const image = document.createElement("img");
    // Choisi la couleur du jeton posé.
    if (couleur === 2) {
        image.src = "./images/jeton_rouge.svg";
    } else {
        image.src = "./images/jeton_jaune.svg";
    }     
    image.className = "jeton_img";
    td.appendChild(image);
}

// Fonction qui modifie l'état des flèches selon leurs disponibilité et le joueur actuel.
function arrowUpdate(){
    fleches = document.getElementsByClassName("arrow_img");
    Array.prototype.forEach.call(fleches, (fleche) => {
        // Choisi la couleur des flèches selon le joueur actuel.
        if (partie.currentPlayer == 1){
			fleche.src = "./images/down_arrow_rouge.svg";
		}
		else {
			fleche.src = "./images/down_arrow_jaune.svg";
        }
        // Désactive les flèches.
        fleche.style.visibility = "hidden";
    });

    // Parcours la liste des flèches disponibles pour activer celle qu'elle contient.
	playable = partie.plateau.playableColumn;
	playable.forEach(function(i){
        fleches[i].style.visibility = "visible";
	});
}
