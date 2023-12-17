var minDeletionSize = function(strs) {
    let count = 0;
    for(let i=0; i<strs[0].length; i++){
        for(let x=0; x<strs.length -1; x++){
            if(strs[x].charAt(i) > strs[x+1].charAt(i)){
                count++;
                break;
            }
        }
    } 
    return count;
};
let strs = ["cba","daf","ghi"];
console.log(minDeletionSize(strs));
