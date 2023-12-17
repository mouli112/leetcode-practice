function findMissingNumber(arr) {
    const n = arr.length + 1; // One element is missing, so the length of the array is n-1, and the actual size is n.
    const expectedSum = (n * (n + 1)) / 2; // Sum of the first n natural numbers

    const actualSum = arr.reduce((sum, num) => sum + num, 0);

    const missingNumber = expectedSum - actualSum;

    return missingNumber;
}

const arr = [1, 2, 4, 6, 3, 7, 8];
const result = findMissingNumber(arr);
console.log("Missing number:", result);
