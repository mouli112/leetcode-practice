function unionArray(arr1, arr2) 
{
const set1 = new Set(arr1);
const set2 = new Set(arr2);
const result = [...new Set([...set1,...set2])]
return result;
}
const arr1 = [1, 2, 2, 2, 3];
const arr2 = [2, 3, 3, 4, 5, 5];
const uni = unionArray(arr1, arr2);
console.log(uni.join(' '));