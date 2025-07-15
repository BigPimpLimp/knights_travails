export class Knight {
  constructor(vertices) {
      this.vertices = vertices;
      this.position = [3, 5];
      this.visited = [];
			this.movesCounter = 0;
      this.board = []
      this.adjacencyList = {
        0: []
      }
  }

  currentPosition([x, y]) {
      this.position = [x, y];
  }

  knightMoves() {
   
	}

  possibleMoves(postion = this.position, destination) { //
    const arr = []; 
    let availableMoves = [];
		for (let i = 0; i < 8; i++) {
			arr.push(postion);
		}
		const values = [[-2, -1], [-2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2], [2, -1], [2, 1]];
    if (postion.every(val => val > 1 && val < 6)) {
			availableMoves = arr.map((x, index) => {
        return x.map((y, j) => y + (values[index][j]));
      });
      return availableMoves;
  }



    //knight has to move two spaces in any direction first,
    //then move one space horizontal.
    //make sure you stay in bounds of chess board when determining
    //possible next positions.
		//possible combinations for knight moves (coordinates):
		//[x + 1, y + 2]
		//[x + 2, y + 1]
		//[x + 2, y - 1]
		//[x + 1, y - 2]
		//[x - 1, y - 2]
		//[x - 2, y - 1]
		//[x - 2, y + 1]
		//[x - 1, y + 2]

		//[x - 2, y - 1]
		//[x - 2, y + 1]
		//[x - 1, y - 2]
		//[x - 1, y + 2]
		//[x + 1, y - 2]
		//[x + 1, y + 2]
		//[x + 2, y - 1]
		//[x + 2, y + 1]


  }

  totalMoves() {
    
  }
}