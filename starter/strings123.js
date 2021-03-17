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
