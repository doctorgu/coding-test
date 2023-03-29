def solution_wrong(park, routes):
    def get_start(park):
        for rw, row in enumerate(park):
            for cl, col in enumerate(row):
                if col == 'S':
                    return (rw, cl)
        raise Exception('Not found')
    
    def has_x(is_vert, rw, cl, offset):
        if not is_vert:
            row = park[rw]
            
            cl_start = cl
            cl_end = cl + offset + 1
            step = 1
            if offset < 0:
                cl_start = cl + offset
                cl_end = cl + 1
            
            return row[cl_start:cl_end].find('X') != -1
        else:
            found = False
            
            rw_start = rw
            rw_end = rw + offset + 1
            if offset < 0:
                rw_start = rw + offset
                rw_end = rw + 1
            
            for rw_cur in range(rw_start, rw_end):
                row = park[rw_cur]
                if row[cl] == 'X':
                    found = True
                    break
            return found
        
    def get_next(is_vert, row_cnt, col_cnt, rw, cl, offset):
        rw_new, cl_new = rw, cl
        
        if not is_vert:
            cl_new = cl + offset
            if cl_new >= col_cnt or cl_new < 0:
                return (rw, cl)
        else:
            rw_new = rw + offset
            if rw_new >= row_cnt or rw_new < 0:
                return (rw, cl)
            
        if has_x(is_vert, rw, cl, offset):
            return (rw, cl)
            
        return (rw_new, cl_new)
        
    row_cnt = len(park)
    col_cnt = len(park[0])
    rw_cur, cl_cur = get_start(park)
    for route in routes:
        dir, num = route.split(' ')
        offset = int(num)
        
        is_vert = True if dir == 'N' or dir == 'S' else False
        if dir == 'W' or dir == 'N':
            offset *= -1
        
        rw_cur, cl_cur = get_next(is_vert, row_cnt, col_cnt, rw_cur, cl_cur, offset)

    return [rw_cur, cl_cur]

# ChatGPT generated code
def solution(park, routes):
    # 공원의 크기 구하기
    height = len(park)
    width = len(park[0])
    
    # 강아지의 시작 위치 찾기
    start_row = 0
    start_col = 0
    for i in range(height):
        for j in range(width):
            if park[i][j] == "S":
                start_row = i
                start_col = j
                break
    
    # 강아지 이동 함수
    # inserted new variable row_new, col_new from generated code to fix bug
    def move(row, col, direction, distance):
        row_new, col_new = row, col
        if direction == "N":
            for i in range(distance):
                if row_new == 0 or park[row_new-1][col_new] == "X":
                    return row, col
                row_new -= 1
        elif direction == "S":
            for i in range(distance):
                if row_new == height-1 or park[row_new+1][col_new] == "X":
                    return row, col
                row_new += 1
        elif direction == "W":
            for i in range(distance):
                if col_new == 0 or park[row_new][col_new-1] == "X":
                    return row, col
                col_new -= 1
        elif direction == "E":
            for i in range(distance):
                if col_new == width-1 or park[row_new][col_new+1] == "X":
                    return row, col
                col_new += 1
        return row_new, col_new
    
    # 강아지 이동하기
    for route in routes:
        direction, distance = route.split()
        distance = int(distance)
        start_row, start_col = move(start_row, start_col, direction, distance)
    
    # 결과 반환
    return [start_row, start_col]


def get_data():
  park = [[
      "S...",
      "....",
      "...X"
  ]]*11
  routes = [["E 2", "S 3", "W 2", "S 1", "E 1", "N 2"]]*11

  park[1] = [
      "S...",
      "....",
      "...X"
  ]
  routes[1] = ["E 2", "S 3", "W 2", "S 1", "E 1", "N 2"]

  park[2] = [
      ".SX",
      "X..",
      "..X"
  ]
  routes[2] = ["S 1", "W 2", "N 1", "E 1", "S 1", "E 1", "S 1", "W 2"]

  park[3] = [
      "S..X",
      "....",
      "...X",
      "...."
  ]
  routes[3] = ["E 2", "S 2", "W 2", "S 1", "E 1", "N 2", "E 1", "S 2"]

  park[4] = [
      "S..X",
      "....",
      "...X",
      "...."
  ]
  routes[4] = ["E 2", "S 2", "W 2", "S 2", "E 1", "N 2", "E 1", "S 1"]

  park[5] = [
      "S..X",
      "....",
      "...X",
      "...."
  ]
  routes[5] = ["E 2", "S 2", "W 2", "S 2", "E 1", "N 2", "E 1", "S 3"]

  park[6] = [
      "S...X",
      ".....",
      ".....",
      "....."
  ]
  routes[6] = ["E 1", "S 1", "W 1", "S 1", "E 1", "S 1", "W 1", "S 1", "E 1", "N 4", "W 4"]

  park[7] = [
      "S....",
      "X....",
      ".....",
      ".....",
      "....."
  ]
  routes[7] = ["S 2", "E 1", "N 1", "W 1", "S 1", "W 1", "N 1", "E 1", "S 1", "W 1", "N 1", "E 1", "S 1", "E 1", "N 1", "W 1"]

  park[8] = [
      "S....",
      "...X.",
      ".....",
      "X....",
      "....."
  ]
  routes[8] = ["E 2", "S 1", "E 1", "N 2", "E 1", "S 1", "W 2", "S 2", "W 2", "N 2"]

  park[9] = [
      "S...X...",
      "........",
      "........",
      "........",
      "........",
      "........"
  ]
  routes[9] = ["E 3", "S 3", "W 3", "N 3"]

  park[10] = [
      "S...X...",
      "........",
      "........",
      "........",
      "........",
      "........"
  ]
  routes[10] = ["E 3", "S 3", "W 3", "N 4"]

  return park, routes

def main():
  park, routes = get_data()
  for i in range(1, 11):
    ret = solution(park[i], routes[i])
    ret_wrong = solution_wrong(park[i], routes[i])
    print(park[i], routes[i])
    if ret != ret_wrong:
      print(f"Wrong Answer: {ret} {ret_wrong}, park: {park[i]}, routes: {routes[i]}")
      break

#main()
#Wrong Answer: [1, 2] [1, 0], park: ['.SX', 'X..', '..X'], routes: ['S 1', 'W 2', 'N 1', 'E 1', 'S 1', 'E 1', 'S 1', 'W 2']
# should be [1, 2]
print(solution_wrong(['.SX', 'X..', '..X'], ['S 1', 'W 2', 'N 1', 'E 1', 'S 1', 'E 1', 'S 1', 'W 2']))
