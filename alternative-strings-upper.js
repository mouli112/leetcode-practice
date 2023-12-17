let words = ["mouli","pavani",'hari']
console.log(words.map(x => x.split("").map(y => (x.indexOf(y) % 2 === 0) ? y.toUpperCase() : y ).join("")));