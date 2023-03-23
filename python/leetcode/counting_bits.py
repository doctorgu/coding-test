class Solution:
    def countBits(n):
        ans = [0] * (n + 1)
        for i in range(n + 1):
            print(i, i >> 1, i & 1, ans[i >> 1] + (i & 1))
            ans[i] = ans[i >> 1] + (i & 1)
        return ans
    
    print(countBits(5))