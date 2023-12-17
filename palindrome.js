var isPalindrome = function(s) {
    const regex = /[^a-zA-Z0-9]/g; 
    const res = s.replace(regex,'').toLowerCase();
    const temp = res.split("").reverse().join("");
    return res === temp;
 };
 console.log(isPalindrome("A man, a plan, a canal: Panama"));