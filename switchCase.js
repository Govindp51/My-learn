const day ='Friday';

switch(day){
case 'Monday':
    console.log('Go to coding meetup');
    console.log('Do your work');
    break;
case 'Tuesday':
    console.log('Go to the Vinyagar temple 🙏');
    break;
case 'Wednesday':
    console.log('You want to learn new course every wednesday ');
    break;
case 'Thursday':
case 'Friday':
    console.log('Go to the saipapa temple 🛕 and Amman temple 🛕');  
    break;
 case 'Saturday':
 case 'Sunday':
    console.log('Take a rest and Enjoy your weekend 🤪');     
  break;
  
  default:
    console.log('Not a valid day! ⛔');
}


//same but using if else satement...

const days = 'Saturday'

if(days === 'Monday')
{
    console.log(`Go to the salem on ${days}`);
}
 else if(days === 'Tuesday')
{
    console.log(`Go to the Tirchy on ${days}`);
}
else if(days === 'Wednesday' || days === 'Thursday')
{
console.log(`Go to the Kallakurichi on ${days}`);
}
else if(days === 'Friday')
{
console.log(`Go to the Eroad on ${days}`);
}
else if(days === 'Saturday' || days === 'Sunday')
{
console.log(`Go to the Ooty on ${days}`);
}
else
{
    console.log("Invalid Day!");
}


//ternary operator

const hot = 30;
const cold =19
 hot>=30 || cold >=22 ? console.log(`I like to drink juice🥤`) : console.log(`I like to drink Water💧`);

 const age =22;
 const cal = age >=20 ? 'You can go anywhere ' : 'You can not go outside'
console.log(cal);

let drink;
if(age > 20){
    drink ='Juice'
}else{
    drink = 'Water'
}
console.log(drink);

const song = 'shreyaGhosal';
console.log(`I like to hear ${song} in ${ song === 'Chimayi' ? 'kannathil Muthamital 🎼' : 'En Aala Pakkapora🎼'}`);



const bill = 450;
const tax = bill <=300 && bill >=50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill} the tax was ${tax} and the total values ${bill + tax}`);


