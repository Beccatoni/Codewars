// https://www.codewars.com/kata/596343a24489a8b2a00000a2/train/javascript


function isItANum(str) {
    // your code here;
      str = str.replace(/[^0-9]+/g, '')
      
      return str[0] == 0 && str.length == 11 ? str : 'Not a phone number';
    }