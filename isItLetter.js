function isItLetter(character) {
    let regEx = /[a-zA-Z]/
    return regEx.test(character)  ;
  }

  console.log(isItLetter('1'));