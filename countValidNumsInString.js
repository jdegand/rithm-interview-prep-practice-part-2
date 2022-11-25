function countValidNumsInString(str) {
  const arr = [];
  for (let i = 0; i < str.length; i += 1) {
    arr.push(parseInt(str[i]));
    }
  return arr.filter(el => !Number.isNaN(el)).length;
}
