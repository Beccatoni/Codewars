function encode(plaintext){
    //finish the function
    let arr = []
    let alphabets = "abcdefghijklmnopqrstuvwxyz";
    for (let letter of plaintext.toLowerCase()){
        // console.log(letter);
      if (alphabets.includes(letter)){
        if(alphabets.indexOf(letter) % 2 === 0){
            console.log(alphabets.indexOf(letter));
          arr.push(0)
        } else{
          arr.push(1)
        }
      } else{
        arr.push(letter);
      }
    }
    return arr.join('');
  }

  console.log(encode('H0110 W0111!'));

