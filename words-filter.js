var countSegments = function(s) {
    return s.split(' ')?.filter(item => !!item)?.length;
};
console.log(countSegments("Hello, my name is John"));