class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        def remove_zeros(nums1):
            if 0 in nums1:
                nums1.remove(0)
                remove_zeros(nums1)
            else:
                return nums1
        
        def unsize_values(nums):
            nums_length = len(nums)
            for num in range(nums_length+1):
                if m < num:
                    nums.pop()
        
        if m < len(nums1):
            unsize_values(nums1)

        if n < len(nums2):
            unsize_values(nums2)

        for num in nums2:
            nums1.append(num)
        nums1.sort()
        return (nums1)
