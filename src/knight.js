export class Knight {
  constructor() {
    this.position = [0, 0];
  }

  mapMe(coordinates, prev) {
    //takes coordinates and creates object with current and previous coordinates
    let m = new Map();
    m.set("coordinates", coordinates);
    m.set("prev", prev);
    return m;
  }

  knightMoves(start, end, queue = []) {
    const visited = new Set();

    const origin = this.mapMe(start, "origin");
    queue.push(origin);

    while (queue.length > 0) {
      const current = queue.shift();
      const position = current.get("coordinates");
      const key = `${position[0]},${position[1]}`;

      if (position[0] === end[0] && position[1] === end[1]) {
        return current;
      }

      if (visited.has(key)) continue;
      visited.add(key);

      const neighbors = this.edges(position);
      for (const move of neighbors) {
        const moveKey = `${move[0]},${move[1]}`;
        if (!visited.has(moveKey)) {
          const node = this.mapMe(move, current);
          queue.push(node);
        }
      }
    }
  }

  edges(start) {
    const availableMoves = [];
    const validMoves = [
      [-2, -1],
      [-2, 1],
      [-1, -2],
      [-1, 2],
      [1, -2],
      [1, 2],
      [2, -1],
      [2, 1],
    ];

    for (const [dx, dy] of validMoves) {
      const [x, y] = start;
      const newX = x + dx;
      const newY = y + dy;

      if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
        availableMoves.push([newX, newY]);
      }
    }
    return availableMoves;
  }

  printMoves(result) {
    const path = [];
    while (result !== "origin") {
      path.push(result.get("coordinates"));
      result = result.get("prev");
    }
    console.log(`You made it in ${path.length} moves! Here is your path:`);
    path.reverse().forEach((x) => console.log(x));
  }
}
