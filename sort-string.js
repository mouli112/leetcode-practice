function orderData(str) {
    const sortedStr = str.split('').sort().join('');
    return sortedStr;
}
const str = "abccdabba";
console.log(orderData(str));
