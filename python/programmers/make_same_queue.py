from collections import deque

def solution(queue1, queue2):
    t_q1 = sum(queue1)
    t_q2 = sum(queue2)
    queue1 = deque(queue1)
    queue2 = deque(queue2)
    total = t_q1 + t_q2
    len_ = len(queue1)

    if total % 2 == 1:
        return -1

    count = 0
    while t_q1 != t_q2 and count <= len_ * 4:
        print('0:', t_q1, t_q2)
        if t_q1 > t_q2:
            count += 1
            print('1:', t_q1, t_q2, queue1)
            p1 = queue1.popleft()
            queue2.append(p1)
            print('2:', t_q1, t_q2, p1)
            t_q1 -= p1
            t_q2 += p1
            print('3:', t_q1, t_q2, p1)

        else:
            count += 1
            p2 = queue2.popleft()
            queue1.append(p2)
            t_q2 -= p2
            t_q1 += p2

        print('4:', t_q1, t_q2)
        
    if t_q1 != t_q2:
        return -1
    return count

print(solution([1,3,2,5,2],[1,1,3,19,1]), 12)
