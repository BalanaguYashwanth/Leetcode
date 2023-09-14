class Solution:
    def fib(self, n: int) -> int:
        def operate(n):
            if n == 0:
                return n
            elif n == 1:
                return n
            else:
                return operate(n-1) + operate(n-2)
                
        return operate(n)
        