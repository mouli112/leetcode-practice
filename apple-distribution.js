var minimumBoxes = function(apple, capacity) {
    let count = 0;
    let appleSum = apple.reduce((acc, num) => acc + num, 0);
    capacity.sort((a, b) => b - a); // Sorting capacity in descending order

    for (let i = 0; i < capacity.length; i++) {
        if (appleSum <= 0) {
            break; // No more apples to store
        }
        if (appleSum <= capacity[i]) {
            count++; // Store remaining apples in a new box
            break;
        }
        count++;
        appleSum -= capacity[i]; // Fill the box with apples
    }

    return count;
};
console.log(minimumBoxes([5,5,5], [2,4,2,7]));