'use strict';
////////////////SETS
/*JavaScript has always had very little built-in data structures.
So basically, we only had objects and arrays. But in ES6, two more data structures
were finally introduced. And that are. sets and maps.*/

/*So these are pretty common data structures 
that already exists in other programming languages,
and now, they also exist in JavaScript.*/

// sets - is  basically just a collection of unique values.So that means that a set can never have any duplicates.
// if they have diplucated elements they simpley ignored
//set can hold mixed data types.

//set
//is still very different from an array.
//So first, because its elements are unique.
//And second, because the order of elements in the set is irrelevant.
//eg lets create  a new set

/*create a new set, we write new set and then here, we need to pass in an iterable.
And the most common iterable here is an array So let's create an array.
*/
const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(orderSet); //Set(3) [ "Pasta", "Pizza", "Risotto" ]   //here the  deplucates are ommited

console.log(orderSet.size); // 3   we get size of 3   in array we use .length to get the size of the array  but in the set we use .size
console.log(orderSet.has('Bread')); //false becouse bread is not  on the set. note in array use "include" but in set we use "has"
console.log(orderSet.has('Pizza')); //true

orderSet.add('Garlic bread'); //adds garlic bread
orderSet.add('Garlic bread'); // simply ommit the second one becouse its deplicate
orderSet.delete('Risotto'); // delete Risotto
//orderSet.clear();//Set []      this clears the set
console.log(orderSet); //Set(3) [ "Pasta", "Pizza", "Garlic bread" ]

//strings are also iterables. So we can do this. So we can pass in a string.
//And so now we get a set with these five elements.
//So, and that's the five components basically of this iterable, which is the string.

console.log(new Set('Jonas')); //Set(5) [ "J", "o", "n", "a", "s" ]

////But now you might ask, how do we actually retrieve values out of a set?
//Can we maybe use an index,?  no it dosent work becouse it will give us  'undefined' because in sets there are actually no indexes.

//answer is
/*And in fact, there is no way of getting values out of a set. And if we think about this,
then it makes sense. So there's really no need for getting data out of a set. That's because if all values are unique,
and if their order does not matter, then there is no point of retrieving values out of a set.
All we need to know is whether a certain value is in the set or not. And that's why we have the has method.
If your goal is to actually store values in order and then retrieve it, then the best use case, is to just use an array.
You wouldn't use a set for that. And so again, there's no need for getting values out of a set,
because if you need it, then you will just use an array.
 */

//Note that: sets are also iterables.And therefore, we can loop over them.  here we can use  for if loop

for (const order of orderSet) {
  console.log(order);
}
/*outputs
  Pasta 
  Pizza 
  Garlic bread*/

//the main use case of sets is actually to remove duplicate values of arrays.

/*Example. So let's say that we have an array in our restaurant,
which contains the staff of our restaurant.*/
const staff = ['Waiter', 'chef', 'Waiter', 'chef', 'Manager', 'Waiter'];
// so we need unique staff positions  like we dont need the positions that is deplucates so in this case lets pass it to the set
/*But the conversion from a set to an array is pretty easy,because they're both iterables.So remember from earlier
that the spread operator workson all iterables.  */
const staffUnque = [...new Set(staff)]; //Array(3) [ "Waiter", "chef", "Manager" ] we use spread operator to convert the Set to array
console.log(staffUnque); //Array(3)  [ "Waiter", "chef", "Manager" ]

//if we only wanted to know how many different positions there are, then the size property

console.log(
  new Set(['Waiter', 'chef', 'Waiter', 'chef', 'Manager', 'Waiter']).size
); // out put 3

//eg  how many latters is is in my name string  it means size  lets create set using my name

console.log(new Set('luultesfay').size); //8    it print  8  while it was 10 becouse  sets only counts uniqe not deplicate

//////////Maps
//So, we learned about sets. Now, it's time to learn about the other new JavaScript data structure and that is maps
// maps are a lot more useful than sets.
/*
a map is a data structure that we can use to map values to keys.
So, just like an object data is stored in key value pairs in maps.
-the difference between Maps and objects is that
-maps the "KEY" of the map can be any type it could be number ,boolean, string  It could even be objects, or arrays, or other maps.etc
-but with objects "key" only be a string  it can not be any type*/

//lets create retaurant map  lets call it 'rest'

const rest = new Map(); //we create map
rest.set('name', 'classico italianno'); // we use "set"  to fill the map  first with 'key' second with 'value'
rest.set(1, 'Rome, italy');
console.log(rest.set(2, 'madrid, Spain')); //Map(3) { name → "classico italianno", 1 → "Rome, italy", 2 → "madrid, Spain" }

//note: calling the set method like this does not only update the map that it's called on, but it also returns the map. like the above line of code  we set  madrid in location 2  but then it reurn us all the element of the map

