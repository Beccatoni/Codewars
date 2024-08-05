// https://www.codewars.com/kata/57f5e7bd60d0a0cfd900032d/train/javascript

function missingNo(nums){
    const sortedArray =  nums.sort((a,b)=> b-a)
    
    for(let i=0; i< sortedArray.length +1; i++){
        if(sortedArray[0] !== 100){
            return 100
        }
        if(sortedArray[i] - sortedArray[i+1] !== 1){
            return sortedArray[i] - 1
        }
    }
    return undefined
}