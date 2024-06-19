// counting the ocurrences of a letter

const strCount = (str, letter) => {
    let count = 0;

    for(let char of str){
        if(char === letter){
            count += 1;
        }
    }
    return count;
}