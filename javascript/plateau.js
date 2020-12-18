/*
Classe du plateau de jeu
- playerOneTokens : liste des coordonnées de chaque jetons du joueur 1
- playerTwoTokens : liste des coordonnées de chaque jetons du joueur 2
- playable_column : liste des colonnes non remplies du plateau
- size_x : nombre de colonnes du plateau
- size_y : nombre de lignes du plateau
*/
class Plateau {
	constructor(x,y) {
        this.playerOneTokens = []
        this.playerTwoTokens = []
	    this.size_x = x;
        this.size_y = y;
        this.playableColumn = []
        for (let index = 0; index < size_x; index++) {
            this.playableColumn.push(index);
        }
    }
}

// Renvoi les jetons posés par le joueur 1
Plateau.prototype.getPlayerOneTokens = () => {
    return this.playerOneTokens;
}

// Renvoi les jetons posés par le joueur 2
Plateau.prototype.getPlayerTwoTokens = () => {
    return this.playerTwoTokens;
}

// Renvoi les colonnes non remplies
Plateau.prototype.getPlayableColumn = () => {
    return this.playableColumn;
}

// Met à jour les colonnes jouables
Plateau.prototype.updatePlayable = () => {
    // Colonnes remplies par un token
    let upToken = this.getPlayerOneTokens()
                .filter(tok => tok.y === 0)
                .concat(this.getPlayerTwoTokens().filter(tok => tok.y === 0))
                .map(({x}) => x);
    // On retire les colonnes filtrées de la liste des colonnes jouable
    this.playableColumn = this.getPlayableColumn().filter(x => !upToken.includes(x));
}

/*
Ajoute le jeton d'un joueur sur le plateau
- x : coordonnées de la colonne de placement
- couleur : couleur du jeton à placer
*/
Plateau.prototype.addToken = (x, couleur) => {
    const height = this.getPlayerOneTokens()
                    .concat(this.getPlayerOneTokens())
                    .filter(tok => tok.x === x)
                    .map(({y}) => y)
                    .sort()[0];
    if (couleur === 1) {
        this.playerOneTokens.push({x: x, y: height-1});
    } else {
        this.playerTwoTokens.push({x: x, y: height-1});
    }
}

/*
Ajoute l'image du jeton
*/

Plateau.prototype.updateToken = () => {
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