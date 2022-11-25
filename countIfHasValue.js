function countIfHasValue(obj, num) {
  let count = 0;
  for (let arr in obj) {
    if (obj[arr].includes(num)){
      count++;
    }
  }
  return count;
}
