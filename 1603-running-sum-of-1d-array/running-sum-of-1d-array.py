class Solution(object):
    def runningSum(self, nums):
        new = []
        result = 0
        for j_index in range(0,len(nums)):
            result = result + nums[j_index]
            new.append(result)
        return new