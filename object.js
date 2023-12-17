const obj = {
    name:'Mouli',
    age:23,
    "company":"jobiak",
    data: function details () {
        console.log(`This is ${this.name} and my age is ${this.age}`);
    }
}
obj.data();
obj.hobby = "football"
delete obj.hobby
console.log(obj.name);
console.log(obj['age']);
console.log(obj.company);
console.log(obj)