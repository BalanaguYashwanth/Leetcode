class Solution:
    count_key = 0
    count_value = 0
    counter = 0
    def majorityElement(self, nums: List[int]) -> int:
        nums.sort()
        def insertion(count_value,count_key,counter,j_index):
            print(count_value,count_key,counter,j_index)
            if count_value==0 and count_key ==0:
                count_value = nums[j_index]
                count_key = counter
            elif counter > count_key:
                count_key = counter
                count_value = nums[j_index]
            return count_value,count_key
            
        def operation(self,i_index,j_index,counter):
            if j_index < len(nums):
                if nums[j_index] == nums[i_index]:
                    counter = counter + 1
                    self.count_value,self.count_key = insertion(self.count_value,self.count_key,counter,j_index)
                    return operation(self,i_index, j_index+1,counter)
            else:
                if 1 > self.count_value and len(nums) == 1:
                    self.count_value = nums[i_index]
                    return self.count_value
                else:
                    return self.count_value
        for i_index in range(len(nums)):
            counter = 1
            if i_index > 0 and nums[i_index] == nums[i_index-1]:
                continue
            j_index = i_index+1
            operation(self,i_index,j_index,counter)

        return self.count_value


