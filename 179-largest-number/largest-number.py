class Solution:
    def largestNumber(self, nums: List[int]) -> str:
        nums.sort()

        def compare_unsize_numbers(initial_val,next_val):
            output1 = str(initial_val)+ str(next_val)
            output2 = str(next_val)+str(initial_val)
            if int(output2) >  int(output1) :
                return True
            else:
                return False

        def equal_size_numbers(initial_val,next_val):
            if next_val > initial_val:
                return True
            else:
                return False
        
        def swap(initial_val,next_val):
            temp = initial_val
            initial_val = next_val
            next_val = temp
            return initial_val,next_val


        for i_index in range(len(nums)):
            for j_index in range(len(nums)):
                if j_index+1 < len(nums):
                    initial_val = nums[j_index]
                    next_val = nums[j_index+1]
                    if len(str(initial_val)) < len(str(next_val)):
                        if compare_unsize_numbers(initial_val,next_val):
                            temp =  nums[j_index]
                            nums[j_index] = nums[j_index+1]
                            nums[j_index+1] = temp

                    elif len(str(initial_val)) == len(str(next_val)):
                        if equal_size_numbers(initial_val,next_val):
                            
                            temp =  nums[j_index]
                            nums[j_index] = nums[j_index+1]
                            nums[j_index+1] = temp

        result = ''
        for i in nums:
            result = result + str(i)

        return str(int(result))

      


