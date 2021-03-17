'use strict';
////we are going to learn  ////strings  part 1

//eg lets create variable and assign a string to it  and play with it

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]); //A
console.log(plane[1]); //3
console.log(plane[2]); //2
console.log(typeof plane[2]); //string
console.log('B7B8'[0]); //B

console.log(airline.length); //16
console.log('B7B8'.length); //4

console.log(airline.indexOf('r')); //6
console.log(airline.lastIndexOf('r')); //10
console.log(airline.indexOf('Portugal')); //8  if we put the the first P to 'p' small later then it returns -1 becouse we dont have small latter p
console.log(airline.indexOf('portugal')); //-1 we dont have small letter p
//if we want to take part of the string  we use slice() method  or in other word substring

console.log(airline.slice(4)); //Air Portugal
console.log(airline.slice(4, 7)); //Air  (7-4)=3

console.log(airline.slice(0, airline.indexOf(' '))); //TAP
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); //Portugal    the +1  is elimnate the space
console.log(airline.slice(-2)); //al    it returns from behind
console.log(airline.slice(1, -1)); //AP Air Portuga

//write a function that receives an airplane seat and logs to the console, wheather it is a middle seat or not.
const checkMiddleSeat = function (seat) {
  if (seat.slice(-1) === 'B' || seat.slice(-1) === 'E')
    console.log('you got the middle seat');
  else console.log('you Got lacky '); //where B AND E is the middle seat in the plane
};
checkMiddleSeat('11B'); //you got the middle seat'
checkMiddleSeat('10C'); //you Got lacky
checkMiddleSeat('11E'); //you got the middle seat'

///// strings  PART 2

//change to captal letter  and to small letter

console.log(airline.toLowerCase()); //tap air portugal
console.log(airline.toUpperCase()); //TAP AIR PORTUGAL
console.log('TAP AIR PORTUGAL'.toLowerCase()); //tap air portugal        we can also change directly like this example

//lets do practical eg  that a passenger give his name in correctly in its case and we need to fix it

const passenger = 'joNAS'; //this is incorrect case to give your name to air line

const passengerLower = passenger.toLowerCase();

const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);

console.log(passengerCorrect); //Jonas

//eg comparing email

const email = 'hello@jonas.io';
const loginEmail = ' Hello@Jonas.Io \n'; // fix this to make exactly like the above email

//const lowerEmail = loginEmail.toLowerCase();
//const trimmedEmail = lowerEmail.trim(); // trim fixes all the white space  like ' ' empty space,  /n
//console.log(trimmedEmail); //hello@jonas.io

//we can also make it dry and simple  to the upper code

const normalizedEmail = loginEmail.toLowerCase().trim(); //hello@jonas.io  gives as exactly the same as the obve code
console.log(normalizedEmail); //hello@jonas.io  gives as exactly the same as the obve code

console.log(email === normalizedEmail); //true

//replacing part of the string

const priceGB = '288,97£'; //this is british pound we need to replace the ',' and '£' to'.' '$' respectively

const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS); //288.97$  it replaced

const announcement =
  'All passengers come to boording door 23 .Bording door 23 !';

// we need to change 'door'  to 'gate'
console.log(announcement.replaceAll('door', 'gate')); //All passengers come to boording gate 23 .Bording gate 23 !
// note: replace()  it changes only the first accurance   like only the first door in the statement but  replaceAll() replaced all the accurances at once

// methods that  returns booleans

const planes = 'Airbus A320neo';

console.log(planes.includes('A320')); //true    becouse A320 is included in the plane string
console.log(planes.includes('Boeing')); //false  becouse it is not in the plane string
console.log(planes.startsWith('Airb')); //true   becouse  it start  with 'Airb'
console.log(planes.startsWith('irb')); // false  becouse it dosent statart with 'irb'

//lets  do some  code   that if a plane is part of the airbus or not

if (planes.startsWith('Airbus') && planes.endsWith('neo')) {
  console.log('the plane is part of the Airbus family'); //the plane is part of the Airbus family
}

//practise excercise

const checkBaggage = function (items) {
  const baggage = items.toLowerCase(); // we first change all the passing argument to lowerCase letter and the we use if else statement
  //we changed the to lower case becouse  we get the input from the passengers and they might give us different case latters so  to much with the if else statement we need to change it
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('you will not Allowed to Board!');
  } else {
    console.log('Wellcome  to Board');
  }
};
checkBaggage('I have KniFe  and  camera in My baggage'); //you will not Allowed to Board!
checkBaggage('I have only  soack and ppants in my pakage'); //Wellcome  to Board
checkBaggage('i have gUn in my baggage'); //you will not Allowed to Board!
