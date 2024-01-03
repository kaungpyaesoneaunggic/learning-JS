//Array Testing
const array=["hello","ohayou","konichiwa","Mingalar pr"];
document.getElementById("array").innerHTML="the way to greet others are "+array;


//Object Testing
const obj = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  document.getElementById("obj").innerHTML =
  obj.firstName + " is " + obj.age + " years old.";
  

  //Map testing
  const map = new Map([
  ["First Name", "Kyaw Kyaw"],
  ["age",19]
  ]);
  document.getElementById("map").innerHTML =
      map.get('First Name')+ " is " + map.get('age') + " years old.";


  //forLoop
  let one2ten=[]
  for(let i=0;i<10;i++){
    one2ten[i]=i
  }
  document.getElementById("forLoop").innerHTML=
  "Here are "+one2ten;


//async
async function changeTheTextAsync() {
    try {
        const waitingText = await waitData();
        document.getElementById("asyncT").innerHTML = waitingText;
    } catch (error) {
        alert("There was some error: " + error);
    }

    function waitData() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve('Voila Text is now chnaged');
            }, 2000); // Simulating a delay of 2 seconds
        });
    }
}
document.addEventListener('DOMContentLoaded', () => {
    changeTheTextAsync();
});


//Methods


//Mistakes from js
/*
== convert data when comparing String 1 and int 1 will return true
=== doesnt convert data type String 1 and int 1 will reply false
string and int can be combined. it will concat. "10"+1 is "101"

*/
  