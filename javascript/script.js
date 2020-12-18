let player_1 = "";
let player_2 = "";
let partie = undefined;

function launch() {
    let selected_1 = document.getElementById("player_1");
    let selected_2 = document.getElementById("player_2");

    player_1 = selected_1.options[selected_1.selectedIndex];
    player_2 = selected_2.options[selected_2.selectedIndex];

    if (player_1 === undefined) {
        console.error("Entrer un joueur");
        document.getElementById("playerInput").focus();
    } else {
        partie = new Partie(7,6);
        console.log(partie);
    }
}

function play(x){
	partie.updatePlateau(x);
	uptadeToken();
	arrowUpdate();
}

/*
Ajoute l'image du jeton
*/
function uptadeToken() {
    reset();

    let playerOne = partie.plateau.playerOneTokens;
	let playerTwo = partie.plateau.playerTwoTokens;
	let jetonRouge = "./images/jeton_rouge.svg";
    let jetonJaune = "./images/jeton_jaune.svg";
    
	for (let i = 0; i < playerOne.length; i++){
		ligne = playerOne[i].x ;
		colonne = playerOne[i].y;
		let td = document.getElementById("row"+String(ligne+1)+"_col"+String(colonne+1));
        if (td.innerHTML != '') {
            const image = document.createElement("img");
            image.src = jetonRouge;
            image.className = "jeton_img"
            td.appendChild(image);
        }
		
    }
    
	for (let i = 0; i < playerTwo.length; i++){
		ligne = playerTwo[i].x 
		colonne = playerTwo[i].y
		let td = document.getElementbyId("row"+String(ligne+1)+"_col"+String(colonne+1));
        if (td.innerHTML != '') {
            const image = document.createElement("img");
            image.src = jetonJaune;
            image.className = "jeton_img"
            td.appendChild(image);
        }
	}
}

function reset() {
    let cells = document.getElementsByClassName("cell");
    console.log(cells);
    Array.prototype.forEach.call(cells, (cell) => {
        cell.innerHTML = "";
    });
}

/*
Modifie l'état des flèches
*/
function arrowUpdate(){
    fleches = document.getElementsByClassName("arrow_img");
    Array.prototype.forEach.call(fleches, (fleche) => {
        if (partie.currentPlayer == 1){
			fleche.src = "down_arrow_rouge";
		}
		else {
			fleche.src = "down_arrow_jaune";
		}
	  	fleche.disabled = true;
    });

	playable = partie.plateau.playableColumn;
	playable.forEach(function(i){
	  	fleches[i].disabled = false;
	});
}

/*<td class = "arrow_container" id="select_col1" hidden="true" onclick="play(0)"><img class = "arrow_img" alt="select_col1"></td>*/

document.addEventListener("DOMContentLoaded", function() {
 	arrow_container = document.getElementById("arrow_list");
	for (let i = 0; i < 7; i++) {
        const arrow = document.createElement("td");
        arrow.id = "select_col"+String(i);
        arrow.hidden = "true";
        arrow.addEventListener("click", play(i));
        arrow_list.appendChild(arrow);
    }
});
