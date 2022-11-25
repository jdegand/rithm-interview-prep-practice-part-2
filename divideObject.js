function divideObject(obj){
  let str = ''
  let nums = 0;
  for (const level in obj) {
    if(typeof obj[level] === 'string'){
      str += obj[level];
    } else {
      nums += obj[level];
    }
  }
return [[nums], [str.length]];
}