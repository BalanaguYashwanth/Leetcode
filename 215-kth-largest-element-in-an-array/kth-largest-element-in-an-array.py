class Solution:
    def __init__(self):
        self.heap = []

    def sort_heap(self, parent_index, child_index):
        if self.heap[child_index] < self.heap[parent_index]:
            tmp = self.heap[child_index]
            self.heap[child_index] = self.heap[parent_index]
            self.heap[parent_index] = tmp

    def sort_heap_upwards(self, child_index):
        parent_index = (child_index-1)//2
        if parent_index >= 0 and self.heap[child_index] < self.heap[parent_index]:
            self.sort_heap(parent_index, child_index)
            return self.sort_heap_upwards(parent_index)
        
    def perform_min_heap(self, parent_index):
        left_child_index = (parent_index * 2) + 1
        right_child_index = (parent_index * 2) + 2
        if left_child_index < len(self.heap):
            if right_child_index < len(self.heap):
                if (self.heap[left_child_index] < self.heap[parent_index] or self.heap[right_child_index] < self.heap[parent_index]):
                    if self.heap[left_child_index] < self.heap[right_child_index]:
                        self.sort_heap(parent_index, left_child_index)
                        return self.perform_min_heap(left_child_index)
                    else:
                        self.sort_heap(parent_index, right_child_index)
                        return self.perform_min_heap(right_child_index)
            else:
                if self.heap[left_child_index] < self.heap[parent_index]:
                    self.sort_heap(parent_index, left_child_index)
                    return self.perform_min_heap(left_child_index)


    def findKthLargest(self, nums: List[int], k: int) -> int:
        for index in range(0, len(nums)):
            self.heap.append(nums[index])
            self.sort_heap_upwards(child_index=len(self.heap)-1)

            if len(self.heap) > k:
                parent_index = 0
                self.heap.pop(parent_index)
                last_child = self.heap[len(self.heap)-1]
                self.heap.insert(parent_index, last_child)
                self.heap.pop()
                self.perform_min_heap(parent_index=parent_index)
            # print(self.heap)
        return self.heap[0]