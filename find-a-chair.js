function findSpareChairs(rooms, need) {
    if (need === 0) return 1;
    let chairsTaken = [];
    let totalChairsNeeded = need;

    for (let i = 0; i < rooms.length; i++) {
        const occupants = rooms[i][0].length;
        const availableChairs = rooms[i][1] - occupants;

        if (availableChairs > 0) {
            if (availableChairs >= totalChairsNeeded) {
                chairsTaken.push(totalChairsNeeded);
                return chairsTaken;
            } else {
                chairsTaken.push(availableChairs);
                totalChairsNeeded -= availableChairs;
            }
        } else {
            chairsTaken.push(0);
        }
    }

    return totalChairsNeeded === 0 ? chairsTaken : 0;
}

// Test case
const rooms = [['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9], ['XXX',2]];
const need = 4;
console.log(findSpareChairs(rooms, need)); // Output: [0, 1, 3]
