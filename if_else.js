// const age =19;
// const isOldEnough = age >= 18;
// const notEnough = 18 - age;

// if (isOldEnough) {
//     console.log(`You are eligible to get a license`);
// }
// else{
//     console.log(`You are too young. so wait another ${notEnough} `);
// }

// const birthYear = 2000;

// let century;
// if(birthYear <=2000){
//  century =20;
// } else{
//  century = (`21 century`);
// }
// console.log(century);

// // //type coercion

// let n= 1 +'1'
// console.log(n); //11

// let x= '18'-'9'-'10' +'10' //the +10 is taking a string because + is  join the two value  -110
// console.log(x);

// let y= '8'*'5'*'3' +'2' //the +2 is taking a string  1202
// console.log(y);

// let z= '7'*'10'/'15' +'6' //the +6 is taking a string 4.6
// console.log(z);


// let simple = '30'+ '20'-'10';
// console.log(simple); //3010  30 + 20 - 10 = 3010


// let my = '30'
// console.log(Number(my));

// let num = 90;
// console.log(String(num));

// console.log(typeof(NaN));
   

// // 5 false values  0, '', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(''));
// console.log(Boolean(undefined));
// console.log(Boolean({}));
// console.log(Boolean(NaN));
// console.log(Boolean('Hello'));

// const Age = 1; //0 is a false no values here else print  but 1 or 2 is a value so its print if
// if (Age) {
// console.log("You are eligible to enter a course");
// }
// else{
//     console.log("You are not eligible");
// }


// const height = 169;
// if(height){
//     console.log(`Your Height is ${height}`);
// }
// else{
//     console.log(`Height is UNDEFIND`);
// }


// // comparsion == and === 

// let year = '1990';
// let month = 1990;

// if(year==month){ // == it is check only the values
//     console.log(`logic is true`);
// }
// else{
//     console.log(`logic is not true`);
// }

// let birthYears = '2000'
// let birthMonth = 2000

// if(birthYears===birthMonth){
//     console.log(`it is true `);
// }
// else{
//     console.log(`it is not true`);
// }

// // const pro = prompt("Enter your age")
// // if (pro) {
// // console.log(`you are eligible to attend this test`);    
// // }
// // else{
// //     console.log(`Sorry you are not eligible`);
// // }


// //logical operator
// // AND(&&) OR(||) NOT(!)

// const hasDrivingLicense = true;
// const hasGoodVision = false;

// //AND OPERATOR

// if (hasDrivingLicense && hasGoodVision) {
//     console.log('You can drive');
// }
// else{
//     console.log('Sorry, you cannot drive');
// }

// // OR OPERATOR

// if (hasDrivingLicense || hasGoodVision) {
//     console.log('You can drive');
// }
// else{
//     console.log('Sorry, you cannot drive');
// }

// //NOT OPERATOR

// if (!hasDrivingLicense && !hasGoodVision) {
//     console.log('You can drive');
// }
// else{
//     console.log('Sorry, you cannot drive');

const scoreDheena = (120+100+110+110+90)/5;
const scoreVeena =(99+100+103+110+118)/5
console.log(scoreDheena, scoreVeena);

if(scoreDheena > scoreVeena && scoreDheena >=100){
console.log(`Dheena win the trophy 🏆`);
}
else if(scoreVeena > scoreDheena && scoreVeena >=100){
    console.log(`Veena win the trophy 🏆`);

}
else if(scoreDheena===scoreVeena && scoreDheena >=100 && scoreVeena >=100){
console.log(`both are win the trophy 🏆`);
}

else{
    console.log(`no one win the trophy`);
}
