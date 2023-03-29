quests = []
for rw in range(9):
    row = map(int, input().split())
    quests.append(list(row))

# quests = [
#   [0, 3, 5, 4, 6, 9, 2, 7, 8],
#   [7, 8, 2, 1, 0, 5, 6, 0, 9],
#   [0, 6, 0, 2, 7, 8, 1, 3, 5],
#   [3, 2, 1, 0, 4, 6, 8, 9, 7],
#   [8, 0, 4, 9, 1, 3, 5, 0, 6],
#   [5, 9, 6, 8, 2, 0, 4, 1, 3],
#   [9, 1, 7, 6, 5, 2, 0, 8, 0],
#   [6, 0, 3, 7, 0, 1, 9, 5, 2],
#   [2, 5, 8, 3, 9, 4, 7, 6, 0],
# ]

def traverse(quests):
    found = False

    lst9 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    for row in quests:
        set9 = set(lst9)
        pos_zero = -1
        for cl, col in enumerate(row):
            if col in set9:
                set9.remove(col)
            else:
                pos_zero = cl
        if len(set9) == 1 and pos_zero >= 0:
            found = True
            row[pos_zero] = set9.pop()

    for cl in range(9):
        set9 = set(lst9)
        pos_zero = -1
        for rw in range(9):
            cur = quests[rw][cl]
            if cur in set9:
                set9.remove(cur)
            else:
                pos_zero = rw
        if len(set9) == 1 and pos_zero >= 0:
            found = True
            quests[pos_zero][cl] = set9.pop()

    blocks = [
        [0, 1, 2, 9, 10, 11, 18, 19, 20],
        [3, 4, 5, 12, 13, 14, 21, 22, 23],
        [6, 7, 8, 15, 16, 17, 24, 25, 26],
        [27, 28, 29, 36, 37, 38, 45, 46, 47],
        [30, 31, 32, 39, 40, 41, 48, 49, 50],
        [33, 34, 35, 42, 43, 44, 51, 52, 53],
        [54, 55, 56, 63, 64, 65, 72, 73, 74],
        [57, 58, 59, 66, 67, 68, 75, 76, 77],
        [60, 61, 62, 69, 70, 71, 78, 79, 80],
    ]
    for block in blocks:
        set9 = set(lst9)
        pos_zero = -1
        for cur in block:
            rw = cur // 9
            cl = cur % 9
            if quests[rw][cl] in set9:
                set9.remove(quests[rw][cl])
            else:
                pos_zero = cur
        if len(set9) == 1 and pos_zero >= 0:
            rw = pos_zero // 9
            cl = pos_zero % 9
            found = True
            quests[rw][cl] = set9.pop()

    if found:
        traverse(quests)

traverse(quests)
for row in quests:
    print(' '.join(map(str, row)))

