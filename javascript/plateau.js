/*
Classe du plateau de jeu
- playerOneTokens : liste des coordonnées de chaque jetons du joueur 1
- playerTwoTokens : liste des coordonnées de chaque jetons du joueur 2
- playable_column : liste des colonnes non remplies du plateau
- size_x : nombre de colonnes du plateau
- size_y : nombre de lignes du plateau
*/
class Plateau {
    playerOneTokens = [];
    playerTwoTokens = [];
    playableColumn = [];
    size_x;
    size_y;
    last = undefined;
    constructor(x,y) {
	    this.size_x = x;
        this.size_y = y;
        for (let index = 0; index < x; index++) {
            this.playableColumn.push(index);
        }
    }

    // Met à jour les colonnes jouables
    updatePlayable = () => {
        // Colonnes remplies par un token
        let upToken = this.playerOneTokens
                    .filter(tok => tok.y === 0)
                    .concat(this.playerTwoTokens.filter(tok => tok.y === 0))
                    .map(({x}) => x);
        // On retire les colonnes filtrées de la liste des colonnes jouable
        this.playableColumn = this.playableColumn.filter(x => !upToken.includes(x));
    }
    /*
    Ajoute le jeton d'un joueur sur le plateau
    - x : coordonnées de la colonne de placement
    - couleur : couleur du jeton à placer
    */
    addToken = (x, couleur) => {
        const height = this.playerOneTokens
                        .concat(this.playerTwoTokens)
                        .filter(tok => tok.x === x)
                        .map(({y}) => y)
                        .sort()[0];
        
        if (height === undefined) {
            this.last = {x: x, y: this.size_y-1};
            if (couleur === 1) {
                this.playerOneTokens.push(this.last);
            } else {
                this.playerTwoTokens.push(this.last);
            }
        } else {
            this.last = {x: x, y: height-1};
            if (couleur === 1) {
                this.playerOneTokens.push(this.last);
            } else {
                this.playerTwoTokens.push(this.last);
            }   
        }
    }
}