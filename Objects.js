var myObj={
    name:"stannis",
    surname:"baratheon",

    func1:function(){
        console.log(this.surname);
    }

};

console.log(myObj.name);
myObj.func1();
myObj["surname"]="langley"
myObj.func1();