//eg lets add other staffs like catagories opening hours to the rest
//here we chained  all sets to each other  it works very easly and great
rest
  .set('catagories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'we are open')
  .set(false, 'we are close');
/*Now, in order to read data from a map we use the Get method.
And so, that get method is available on all the maps. */

console.log(rest.get('name')); //classico italianno
console.log(rest.get(true)); //we are open
console.log(rest.get(1)); //Rome, italy

//lets know if the restaurant is open or close  at specific timelets say 11

const time = 11; //they are open
//const time = 9;  we are close

console.log(rest.get(time >= rest.get('open') && time < rest.get('close'))); //we are open
//note: So, don't overuse this kind of pattern, okay? This just really goes to show the power of having Booleans as map keys.

/*let's now keep exploring the methods that are available on maps.
So, we already have methods to set and to get. Now, we can also check if a map contains a certain key.
*/
// lets see "has" metthod to check if the key is availavle in rest map

console.log(rest.has('catagories')); // outputs 'true'     the rest has a key wthich is catagories

//delet key
rest.delete(1); // we delete the number one location from rest
//rest.clear(); // Map(0)  remove all the data on the map
//console.log(rest); // Rome italy is  deleted
//console.log(rest.size); //7    rest.size give us size of the map

///lets see objects and arrays seta as a  Map 'kEY'

//rest.set([1, 2], 'test'); //we are set an array object as a key for a value 'test'
//console.log(rest.get[(1, 2)]);//undefined becouse both 1 and 2 has refers to the same memory in the heap or these two refer to the same place in memory.

// correct the above code lets say asign to variable  const arr=[1,2]
const arr = [1, 2];
rest.set(arr, 'test');
console.log(rest.get(arr)); // outputs 'test'

//lets use the  Dom element as key
/*we will use document.queryselector. And then, we're gonna select
these h1 elements that we have here. So, this is just an h1. So, nothing fancy.*/

rest.set(document.querySelector('h1'), 'Heading'); // the key is 'h1' and value is 'Heading'
console.log(rest);
/*Map(9) { name → "classico italianno", 2 → "madrid, Spain", catagories → (4) […], open → 11, close → 23, true → "we are open", false → "we are close", (2) […] → "test", h1→ "Heading" }
 */

///// we  will see another way  of filling  the empty MAP instead of  using SET to fill it as we see in previous above codes

/* in the last video we created an empty map and then edit elements to it by using the set method.
Remember, however, there is actually another way of populating a new map without having to use the set method.
And I prefer that because the set method is a bit cumbersome when there are a lot of values to set.*/

const question = new Map([
  ['question', 'what is the best programing language in the wold?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'try again'],
]);
console.log(question);

//conver object to Map

//lets take openingHour object from restaurant opject and conver it to map
// an easy way to convert from objects to maps.

const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap); //Map(3) { thu → {…}, fri → {…}, sat → {…} }

/*
-Next up, let's talk about iteration and iteration is possible
on maps because as we already know, maps are also iterables.
And so the for loop is also available for them.*/

//quiz map
// lets loop over the question map  only  with the  number as a 'key'  for this  [1, 'C'],[2, 'Java'],[3, 'JavaScript'],

for (const [key, value] of question) {
  if (typeof key === 'number') console.log(` Answer ${key}:${value}`);
}

//const answer = Number(prompt('input you answer'));//this when user input number
const answer = 3; //this when the input declared .no need to prompt and inter a number  and the answer is the same it doesn't  change
console.log(answer);

console.log(question.get(question.get('correct') === answer)); //  question.get('correct')= 3  then if our answer as input is 3 then     question.get('correct') === answer)=true then question.get(true)=Correct  now the answer is Correct

//note if  we  put differnt number other than 3  then it print out  'trayagain'

/// convert map to array
/*sometimes we also need to convert a map backto an array.
So basically to this structure,So convert map to array basically.
You can do that by simply building new array and then unpacking again,
using the spread operator.*/
console.log([...question]); //maps converted array
/*here is the changed output
Array [ "question", "what is the best programing language in the wold?" ]
 
Array [ 1, "C" ]
 
Array [ 2, "Java" ]
 
Array [ 3, "JavaScript" ]
 
Array [ "correct", 3 ]
 
Array [ true, "Correct" ]
 
Array [ false, "try again" ]*/

console.log([...question.keys()]); //[ "question", 1, 2, 3, "correct", true, false ]  all the keys
console.log([...question.values()]); //[ "what is the best programing language in the wold?", "C", "Java", "JavaScript", 3, "Correct", "try again" ] all the values

/// coding challange 3
/*Let's continue with our football betting app! This time, we have a map called
'gameEvents' (see below) with a log of the events that happened during the
game. The values are the events themselves, and the keys are the minutes in which
each event happened (a football game has 90 minutes plus some extra time*/

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

//1. Create an array 'events' of the different game events that happened (no duplicates)

const events = [...new Set(gameEvents.values())]; //we change it to set then the deplicate is omitted then we need to change again the Set to its Orginal array we simmply put in [... the set ]
console.log(events);
Array(4); //[ "⚽ GOAL", "🔁 Substitution", "🔶 Yellow card", "🔴 Red card" ]  but  if it were 'const events =new Set(gameEvents.values())'  then the output would be set

//2. After the game has finished, is was found that the yellow card from minute 64 unfair. So remove this event from the game events log.

gameEvents.delete(64);
console.log(gameEvents); //now map removes the yellow card and becomes 10 in size

//3. Compute and log the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
console.log(
  `An event happened, on average, every ${92 / gameEvents.size} minutes`
);

//4. Loop over 'gameEvents' and log each element to the console, marking
//whether it's in the first half or second half (after 45 min) of the game, like this:
//[FIRST HALF] 17:⚽ GOAL

for (const [key, value] of gameEvents.entries()) {
  const evNts =
    key < 45
      ? `[FIRST HALF] ${key}: ${value}`
      : `[SECOND HALF] ${key}:${value}`;
  console.log(evNts);
}
