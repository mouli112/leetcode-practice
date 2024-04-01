var minimumBoxes = function(apple, capacity) {
    let count = 0;
    let appleSum = apple.reduce((acc, num) => acc + num, 0);
    capacity.sort((a, b) => b - a); 

    for (let i = 0; i < capacity.length; i++) {
        if (appleSum <= 0) {
            break; 
        }
        if (appleSum <= capacity[i]) {
            count++; 
            break;
        }
        count++;
        appleSum -= capacity[i]; 
    }

    return count;
};
console.log(minimumBoxes([5,5,5], [2,4,2,7]));