// https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript

function firstNonRepeatingLetter(s){
    for (const char of s) {
        let len = s.split('').filter(ch => ch.toLowerCase() === char.toLowerCase()).length
        if(len == 1){
            return char
        }
    }
    return ''
}