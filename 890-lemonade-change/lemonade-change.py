class Solution:
    def lemonadeChange(self, bills: List[int]) -> bool:
        change_5_dollars = 0
        change_10_dollars = 0
        change_20_dollars = 0
        index = -1
        for bill in bills:
            index = index+1
            if bill == 5:
                change_5_dollars = change_5_dollars + 1
            elif bill == 10: 
                if change_5_dollars:
                    change_5_dollars = change_5_dollars - 1
                    change_10_dollars = change_10_dollars + 1
                else:
                    return False
            elif bill == 20:
                split_5_dollars = int((bill-5)/5)
                split_10_dollars = int((bill-5)/10)
                
                if change_5_dollars >= 1 and change_10_dollars >= 1:
                    change_5_dollars = change_5_dollars - 1
                    change_10_dollars = change_10_dollars - 1
                    change_20_dollars = change_20_dollars + 1
                elif change_5_dollars >= split_5_dollars:
                    change_5_dollars = change_5_dollars - split_5_dollars
                else:
                    return False
                
        return True
