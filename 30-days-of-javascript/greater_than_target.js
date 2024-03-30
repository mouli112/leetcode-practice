var nextGreatestLetter = function(letters, target) {
    for(let i=0;i<letters.length;i++){
        console.log(letters[i].charCodeAt(0),target.charCodeAt(0))
        if(letters[i].charCodeAt(0) <= target.charCodeAt(0)) return letters[i+1];
    } 
    return letters[0];
 };
 let letters = ["c","f","j"];
 let target = "g";
 console.log(nextGreatestLetter(letters,target));