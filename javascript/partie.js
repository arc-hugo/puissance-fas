class Partie {
	constructor(x, y)
	this.plateau = new Plateau(x,y);
	this.currentPlayer = 1;
	this.win = 0;
}


/*
Vérifie si le jeton du joueur actuel est placé dans une ligne, colonne ou diagonale gagnante
- x : coordonnées de la colonne du jeton à vérifier
- y : coordonnées de la ligne du jeton à vérifier
*/
Partie.prototype.checkWin = (x, y) => {
    if (this.currentPlayer === 1) {
        const tokens = this.plateau.getPlayerOneTokens();
    } else {
        const tokens = this.plateau.getPlayerTwoTokens();
    }
    
    // Récupération des lignes, colonnes et diagonales du jeton posé
    const horizontal = tokens.filter(tok => tok.x === x);
    const vertical = tokens.filter(tok => tok.y === y);
    const diag1 = tokens.filter(tok => tok.x + tok.y === x + y);
    const diag2 = tokens.filter(tok => tok.x - tok.y === x - y);
    let count = 1;
    let win = 0;

    if (horizontal.length >= 4) {
        let select = horizontal.sort((a,b) => a.x - b.x).map(({x}) => x);
        for (let index = 0; index < select.length && count < 4; index++) {
            if (select[index] === select[index-1]+1) {
                count = count + 1;
            } else {
                count = 1
            }
        }
    }
    if (vertical.length >= 4 && win === 0) {
        let select = vertical.sort((a,b) => a.y - b.y).map(({y}) => y);
        for (let index = 0; index < select.length && count < 4; index++) {
            if (select[index] === select[index-1]+1) {
                count = count + 1;
            } else {
                count = 1
            }
        }
    }
    if (diag1.length >= 4 && win === 0) {
        let select = diag1.sort((a,b) => a.x - b.x).map(({x}) => x);
        for (let index = 0; index < select.length && count < 4; index++) {
            if (select[index] === select[index-1]+1) {
                count = count + 1;
            } else {
                count = 1
            }
        }
    }
    if (diag2.length >= 4 && win === 0) {
        let select = diag2.sort((a,b) => a.x - b.x).map(({x}) => x);
        for (let index = 0; index < select.length && count < 4; index++) {
            if (select[index] === select[index-1]+1) {
                count = count + 1;
            } else {
                count = 1
            }
        }
    }

    if (count === 4) {
        win = this.currentPlayer;
    }
    return win;
}