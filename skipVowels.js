function skipVowels(str){
  const arr = [];
  for (let i = 0; i < str.length; str[i].match(/[aeiou]/gi) ? i += 2 : i += 1) {
    if (!str[i].match(/[aeiou]/gi)) {
      arr.push(str[i]);
    }
  }  
  return arr;
}
