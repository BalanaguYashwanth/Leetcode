class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        arr = []
        i = 0

        for num in nums:
            heapq.heappush(arr,num)
            if len(arr) > k:
                heapq.heappop(arr)

        return arr[0]
        # while i < len(nums):
        #     if arr and nums[i] <= arr[0]:
        #         arr.insert(0, nums[i])
        #     else:
        #         arr.append(nums[i])
            
        #     if len(arr) > k:
        #         arr.pop(0)

        #     i = i + 1

        # return arr[0]