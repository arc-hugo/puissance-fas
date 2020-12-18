let player_1 = "";
let player_2 = "";
let partie = undefined;

document.addEventListener("DOMContentLoaded", function() {
 	arrow_list = document.getElementById("arrow_list");
	for (let i = 0; i < 7; i++) {
        const arrow = document.createElement("td");
        arrow.id = "select_col"+String(i);
        arrow.className = "arrow_container";
        /*arrow.hidden = "true";*/

        arrow_img = document.createElement("img");
        arrow_img.src = "./images/down_arrow.svg";
        arrow_img.className = "arrow_img"
        arrow.appendChild(arrow_img);
        arrow_list.appendChild(arrow);
    }
});

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

    fleches = document.getElementsByClassName("arrow_img");
    fleches.forEach.call(function(fleche){
	  	fleche.addEventListener("click", play(i));
	});
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

    const playerOne = partie.plateau.playerOneTokens;
	const playerTwo = partie.plateau.playerTwoTokens;
    
	for (let i = 0; i < playerOne.length; i++){
		ligne = playerOne[i].x ;
		colonne = playerOne[i].y;
		let td = document.getElementById("row"+String(ligne+1)+"_col"+String(colonne+1));
        if (td.innerHTML != '') {
            const image = document.createElement("img");
            image.src = "./images/jeton_rouge.svg";
            image.className = "jeton_img";
            td.appendChild(image);
        }
		
    }
    
	for (let i = 0; i < playerTwo.length; i++){
		ligne = playerTwo[i].x 
		colonne = playerTwo[i].y
		let td = document.getElementbyId("row"+String(ligne+1)+"_col"+String(colonne+1));
        if (td.innerHTML != '') {
            const image = document.createElement("img");
            image.src = "./images/jeton_jaune.svg";
            image.className = "jeton_img";
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
			fleche.src = "./images/down_arrow_rouge.svg";
		}
		else {
			fleche.src = "./images/down_arrow_jaune.svg";
		}
	  	fleche.disabled = true;
    });

	playable = partie.plateau.playableColumn;
	playable.forEach(function(i){
	  	fleches[i].disabled = false;
	});
}
