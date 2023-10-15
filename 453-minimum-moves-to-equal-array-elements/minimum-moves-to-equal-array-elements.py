class Solution(object):
    def minMoves(self, nums):
        nums.sort()
        total = len(nums)
        highest_index = total - 1
        minimum_count = -1
        initial = 0
        diff_count = 0
        final_sum = nums[highest_index] - nums[initial] 
        for index in (range(highest_index)):
            if index != initial:
                diff_count = diff_count + nums[index] - nums[initial] 
        print(diff_count)
        return final_sum + diff_count