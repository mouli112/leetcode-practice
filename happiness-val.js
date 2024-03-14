var maximumHappinessSum = function(happiness, k) {
    let sum = 0;
    let maxHappiness = happiness.slice().sort((a, b) => b - a); // Sorting happiness values in descending order

    for (let i = 0; i < happiness.length; i++) {
        if (maxHappiness[i] >= 0 && k > 0) {
            sum += maxHappiness[i];
            if (i + 1 < happiness.length && maxHappiness[i] !== maxHappiness[i + 1]) {
                maxHappiness[i + 1] -= 1; // Decrement happiness value of the next child if it's different
            }
            k--;
        }
    }

    if (sum > Math.floor(sum / k) * k) {
        sum -= 1;
    }

    return sum;
};
console.log(maximumHappinessSum([2,83,62],3))
