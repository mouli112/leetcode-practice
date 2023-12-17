var removeOuterParentheses = function(s) {
    let count = 0;
    let result = "";
    let balanced = 0;
    for (let i = 0; i < s.length; i++) {
        s[i] === '(' ? count++ : count--;
        if (count === 0) {
            result += s.substring(i,balanced + 1); 
            balanced = i + 1;
        }
    }
    return result; 
};
let s = '(()())(())';
removeOuterParentheses(s);
