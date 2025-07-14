export class Knight {
  constructor(vertices) {
      this.vertices = vertices;
      this.position = [0, 0];
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

  possibleMoves(postion = this.position, destination) {
    const arr = [];
    const availableMoves = []
		for (let i = 0; i < 8; i++) {
			arr.push(postion);
		}
		console.log(arr)
		const values = [-2, -1, -2, 1, -1, -2, -1, 2, 1, -2, 1, 2, 2, -1, 2, 1]
    if (postion.every(val => val > 1 && val < 6)) {
			availableMoves = postion.map((x, index) => x + values[index])
    }
    return availableMoves;
    [0, 0]

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