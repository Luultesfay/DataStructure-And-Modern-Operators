'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]; //returns two elemnts to the caller
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// array destructuring
/*
-destructuring is an ES6 feature and it's basically a way of unpacking values
from an array or an object into separate variables.So in other words destructuring
is to break a complex data structure down into a smaller data structure like a variable.
So for arrays we use destructuring to retrieve elements from the array
and store them into variables in a very easy way.

*/

/*
//eg destructuring array

// now this is longest way
const arr = [1, 2, 3];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c); // 1 2 3

//use destructuring  for the above code which is the easest way and sortest
const [x, y, z] = arr; //  [x, y, z] this looks like an array, but it's really not.  It's just the destructuring assignment.
//So whenever JavaScript sees this here on the left side of the equal sign, it knows that it should do destructuring.
//Now, when you do this just don't forget to actually also declare the variables using const.
console.log(x, y, z); //result 1 2 3

//note The original array is of course not affected.Okay so we are not destroying here the array we are only destructuring so we are unpacking it,

*/
// now lets play with the restaurant data

//So let's take some elements out of the categories.
//So let's say and then the destructuring assignment first and second, alright.
/*
const [first, second] = restaurant.categories;
//this means we assigning the  first variable to  first element of the catagory array  and the 2nd to the second element
console.log(first, second); // outputs Italian Pizzeria
*/
// if we  need the 1st and 3rd elemet to choose sipley we live a hole or skip in between lets see the eg

let [first, , second] = restaurant.categories;
console.log(first, second); // outputs  Italian Vegetarian

//SWICHING VARIABLES
//  if we were to like to switch these two variables,

// doing the long way is with out destructuring
/* const temp=first;
  first=second;
  second=temp; 
console.log( second, first);//  Vegetarian  talian  */

//but using the destructuring we can swhith elements very easly

[first, second] = [second, first];
console.log(first, second); //Vegetarian Italian

// we accept a call from order function and  recive the two orders and destructuring them to variable
const [starter, mainCourse] = restaurant.order(2, 0); //destructuring
console.log(starter, mainCourse); //Garlic Bread   Pizza

// destructring nested arrays that means  array inside array  let see the eg

const nested = [1, 2, [3, 4]]; //array inside array
//const [i, , j] = nested; //we destracturing  the elemennt of an array to the variable i , j  but we skip the number 2 element
//console.log(i, j); //  prints  1 , [ 3, 4 ]

//wt about if we want to destructure all indiviual element of the nested array accept the element 2
const [i, , [j, k]] = nested;
console.log(i, j, k); //out puts 1,3,4

//Default values

//const [p, q, r] = [8, 9]; //we are diestructuring the element of the array and assined to variables of p,q,r  but we short one element unassined which is r assined to undefined
//console.log(p, q, r); //8 9 undefined

//so to prevent the variable from becouming undefined  we need to assing a default number to the variable like the eg below

const [p = 1, q = 1, r = 1] = [8, 9]; //we assign default number  one to all variables of the array then the variable that short before take the defaul number 1
console.log(p, q, r); //8 9 1
