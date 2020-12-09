class Plateau {
	constructor(Plateau,Playable_Colonne,size_x,size_y)
	this.Plateau = Plateau;
	this.Playable_Colonne = Playable_Colonne;
	this.size_x = size_x;
	this.size_y = size_y;
}

Plateau.prototype.Update_Playable = function (){
	var playable_list = [];
	this.Plateau.forEach(function(col, index) {
		if (col[0] == 0){
			playable_list.push(index);
		}
	}
	this.Playable_Colonne = playable_list;
}

Plateau.prototype.Update_Colonne = function (colonne){
	let i = 0;
	colonne = this.Plateau[colonne];
	while (i < this.size_y && colonne[i] != 0 && colonne[i+1] == 0){
		colonne[i+1] = colonne[i];
		colonne[i] = 0;
	}
}

Plateau.prototype.Check_Ligne = function (ligne, colonne, couleur){
}

Plateau.prototype.Check_Colonne = function (ligne, colonne, couleur){
    win = false;
}

Plateau.prototype.Check_Diagonale = function (ligne, colonne, couleur){
	win = false;

	if (this.Plateau[y-3][x+3] === couleur && this.Plateau[y-2][x+2] === couleur && this.Plateau[y-1][x+1] === couleur ){ 			//bas droite	
		win = true;
	} else if (this.Plateau[y+1][x-1] === couleur && this.Plateau[y-2][x+2] === couleur && this.Plateau[y-1][x+1] === couleur ){		// milieu droite
		win = true;
	} else if (this.Plateau[y+1][x-1] === couleur && this.Plateau[y-2][x+2] === couleur && this.Plateau[y-1][x+1] === couleur ){		// milieu gauche
		win = true;
	} else if (this.Plateau[y+1][x-1] === couleur && this.Plateau[y+2][x-2] === couleur && this.Plateau[y+3][x-3] === couleur ){		// haut gauche
		win = true;
	}

	else if (this.Plateau[y+3][x+3] === couleur && this.Plateau[y+2][x+2] === couleur && this.Plateau[y+1][x+1] === couleur ){    		//bas gauche
		win = true;
	} else if (this.Plateau[y-1][x-1] === couleur && this.Plateau[y+2][x+2] === couleur && this.Plateau[y+1][x+1] === couleur ){    		//mileu gauche
		win = true;
	} else if (this.Plateau[y-1][x-1] === couleur && this.Plateau[y-2][x-2] === couleur && this.Plateau[y+1][x+1] === couleur ){    		// mileu droite
		win = true;
	} else if (this.Plateau[y-1][x-1] === couleur && this.Plateau[y-2][x-2] === couleur && this.Plateau[y-3][x-3] === couleur ){    		// haut droite
		win = true;
	} else {
		win =false;
	}
	return win;
}

Plateau.prototype.State_Plateau = function (){
	var state;
	if (this.Playable_Colonne.length < 1){
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
	if (this.Playable_Colonne.includes(colonne)){
		this.Plateau[colonne][0] = ID_Player;
	}
	this.Update_Playable;
	this.Update_Plateau;
}