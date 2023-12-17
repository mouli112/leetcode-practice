function findDuplicates(arr) {
    const duplicates = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            if (arr[i] === arr[j]) {
                duplicates.push(arr[i])
            }
        }
    }
    return duplicates;
}
const arr = [1, 6, 3, 1, 3, 6, 6];
console.log(findDuplicates(arr));
