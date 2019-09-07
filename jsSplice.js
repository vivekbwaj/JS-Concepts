let clickThis = [".MenuItem__chevronButton--3vJb0","abcd_phoneIgnore","abcd_tabletIgnore"];
console.log(clickThis);
if(clickThis.indexOf('phoneIgnore')!==-1){
    clickThis.splice(clickThis.indexOf('phoneIgnore'),1);
}

console.log(clickThis);

if(clickThis.indexOf('tabletIgnore')!==-1){
    clickThis.splice(clickThis.indexOf('tabletIgnore'),1);
}

console.log(clickThis);