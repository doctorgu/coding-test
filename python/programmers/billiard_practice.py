from math import sqrt
def solution_wrong(width, height, start_x, start_y, balls):
    def get_corners(x1, y1, x2, y2):
        dic = {}
        direction = ''
        if x1 <= x2:
            if y1 >= y2:
                direction = 'rb'
                dic['lt'] = (x1, y1)
                dic['rb'] = (x2, y2)
                dic['rt'] = (x2, y1)
                dic['lb'] = (x1, y2)
            else:
                direction = 'rt'
                dic['lb'] = (x1, y1)
                dic['rt'] = (x2, y2)
                dic['rb'] = (x2, y1)
                dic['lt'] = (x1, y2)
        else:
            if y1 >= y2:
                direction = 'lb'
                dic['rt'] = (x1, y1)
                dic['lb'] = (x2, y2)
                dic['lt'] = (x2, y1)
                dic['rb'] = (x1, y2)
            else:
                direction = 'lt'
                dic['rb'] = (x1, y1)
                dic['lt'] = (x2, y2)
                dic['lb'] = (x2, y1)
                dic['rt'] = (x1, y2)
        
        return (dic, direction)
        
    def get_ws_hs(corners, direction):
        x1, y1 = corners['lt']
        x2, y2 = corners['rt']
        x3, y3 = corners['rb']
        x4, y4 = corners['lb']
        
        hs, ws = [0,0,0,0], [0,0,0,0]
        if direction == 'rb' or direction == 'lt':
            ws[0] = y2 - y3
            hs[0] = x1 * 2 + x2 - x1
            
            ws[1] = x2 - x1
            hs[1] = y3 * 2 + y2 - y3
            
            ws[2] = x3 - x4
            hs[2] = (height - y1) * 2 + y1 - y4
            
            ws[3] = y1 - y4
            hs[3] = (width - x3) * 2 + x3 - x4
        else:
            ws[0] = y1 - y4
            hs[0] = (width - x2) * 2 + x2 - x1
            
            ws[1] = x2 - x1
            hs[1] = y4 * 2 + y1 - y4
            
            ws[2] = x3 - x4
            hs[2] = (height - y2) * 2 + y2 - y3
            
            ws[3] = y2 - y3
            hs[3] = x4 * 2 + x3 - x4

        if direction == 'rb':
            if y1 == y4:
                ws[3] = 0
                hs[3] = 0
            if x1 == x2:
                ws[1] = 0
                hs[1] = 0
        elif direction == 'rt':
            if y1 == y4:
                ws[1] = 0
                hs[1] = 0
            if x3 == x4:
                ws[2] = 0
                hs[2] = 0
        elif direction == 'lb':
            if y2 == y3:
                ws[3] = 0
                hs[3] = 0
            if x1 == x2:
                ws[1] = 0
                hs[1] = 0
        elif direction == 'lt':
            if y2 == y3:
                ws[1] = 0
                hs[1] = 0
            if x3 == x4:
                ws[2] = 0
                hs[2] = 0

        return (ws, hs)
        
    def get_min_len(ws, hs):
        min_ = 999_999_999
        for i in range(4):
            if ws[i] == 0 and hs[i] == 0: continue
            cur = ws[i] ** 2 + hs[i] ** 2
            if cur < min_:
                min_ = cur
        return min_
        
    def get_result(ball):
        dest_x, dest_y = ball
        
        corners, direction = get_corners(start_x, start_y, dest_x, dest_y)
        #print(f'corners:{corners}, direction:{direction}')
        ws, hs = get_ws_hs(corners, direction)
        #print(f'ws:{ws}, hs:{hs}')
        min_len = get_min_len(ws, hs)
        #print(f'min_len:{min_len}')
        return min_len
    
    # exam 1: 580, 250, 543, 122, [135, 36]

    rets = []
    for ball in balls:
        ret = get_result(ball)
        rets.append(ret)
        
    
    return rets

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
    width, height = 10, 10

    starts = get_data(width, height)
    balls = get_data(width, height)

    for start_x, start_y in starts:
        for ball_x, ball_y in balls:
            if start_x == ball_x and start_y == ball_y:
                continue
            
            ret = solution(width, height, start_x, start_y, [[ball_x, ball_y]])
            ret_wrong = solution_wrong(width, height, start_x, start_y, [[ball_x, ball_y]])
            if ret != ret_wrong:
                print(f'width:{width}, height:{height}, start_x:{start_x}, start_y:{start_y}, ball_x:{ball_x}, ball_y:{ball_y}, ret:{ret}, ret_wrong:{ret_wrong}')
                return

test()
#ret_wrong = solution_wrong(10, 10, 2, 2, [[1, 2]])
#print(ret_wrong)