// function findMissingNumber(arr) {
//     const n = arr.length + 1; // One element is missing, so the length of the array is n-1, and the actual size is n.
//     const expectedSum = (n * (n + 1)) / 2; // Sum of the first n natural numbers

//     const actualSum = arr.reduce((sum, num) => sum + num, 0);

//     const missingNumber = expectedSum - actualSum;

//     return missingNumber;
// }

// const arr = [1, 2, 4, 6, 3, 7, 8];
// const result = findMissingNumber(arr);
// console.log("Missing number:", result);


// function prime(x) {
//     if (x <= 1) return false;
//     for (let i = 2; i <= Math.sqrt(x); i++) {
//         if (x % i == 0) return false;
//     }
//     return true;
// }
// let x = 4;
// console.log(prime(x)); // Output: true
// function intersection(arr1, arr2) {
//     let intersectedArr = [];
//     let set1 = new Set(arr1);
//     for(let i=0; i<arr1.length; i++){
//         if(set1.has(arr2[i])){
//             intersectedArr.push(arr2[i])
//         }
//     }
//     return intersectedArr;
// }
// // Example usage:
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [3, 4, 5, 6, 7];
// console.log(intersection(arr1, arr2)); // Output: [3, 4, 5]

// function isBalanced(str) {
//     const stack = [];
//     const openingBrackets = ['(', '[', '{'];
//     const closingBrackets = [')', ']', '}'];
//     const bracketPairs = {
//         ')': '(',
//         ']': '[',
//         '}': '{'
//     };

//     for (let char of str) {
//         if (openingBrackets.includes(char)) {
//             stack.push(char);
//         } else if (closingBrackets.includes(char)) {
//             if (stack.length === 0) {
//                 return false; // Unbalanced parentheses - no matching opening bracket
//             }
//             const lastOpeningBracket = stack.pop();
//             if (lastOpeningBracket !== bracketPairs[char]) {
//                 return false; // Unbalanced parentheses - mismatched brackets
//             }
//         }
//     }

//     return stack.length === 0; // Return true if stack is empty, false otherwise
// }

// // Example usage:
// console.log(isBalanced("((()))")); // Output: true
// console.log(isBalanced("{[()][]}")); // Output: true
// console.log(isBalanced("((()")); // Output: false
// console.log(isBalanced("({)}")); // Output: false


// let name = "mouli";
// console.log(name.split('').reverse().join(''));


// let arr = [45,33,67,9,67];
// console.log(arr.sort((a,b) => b - a)[0]);

// ==================================================

// function palindrome (str){
// if(temp === str.split('').reverse().join('')) return true;
// return false;
// }
// let str = "mouli";
// let temp = str;
// console.log(palindrome(str));

// ================================================

// function factorial(x){
//     for(let i=x-1;i>=1;i--){
//         x*=i
//     }
//     return x;
// }
// console.log(factorial(5));

// ========================================

// function prime(x) {
//     if (x <= 1) return false;
//     for (let i = 2; i <= Math.sqrt(x); i++) {
//         if (x % i == 0) return false;
//     }
//     return true;
// }

// let x = 3;
// console.log(prime(x)); // Output: true

// =================================================

// const nestedArray = [1, [2, 3], [4, [5, 6]]];
// const flattenedArray = nestedArray.flat(Infinity);

// console.log(flattenedArray);  //[1,2,3,4,5,6]

// =================================================

function capitalizeFirstCharacter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Example string
const str = "mouli";

// Capitalize the first character
const capitalizedStr = capitalizeFirstCharacter(str);

// Output the result
console.log(capitalizedStr); // Output: "Mouli"

// ================================================

function sum(...numbers) {
    return numbers.reduce((acc, val) => acc + val, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10
// =====================================================

// example of aggregation function 
db.orders.aggregate([
    { $group: { _id: "$customerId", totalAmount: { $sum: "$amount" } } }
]);



