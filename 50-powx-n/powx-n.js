/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    return n>=0 ? getPower(x, n) : 1 / getPower(x,-(n));
};
// n=10

// 2 * (2,5) -> 2 * 16 -> 16 * 16
// 2 * (2,4) // 2 * 4 -> 16
// 2 * (2,2) // 2 * 2 -> 4
// 2 * (2,1) // 2 * 1

var getPower = (x, n)=>{
    // // 2, 5
    // // 2 , 4
    // // 2 , 2
    // // 2, 1
    // if(n===0){
    //     return 1
    // }

    // if(n<=1) return x;

    // if(n%2===0){
    //     // 2 * (2, 5)
    //     // 2 * (2, 2) 
    //     // 2 * (2, 1)
    //     const ans = x * getPower(x, n/2);
    //     return ans * ans;
    // }


    // // 2 * (2, 4)
    // return x * getPower(x, n-1);

    if(n===0) {
        return 1;
    }

    if(n%2===0){
        const ans =  getPower(x, n/2);
        return ans * ans;
    }

    return x * getPower(x, n-1);
}

// 2, 5
//
// 2 * (2, 4)
//
// n = 4
// -> 2 * (2,2)
//
// n = 2
// -> 2 * (2, 1)
// n=1
//
// -> 2 * (2, 0) 
// n = 0
// 

// n - 4
// return (2 * ())^2

