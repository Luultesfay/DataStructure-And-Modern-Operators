//'use strict';
//new way of looping over arrays,in ES6  "for-Of loop"
//note: we dont need counters if else statements ES6 makes it so easy

//lets loop  on our retaurant object menu

const allMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// now use for of loop to loop over the menu array

//we can write the word "item" what ever word we  need , in this case we say it item
for (const item of allMenu) console.log(item); // this will print all the menu

//But now what if we also wanted the current index and not just the current element?

for (const item of allMenu.entries()) {
  // we use  object.entres() method to get both index and element together
  console.log(item);

  /* outputs 
  [ 0, "Focaccia" ]
  [ 1, "Bruschetta" ]
  [ 2, "Garlic Bread" ]
  [ 3, "Caprese Salad" ]
  [ 4, "Pizza" ]
  [ 5, "Pasta" ]
  [ 6, "Risotto" ]   */

  //lets print nice menu
  //console.log(`${item[0] + 1}:${item[1]}`); //out puts 1:Focaccia .....7:Risotto
}

//esiest way of the above  example use destructuring

//for (const[i,el] of allMenu.entries()){//i for index el for element  we r destructuring
// console.log(`${i + 1}:${el}`); //out puts 1:Focaccia .....7:Risotto

//}

//////////Enhanced Object Literals

/*
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
    // openingHours: {  lets pritend this is omited from this code 
    //   thu: {
    //     open: 12,
    //     close: 22,
    //   },
    //   fri: {
    //     open: 11,
    //     close: 23,
    //   },
    //   sat: {
    //     open: 0, // Open 24 hours
    //     close: 24,
    //   },
    // },
     //before ES6
    openingHours:openingHours  //we encluded the omited openingHours using the code 
    
    // after es6
    openingHours,  //now its the same with the above line code but its easet so we enclude the ommited opennighors in our restaurant object
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
  */

/*And so let's take a closer look at or restaurant object here.
So this restaurant object is an object literal, so you can see that because we basically wrote
this object literally in our code using this curly braces syntax.
So well you get the point, so all of this object here has been written using the object literal syntax.
Now ES6 introduced three ways, which make it easier to write object literals like this.
And so let's go through them one by one now,*/

//1.first off let's say that we have an object that is outside of this restaurant object. So let's take this one and create a separate object with it.  lets take the openingHours from the restaurant object
/*
const openingHours = {
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
};
*/
//but now, we still want to have the opening hours object inside of the restaurant. so before ES6  we would have write it  openingHours:openingHours to include it in the restaurant object after we omit it
//Now the problem here is and it's not really a problem but it can become annoying is that this property name is exactly the same as the variable name  "openingHours:openingHours"  to make this easy es6 comes to our rescue,
//with ES6 enhansed object literial  we only  write     openingHours,    see it in the restaurant object

//// 2nd enhancement to object literials is about writing methods
/*So in ES6 we no longer have to create a property,
and then set it to a function expression,
like we have always been doing, right?*/

// eg   we create a proberty  and set to function in this example

// orderPizza: function (mainIngradient, ...otherIngradent) {
//     // ...otherIngradent  this is rest syntax
//     console.log(mainIngradient);
//     console.log(otherIngradent);
//   },

// but the new enhancement  that is  introduced after ES6 but  you can do it like it before its personal prference i show you this is the new way

// orderPizza(mainIngradient, ...otherIngradent) {  we get read of the function and the semi colen
//     // ...otherIngradent  this is rest syntax
//     console.log(mainIngradient);
//     console.log(otherIngradent);
//   },

///3rd  enhancement to object literials
/*
And finally, the third enhancement is that we can now actually compute property names instead
of having to write them out manually and literally. And compute just means like calculate
and so let's try that here.
*/
//eg lets creat an array of weekdays

