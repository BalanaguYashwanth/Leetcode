class Solution:
    def isHappy(self, n: int) -> bool:
        
        def sum_square(input_num: int, iteration) -> bool:
            iteration = iteration + 1
            result = 0
            for num in str(input_num):
                result = result + (int(num) * int(num))
            print(result)
            if result == 1:
                return True
            elif result!=1 and result >= 0 and result < 10 and iteration > 4:
                return False
            else:
                return sum_square(result,iteration)

        output = sum_square(n,iteration = 0)
        return output
