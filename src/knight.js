export class Knight {
  constructor(vertices) {
      this.vertices = vertices;
      this.position = [0, 5];
      this.movesCounter = 0;
      this.board = []
      this.adjacencyList = {
        0: []
      }
  }

  currentPosition([x, y]) {
      this.position = [x, y];
  }

  mapMe(coordinates, prev, cost = 0) {
    let m = new Map();
    m.set('coordinates', coordinates)
    m.set('prev', prev)
    m.set('cost', cost)
    return m;
  }

  knightMoves(start, end, queue = []) { 
    let current; 
    let hold = [];
    current = this.mapMe(start, 'origin')
    queue.push(current)  
    let count = 0;
    let visited = []
      while (count < 15) {
      if (JSON.stringify(queue[0]) === JSON.stringify(end)) return queue[0];
      current = this.edges(queue[0].get('coordinates'))
      visited.forEach(x => {
        let i = x.get('coordinates')
        hold.push(JSON.stringify(i))
      })   
      console.log(hold)
      current.some(x => {
        let verify = JSON.stringify(x);
          if (hold.includes(verify)) {
            console.log('Already visited')
            return;
        }
        else {
          let node = this.mapMe(x, queue[0].get('coordinates'))
          queue.push(node);
        }
      })
      visited.push(queue.shift())
      count++
    }

    return queue;

  }

  edges(start) { //
    const arr = []; 
    const validMoves = [
      [-2, -1], [-2, 1], [-1, -2], [-1, 2], 
      [1, -2], [1, 2], [2, -1], [2, 1]];
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