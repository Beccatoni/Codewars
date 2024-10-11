function moveTen(str){
    let shiftedString = '';

    for(let i = 0; i< str.length; i++){
        let char = str[i];

        if(char >= 'a' &&  char <= 'z'){
            let newChar = String.fromCharCode(((char.charCodeAt(0) - 97 + 10)% 26) + 97);
            shiftedString += newChar;
        }else{
            shiftedString += char
        }
    }
    return shiftedString;
}