import runTest from '../common/runTest';

// Definition for a binary tree node.
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function increasingBST(root: TreeNode | null, tail: TreeNode | null = null): TreeNode | null {
  if (!root) {
    return tail;
  }
  const res = increasingBST(root.left, root);
  root.left = null;
  root.right = increasingBST(root.right, tail);
  return res;
}

function toNode(numbers: (number | null)[], lastNodes: TreeNode[] = [], start: number = 1) {
  const lastNodesNew: TreeNode[] = [];

  const length = lastNodes.length * 2;
  const end = start + length - 1;

  let indexParent = 0;

  for (let i = start; i <= end; i++) {
    const nodeParent = lastNodes[indexParent];

    const num = numbers[i];

    const isLeft = i % 2 === 1;
    if (isLeft) {
      if (num !== null) {
        nodeParent.left = new TreeNode(num);
        lastNodesNew.push(nodeParent.left);
      }
    } else {
      if (num !== null) {
        nodeParent.right = new TreeNode(num);
        lastNodesNew.push(nodeParent.right);
      }

      indexParent++;
    }
  }

  if (end + 1 < numbers.length) {
    toNode(numbers, lastNodesNew, end + 1);
  }
}
export function test() {
  const numbers = [5, 3, 6, 2, 4, null, 8, 1, null, null, null, 7, 9];
  const root = new TreeNode(numbers[0] as number);
  toNode(numbers, [root], 1);
  const res = increasingBST(root);

  console.log(JSON.stringify(root, null, 2));
  // runTest(increasingBST, 123456, '123,456');
}
