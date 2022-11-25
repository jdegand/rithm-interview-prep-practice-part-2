function reverseValues(arr){
  const newArr = [];
  for (let i = 0; i < arr.length; (arr[i] % 2 === 0 ? i += 3: i += 1)) {
   if (arr[i] % 2 === 0) continue;
    newArr.push(arr[i]);
 }
  return newArr.reverse();
}
