# Palindrome Number: 거꾸로 읽어도 같은 것 찾기

<https://leetcode.com/problems/palindrome-number/>

다음과 같은 테이블이 있을 때, 같은 k 값 안에서 i 값 순으로 읽은 v 값과 i 값 역순으로 읽은 v 값이 같은 k 값을 선택하세요.

예를 들어 i 값 순으로 읽은 v 값이 1, 2, 1이면 i 값 역순으로 읽은 v 값도 1, 2, 1이므로 이것은 결과에 포함되어야 합니다.

그러나 i 값 순으로 읽은 v 값이 1, 2, 3이면 i 값 역순으로 읽은 v 값은 3, 2, 1이므로 이것은 결과에 포함되면 안됩니다.
​
다음 테이블의 데이터를 이용한다면 결과는 k 값이 1, 3, 5, 7만 나와야 합니다.

```sql
create table t as
-- Right
select 1 k, 1 i, 1 v from dual union all
select 1 k, 2 i, 2 v from dual union all
select 1 k, 3 i, 1 v from dual union all
-- Wrong
select 2 k, 1 i, 1 v from dual union all
select 2 k, 2 i, 2 v from dual union all
select 2 k, 3 i, 3 v from dual union all
-- Right
select 3 k, 1 i, 1 v from dual union all
select 3 k, 2 i, 1 v from dual union all
-- Wrong
select 4 k, 1 i, 0 v from dual union all
select 4 k, 2 i, 1 v from dual union all
-- Right
select 5 k, 1 i, -1 v from dual union all
select 5 k, 2 i, 1 v from dual union all
select 5 k, 3 i, -1 v from dual union all
-- Wrong
select 6 k, 1 i, -1 v from dual union all
select 6 k, 2 i, 0 v from dual union all
select 6 k, 3 i, 1 v from dual union all
-- Right
select 7 k, 1 i, 1 v from dual union all
select 7 k, 2 i, 2 v from dual union all
select 7 k, 3 i, 3 v from dual union all
select 7 k, 4 i, 2 v from dual union all
select 7 k, 5 i, 1 v from dual union all
-- Wrong
select 8 k, 1 i, 1 v from dual union all
select 8 k, 2 i, 2 v from dual union all
select 8 k, 3 i, 1 v from dual union all
select 8 k, 4 i, 2 v from dual
```

결과:

```csv
K
1
3
5
7
```

연습용: <https://dbfiddle.uk/?rdbms=oracle_11.2&fiddle=ea0e32ae80f065f582bf5c8bd95b8815>

정답: <https://dbfiddle.uk/?rdbms=oracle_11.2&fiddle=14a78012e39c4e7cd9a4e968c5da20d7>
