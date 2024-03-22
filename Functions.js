"use strict"; // this is very usefull to find a debug ;
// //Named function
// function hi() {}
// //Anonymuse function
// const bye = function () {};
// //Arrow function
// const hello = () => {};

// function user() {
//   console.log("Hello how are you all");
// }
// // you can say calling / running / invoking  function
// user();
// user();
// user();
// user();

// function logger(name) {
//   console.log(`My name is ${name}`);
// }
// logger("HarishKalyan");
// logger("Shanthini");
// logger("Sreemathi");
// logger("Thejusree");

// function student(names, study) {
//   console.log(`Hello i am ${names} and i am studying in ${study}`);
// }
// student("John Doe", "Computer Science");

// // functions is reusable
// const fruitProccessor = function (apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// };
// const appleJiuce = fruitProccessor(10, 4);
// console.log(appleJiuce);

// const appleOrangeJuice = fruitProccessor(12, 2);
// console.log(appleOrangeJuice);

// //functions declaration
// // named function you can declare before in initialization
// const age1 = ageCalc(1990); // like this
// function ageCalc(birthYear) {
//   // const age = 2030 - birthYear
//   // return  age; // you can use this way

//   return 2030 - birthYear; // also you can use this
// }

// // const age1 = ageCalc(1990);
// console.log(age1);

// // Anonymuse function you can not declare before in initialization

// // function Expression
// const ageCalc2 = function () {
//   return 2030 - birthYear; // also you can use this
// };
// const age2 = ageCalc(1980);
// console.log(age2);

// //Arrow function
// // you want to return only one value you can use like this way
// const ageCalc3 = (birthYear) => 2037 - birthYear;
// const age3 = ageCalc3(1965);
// console.log(age3);

// // but you want to return many values use this way

// // const ageCalc4 = birthYear =>{
// //     const age = 2040 - birthYear;
// //     const retirment = age;
// //     return retirment;
// // }
// // console.log(ageCalc4(1995));

// const ageCalc4 = (birthYear, firstName) => {
//   const age = 2040 - birthYear;
//   const retirment = 65 - age;
//   //return retirment;
//   return `${firstName} retirment in ${retirment} Years`;
// };
// console.log(ageCalc4(1995, "Sanjay Kumar"));
// console.log(ageCalc4(1999, "Mani Shankar"));

// // fucntion calling another function

// const fruitMultiple = (fruit) => {
//   return fruit * 4;
// };

// const shareFruit = (apple, banana) => {
//   const applePieces = fruitMultiple(apple);
//   const bananaPieces = fruitMultiple(banana);

//   const share = `We have four childs so cut the apples equal parts of ${applePieces} and totaly ${bananaPieces} Bananas give each three`;
//   return share;
// };
// console.log(shareFruit(2, 4));



// function shareProcesser(fruits) {
//   return fruits * 5;

// }
// function condtion(pineApple, dragonFruit) {
//   const cutingArea = shareProcesser(pineApple);
//   const cutingArea1 = shareProcesser(dragonFruit);

//   if (pineApple >= 2) {
//     const cutPieces = `We have ${pineApple} pineApples so you can cut ${cutingArea} pieces of PineApple `;
//     return cutPieces;
//   } else if (pineApple >= 4 || dragonFruit >= 3) {
//     const makeJiuce = `We have ${pineApple} pineApple and ${dragonFruit} orange so we can cut ${cutingArea} pieces of pineApple and ${cutingArea1} pieces of dragonFruit so can make more juice for drink`;
//     return makeJiuce;
//   } else {
//     return `We do not have enough fruit to make a juice`;
//   }
// }
// console.log(condtion(1, 4));


// const calcAverage = (a,b,c) => a+b+c/3;
// console.log(calcAverage(4,5,6))

// const maniScore = calcAverage(4,6,6);
// const krishScore = calcAverage(7,5,9)
// // console.log(maniScore,krishScore);

// const checkWiner = function(mani , krish){
// if(mani >=2* krish){
//   return `Mani Win 🏆 (${mani} vs ${krish})`
// }
// else if(krish >=2* mani){
//   return `Krish win🏆 (${krish} vs ${mani})`
// }
// else{
//   return "No One Win....."
// }
// }
// console.log(checkWiner(maniScore , krishScore));
// console.log(checkWiner(390,120));

const cal =function(birthYear)
{
  const total = 2030 - birthYear
  return total;
}
const ageCal = function(firstName,birthYear){
  const tota = cal(birthYear)
  const retirment = 67 -tota 
  return `${firstName} already retirment in  ${retirment} years`
}
console.log( ageCal("Mike", 1980));

function generateOTP(){
  let OTP = "";
  let digit = "1234567890";
  for(let  i=0 ; i<6 ; i++){
    OTP += digit[Math.floor(Math.random() * 10)];
}
return OTP;
}
console.log(` This is your one time password: ${generateOTP()}`);