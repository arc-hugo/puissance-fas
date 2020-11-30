
		class Joueur  {
			constructor(Id,Nom,Score)
			this.Id = Id;
			this.Nom = Nom;
			this.Score = 0;

		}

		class Plateau {
			constructor(Plateau,Playable_Colonne,size_x,size_y)
			this.Plateau = Plateau;
			this.Playable_Colonne = Playable_Colonne;
			this.size_x = size_x;
			this.size_y = size_y;

		}

		class Partie {
			constructor(Current_Player, Board)
			this.Current_Player = Current_Player;
			this.Board = Board;
		}
	
