/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    const deckJson = {}
    for(const index in deck){
        if(deck[index] in deckJson){
          deckJson[deck[index]] = deckJson[deck[index]] +1
        }else{
          deckJson[deck[index]] = 1
        }
    }
  
   let arrayValues = Object.values(deckJson)
   console.log('deckJson---->',arrayValues)
   if(arrayValues.length>1){
    let flag = []
    for(let i=0;i<arrayValues.length-1;i++){
      if(arrayValues[i]<=1 || arrayValues[i+1]<=1){
        return false
      }
     if((arrayValues[i]!==arrayValues[i+1])){
       const max = Math.max(arrayValues[i],arrayValues[i+1])
       const min = Math.min(arrayValues[i],arrayValues[i+1])
       console.log(max,min,max%min)
       if(max%min!=0 || flag.length>0)
       {
        if(flag.length==0){
          for(k=2;k<=9;k++){
            if(arrayValues[i]%k==0 && arrayValues[i+1]%k==0){
              console.log('--k--',k)
              flag.push(k)
              }
            }
            console.log('flag--->', flag)
            if(flag.length==0){
              return false
            }
         }else{
           let count = 0
           console.log('flag-->', flag)
           for(const num of flag){
           if(arrayValues[i]%num==0 && arrayValues[i+1]%num==0){
             count = count + 1
           }
          }
          if(count == 0){
            return false
          }
         }
       }
     }else{
       if(flag.length==0){
         flag.push(arrayValues[i])
        // flag = arrayValues[i]
       }
     }
   }
   if(flag.length!=0){
     return true
   }
   }else{
     if(arrayValues.length==1){
       if(arrayValues[0]>1){
         return true
       }else{
         return false
       }
     }else{
        return false
     }
   }
  return true
};