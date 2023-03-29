from collections import deque

def solution_right(picks, minerals):
    answer = 1e9
    q = deque([(0,minerals,picks)]) # (피로도,남은 광물, 남은 곡괭이)
    m_val = {"diamond":2,"iron":1,"stone":0}

    while q:
        ftg,mnr,rm_picks = q.popleft()
        now_mnr,mnr = mnr[:5],mnr[5:] # 5개 기준으로 체크할 광물, 나머지 광물 나누기

        if not now_mnr or sum(rm_picks)==0: # 체크할 광물이 없거나 곡괭이를 다 썼다면
            answer = min(ftg,answer) # 저장된 피로도와 현재 피로도 중 최소를 저장
        else:
            for idx,pick in enumerate(rm_picks):
                pickax = 2-idx
                if pick != 0:
                    rm_picks[idx]-=1
                    q.append((ftg+sum(5**(max(0,m_val[m]-pickax)) for m in now_mnr),mnr,[p for p in rm_picks]))
                    rm_picks[idx]+=1

    return answer

from itertools import permutations
def solution(picks, minerals):
    dic = {
        (1, 'diamond'): 1,
        (1, 'iron'): 1,
        (1, 'stone'): 1,
        
        (2, 'diamond'): 5,
        (2, 'iron'): 1,
        (2, 'stone'): 1,

        (3, 'diamond'): 25,
        (3, 'iron'): 5,
        (3, 'stone'): 1
    }
    small = 999_999_999_999
    
    tools = []
    for i, pick in enumerate(picks):
        if pick == 0: continue
        for _ in range(pick):
            tools.append(i + 1)
            
    for perm in set(permutations(tools, len(tools))):
        print(f'perm:{perm}')
        fat = 0
        idx = -1
        found = False
        for tool in perm:
            print(f'tool:{tool}')
            for _ in range(5):
                idx += 1
                if idx + 1 > len(minerals):
                    found = True
                    break

                mineral = minerals[idx]
                fat += dic[(tool, mineral)]
                print(f'tool:{tool}, mineral:{mineral}, fat:{dic[(tool, mineral)]}')
            if found:
                break
                
        print(f'fat:{fat}')
        if fat < small:
            small = fat
            
    return small

def get_data():
    picks = permutations([0,1,2,3,4,5],3)
    minerals = permutations(['diamond']*3+['iron']*3+['stone']*3, 9)
    for pick in picks:
        for mineral in minerals:
            yield list(pick), list(mineral)

def test():
  for pick,mineral in get_data():
    print(pick,mineral)
    if solution(pick,mineral) != solution_right(pick,mineral):
        print('!!!', pick,mineral)
        break

#test()
a = solution([0, 1, 2], ['diamond', 'iron', 'iron', 'iron', 'stone', 'diamond', 'diamond', 'stone', 'stone'])
# a_right = solution_right([0, 1, 2], ['diamond', 'iron', 'iron', 'iron', 'stone', 'diamond', 'diamond', 'stone', 'stone'])
# print(a, a_right)
# wrong: 61, right: 53
print(a)