Update_Playable = function (){
	var playable_list = [];
	this.Plateau.forEach(function(col, index) {
		if (col[0] == 0){
			playable_list.push(index);
		}
	}
	this.Playable_Colonne = playable_list;
}

Update_Colonne = function (colonne){
	let i = 0;
	colonne = this.Plateau[colonne];
	while (i < this.size_y && colonne[i] != 0 && colonne[i+1] == 0){
		colonne[i+1] = colonne[i];
		colonne[i] = 0;
	}
}

Check_Ligne = function (){

}

Check_Colonne = function (){
	this
}

Check_Diagonale = function (){
	
}

State_Plateau = function (){
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

Play_Plateau = function (colonne, ID_Player){
	if (this.Playable_Colonne.includes(colonne)){
		this.Plateau[colonne][0] = ID_Player;
	}
	this.Update_Playable;
	this.Update_Plateau;
}