class Partie {
    plateau;
    currentPlayer;
    win;
	constructor(x, y) {
        this.plateau = new Plateau(x,y);
	    this.currentPlayer = 1;
	    this.win = 0;
    }

    resetPlateau = (x,y) => {
        delete this.plateau;
        this.plateau = new Plateau(x,y);
    }
    /*
        Joue le jeton du joueur actuel dans la colonne désignée
        - x : colonne choisie 
    */
    updatePlateau = (x) => {
        this.plateau.addToken(x, this.currentPlayer);
        this.checkWin(x,this.plateau.last.y);
        if (this.currentPlayer === 1) {
            this.currentPlayer = 2;
        } else {
            this.currentPlayer = 1;
        }
        if (this.win !== 0) {
            this.plateau.playableColumn = [];
        } else {
            this.plateau.updatePlayable();
        }
    }
    /*
        Vérifie si le jeton du joueur actuel est placé dans une ligne, colonne ou diagonale gagnante
        - x : coordonnées de la colonne du jeton à vérifier
        - y : coordonnées de la ligne du jeton à vérifier
    */
    checkWin = (x, y) => {
        let tokens;
        if (this.currentPlayer === 1) {
            tokens = this.plateau.playerOneTokens;
        } else {
            tokens = this.plateau.playerTwoTokens;
        }
        
        // Récupération des lignes, colonnes et diagonales du jeton posé
        const horizontal = tokens.filter(tok => tok.y === y);
        const vertical = tokens.filter(tok => tok.x === x);
        const diag1 = tokens.filter(tok => tok.x + tok.y === x + y);
        const diag2 = tokens.filter(tok => tok.x - tok.y === x - y);
        let count = 1;
    
        console.log(vertical);
        if (horizontal.length >= 4) {
            let select = horizontal.sort((a,b) => a.x - b.x).map(({x}) => x);
            for (let index = 0; index < select.length && count < 4; index++) {
                if (select[index] === select[index-1]+1) {
                    count = count + 1;
                } else {
                    count = 1;
                }
            }
        }
        if (vertical.length >= 4 && count != 4) {
            count = 1;
            let select = vertical.sort((a,b) => a.y - b.y).map(({y}) => y);
            for (let index = 0; index < select.length && count < 4; index++) {
                if (select[index] === select[index-1]+1) {
                    count = count + 1;
                } else {
                    count = 1;
                }
            }
            console.log(count);
        }
        if (diag1.length >= 4 && count !== 4) {
            count = 1;
            let select = diag1.sort((a,b) => a.x - b.x).map(({x}) => x);
            for (let index = 0; index < select.length && count < 4; index++) {
                if (select[index] === select[index-1]+1) {
                    count = count + 1;
                } else {
                    count = 1;
                }
            }
        }
        if (diag2.length >= 4 && count !== 4) {
            count = 1;
            let select = diag2.sort((a,b) => a.x - b.x).map(({x}) => x);
            for (let index = 0; index < select.length && count < 4; index++) {
                if (select[index] === select[index-1]+1) {
                    count = count + 1;
                } else {
                    count = 1;
                }
            }
        }
    
        if (count === 4) {
            this.win = this.currentPlayer;
        }
    }
}