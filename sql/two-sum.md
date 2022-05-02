# Two Sum: 더하기에 필요한 2개 값 구하기

<https://leetcode.com/problems/two-sum/>

다음과 같이 2개의 테이블이 있을 때,
nums의 각각 다른 2개 행의 val 값을 합쳤을 때 target의 val 값이 나오는 nums의 no, idx1, idx2를 선택하세요.

예를 들어 no가 1인 target.val은 9이므로, nums의 no가 1인 val 중 2와 7을 더해야 9가 되므로 val이 2와 7에 해당하는 idx 값 1, 2를 선택해야 합니다.

nums:
| NO | IDX | VAL |
| --- | --- | --- |
| 1 | 1 | 2 |
| 1 | 2 | 7 |
| 1 | 3 | 11 |
| 1 | 4 | 15 |
| 2 | 1 | 3 |
| 2 | 2 | 2 |
| 2 | 3 | 4 |
| 3 | 1 | 3 |
| 3 | 2 | 3 |

target:
| NO | VAL |
| --- | --- |
| 1 | 9 |
| 2 | 6 |
| 3 | 6 |

answer:
| NO | IDX1 | IDX2 |
| --- | --- | --- |
| 1 | 1 | 2 |
| 2 | 2 | 3 |
| 3 | 1 | 2 |

연습: <https://dbfiddle.uk/?rdbms=oracle_21&fiddle=08a92c787bfd1407363942ab26060205>

정답: <https://dbfiddle.uk/?rdbms=oracle_21&fiddle=cb08fca049d79ec6f452925ebb173f30>
