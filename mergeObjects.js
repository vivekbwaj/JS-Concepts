var obj1 = { a: 1, b: 2 };
var obj2 = { c: 3, d: 4 };

// ---------- ES6 ----------
var obj3 = { ...obj1, ...obj2 };
console.log(obj3);