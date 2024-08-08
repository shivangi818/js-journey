//push - to add at end
let items=["potato", "litchi", "mango","chips"]
items.push("apple","paneer")
console.log(items);

//pop-to delete
items.pop()
console.log(items)

//toString- converts array to string
console.log(items.toString())

//Concat()- joins multiple arrays and returns result
let marvelHeros=["thor","ironman","hulk","spiderman","captainAmerica","thanos"];
let dcHeros=["Superman","batman"];
heros=console.log(marvelHeros.concat(dcHeros));

//unshift()- add to start
let val= marvelHeros.unshift("antman")
console.log(val);

//shift()- delete from start and return
let val2=marvelHeros.shift();
console.log("deleted")

//Slice()-returns a piece of the array
console.log(marvelHeros.slice(2,5))

//Splice()-change original array (add, remove, replace)
let arr=[1,2,3,4,5,6,6];
arr.splice(2,2,101,106);



