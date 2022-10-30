import runTest from '../common/runTest';

enum Status {
  empty,
  bomb,
  hurdle,
  road,
}

enum Direction {
  left,
  right,
  top,
  bottom,
}

type Point = {
  x: number;
  y: number;
};

function getRoads2(board: number[][], k: number, start: Point, direction: Direction): Point[] {
  function processProad(board: number[][], roads: Point[], xCur: number, yCur: number): boolean {
    const val = board[yCur]?.[xCur];

    if (!val || val === Status.hurdle) return false;

    if (!roads.some(({ x, y }) => x === xCur && y === yCur)) {
      roads.push({ x: xCur, y: yCur });
    }

    return true;
  }

  const roads: Point[] = [];

  switch (direction) {
    case Direction.left:
      {
        const yCur = start.y;
        for (let xCur = start.x - 1; xCur >= start.x - k; xCur--) {
          if (!processProad(board, roads, xCur, yCur)) {
            continue;
          }
        }
      }
      break;
    case Direction.right:
      {
        const yCur = start.y;
        for (let xCur = start.x + 1; xCur <= start.x + k; xCur++) {
          if (!processProad(board, roads, xCur, yCur)) {
            continue;
          }
        }
      }
      break;
    case Direction.top:
      {
        const xCur = start.x;
        for (let yCur = start.y - 1; yCur >= start.y - k; yCur--) {
          if (!processProad(board, roads, xCur, yCur)) {
            continue;
          }
        }
      }
      break;
    case Direction.bottom:
      {
        const xCur = start.x;
        for (let yCur = start.y + 1; yCur <= start.y + k; yCur++) {
          if (!processProad(board, roads, xCur, yCur)) {
            continue;
          }
        }
      }
      break;
    default:
      throw new Error(`Wrong direction: ${direction}`);
  }

  return roads;
}
function getRoads(board: number[][], k: number) {
  let roads: Point[] = [];

  for (let rw = 0; rw < board.length; rw++) {
    const rows = board[rw];
    const rowsPrev = board[rw - 1];
    const rowsNext = board[rw + 1];

    for (let cl = 0; cl < rows.length; cl++) {
      const val = rows[cl];
      if (val !== Status.bomb) continue;

      roads = roads.concat(getRoads2(board, k, { x: rw, y: cl }, Direction.left));
      roads = roads.concat(getRoads2(board, k, { x: rw, y: cl }, Direction.right));
      roads = roads.concat(getRoads2(board, k, { x: rw, y: cl }, Direction.top));
      roads = roads.concat(getRoads2(board, k, { x: rw, y: cl }, Direction.bottom));
    }
  }

  return roads;
}

function solution(board: number[][], k: number, ax: number, ay: number): number {
  const roads = getRoads(board, k);
  console.log('x', roads);
  return -1;
}
export function test() {
  runTest(
    solution,
    [
      [0, 0, 1, 0, 0, 0],
      [0, 2, 0, 0, 0, 1],
      [0, 0, 2, 1, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 0],
      [0, 1, 0, 0, 0, 0],
    ],
    2,
    1,
    2,
    6
  );
  runTest(
    solution,
    [
      [0, 0, 0, 1],
      [0, 2, 0, 1],
      [2, 0, 0, 1],
      [0, 2, 0, 1],
    ],
    2,
    2,
    1,
    5
  );
}
