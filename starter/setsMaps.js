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
  Pasta setsMaps.
  Pizza setsMaps.
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
