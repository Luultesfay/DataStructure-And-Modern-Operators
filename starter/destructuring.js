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
  //orderDelivery: function (obj) {// we replaced the object becouse we need destructuring the variable while in the parentesis
  orderDelivery: function ({
    starterIndex = 1, //the value after the equal sign is the default value
    mainIndex = 1,
    address = 'Via Angelo Tavanti 23',
    time = '22:00 pm',
  }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} ,at ${time}. `
    ); // outputs   Order recieved! Garlic Bread and Risotto will be delivered Via Angelo Tavanti 23 at 20:00 pm.
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
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `here is your delicious pasta making using ${ing1}, ${ing2}, ${ing3},`
    );
  },
  orderPizza: function (mainIngradient, ...otherIngradent) {
    // ...otherIngradent  this is rest syntax
    console.log(mainIngradient);
    console.log(otherIngradent);
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

//const [p, q, r] = [8, 9]; //we are diestructuring the element of the array and assined to variables of p,q,r  but we short one element unassgined which is r assgined to undefined
//console.log(p, q, r); //8 9 undefined

//so to prevent the variable from becouming undefined  we need to assing a default number to the variable like the eg below

const [p = 1, q = 1, r = 1] = [8, 9]; //we assign default number  one to all variables of the array then the variable that short before take the defaul number 1
console.log(p, q, r); //8 9 1

////////////////////////////////////

//object destructuring

// in object destructuring position of the property of the object dosn't matter
//the order of elements does not matter, we don't need to manually skip elements like we did in an array.
const { name, openingHours, categories } = restaurant; // destrucuring object.. in this case we use curly braces becouse it is objects
//we assigned the property to the values
console.log(name, openingHours, categories); // out puts Classico Italiano   Object { thu: {…}, fri: {…}, sat: {…} } Array(4) [ "Italian", "Pizzeria", "Vegetarian", "Organic" ]

//what about if we need to assign new variable to the values instead of  the  property of the  object already exists lets see the below eg

/*we use the curly braces to destructure. So to destructure objects we use the curly braces.
Because this is also how we create objects, right? Then all we have to do is to provide the variable names
that exactly match the property names that we want to retrieve from the object.
*/

//But now what if we wanted the variable names to be different from the property names?

const {
  //we still need to reference the property names otherwise JavaScript has no way of knowing what we actually want.
  // so we assigned new property name to the existing object proberty name(oldpropert):newName(new property or new variable)
  name: newName,
  openingHours: newOpeningHours,
  categories: newCategories,
} = restaurant;
console.log(newName, newOpeningHours, newCategories); //it gives as the same result with the obove code

////////// default values
// what if we are traying read or accesing the property that is not exist in our object data,  usually we get  "undefined"
//For example if we were trying to say restaurant.menu, this would be undefined  because there is no property called menu. We have starterMenu and mainMenu, but not  menu.
// so to fix it we can set default values   see eg below

/*-So let's say that we are trying to destructuring the menu. And so we use equal to set a default value, all right?
And then we can do the same with the starter menu,
-So let's say that we're trying to retrieve the starterMenu.
So this one, but we then want to give it another name.
So starterMenu, and we want to call it just starters.
And we also want to give it a default value
in case it doesn't exist.in this case, it actually does exist.
So starterMenu does exist.
And so therefore this default value will not apply to starterMenu,but it should apply to menu.
*/

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters); //Array []  Array(4) [ "Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad" ]

//what if we didnt apply default value for the menu property lets see what would be the result

/*const { menu, starterMenu: starters } = restaurant;
console.log(menu, starters); //outputs undefined Array(4) [ "Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad" ] */

/* NOTE:keep in mind that this is specially helpful when we do not have or data hard-coded like we have it here.
So this is just hard-coded data in our application.But in the real world,
we usually get the data from somewhere else.And then we might not always know
how exactly the data looks like. And so then it's useful to set defaults like this.*/

////////// Mutating variables
//Next up, we need to talk about mutating variables while destructuring objects.
//So we did that before with arrays when we were switching variables, remember that?But with objects, it works a little bit differently.

// in this program we
let a = 111; //So let's say that we already have some variables here.So a and b.
let b = 999;
const obj = { a: 23, b: 7, c: 14 }; //And then we have this object,
//{a,b}=obj;
/*And now we want to destructure this object. And actually let's first store it into a variable
that makes it a bit easier to work with it. And so, now actually let us destructure this array.
Now we cannot say const like a, b, because a and b are already declared up here, right?
We can also not do let, because again, that would create new variables and we already have them there, okay?*/

//{a,b}=obj; we get a syntax error.And the reason for that
//is that when we start a line with a curly brace like this,
//then JavaScript expects a code block

({ a, b } = obj); //the solution is to wrap all of this into a parenthesis.
console.log(a, b); // out puts  23  7    we over ride the intial 111 and 999
/*So basically we did override these two initial variables,but in order to do it,
we had to wrap this destructuring assignment into parenthesis.*/

////////Nested objects
/*
And so now we need to talk about nested objects, just like we did with nested arrays.
So let's say we wanted to create two variables, open and close.
And these should contain the open and close hours for Friday.
*/
// friday is inside -openingHours  object - inside restaurant object   ... so nested objects
//So that's the object that we're gonna destructure.
// So again, we're gonna start with opening hours, and now we want to retrieve or destruct  friday.

/*const { fri } = openingHours;
console.log(fri);//Object { open: 11, close: 23 }*/
/*

const {
  fri: { open, close },
} = openingHours; //further destruction
console.log(open, close);// 11 23
*/
const {
  fri: { open: O, close: C },
} = openingHours; //further destruction
console.log(O, C); // 11 23

// lets do a practice that  we  create  a function called orderDelivery in the restaurant object
// and then passes any number of arguments to the  obj parameter  when we call it using     "restaurant.orderDelivery"
// or lets destracture the object that passes to the  function  like  this   function({starterIndex,mainIndex,adress,time})

restaurant.orderDelivery({
  address: 'Via Angelo Tavanti 23',
  time: '20:00 pm',
  mainIndex: 2,
  starterIndex: 2,
});
//lets  also assign default value to the passed object parameter to the function
//maybe if the orderd item is no there the default value is printed instead of undefined value
//eg "function ({ starterIndex=1, mainIndex=1, address='Via Angelo Tavanti 23', time='22:00 pm'})"

//lets add another eg regarding default value
restaurant.orderDelivery({
  address: 'Via Angelo Tavanti 23',
  //we didnt include time here but  we already assigned default value in the passed object   time="22:00pm "
  // so we get output  "Order recieved! Garlic Bread and Risotto will be delivered to Via Angelo Tavanti 23 ,at 22:00 pm.""
  //the time it used to be undefined since we dont have time here to pass but becouse of the default value we get default time to 22:00pm
  //now this prevent from getting undefined data
  mainIndex: 2,
  starterIndex: 2,
});

// for practice purpose we will create   an object and we will create function with in that object

// this will give us an output of city  with highest and lowest weather

const weather = {
  city: ['Asmara', 'Dc', 'nairobi'],
  highW: [40, 34, 67],
  lowW: [12, 3, 4],

  getWeather: function ({ cityIndex = 0, highWindex = 0, lowWindex = 0 }) {
    console.log(
      `${this.city[cityIndex]} highest weather today is ${this.highW[highWindex]} degree celc and lowest is ${this.lowW[lowWindex]} degree celc`
    );
  },
};

weather.getWeather({ cityIndex: 2, highWindex: 1, lowWindex: 0 }); //nairobi highest weather today is 34 degree celc and lowest is 12 degree celc
weather.getWeather({ cityIndex: 0, highWindex: 0 }); //Asmara highest weather today is 40 degree celc and lowest is 12 degree celc   we dont have lowest weather but we take  the default  then 12

//note : the name in the function should be the same as the name passing object eg
//  this is in calling and passing argments ({ cityIndex: 2, highWindex: 1, lowWindex: 0 })== this is in function({ cityIndex ,highWindex ,lowWindex }); i mean only the arguemnt
