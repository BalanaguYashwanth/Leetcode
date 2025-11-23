class Solution:
    def reorganizeString(self, s: str) -> str:
        s_arr = list(s)
        collection = {}
        top_frequent_keys = {}
        heap_arr = []
        s_arr.sort()
        for item in s_arr:
            if item in collection:
                collection[item] = collection[item] + 1 
            else:
                collection[item] = 1
        
        items = list(collection.values())
        items.sort()
        items.reverse()

        for key in list(collection.keys()):
            if collection[key] == items[0]:
                top_frequent_keys[key] = items[0] #Only one top key will get added
                del collection[key]
        
                # break

        # print('---top_frequent_keys----', top_frequent_keys)
        def remove_top_key_in_heap_arr(key, count):
            for i in range(count):
                if key in s_arr:
                    s_arr.remove(key)

        def adding_top_keys(key, count):
            if not heap_arr:
                for i in range(count):
                    heap_arr.append(key)
            else:
                fill_arr = []
                for i in range(count):
                    if key == heap_arr[0] or key in fill_arr:
                        fill_arr.append(key)
                        if_condition(key, fill_arr)
                    else:
                        heap_arr.insert(0, key)
                        sort_downwards(0)
            print('--heap--arr--', heap_arr)
                
        def operation():
            for key in top_frequent_keys:
                count = top_frequent_keys[key]
                adding_top_keys(key, count)
                remove_top_key_in_heap_arr(key, count)

        def swap(parent, child):
            temp = heap_arr[parent]
            heap_arr[parent] = heap_arr[child]
            heap_arr[child] = temp
            
        def sort_downwards(parent_index):
            left_index = (parent_index)+1
            right_index = (parent_index)+2
            # print('--before---heap--arr--', heap_arr)
            if left_index < len(heap_arr) and right_index < len(heap_arr):
                if heap_arr[left_index] == heap_arr[right_index]:

                    swap(parent_index, left_index)
                    # print('--after---heap--arr--', heap_arr)
                    # print('--left_index--', left_index)
                    return sort_downwards(left_index)
        
        def fill_in_between(ref_index, parent_index):
            right_child = (ref_index) - 2
            if right_child >= 0:
                if heap_arr[parent_index] != heap_arr[right_child]:
                    print('--before-swap--', heap_arr)
                    tmp = heap_arr[parent_index]
                    heap_arr.pop(0)
                    heap_arr.insert(right_child, tmp)

                    # swap(parent_index, right_child)
                    print('--after--swap-', heap_arr)
                else:
                    return fill_in_between(right_child, parent_index)
                    # return fill_in_between(right_child, right_child)

        def if_condition(item, fill_arr):
            print('--s_arr--', s_arr)
            print('---heap_arr--if-before---', heap_arr)
            if item != heap_arr[len(heap_arr)-1]:
                first_element = heap_arr[0]
                heap_arr.pop(0)
                heap_arr.append(first_element)
                ##########
                fill_arr.append(first_element)
            heap_arr.insert(0, item)    
            print('--middle---', heap_arr)
            fill_in_between(len(heap_arr)-1, 0)
            print('---heap_arr--if-after---', heap_arr)

        def heap_algo():
            fill_arr = []
            for item in s_arr:
                if item == heap_arr[0] or item in fill_arr:
                    if_condition(item, fill_arr)
                else:
                    # print('---heap_arr-before---else--', heap_arr)
                    heap_arr.insert(0, item)
                    # print('--middle--', heap_arr)
                    sort_downwards(0)
                    # print('---heap_arr-after---else--', heap_arr)

        operation()
        heap_algo()
        print(heap_arr)

        for index in range(len(heap_arr)):
            if index+1 < len(heap_arr) and heap_arr[index] == heap_arr[index+1]:
                return ""
        return "".join(heap_arr)

        

        

        
    
            

        
        