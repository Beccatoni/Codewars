//https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript

function likes(names) {
    // TODO
    if(names.length === 0){
      return `no one likes this`;
    } else if(names.length === 1){
      return `${names[0]} likes this`;
    } else if(names.length === 2){
      return `${names.join(' and ')} like this`;
    } else if(names.length === 3){
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    }else{
      return `${names[0]}, ${names[1]} and ${names.slice(2).length} others like this`;
    }
  }

  console.log(likes(['Mutoni', 'Kagabo', 'Gakobwa', 'Ineza', 'Umunyana']));