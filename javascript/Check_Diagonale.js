function Check_Diagonale(y,x,couleur) {
	count = 0;
	win = false;
	//diagonale haut gauche/bas droite

	if (this.Plateau[y-3][x+3] = couleur && this.Plateau[y-2][x+2] = couleur && this.Plateau[y-1][x+1] = couleur &&){ 			//bas droite	
		win = true;
		   

	}

	else if (this.Plateau[y+1][x-1] = couleur && this.Plateau[y-2][x+2] = couleur && this.Plateau[y-1][x+1] = couleur &&){		// milieu droite
		win = true;
		 
	}
	else if (this.Plateau[y+1][x-1] = couleur && this.Plateau[y-2][x+2] = couleur && this.Plateau[y-1][x+1] = couleur &&){		// milieu gache
		win = true;
		
	}
	else if (this.Plateau[y+1][x-1] = couleur && this.Plateau[y+2][x-2] = couleur && this.Plateau[y+3][x-3] = couleur &&){		// haut gauche
		win = true;
		 	
	}
	
	//diagonale bas gauche/haut droite

	if (this.Plateau[y+3][x+3] = couleur && this.Plateau[y+2][x+2] = couleur && this.Plateau[y+1][x+1] = couleur &&){    		//bas gauche
	 			
		win = true;
		  

	}
	if (this.Plateau[y-1][x-1] = couleur && this.Plateau[y+2][x+2] = couleur && this.Plateau[y+1][x+1] = couleur &&){    		//mileu gauche
	 			
		win = true;
		 

	}
	if (this.Plateau[y-1][x-1] = couleur && this.Plateau[y-2][x-2] = couleur && this.Plateau[y+1][x+1] = couleur &&){    		// mileu droite
	 			
		win = true;
		   

	}
	if (this.Plateau[y-1][x-1] = couleur && this.Plateau[y-2][x-2] = couleur && this.Plateau[y-3][x-3] = couleur &&){    		// haut droite
	 			
		win = true;
		   

	}

	else {
		win =false;
	}
	return win;
		
}	