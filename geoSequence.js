function GeometricSequenceSum(a, r, n) {
    //Your code here!:)
  //   find the sequence in range n
    let sequence = [a]
    for(i = 1; i < n; i++){
      a *= r;
      sequence.push(a)
    }
    return sequence.reduce((c,b)=>c+b)
  }