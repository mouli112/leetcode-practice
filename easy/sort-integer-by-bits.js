var sortByBits = function(arr) {
    let res;
    let count = 0;
    let resArr = [];
   for(let i=0;i<arr.length;i++){
    res = arr[i].toString(2);
    count = res.split("").filter(x => x === '1').length;
    if(count[i] <= Math.max(...count))
    resArr = resArr.push(arr[i]);
  }  
};
let arr = [0,1,2,3,4,5,6,7,8];
console.log(sortByBits(arr));