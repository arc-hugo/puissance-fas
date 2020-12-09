/*
Classe du plateau de jeu
- matrice : matrice du plateau, contient l'état de chaque cellules
- playable_column : liste des colonnes non remplies du plateau
- size_x : nombre de colonnes du plateau
- size_y : nombre de lignes du plateau
*/
class Plateau {
	constructor(matrice,playable_column,size_x,size_y)
	this.matrice = matrice;
	this.playable_column = playable_column;
	this.size_x = size_x;
	this.size_y = size_y;
}

// Renvoi l'état d'une colonne
Plateau.prototype.getColone = function (y) {
    return this.matrice.map(i => i[y]);
}

// Renvoi la liste des colonnes jouable
Plateau.prototype.getPlayableColumn = function () {
    return this.playable_column;
}

// Met à jour la liste des colonne jouables
Plateau.prototype.Update_Playable = function (){
	var playable_list = [];
	for (let index = 0; index < size_x, index++) {
        if (this.getColone(index)[0] === 0) {
            playable_list.push(index);
        }
    }
	this.playable_column = playable_list;
}

// Met à jour une colonne du plateau en ajoutant un jeton
Plateau.prototype.Update_Colonne = function (y, couleur){
	let i = 0;
	colonne = this.getColone(y);
	while (i < this.size_y-1 && colonne[i+1] == 0){
        i = i + 1
    }
    this.matrice[i][colonne] = couleur;
}

Plateau.prototype.Check_Ligne = function (ligne, colonne, couleur){
}

Plateau.prototype.Check_Colonne = function (ligne, colonne, couleur){
    win = false;
}

Plateau.prototype.Check_Diagonale = function (ligne, colonne, couleur){
	win = false;

	if (this.matrice[y-3][x+3] === couleur && this.matrice[y-2][x+2] === couleur && this.matrice[y-1][x+1] === couleur ){ 			//bas droite	
		win = true;
	} else if (this.matrice[y+1][x-1] === couleur && this.matrice[y-2][x+2] === couleur && this.matrice[y-1][x+1] === couleur ){		// milieu droite
		win = true;
	} else if (this.matrice[y+1][x-1] === couleur && this.matrice[y-2][x+2] === couleur && this.matrice[y-1][x+1] === couleur ){		// milieu gauche
		win = true;
	} else if (this.matrice[y+1][x-1] === couleur && this.matrice[y+2][x-2] === couleur && this.matrice[y+3][x-3] === couleur ){		// haut gauche
		win = true;
	}

	else if (this.matrice[y+3][x+3] === couleur && this.matrice[y+2][x+2] === couleur && this.matrice[y+1][x+1] === couleur ){    		//bas gauche
		win = true;
	} else if (this.matrice[y-1][x-1] === couleur && this.matrice[y+2][x+2] === couleur && this.matrice[y+1][x+1] === couleur ){    		//mileu gauche
		win = true;
	} else if (this.matrice[y-1][x-1] === couleur && this.matrice[y-2][x-2] === couleur && this.matrice[y+1][x+1] === couleur ){    		// mileu droite
		win = true;
	} else if (this.matrice[y-1][x-1] === couleur && this.matrice[y-2][x-2] === couleur && this.matrice[y-3][x-3] === couleur ){    		// haut droite
		win = true;
	} else {
		win =false;
	}
	return win;
}

Plateau.prototype.State_Plateau = function (){
	var state;
	if (this.playable_column.length < 1){
		state = "Egalité"
	}
	else if (Check_Ligne() > 0){
		state = Check_Ligne();
	}
	else if (Check_Colonne() > 0){
		state = Check_Colonne();
	}
	else if (Check_Diagonale() > 0){
		state = Check_Diagonale();
	}
	else {
		state = "En cours"
	}
	return state;
}

Plateau.prototype.Play_Plateau = function (colonne, ID_Player){
	if (this.playable_column.includes(colonne)){
		this.matrice[colonne][0] = ID_Player;
	}
	this.Update_Playable;
	this.Update_Plateau;
}