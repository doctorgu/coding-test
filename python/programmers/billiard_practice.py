def solution_wrong(m, n, startX, startY, balls):
    answer = []
    mini=[]

    for i in range(len(balls)):
        if startX == balls[i][0] and startY != balls[i][1]:
            x=(m-balls[i][0])*2
            y=abs(balls[i][1]-startY)
            res=(x**2)+(y**2)
            answer.append(res)
        elif startX != balls[i][0] and startY == balls[i][1]:
            x=abs(balls[i][0]-startX)
            y=(n-balls[i][1])*2
            res=(x**2)+(y**2)
            answer.append(res)
        elif startX != balls[i][0] and startY != balls[i][1]: #치는 방법의 수가 많음
            # 왼쪽 벽면에 부딪힐때
            x=abs(balls[i][0]-startX)
            y=abs(balls[i][1]+startY)
            res=(x**2)+(y**2)
            mini.append(res)

#             # 위쪽 벽면에 부딪힐때
#             x=abs(balls[i][0]-startX)
#             y=(abs(n-balls[i][1])*2) - abs(startY-balls[i][1])
#             res=(x**2)+(y**2)
#             mini.append(res)

#             # 오른쪽 벽면에 부딪힐때
#             x=abs(balls[i][0]+startX)
#             y=abs(balls[i][1]-startY)
#             res=(x**2)+(y**2)
#             mini.append(res)

#             # 아래쪽 벽면에 부딪힐때
#             x=abs(startX-balls[i][0])
#             y=abs(startX+balls[i][0])
#             res=(x**2)+(y**2)
#             mini.append(res)
#             # print(mini)

            # 대각선상에 있을 때 왼쪽 위 대각선
            x=abs(balls[i][0]-startX)
            y=abs(balls[i][1]-startY)
            a=(x**2)+(y**2)
            x=abs(m-balls[i][0])
            y=abs(n-balls[i][1])
            b=((x**2)+(y**2)) * 2
            res=a+b
            mini.append(res)

            # 대각선상에 있을 때 오른쪽 아래 대각선
            x=abs(startX-m)
            y=abs(startY)
            a=(x**2)+(y**2) *2
            x=abs(balls[i][0]-startX)
            y=abs(balls[i][1]-startY)
            b=(x**2)+(y**2)
            res=a+b
            mini.append(res)

            # 대각선상에 있을 때 오른쪽 위 대각선
            x=abs(balls[i][0]-startX)
            y=abs(balls[i][1]-startY)
            a=(x**2)+(y**2)
            x=abs(m-balls[i][0])
            y=abs(n-balls[i][1])
            b=((x**2)+(y**2)) * 2
            mini.append(a+b)

            # 대각선상에 있을 때 왼쪽 아래 대각선
            x=abs(startX)
            y=abs(startY)
            a=(x**2)+(y**2) *2
            mini.append(res)
            x=abs(balls[i][0]-startX)
            y=abs(balls[i][1]-startY)
            b=(x**2)+(y**2)
            mini.append(a+b)


            # print(mini)
            k=min(mini)
            answer.append(k)


    return answer

def solution(m, n, startX, startY, balls):
    answer = []
    # 시작점의 선대칭점 4개
    end_li = ((-startX,startY),(startX,-startY),(m*2-startX,startY),(startX,2*n-startY))

    for X,Y in balls:
        distances = []
        for endX,endY in end_li: # 대칭점들을 순회
            e_b_distance = (X-endX)**2+(Y-endY)**2 # 대칭점에서 공까지 거리
            e_s_distance = (startX-endX)**2+(startY-endY)**2 # 대칭점에서 시작까지 거리

            if not (startX==X==endX or startY==Y==endY) or (e_b_distance > e_s_distance):
                distances.append(e_b_distance)
        answer.append(min(distances)) # 대칭점까지 거리중 최솟값을 정답으로
    return answer

def get_data(width, height):
    data = []
    for rw in range(1, height):
        for cl in range(1, width):
            data.append((rw, cl))
    return data

def test():
    width, height = 3, 3

    starts = get_data(width, height)
    balls = get_data(width, height)

    for start_x, start_y in starts:
        for ball_x, ball_y in balls:
            if start_x == ball_x and start_y == ball_y:
                continue
            
            print(f'width:{width}, height:{height}, start_x:{start_x}, start_y:{start_y}, ball_x:{ball_x}, ball_y:{ball_y}')
            ret = solution(width, height, start_x, start_y, [[ball_x, ball_y]])
            ret_wrong = solution_wrong(width, height, start_x, start_y, [[ball_x, ball_y]])
            if ret != ret_wrong:
                print(f'width:{width}, height:{height}, start_x:{start_x}, start_y:{start_y}, ball_x:{ball_x}, ball_y:{ball_y}, ret:{ret}, ret_wrong:{ret_wrong}')
                return

test()
#ret_wrong = solution_wrong(10, 10, 2, 2, [[1, 2]])
#print(ret_wrong)
