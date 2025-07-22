export class Knight {
  constructor() {
      this.position = [0, 0];
  }

  mapMe(coordinates, prev) { //takes coordinates and creates object with current and previous coordinates
    let m = new Map();
    m.set('coordinates', coordinates)
    m.set('prev', prev)
    return m;
  }

  knightMoves(start, end, queue = []) { 
    let current; 
    let hold = [];
    let visited = []

    current = this.mapMe(start, 'origin')
    queue.push(current)  
      while (queue.length > 0) {
      if (JSON.stringify(queue[0].get('coordinates')) === JSON.stringify(end)) return queue[0];
      current = this.edges(queue[0].get('coordinates'))
      visited.forEach(x => {
        let i = x.get('coordinates')
        hold.push(JSON.stringify(i))
      })   
      current.some(x => {
        let verify = JSON.stringify(x);
          if (hold.includes(verify)) {
            return;
        }
        else {
          let node = this.mapMe(x, queue[0]);
          queue.push(node);
        }
      })
      visited.push(queue.shift())
    }
    return queue;

  }

  edges(start) {
    const arr = []; 
    let availableMoves = [];
    const validMoves = [
      [-2, -1], [-2, 1], [-1, -2], [-1, 2], 
      [1, -2], [1, 2], [2, -1], [2, 1]];
    
    for (let i = 0; i < 8; i++) {
      arr.push(start);
    }
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

  printMoves(result) {
    const arr = []
    while (result !== 'origin') {
      arr.push(result.get('coordinates'));
      result = result.get('prev');
    }
    console.log(`You made it in ${arr.length} moves! Here is your path:`)
    arr.reverse().forEach(x => console.log(x))
  }

}