function separateLanguages(arr){
  const map = {python: 0, javascript: 0, other: []};
  
   for (let i = 0; i < arr.length; i++) {
     if(arr[i] === 'python'){
       map.python += 1;
     } else if (arr[i] === 'javascript') {
       map.javascript += 1;
     } else {
       map.other.push(arr[i]);
     }
   }
 
  return map;
}
