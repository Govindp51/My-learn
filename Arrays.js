// const friends = ["Sanjay","Madhu","Mono","Preetha","Partha","Manikandan"]

// console.log(friends);
// console.log(friends[4]);
// friends[3] = "Harini";
// console.log(friends);

// const arr = new Array("1900",8976,9086,8907,8967)
// console.log(arr);

// //Destructuring Array

// const names = ["Banumathi","Priya","Meena","Madhusree","Bhavadharani"];

// console.log(friends.length);
// console.log(friends.length-1);

// const dec =[ZerothName, FirstName ,SecondName ,Thirdname, FourthName,] = names; 

// console.log(`My name is ${FourthName}`);
// console.log(FirstName);
// console.log(dec[4]);
// dec[4] = "Saraswathi"
// console.log(dec);

// const fisrt ="Naveen";
// const arrays = [fisrt,"Kumar",2030-1999,"student","Computer Scince", `this is my friends Names:${names}`]
// console.log(arrays);

// const calAge = function(birthYear){
//     return 2034 - birthYear;
// }

// const ages= [1990,1998,1992,1994,2018,2020];

// const age1 = calAge(ages[0]);
// const age2 = calAge(ages[3]);
// const age3 = calAge(ages[2]);
// const age4 = calAge(ages[ages.length-1]);
// const age5 = calAge(ages);

// console.log(age1,age2,age3,age4);

// const total =[calAge(ages[2]),calAge(ages[3]),calAge(ages[1]),calAge(ages[ages.length-1])]
// console.log(total);

//Arrays Methods

const colleague=["Dharshan","Thiyasree","shashthika","Bhavana","Keerthi","Madona"];
// Adding Element at end of the array
colleague.push("Vandhana");
console.log(colleague)
// Removng Element at end of the array
colleague.pop();
console.log(colleague);
//Adding Element  at beginning of the array
colleague.unshift("Rahul")
console.log(colleague);
//Removing element from begining of the array
colleague.shift()
console.log(colleague);
// find the index of the Name
const hey =colleague.indexOf("Bhavana");
console.log(hey);
// find the last index of the name
console.log(colleague.lastIndexOf("Madona"))
// join  the elements of an array into a string
console.log(colleague.join(" _+_ "));
// reverse  the order of the array
console.log(colleague.reverse());
// sort the array in ascending order
console.log(colleague.sort())
// using includes for  checking the existence of a value in an array
console.log(colleague.includes("Shashi"));//false
console.log(colleague.includes("Bhavana"));//true


