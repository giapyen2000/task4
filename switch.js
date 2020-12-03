//witch
var thu=2;
switch (thu) {
    case 0:
        console.log("hom nay la thu 2");
        break;
    case 1:
        console.log("hom nay la thu 3");
        break;
    case 2:
        text=("hom nay la thu 4");
        break;
    case 3:
        text=("hom nay la thu 5");
        break;
    case 4:
        text=("hom nay la thu 6");
        break;
    case 5:
        text=("hom nay la thu 7");
        break;
    case 6:
        text=("hom nay la chu nhat");
        break;
    default:
        text=("khong co thu ban can tim");

}
console.log(text);
//for Loop
let n=6;
let b=[];
let c=[1,2,3,4,5,6,8]
let i=0;
for (let i=0;i<n;i++)
{
  b+=i;
}
console.log(b);
//for in
for ( i in c)
{
    b+=c[i];
}
console.log(b)
//do while
do {
    b+=i;
    i++
}while(i<5);
console.log(i);
//break
let t=0;
for (i = 0; i < 10; i++) {
    if (i === 3) { break; }
   t +=  i ;
  }
  console.log(t);
//continue
for (i = 0; i < 10; i++) {
    if (i === 3) { continue; }
     t += i ;
  }
  console.log(t);
  //Type Conversion
  let g=(123+3).toString();
  console.log(g)
  d=new Date()
  console.log(Number(d));
  //Bitwise
  console.log(5&1)
  console.log(5|1)
  console.log(5^1)
  console.log(5<<1)
  //Regular Expressions
  let arr=" Today, I am tire.I want to go to bed early";
  let search=arr.search("Today");
  console.log(search);
  let replace=arr.replace("Today","Yesterday");
  console.log(replace)
  //Errors - Throw and Try to Catch
  let x=4;
  try {
    if(x == "") throw "is empty";
    if(isNaN(x)) throw "is not a number";
    x = Number(x);
    if(x > 10) throw "is too high";
    if(x < 5) throw "is too low";
  }
  catch(err) {
    console.log(err)
  }
 //Initializations are Not Hoisted
 var s = 5; // Initialize s
var m = 7; // Initialize m
console.log(s+m);
//
var j=6;
console.log(j+e);
var e=8
//
"use strict";//i don't understand why 8
 Num = 010;
console.log(Num);
//this
var person = {
    firstName: "Kika",
    lastName : "Yen",
    id     : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };
  console.log(person.fullName())
  //let
//   var numOne = 1;       // Allowed
// let numOne= 3;       // Not allowed
// console.log(numOne)//err 'numOne' has already been declared
// //const  cannot be reassigned
// const PI = 3.141592653589793;
// PI = 3.14;      // This will give an error
// PI = PI + 10;   // This will also give an error
// console.log(PI)//err 
//Arrow Function
let bob = a => a + 100;
console.log(bob(6))
let l=(param1, paramN) => {
    let a = 1;
    return a + param1 + paramN;
 }
 console.log(l(8,9))