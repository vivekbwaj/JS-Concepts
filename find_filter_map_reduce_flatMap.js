const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const firstLengthyWord = words.find(wrd => wrd.length > 5);

// returns the value of the FIRST element in the provided array that satisfies
console.log(`${typeof firstLengthyWord} : ${firstLengthyWord}`);
//////////////////////////////////////////////////////////////////////////////////////////////

const biggerwords = words.filter(word => word.length > 7);

//creates a new array with all elements that pass the test implemented
console.log(biggerwords);
//////////////////////////////////////////////////////////////////////////////////////////////
const newArray = words.map(j => j+'_Javascript' );

//returns a new array with performed operation on each element
console.log(newArray);

const originalArray = newArray.map(o => o.split('_'));
console.log(originalArray);
//////////////////////////////////////////////////////////////////////////////////////////////
let arr1 = ["it's Sunny in", "", "California is exuberant"];

const flatArray = arr1.flatMap(x => x.split(" "));
console.log(flatArray);
/////////////////////////////// map vs flatMap ///////////////////////////////////////////////
const friends = [
    {name: 'Dave', kids: ['Max', 'Jack']},
    {name: 'Max', kids: ['Sam', 'Alex', 'Megan']},
    {name: 'Jordan', kids: ['Mason', 'Cameron', 'Kaylin']}
];

console.log(friends.map(p => p.kids));
console.log(friends.flatMap(p => p.kids));
//////////////////////////////////////////////////////////////////////////////////////////////
let values = [800, 200, 100, 300, 700];
 
let total = values.reduce((sum, item) => sum + item);
console.log(total);

let foods = [
    {name: 'steak', calories: 800},
    {name: 'fruit', calories: 200},
    {name: 'salad', calories: 100},
    {name: 'chips', calories: 300},
    {name: 'ice cream', calories: 700},
  ]; 
    
  let totalCalories = foods.reduce((sum, item) => sum + item.calories,0);
  console.log(totalCalories);