import runTest from '../common/runTest';

function solution(xs: number[], ys: number[]): number {
  const yAndXs = new Map<number, number[]>();

  const points: { x: number; y: number }[] = [];
  for (let i = 0; i < xs.length; i++) {
    points.push({ x: xs[i], y: ys[i] });
  }

  // Add paired with y only and sort x to get longest width
  const pointsSorted = points.sort((a, b) => a.y - b.y);
  for (let i = 0; i < pointsSorted.length; i++) {
    const { x: xCur, y: yCur } = pointsSorted[i];
    const yNext = pointsSorted[i + 1]?.y;
    const xsCur = yAndXs.get(yCur) || ([] as number[]);
    const add = (!xsCur.length && yCur === yNext) || xsCur.length;
    if (add) {
      xsCur.push(xCur);
      yAndXs.set(
        yCur,
        xsCur.sort((a, b) => a - b)
      );
    }
  }

  let max = 0;
  const yAndXs2 = [...yAndXs].sort(([y, xs], [yNext, xsNext]) => y - yNext);
  for (let i = 0; i < yAndXs2.length; i++) {
    const [y, xs] = yAndXs2[i];
    const leftCur = xs[0];
    const rightCur = xs[xs.length - 1];

    for (const x of xs) {
      for (let j = i + 1; j < yAndXs2.length; j++) {
        const [yNext, xsNext] = yAndXs2[j];
        const leftNext = xsNext[0];
        const rightNext = xsNext[xsNext.length - 1];

        const size = (rightCur - leftCur + rightNext - leftNext) * (yNext - y);
        if (size > max) {
          max = size;
        }
      }
    }
  }
  return max;
}
export function test() {
  runTest(solution, [2, 3, 4, 4, 7, 6, 3, 9, 9, 6, 5, 8, 6, 4], [5, 9, 5, 1, 3, 1, 3, 3, 8, 7, 10, 9, 9, 8], 66);
  runTest(solution, [5, 5, 6, 3, 4, 1, 1, 8, 7, 7], [9, 4, 6, 10, 4, 1, 5, 6, 6, 2], 6);
}
