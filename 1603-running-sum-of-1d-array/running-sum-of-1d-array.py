class Solution(object):
    def runningSum(self, nums):
        new = []
        # index = 1
        # new.append(nums[index-1])
        # while index<len(nums):
        result = 0
        for j_index in range(0,len(nums)):
            result = result + nums[j_index]
            new.append(result)
        # index = index + 1
        return new