function DNAtoRNA(dna) {
    // create a function which returns an RNA sequence from the given DNA sequence
    // let rna = [];
    // for(let letter of dna){
    //   if(letter !== 'T'){
    //     rna.push(letter);
    //   } else{
    //     rna.push('U')
    //   }
    // }
    // return rna.join('')
    return dna.replace(/T/g, 'U')
}