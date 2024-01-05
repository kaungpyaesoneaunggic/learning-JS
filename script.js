//Array Testing
const arrayS=["hello","ohayou","konichiwa","Mingalar pr"];
document.getElementById("array").innerHTML="the way to greet others are "+arrayS;


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


  //Array mapping
  const arrayT=[45,60,52,14,32,95];
  const arryT2=arrayT.map(mappigFun);
  console.log(arryT2);

  function mappigFun(value,index,array){
    return value+index;
  }

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
                resolve('Voila Text is now chnaged after 2 sec interval');
            }, 2000);
        });
    }
}
document.addEventListener('DOMContentLoaded', () => {
    changeTheTextAsync();
});




//

//Mistakes from js
/*
== convert data when comparing String 1 and int 1 will return true
=== doesnt convert data type String 1 and int 1 will reply false
string and int can be combined. it will concat. "10"+1 is "101"

*/
console.log("1"==1);
console.log("1"===1);
console.log("120"+6);

//let vs var
const i =true;
if(i===true){
    let lettest= 1;
    var vartest=2;
}
console.log(lettest);// throws not defined error
console.log(vartest);