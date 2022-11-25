function findFirstMove(arr, move){
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
       if (arr[i][j] === move) {
        return [i, j];
       } 
    } 
  }
  return -1;
}
