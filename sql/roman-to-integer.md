# Roman to integer: 로마자를 숫자로 변환하기

<https://leetcode.com/problems/roman-to-integer/>

로마 숫자는 I, V, X, L, C, D 및 M의 7가지 기호로 표시됩니다.

| Symbol | Value |
| ------ | ----- |
| I      | 1     |
| V      | 5     |
| X      | 10    |
| L      | 50    |
| C      | 100   |
| D      | 500   |
| M      | 1000  |

예를 들어, 2는 로마 숫자로 II로 표기되며 2개만 더하면 됩니다. 12는 단순히 X + II인 II로 작성됩니다. 숫자 27은 XX + V + II인 XXVII로 표기됩니다.

​로마 숫자는 일반적으로 왼쪽에서 오른쪽으로 큰 것에서 작은 것 순으로 표기합니다. 그러나 4에 대한 숫자는 IIII가 아닙니다. 대신 숫자 4는 IV로 기록됩니다. 1은 5보다 앞에 있기 때문에 빼서 4가 됩니다. IX로 쓰여진 숫자 9에도 동일한 원칙이 적용됩니다. 빼기가 사용되는 6가지 경우가 있습니다.

V(5)와 X(10) 앞에 I를 놓아 4와 9를 만들 수 있습니다.

X는 L(50)과 C(100) 앞에 위치하여 40과 90을 만들 수 있습니다.

C는 D(500)와 M(1000) 앞에 위치하여 400과 900을 만들 수 있습니다.

다음과 같이 roman_to_num, roman 테이블을 이용하여 로마자와 숫자가 나란히 있는 쿼리를 작성하세요.

roman_to_num:
| ROMAN | NUM |
| --- | --- |
| I | 1 |
| V | 5 |
| X | 10 |
| L | 50 |
| C | 100 |
| D | 500 |
| M | 1000 |

roman:
| RNUM | VAL |
| --- | --- |
| 1 | III |
| 2 | LVIII |
| 3 | MCMXCIV |

결과:
| ROMAN | NUM |
| --- | --- |
| III | 3 |
| LVIII | 58 |
| MCMXCIV | 1994 |

연습: <https://dbfiddle.uk/?rdbms=oracle_11.2&fiddle=617d4a4350ebf9d18ee584a97bcf2cf4>

정답: <https://dbfiddle.uk/?rdbms=oracle_11.2&fiddle=f86138d8251277a76452e7c309dba605>
