class Solution:
    def addStrings(self, num1: str, num2: str) -> str:

        max_length = max(len(num1), len(num2))

        if max_length != len(num1):
            diff = max_length - len(num1)
            while diff > 0:
                num1 = '0' + num1
                diff = diff - 1

        if max_length != len(num2):
            diff = max_length - len(num2)
            while diff > 0:
                num2 = '0' + num2
                diff = diff - 1

        carry = 0
        result = []
        def addZero(num, index): 
            return num[index]
        
        def getNum(num, index):
            return ord(addZero(num,index)) - ord('0')
        for index in range(max_length, 0, -1): 
            result_sum =  getNum(num2, index-1) + getNum(num1, index-1) + carry
            carry = 0
            if result_sum > 9:
                carry = int(result_sum / 10)
                result.append(str(result_sum % 10))
            else:
                result.append(str(result_sum))
        if carry == 1:
            result.append(str(carry))
        result.reverse()
        result = "".join(result)
        return result
