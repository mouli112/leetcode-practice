var generateTheString = function(n) {
    return n % 2 ? "x".repeat(n) : "x".repeat(n-1) + "y" 
};