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
        /*<td class = "arrow_container" id="select_col1" hidden="true" onclick="play(0)"><img class = "arrow_img" alt="select_col1"></td>*/
        fleches = document.getElementsByClassName("arrow_img");
        Array.prototype.forEach.call(fleches, (fleche, count) => {
            fleche.addEventListener("click", () => {
                partie.updatePlateau(count);
                updateToken(count, partie.currentPlayer);
                arrowUpdate();
            });
        });
        arrowUpdate();
    }
}

/*
Ajoute l'image du jeton
*/
function updateToken(x, couleur) {

    let last = partie.plateau.playerOneTokens
                .concat(partie.plateau.playerTwoTokens)
                .filter(tok => tok.x === x)
                .map(({y}) => y)
                .sort()[0];
    console.log(last);
    let td = document.getElementById("row"+String(last+1)+"_col"+String(x+1));
    console.log("row"+String(last+1)+"_col"+String(x+1));
    if (td.innerHTML != '') {
        const image = document.createElement("img");
        if (couleur === 2) {
            image.src = "./images/jeton_rouge.svg";
        } else {
            image.src = "./images/jeton_jaune.svg";
        }     
        image.className = "jeton_img";
        td.appendChild(image);
    }
}

function reset() {
    let cells = document.getElementsByClassName("cell");
    Array.prototype.forEach.call(cells, (cell) => {
        cell.innerHTML = " ";
    });
    partie.plateau.playerOneTokens = [];
    partie.plateau.playerTwoTokens = [];
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
