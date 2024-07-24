//  https://www.codewars.com/kata/56426b4e971f01fd2f00005b/train/javascript

function squareRoot(x){
    let root = x ** 0.5

    return Number.isInteger(root)? root : Number(root.toFixed(5))
}