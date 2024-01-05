//Array Methods
let names=["Kaung", "Pyae", "Sone","Aung"];
let initials=['K','P','S','A'];
names.push("Very Smart ")
console.log(names.concat(initials).join(''));
console.log(names.splice(0,2));
console.log(names.sort());

const numbers=[1,10,13,38,18,4,32,83,85,43,74];
const numberover18=numbers.filter((value)=>value>18);
console.log(numberover18);

//String Methods
let trimName="S KaungPyaeSoneAung  ";
console.log(trimName.trimEnd());
let fruits = "Apple, Banana, Kiwi";
console.log(fruits.substring(4, fruits.length));

//Math
console.log(Math.floor(Math.random()*6)+1);
console.log(Math.random())//returns 16 digits between 0 and 1
console.log(Math.floor(Math.random() * (12 - 10 +1) ) + 10) // generate between 12 and 10
//formula being (Math.floor(Math.random() * (max - min +1) ) + min)


//set
const letters = new Set(["a","b","c"]);
console.log(letters.add("a")) //couldn't add a to set No same value allowed
console.log(letters.add("d")) //successfully added
letters.delete("b")
console.log(letters)
