class Solution:
    def maxProfit(self, nums: List[int]) -> int:
        i=0
        j=1
        max_num = 0
        def operation(i,j,max_num):
            if i < len(nums) and j < len(nums):
                if nums[i]>nums[j]:
                    i = j
                    j = j+1
                    return operation(i,j,max_num)
                else:
                    diff = nums[j] - nums[i]
                    if diff > max_num:
                        max_num = diff
                    j = j+1
                    return operation(i,j,max_num)
            else:
                return max_num

        return operation(i,j,max_num)