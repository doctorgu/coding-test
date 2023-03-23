from itertools import permutations
def deductive_logic():
    def calc(vals, ops):
        vals = list(vals)
        ops2 = list(ops) + ['']
        rets = []
        for v1, v2 in zip(vals, ops2):
            rets.append(str(v1))
            rets.append(str(v2))
        return ''.join(rets)
    

    guesses = [19,17,11,32,6]
    list1 = [48,2,22,37]
    list2 = [72,6,42,65]
    list3 = [27,2,16]
    ops = ['+','-','*','/']

    rets1 = set()
    rets2 = set()
    rets3 = set()
    for ops_cur in permutations(ops, 3):
        for vals in permutations(list1):
            exp = calc(vals, ops_cur)
            ret = eval(exp)
            if ret == 0: print('1:', exp)
            rets1.add(ret)
        
        for vals in permutations(list2):
            exp = calc(vals, ops_cur)
            ret = eval(exp)
            if ret == 0: print('2:', exp)
            rets2.add(ret)

        for guess in guesses:
            for vals in permutations(list3 + [guess]):
                exp = calc(vals, ops_cur)
                ret = eval(exp)
                if ret == 0: print('3:', exp)
                rets3.add(ret)

    rets_new = rets1 & rets2 & rets3
    print(rets_new)

deductive_logic()