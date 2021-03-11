'use strict';
/*const restaurant = {
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
  orderPasta:function(ing1,ing2,ing3){
      console.log(`here is your delicious pasta making using ${ing1}, ${ing2}, ${ing3},`)

  }
  orderPizza:(mainIngradient,...otherIngradent){
    console.log(mainIngradient);
    console.log(otherIngradent);

  },
};
*/
/// spread operator
/*ES6 provides a new operator called spread operator that consists of three dots (...). 
The spread operator allows you to spread out elements of an iterable object such as an array,a  map, or a set.  */

//we only uses spread operator in values that seperated by commas
//eg of spread operator  but will see first the old way

/*
const arr = [7, 8, 9];
const badArr = [1, 2, arr[0], arr[1], arr[2]]; //we added the arr array to the badArr using old way
console.log(badArr); // output  [1 2 7 8 9]

//lets now use the spread operator that is the esiest way
// the spread operator do is taking out all element out of the array  and add them manually
const newArr = [1, 2, ...arr]; //we added the arr  array to newArray using spread syntax
console.log(newArr); // outputs  [1 2 7 8 9]
console.log(...newArr); //1 2 7 8 9   outputs indivdual arrays
*/
//lets update the mainMenu  and make a newNenu  array and add  food to the newMenu
const newMenu = [...restaurant.mainMenu, 'Gnocci']; //we use spread operator to add all the mainMenu to the newMenu then added "gnocci"
console.log(newMenu); //[ "Pizza", "Pasta", "Risotto", "Gnocci" ]
console.log(...newMenu); //Pizza Pasta Risotto Gnocci
//copying array using spread
const mainMenuCopy = [...restaurant.mainMenu]; // crates shallow copy   this is smilar to object.assign like in previous lesson but this one is the easiest way
console.log(mainMenuCopy); //[ "Pizza", "Pasta", "Risotto" ]

//join  2 arrays together

const menus = [...restaurant.starterMenu, ...restaurant.mainMenu]; //joining starter menu array with mainmenu array

console.log(menus); //[ "Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad", "Pizza", "Pasta", "Risotto" ]
console.log(...menus); //Focaccia Bruschetta Garlic Bread Caprese Salad Pizza Pasta Risotto

// spread operator is work in all itarable  like string , arrays , maps, but not objects
// lets see  spread operatop eg with strings

const str = 'jonas';
const letters = [...str, '', 'S.'];
console.log(letters); //[ "j", "o", "n", "a", "s", "", "S." ]
console.log(...str); //jonas
//console.log((`${...str} luul`)); // this error  b/c  only maltiple value seprated by commas expected

//real wold example
// now lets create a function accepts maltiple functions and use spread operator to acculley pass those arguments

const ingridents = [
  // we are reciving the engrident input  from customers
  //prompt("let's make pasta! ingrident1?"),
  //prompt('ingrident2'),
  //prompt('ingrident3'),
];

restaurant.orderPasta(...ingridents); // using spread operator  is the best for passing arguments than the long way below
restaurant.orderPasta(ingridents[0], ingridents[1], ingridents[2]); //yeald the same result with the above but its very long arguments

///object spread
//Note that ES2018 expands the spread operator to objects. It is known as the object spread.

//eg. lets create NewRestorant object and  copy the old one and add other property to it

const NewRestaurant = {
  // this create new restaurant and also included the old restaurant property
  founded: 1990,
  owner: 'luul T',
  ...restaurant,
  founder: 'marcello',
};
console.log(NewRestaurant); //outputs all data of the old restaurant and the new property together

// as we see in prvious lecture we can   shallow copy  using object spread  like when we use before Object.assign

const restaurantCopy = { ...restaurant }; // shallow copies old restaurant  // this is better than using object.assign that we see it in previous leacture
restaurantCopy.name = 'restorante Roma'; //we change the name in the copied object
console.log(restaurantCopy.name); //restorante Roma
console.log(restaurant.name); //Classico Italiano

///////////  Rest Pattern and parameters
/*
 Note that ES6 also has the three dots ( ...) which is a rest parameter that collects all remaining arguments of a function into an array. 
 
 -So the three dots ( ...) represent both the spread operator and the rest parameter.

 -Here are the main differences:

-The spread operator unpacks elements.
-The rest parametr packs elements into an array.
-The rest parameters must be the last arguments of a function. However, the spread operator can be anywhere:
// reference from the web https://www.javascripttutorial.net/es6/javascript-spread/
*/

//1.destructuring

//spread becouse on right side of the  equal operator =
//const arryyyss = [1, 2, ...[3, 4]];

//REST , becouse on LEFT side of = equal operator
//const [a, b, ...others] = [1, 2, 3, 4, 5]; //...others is rest operator
//console.log(a, b, others);// outpts 1 2 [3,4,5]

//eg for rest operator

//lets  destructure the first and third from mainManu and use rest   ...otherFood  to the remaining food
//we use here destructuring and rest  and inthe right side spread
const [pizza, , risotto, ...otherFood] = [
  // here pasta is skipped
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood); //Pizza Risotto [ "Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad" ]

// rest in objects
/*
and now let's do the same in objects because it also works indeed in objects.
So the difference then of course, is that the remaining elements will be collected
into a new object and not into a new array.So let's not work here with our opening hours
and let's say that we want to select only Saturday here and then the rest should go into a new object
which are the weekdays.So Saturday is weekend and Friday and Thursday are the weekdays
*/
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays); // { thu: {…}, fri: {…} }  so we get the rest weekdays  and  sat holds saturday which is weekend

// 2. for  functions

const add = function (...numbers) {
  //we use rest parameter which is ...numbers
  console.log(numbers);
};
add(2, 3); //[ 2, 3 ]
add(5, 3, 6, 7); //[ 5, 3, 6, 7 ]
add(3, 5, 9, 8); //[ 3, 5, 9, 8 ]

// lets do practice  with rest again with our restaurant object
//this time  we order pizza  which must have one engradent . becouse we want to show the rest operator how powerful it is
// we adding orderPizza at the restaurant object and we will pass argument from here

//so when we pass this argument to the orderPizza function   the  first parameter  becomes mashroom and the remaining is take care  by the rest operator ...otheringradent  [ "oliveoil", "meat", "checken" ]
restaurant.orderPizza('mashroom', 'oliveoil', 'meat', 'checken'); //mashroom  [ "oliveoil", "meat", "checken" ]
restaurant.orderPizza('mashroom'); //mashrom []
