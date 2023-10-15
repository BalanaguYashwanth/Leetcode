class Solution(object):
    def integerBreak(self, n):
        sum_arr = []
        result = 1
        if n>3:
            while n>0:
                if n%3 == 0:
                    n = n-3
                    sum_arr.append(3)
                else:
                    n = n -2
                    sum_arr.append(2)
        else:
            if n ==2:
                return 1
            if n ==3:
                return 2
        
        for i in sum_arr:
            result = result * i

        return result
        