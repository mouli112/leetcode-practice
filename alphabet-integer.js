var freqAlphabets = function (s) {
    let decrypted = '';
    for (let i = 0; i < s.length; i++) {
        if(s[i+2] === '#'){
            decrypted+= decrypt(s[i++] + s[i++]);
        }else{
            decrypted+= s[i];
        }
    }
    return decrypted;
};
let s = "10#11#12";
console.log(freqAlphabets(s));
let decrypt = (str) => String.fromCharCode(parseInt(str) + 96);


