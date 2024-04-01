var lengthOfLastWord = function(s) {
    return s.split(' ').filter(x => x.trim() !== '').at(-1).length;
};
let s = "   fly me   to   the moon  ";
console.log(lengthOfLastWord(s));