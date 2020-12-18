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
        console.log(player_1.text);
        console.log(player_2.text);
        partie = new Partie(7,6);
        console.log(partie.plateau.playableColumn);
    }
}

/*
Ajoute l'image du jeton
*/
function uptadeToken () {
    playerOne=this.playerOneTokens;
	playerTwo=this.playerTwoTokens;
	var jetonRouge = "./images/jeton_rouge.svg";
	var jetonJaune = "./images/jeton_jaune.svg";
	for (let i = 0; i < playerOne.length  ){
		ligne = playerOne[i].x ;
		colonne = playerOne[i].y;
		var td = document.getElementbyId("row"+String(ligne+1)+"_col"+String(colonne+1));
        if (td.innerHTML != '') {
            const image = document.createElement("img");
            image.src = jetonRouge;
            td.appendChild(image);
        }
		
	}
	for (let i = 0; i < playerTwo.length  ){
		ligne = playerTwo[i].x 
		colonne = playerTwo[i].y
		var td = document.getElementbyId("row"+String(ligne+1)+"_col"+String(colonne+1));
        if (td.innerHTML != '') {
            const image = document.createElement("img");
            image.src = jetonJaune;
            td.appendChild(image);
        }
	}
}

function arrowUpdate(){
	fleches = document.getElementsByClassName("arrow_img");
	fleches.forEach(function(fleche){
		if (partie.currentPlayer == 1){
			fleche.src = "dow_arrow_rouge";
		}
		else {
			fleche.src = "dow_arrow_jaune";
		}
	  	fleche.disabled = true;
	}

	playable = partie.plateau.playableColumn;
	playable.forEach(function(i){
	  	fleches[i].disabled = false;
	}
