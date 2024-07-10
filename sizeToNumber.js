// https://www.codewars.com/kata/667dfbaa4570b2db26aedc8c/train/javascript#


function sizeToNumber(size) {
    //   check for the invalid inputs
    //   check for valid inputs and put out their number size
      if(size === ''){
        return null
      }
      if([...size.matchAll(/[^xmls]/g)].length > 0){
        return null
      }
      if([...size.matchAll(/m/g)].length > 1){
        return null
      }
      if(size.includes('s') && size.indexOf('s') !== size.length -1){
        return null
      }
      if(size.includes('l') && size.indexOf('l') !== size.length -1){
        return null
      }
      if(size.includes('s')){
        return 36 - (size.length-1)*2
      }
      if(size.includes('m')){
        return 38
      }
      if(size.includes('l')){
        return 40 + (size.length-1)*2
      }

    }
    console.log(sizeToNumber('xxl'))