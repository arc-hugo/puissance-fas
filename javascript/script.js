let player_1 = undefined;
let player_2 = undefined;
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
    } else if (partie !== undefined) {
        let cells = document.getElementsByClassName("cell");
        Array.prototype.forEach.call(cells, (cell) => {
            cell.innerHTML = " ";
        });
        partie.resetPartie(7,6);
        arrowUpdate();
    } else {
        partie = new Partie(7,6);

        /*<td class = "arrow_container" id="select_col1" hidden="true" onclick="play(0)"><img class = "arrow_img" alt="select_col1"></td>*/
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
Ajoute l'image du jeton
*/
function updateToken(x, couleur) {

    let td = document.getElementById("row"+String(partie.plateau.last.y+1)+"_col"+String(x+1));
    const image = document.createElement("img");
    if (couleur === 2) {
        image.src = "./images/jeton_rouge.svg";
    } else {
        image.src = "./images/jeton_jaune.svg";
    }     
    image.className = "jeton_img";
    td.appendChild(image);
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
        fleche.style.visibility = "hidden";
	  	// fleche.disabled = true;
    });

	playable = partie.plateau.playableColumn;
	playable.forEach(function(i){
        fleches[i].style.visibility = "visible";
	  	// fleches[i].disabled = false;
	});
}
