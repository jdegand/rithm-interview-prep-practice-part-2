function findFirstAndLastIndex(arr, num) {
  const numExistsTwice = arr.map(el => el === num).filter(el => el === true).length
  if (numExistsTwice >= 2) {
    const first = arr.indexOf(num);
    const last = arr.lastIndexOf(num);
    return [first, last]; 
  } 
  return -1;
}
