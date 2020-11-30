Update_Playable = function (){
	var playable_list = [];
	this.Plateau.forEach(function(col, index) {
		if (col[0] == 0){
			playable_list.push(index);
		}
	}
	this.Playable_Colonne = playable_list;
}

Update_Plateau = function (colonne){
	let i = 0;
	colonne = this.Plateau[colonne];
	while ((colonne[i] != 0 && colonne[i+1] == 0) || i >= this.size_x){
		colonne[i+1] = colonne[i];
		colonne[i] = 0;
	}

	for (let row=0; row < this.size_x; row++){
		this.Plateau[row]
		for (col of this.Plateau){
			if (col[row] != 0 && col[row+1] == 0){
				col[row+1] = col[row];
				col[row] = 0;
			}
		}
	}
}

State_Plateau = function (){

}

Play_Plateau = function (colonne, ID_Player){
	if (this.Playable_Colonne.includes(colonne)){
		this.Plateau[colonne][0] = ID_Player;
	}
	this.Update_Playable;
	this.Update_Plateau;

}