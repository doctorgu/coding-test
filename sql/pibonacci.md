# Pibonacci: 피보나치 수열 구하기

피보나치 수열은 0이 첫번째, 1이 두번째로 시작하고, 세번째 부터는 전전의 값과 전의 값을 더한 값이 현재 값이 되는 형식입니다.

예를 들어

0, 1 다음의 값은 0 + 1 = 1이 되어 0, 1, 1이 됩니다.

0, 1, 1 다음의 값은 1 + 1 = 2이 되어 0, 1, 1, 2이 됩니다.

0, 1, 1, 2 다음의 값은 1 + 2 = 3이 되어 0, 1, 1, 2, 3이 됩니다.

CTE (Common Table Expression)을 이용해 7번째까지의 값을 모두 표시하세요.

결과:

| V1  |
| --- |
| 0   |
| 1   |
| 1   |
| 2   |
| 3   |
| 5   |
| 8   |

정답:

```sql
with t (v1, v2, lvl)
as
(
  select 0 v1, 1 v2, 1 lvl
  from dual

  union all

  select t.v2, t.v1 + t.v2, t.lvl + 1 lvl
  from t
  where t.lvl <= 6
)
select v1
from t
```
