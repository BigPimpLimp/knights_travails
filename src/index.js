import './style.css';

console.log('Connected');

class Knight {
  constructor() {
      this.position = [0, 0];
      this.visited = [];
			this.movesCounter = 0;
  }

  currentPosition(x, y) {
      this.position = [x, y];
  }

  knightMoves() {

	}
}


