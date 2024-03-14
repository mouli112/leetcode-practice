var shortestSubstrings = function(arr) {
    return arr.map((str, i) => {
        let shortest = '';
        for (let j = 0; j < str.length; j++) {
            for (let k = j + 1; k <= str.length; k++) {
                let substring = str.substring(j, k);
                let isSubstringFound = arr.some((s, idx) => idx !== i && s.includes(substring));
                if (!isSubstringFound && (shortest === '' || substring < shortest)) {
                    shortest = substring;
                }
            }
        }
        return shortest;
    });
};
console.log(shortestSubstrings(["gfnt","xn","mdz","yfmr","fi","wwncn","hkdy"]));