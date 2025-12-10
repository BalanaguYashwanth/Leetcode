class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:

        def operation(interval_arr, index):
            if index < len(interval_arr):
               next_arr = interval_arr[index]
               prev_arr = interval_arr[index-1]
               eligibility_flag = False
               if (next_arr[0] >= prev_arr[0] and next_arr[0] <= prev_arr[1]):
                    if (next_arr[0] < prev_arr[0]):
                        new_arr = [next_arr[0]]
                    else:
                        new_arr = [prev_arr[0]]

                    if (next_arr[1] > prev_arr[1]):
                        new_arr.append(next_arr[1])
                    else:
                        new_arr.append(prev_arr[1])
                    
                    interval_arr.pop(index)
                    interval_arr.pop(index-1)
                    
                    interval_arr.insert(index-1, new_arr)
                    eligibility_flag = True

               elif (next_arr[1] <= prev_arr[1]):
                    if (next_arr[1] > prev_arr[1]):
                        new_arr = [prev_arr[0], next_arr[1]]

                        interval_arr.pop(index)
                        interval_arr.pop(index-1)
                        interval_arr.insert(index-1, new_arr)
                        eligibility_flag = True
                
               seconday_index = index
               if eligibility_flag:
                    seconday_index = index
               else:
                    seconday_index = index+1

               return operation(interval_arr, seconday_index)
        intervals.sort()
        print('---intervals--', intervals)
        operation(intervals, index=1)
        return intervals
