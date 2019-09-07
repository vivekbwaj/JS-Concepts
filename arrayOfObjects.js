var box = [];
box.push({"cat":"kitten"})
box.push("a string");
box.push(111);
var boxObject ={}
boxObject["material"]="cardboard";
boxObject["dimensions"]={
    "height":2,
    "width":60
}
boxObject["array property Inside object"]=["U2","REM"];
boxObject.area=function(){
    return box.dimensions.height * box.dimensions.width;
}
box.push(boxObject);
console.log(`size of array is ${box.length}`);
for(var item in box){
    console.log(`type:${typeof box[item]} and value:`,box[item]);
}