# Valid Parentheses: 유효한 괄호

<https://leetcode.com/problems/valid-parentheses/>

'(', ')', '{', '}', '[' 및 ']' 문자만 포함하는 문자열이 주어지면 입력 문자열이 유효한지 확인합니다.

다음과 같은 경우 입력 문자열이 유효합니다.

열린 괄호는 동일한 유형의 괄호로 닫아야 합니다.

열린 괄호는 올바른 순서로 닫아야 합니다.

다음과 같은 테이블이 있을 때,

PARS:
| NO | PAR |
| --- | --- |
| 1 | () |
| 2 | ()[]{} |
| 3 | (] |
| 4 | ([)] |
| 5 | {[]} |

다음과 같은 결과가 표시되도록 SQL문을 작성하세요. (1은 제대로 닫힘을, 0은 제대로 닫히지 않음을 뜻합니다.)

Result:
| NO | PAR | CLOSED |
| --- | --- | --- |
| 1 | () | | 1 |
| 2 | ()[]{} | 1 |
| 3 | (] | | 0 |
| 4 | ([)] | 0 |
| 5 | {[]} | 1 |

연습: <https://dbfiddle.uk/?rdbms=oracle_11.2&fiddle=d838b7b6cccf5415316f11329c41cfd2>

정답: <https://dbfiddle.uk/?rdbms=oracle_21&fiddle=76421f2bca81962534be1e450481e0f4>
