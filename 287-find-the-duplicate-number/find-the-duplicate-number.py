class Solution:
    def findDuplicate(self, nums: List[int]) -> int:
        nums.sort()
        for index in range(len(nums)-1):
            if nums[index] == nums[index+1]:
                return nums[index]

