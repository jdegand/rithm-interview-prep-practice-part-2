function collectOddsAndEvens(arr){
  let odds = 0;
  let evens = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
      evens += 1;
    } else {
      odds += 1;
    }
  }
  
  return {'odd' : odds, 'even': evens}
}