const dayss = ['mon', 'tues', 'wed'];
const openingH = {
  //mon: {
  [dayss[0]]: {
    // so here in this program we can conpute the property  so this is the third enhancement
    open: 12,
    close: 22,
  },
  //tue: {
  [dayss[1]]: {
    open: 11,
    close: 23,
  },
  [`dayss-${1 + 2}`]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
console.log(openingH); //Object { mon: {…}, tues: {…}, "dayss-3": {…}

//optional chaining. (?.)
//an even newer feature of objects and also of arrayswhich is called optional chaining.
/*
ES2020 introduced optional chaining. And with optional chaining,
if a certain property does not exist, then 'undefined' is returned immediately.
And so that will then avoid  error .
*/

//eg let see the below code

if (restaurant.openingHours && restaurant.openingHours.mon)
  //if a certain property does not exist, then undefined is returned immediately.  restaurant.openingHours.mon  not exist

  // we know that mon is not exist in openingHours property
  console.log(restaurant.openingHours.mon.open); // it doesnt give out put

///So let's recreate it now with optional chaining.
//WITH optional chaining.

//So only if Monday exists, then this open property will be read from there. All right? But if not, then immediately undefined will be returned.

console.log(restaurant.openingHours.mon?.open); //get undefined  this avoid the error that can arises  by gives us the undefined
console.log(restaurant.openingHours?.mon?.open); //  outputs  undefined  ...if restaurant.openingHours does not even exist, well, then the Monday property will not even be read and so therefore we don't get that error.
///with out the optinal chaining
//console.log(restaurant.openingHours.mon.open); //cannot read  property 'open" of undefied

//lets check if methods is exist
//real world example

//when the method is exist we get return the result
console.log(restaurant.order?.(0, 1) ?? 'method does not exist'); //out puts   [ "Focaccia", "Pasta" ]  becouse the method is exist

//lets try when a method is not exits

console.log(
  restaurant.orderPanino?.(0, 1) ??
    'the method is not exist in our restaurant object'
); //outputs 'the method is not exist in our restaurant object'
// becouse  order panino is not exist  then ?. optional chaning make it "undefined"  then   "undefined" ??(nullish works with undefined and null) 'the method is not exist in our restaurant object'='the method is not exist in our restaurant object'

/// lets see  optional chainning with arrays

const users = [{ name: 'luul', city: 'asmara', age: 78 }];
console.log(users[0]?.name ?? 'no such name exists'); // output luul         if users at index 0 is exists(?.) then print name if not  print  'no such name exists'

console.log(users[3]?.name ?? 'no such name exists'); // output  'no such name exists'         if users at index 0 is exists(?.) then print name if not  print  'no such name exists'

console.log(users[0]?.city ?? 'no city exists'); // output  'no such name exists'

console.log(users[0]?.age ?? 'no age exists'); //78

///LOOPING OBJECTS:OBJECT KEYS,VALUES, AND ENTRIES

/*So we learned about the "for of loop" to loop over a array, which remember is an Iterable,
but we can also loop over objects,which are not Iterable, but in an indirect way. Now we have different options here,
depending on what exactly we want to loop over. So do we want to loop over the "objects", "property names"
over the "values " or both together.*/

/*And let's start by simply looping over "property names".And so remember they are also called "keys".
Now, ultimately we will still have to use the for of loop to loop over the array, but again,
we're going to do that in an indirect way. So we're not actually looping over the object itself.
Instead, we're going to loop over, an array.*/

///////// looping  on property Names

//lets find what  Object.keys()  do  to the object

const properties = Object.keys(openingHours);
console.log(properties); //[ "thu", "fri", "sat" ]    an array with the three property names.so  the object uses this  indirectly
//So let's say we wanted to print a strings saying how many days the restaurant is open.
console.log(`we are open ${properties.length} days a week`); //we are open 3 days a week

//eg  lets loop around  openingHours property

/*
for (const day of Object.keys(openingHours)) {
  console.log(day); // so we get  thu fri sat    we loop over the property of the object indirect way  through the array
}
*/
// so we can change the above code to the simplest way like we can replace Object.keys(openingHours) by properties

/*
for (const day of properties) {
  console.log(day); // so we get  thu fri sat    we loop over the property of the object indirect way  through the array
}
*/
// and also we can read the three days indivialy by adding this code lets upgrade it   but first lets cooment out the above code
let openingStr = `we are open ${properties.length} days a week: `;
for (const day of properties) {
  openingStr += `${day},`;
}
console.log(openingStr); //we are open 3 days a week: thu,fri,sat,

//// looping on property values

const values = Object.values(openingHours); //looping over the  property value
console.log(values);
//outputs  the
/* 0: Object { open: 12, close: 22 }
​
   1: Object { open: 11, close: 23 }
​
    2: Object { open: 0, close: 24 }*/

for (const value of values) {
  console.log(value); //looping over the property value
}
//outputs
/*Object { open: 12, close: 22 }
  Object { open: 11, close: 23 }
  Object { open: 0, close: 24 }
  */

///// looping in the entire object that  means both the property name(key) and property value

//but we will need Object.entries()

const entries = Object.entries(openingHours);
console.log(entries); //Array(3) [ (2) […], (2) […], (2) […] ]  this will out put both key and value

//so lets loop over it  using for of loop
/*
for (const x of entries) {
  console.log(x);//outputs the same as the obove but here we are looping over the key and value
     //[ "thu", {…} ]
     //[ "fri", {…} ]
     //[ "sat", {…} ]
    
}
*/
//so lets make a good statement by destructuring the above code but first we will comment out

for (const [key, { open, close }] of entries) {
  //for(const [key ,value] of entries)  but we know value is  an object so we can destrucure it to  {open,close}
  console.log(`on ${key} we open at ${open} and close at ${close}`);

  // in this eg we destructured  x to [key,value] and then to [key,{open ,close}]
  /* outputs
    on thu we open at 12 and close at 22 
    on fri we open at 11 and close at 23 
    on sat we open at 0 and close at 24*/
}
