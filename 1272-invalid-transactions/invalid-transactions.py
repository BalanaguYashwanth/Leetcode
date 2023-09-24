class Solution:
    def invalidTransactions(self, transactions: List[str]) -> List[str]:
        result = {}
        result_list = []
        if len(transactions) > 1:
            for i_index in range(len(transactions)):
                    for j_index in range(len(transactions)):
                        if i_index != j_index:
                                [name1, time1, amount1, city1] = transactions[i_index].split(',')
                                [name2, time2, amount2, city2] = transactions[j_index].split(',')
                                if int(amount1) > 1000:
                                        result[i_index] = transactions[i_index]
                                else:
                                    if name1 == name2 and abs(int(time2) - int(time1)) <= 60 and city1 != city2:
                                        result[i_index] = transactions[i_index]
        else:
            intial = 0
            [name1, time1, amount1, city1] = transactions[intial].split(',')
            if (int(amount1) > 1000):
                result.append(transactions[intial])
        
        for i in result:
            result_list.append(result[i])
        return result_list