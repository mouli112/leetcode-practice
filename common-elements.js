function findCommonElements(ar1, ar2, ar3) {
    return ar1.filter(element => ar2.includes(element) && ar3.includes(element));
}
const ar1 = [1, 5, 10, 20, 40, 80];
const ar2 = [6, 7, 20, 80, 100];
const ar3 = [3, 4, 15, 20, 30, 70, 80, 120];
const commonElements = findCommonElements(ar1, ar2, ar3);
console.log("Common Elements:", commonElements);