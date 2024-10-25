/**
 * @param {number[][]} intervals
 * @return {number[][]}
             console.log('----item[0]--',item[0],'--prev---',prev[0],'---item[1]---',item[1],  prev[0] >= item[0] && prev[0] <= item[1])

 */
var merge = function (intervals) {
    const res = [];
    console.log('before---', intervals)
    intervals.sort((a,b)=> a[0] - b[0])
    console.log('after---', intervals)
    for (let item of intervals) {
        if (res.length) {
            const prev = res[res.length - 1]
            const condition = ((prev[0] >= item[0] && prev[0] <= item[1]) || (prev[1] >= item[0] && prev[1] <= item[1])) || ((item[0] >= prev[0] && item[0] <= prev[1]) || (item[1] >= prev[0] && item[1] <= prev[1]))
            if (condition) {
                const leftNum = Math.min(res[res.length - 1][0], item[0])
                const rightNum = Math.max(res[res.length - 1][1], item[1])
                res[res.length - 1] = [leftNum, rightNum]
            } else {
                res.push(item)
            }
        } else {
            res.push(item)
        }
    }
    return res
};

