const d1 = new Date (), d2 = new Date ( d1 );
d2.setSeconds(d1.getSeconds()+30);    
console.log(d1)
console.log(d2)