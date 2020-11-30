import "package.js"

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

Plateau.prototype.Check_Ligne = function (ligne, colonne){

}

Plateau.prototype.Check_Colonne = function (ligne, colonne){
	this
}

Plateau.prototype.Check_Diagonale = function (ligne, colonne){
	
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