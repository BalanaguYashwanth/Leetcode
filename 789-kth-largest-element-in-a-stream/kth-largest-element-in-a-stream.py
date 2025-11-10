class KthLargest:

    def __init__(self, k: int, nums: List[int]):
        self.k = k
        self.nums = nums
        self.heap = []
        self.form_heap()
        
    def form_heap(self):
        for num in self.nums:
            self.heap.append(num)
            self.sort_heap_upwards(len(self.heap)-1)
        # print('--self heap--', self.heap)

    def sort_heap(self, parent, child):
        tmp = self.heap[parent]
        self.heap[parent] = self.heap[child]
        self.heap[child] = tmp

    def sort_heap_upwards(self, child):
        parent = (child-1)//2
        left_child = (parent * 2) + 1
        right_child = (parent * 2) + 2
        if parent>=0 and left_child < len(self.heap) and right_child < len(self.heap):
            if self.heap[left_child] < self.heap[parent] or self.heap[right_child] < self.heap[parent]:
                if self.heap[left_child] <= self.heap[right_child]:
                    self.sort_heap(parent, left_child)
                else:
                    self.sort_heap(parent, right_child)
                return self.sort_heap_upwards(child=parent)
        else:
            if self.heap[left_child] < self.heap[parent]:
                self.sort_heap(parent, left_child)
                return self.sort_heap_upwards(child=parent)

    def sort_heap_downwards(self, parent):
        right_child = (parent*2) + 2
        left_child = (parent*2) + 1
        if left_child < len(self.heap):
            if right_child < len(self.heap):
                if self.heap[left_child] < self.heap[parent] or self.heap[right_child] < self.heap[parent]:
                    if self.heap[left_child] <= self.heap[right_child]:
                        self.sort_heap(parent, left_child)
                        return self.sort_heap_downwards(parent=left_child)
                    else:
                        self.sort_heap(parent, right_child)
                        return self.sort_heap_downwards(parent=right_child)
            else:
                if self.heap[left_child] < self.heap[parent]:
                    self.sort_heap(parent, left_child)
                    return self.sort_heap_downwards(parent=left_child)

    def check_len_heap_exceeds_k_limit(self, parent):
        if len(self.heap) > self.k:
            self.heap.pop(parent)
            self.heap.insert(parent, self.heap[len(self.heap)-1])
            self.heap.pop()
            self.sort_heap_downwards(parent)
            self.check_len_heap_exceeds_k_limit(parent=0)

    def verify_and_sort_min_heap(self):
        for index in range(len(self.heap)-1, 0, -1):
            self.sort_heap_upwards(child=index)
            # print('--index--', index)
            # print('---befor--sort--', self.heap)

    def add(self, val: int) -> int:
        self.heap.append(val)
        # print('--before--', self.heap)
        self.sort_heap_upwards(child=len(self.heap)-1)
        # print('---middle--', self.heap)
        self.check_len_heap_exceeds_k_limit(parent=0)
        # print('---end--', self.heap)
        return self.heap[0]

# Your KthLargest object will be instantiated and called as such:
# obj = KthLargest(k, nums)
# param_1 = obj.add(val)