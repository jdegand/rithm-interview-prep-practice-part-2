function scheduleCheck(obj1, obj2){
  let count = 0;
  for (let key in obj1) {
      if (obj1[key] === obj2[key]) {
        count += 1;
      }
    }
  return count;
}
