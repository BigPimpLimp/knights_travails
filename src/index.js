import './style.css';
import { Knight } from './knight.js'
console.log('Connected');

// const testArr = [];
// let h;
// h = new Map();
// h.set('coord', [0, 7])
// h.set('cost', 1)
// h.set('prev', [0, 0]);

// testArr.push(h)

// h = new Map();
// h.set('coord', [5, 5])
// h.set('cost', 1)
// h.set('prev', [0, 0]);

// testArr.push(h)
// console.log(testArr[0].get('coord'))

// console.log(testArr)
// console.log(h)

const play = new Knight();
// console.log(play.edges())
console.log(play.knightMoves([0, 5], [1, 7]))
// console.log(play.visited)
