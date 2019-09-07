var box ={}
box["material"]="cardboard";
box["dimensions"]={
    "height":2,
    "width":60
}

box.area=function(){
    return box.dimensions.height * box.dimensions.width;
}

console.log(". notation");
console.log(box);
console.log(box.material);
console.log(box.dimensions);
console.log(box.area);
console.log(box.area());

console.log("-----brackets notation-----");
console.log(box);
console.log(box["material"]);
console.log(box["dimensions"]);
console.log(box["area"]);
console.log(box["area"]());