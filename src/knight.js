export class Knight {
  constructor() {
      this.vertices = 64;
      this.pathCost = pathCost
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

  knightMoves(start, end, queue = [start]) {
    let current = start;
    while (!queue) {
      queue.push(this.edges(current));
    }
	}

  edges(start = this.position) { //
    const arr = []; 
    const validMoves = [[-2, -1], [-2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2], [2, -1], [2, 1]];
    let availableMoves = [];
    for (let i = 0; i < 8; i++) {
      arr.push(start);
    }
    // if (start.every(val => val > 1 && val < 6)) {
      availableMoves = arr.map((x, index) => {
        return x.map((y, j) => y + (validMoves[index][j]));
      });
      availableMoves.forEach((subArr, index) => {
        subArr.forEach((element, i) => {
          if (element < 0 || element > 7) {
            availableMoves.splice(index, 1, null)
            return;
          }
        });
      });
      return availableMoves.filter(i => i !== null)
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


  

  totalMoves() {
    
  }
}