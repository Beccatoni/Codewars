function replace(s) {
  //coding and coding....
  const sArr = s.split('');
  const vowels = 'aeiouAEIOU'
  
    return sArr.map(char => vowels.includes(char)? '!': char).join('');
}