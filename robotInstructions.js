function robotInstructions(arr) {
    const map = {};
    arr.forEach(item => {
       if(map[item]){
          map[item] += 1;
       }else{
          map[item] = 1;
       }
    });
    return map;
}
