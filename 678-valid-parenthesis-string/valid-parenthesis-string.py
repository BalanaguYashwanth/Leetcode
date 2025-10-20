class Solution:
    def checkValidString(self, s: str) -> bool:
        arr = []
        open_pointer = []
        collection = {'(':')', ')':'('}
        for element in s:
            if element == '*':
                arr.append(element)
            elif element == '(':
                arr.append(element)
                open_pointer.append(len(arr)-1)
            elif element == ')':
                if open_pointer:
                    item_open_pointer = open_pointer[len(open_pointer)-1]
                if arr and open_pointer and arr[item_open_pointer] == collection[element]:
                    arr.pop(item_open_pointer)
                    open_pointer.pop()
                elif arr and arr[len(arr)-1] == '*':
                    arr.pop()
                else:
                    arr.append(element)
        

        print('--arr--', arr)

        new_arr = []
        star = 0
        if arr:
            for element in arr:
                if element == '('  or element == ')':
                    new_arr.append(element)
                elif element == '*':
                    if new_arr:
                        if (new_arr[len(new_arr)-1] == '(' or new_arr[len(new_arr)-1] == '('):
                            new_arr.pop()
        
        print('--new_arr--', new_arr,'---star--', star)
        # if new_arr:
        #     for index in range(0,len(new_arr)):
        #         if new_arr and new_arr[index] == '*':
        #             new_arr.pop(index)

        if new_arr:
            return False
        else:
            return True
