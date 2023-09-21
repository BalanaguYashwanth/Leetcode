class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        array_length = len(nums)
        for i in range(array_length+1):
            if i not in nums:
                return i


        

