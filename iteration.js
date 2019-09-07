var box ={}
box["material"]="cardboard";
box["dimensions"]={
    "height":2,
    "width":60
}
box[10]="it is value";
box["cow"]="holy cow..";
box.area=function(){
    return box.dimensions.height * box.dimensions.width;
}

for(var cow in box)
{
    console.log(box[cow]);
}

for(var cow in box)
{
    console.log(box.cow);
}