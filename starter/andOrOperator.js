'use strict';
//AND (&&)operator and the OR (||)operator,
/*the AND operator and the OR operator, and how we can use them
for something called short circuiting. So up until this point,
we have used logical operators only to combine Boolean values.
But the truth is that we can do a lot morewith the AND and OR operators.*/

//eg lets use non boolean values with the || operator

/*short circuiting, in the case of the OR operator,
short circuiting means that if the first value is a truthy value,
it will immediately return that first value. So that's exactly what we see here
with the three which is a truthy value. So again, if the first operand is truthy here
in the OR operator,then the other operand will not even be evaluated.
So JavaScript will not even take a look at it.*/
console.log(3 || 'luul'); //out puts 3 b/c three is truley value then it dosent check the second value
console.log('' || 'luul'); // luul
console.log(true || 0); //true
console.log(undefined || null); //null
//So I can give you basically the general rule of how this operator works, no matter with how many values.

console.log(undefined || 0 || 'hello' || 23 || null); //hello

//note:there are three properties  about logical operators.
/*-So first, they can use any data type. 
-They can return any data type
-and they do something called short circuiting,*/

/*And now let's see a more practical application of this. So let's say that there might be a property
on the restaurant object with the number of guests. So something like this:
Restaurant dot num guests, but again, we don't know if it exists.
However, we want to basically define a variable based on this number of guests.
And we want to set a default value if this doesn't exist.*/

//restaurant.numGests = 23;// if we put this here then the out put is 23 not 10
const guest1 = restaurant.numGests ? restaurant.numGests : 10; // here we defaultely assigned restaurant.numGests : 10 incase we dont have numGests property in our restaurant object
console.log(guest1); // it out puts the default nuber of gests 10    becouse we dont have a property numGests in restaurant object

//this is a way easier method of setting default values than having to deal with this turnery operator or even worse an if else statement
const guests2 = restaurant.numGests || 10; // we use here  || short cercuting
console.log(guests2); // outputs 10   becouse  restaurant.numGests is  udefined falsey value  and then js checks or evalute  10  and its truley value

//&& AND
console.log('---AND---');
// &&  this short cercuit works opposit way of OR || operator
//if the first value is falsey value it imedately return that value , then exit that operation without evalute the second value

console.log(0 && 'jonas'); //0  is falsey value and exits
console.log(7 && 'jonas'); // it outputs 'jonas'   becouse  when it is truthy, it means that the evaluation continues and then simply the last value is returned.
//in the above code both 7 and jonas is truthy value so 7 is evalute then ture then jonas evaluate true then jonas is the last turthy value to return

// eg
console.log('hello' && 23 && null && 'jonas'); //null becouse its falsey , if it was all the values true it would return the last truthy value

//practical eg
if (restaurant.orderPizza) {
  //if true  pass the argument to  that function  in the restaurant object
  restaurant.orderPizza('mashrooms', 'spinach'); //mashrooms ['spinach']      we get this out put becouse we use rest parameter in the restaurant object    orderPizza: function (mainIngradient, ...otherIngradent)
}

//we can make it very easy using AND(&&)short cercit  for the obove example

// in this example if the first value is true(means if  orderPizza function exists in the restaurant object then its truthy value then it evaluates the second oprand after that AND(&&) cercuit then if that true it returns that operand  in this case its true)
restaurant.orderPizza && restaurant.orderPizza('mashroom', 'spinach'); //mashrooms ['spinach']

////////// the nullish coalescing operator (??)
//eg lets bring the last example we saw in or || operator . when we have 0 gest
restaurant.numGests = 0;
const gests3 = restaurant.numGests || 10;
console.log(gests3); // it out puts 10  becouse 0 is falsey value and the operator checks the secound value 10 then turthy it returns that ten

// but the obove code returned us the number 10 that we didnt want becouse we have 0 guests in our restaurant so nuulish operator (??) came to our rescue
//nullish: null and undefined (not 0 or '')
const guestCorrect = restaurant.numGests ?? 10; // we use nullish ??
console.log(guestCorrect); //this outputs us  0
/*So why does this work? Well, it is because the nullish coalescing operator
works with the idea or with the concept of nullish values instead of falsy values.
And nullish values are null and undefined.
That's it. It does not include a zero or the empty string.*/

//if restaurant.numGests = null ;  the obove code prints 10 not 0;
//if restaurant.numGests = undefined ;  the obove code prints 10 not 0;
