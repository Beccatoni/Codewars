function* generator(a, b=1) {
   while(true) yield `${a} x ${b} = ${a*b++}`
  }


let newIterator = generator(4);
for (value of newIterator){
    console.log(value)
}