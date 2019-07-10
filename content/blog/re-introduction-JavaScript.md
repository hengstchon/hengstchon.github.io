---
title: A re-introduction to JavaScript
date: 2019-07-05
---

## Overview

Types: Number, String, Boolean, Function, Object, Symbol.  
More accurate: Number, String, Boolean, Symbol, Object (Function, Array, Date, RegExp), null, undefined.

## Numbers

```js
parseInt("010", 10); // 10
parseInt("11", 2); // 3
parseInt("010"); // 8
parseInt("0x10"); // 16
+"010"; // 10
+"0x10"; // 16
parseInt("hello", 10); // NaN
NaN + 5; // NaN
isNaN(NaN); // true
1 / 0; // Infinity
-1 / 0; // -Infinity
isFinite(1 / 0); // false
isFinite(-Infinity); // false
isFinite(NaN); // false
```

## Strings

```js
"hello".length; // 5
"hello".charAt(0); // "h"
"hello, world".replace("world", "mars"); // "hello, mars"
"hello".toUpperCase(); // "HELLO"
```

## Other types

- `null` : a value
- `undefined`: an uninitialized value
- falsy: `false`, `0`, `""`, `NaN`, `null`, and `undefined`.
- truthy: all other values.

## Variables

- `let`: block-level variables.
- `const`: block-level variables whose values never change.
- `var`: don't have restrictions.

## Operators

- Numeric operators: `+`, `-`, `*`, `/`, `%`.

```js
x += 5; // x = x + 5;
"hello" + " world"; // "hello world"
"3" + 4 + 5; // "345"
3 + 4 + "5"; // "75"
"" + 4 + 5; // "45"
3 + 4 + ""; // "7"
```

- Comparisons: `<`, `>`, `<=` , `>=`, `!=` and `!==` work for both strings and numbers.

```js
123 == "123"; // true
1 == true; // true
123 === "123"; // false
1 === true; // false
```

## Control structures

- `If` `else`:

```js
var name = "kittens";
if (name == "puppies") {
  name += " woof";
} else if (name == "kittens") {
  name += " meow";
} else {
  name += "!";
}
name == "kittens meow";
```

- `while` loop, `do-while` loop:

```js
while (true) {
  // an infinite loop!
}

var input;
do {
  input = get_input();
} while (inputIsNotValid(input)); // body of loop is executed at least onece
```

- `for` loop:

```js
for (var i = 0; i < 5; i++) {
  // Will execute 5 times
}
```

- `for`…`of`:

```js
for (let value of array) {
  // do something with value
}
```

- `for`…`in`:

```js
for (let property in object) {
  // do something with object property
}
```

- `&&` and `||` operators use short-circuit logic:

```js
var person = {
  name: "Jack"
};
console.log(person.job || "unemployed"); // 'unemployed'

var person = {
  name: "Jack",
  job: "teacher"
};
console.log(person.job || "unemployed"); // teacher

online && getData();
// equals:
// if (online){
//   getData();
// }
```

- ternary operator for conditional expressions:

```js
var allowed = age > 18 ? "yes" : "no";
```

- `switch` statement : (`default` is optional)

```js
switch (action) {
  case "draw":
    drawIt();
    break;
  case "eat":
    eatIt();
    break;
  default:
    doNothing();
}
```

## Objects

JavaScript objects can be thought of as collecitons of name-value pairs. "name" is a string, "value" can be any JavaScript value, including objects.

create an empty object:

```js
var obj = new Object();
var obj = {}; // preferred

var phoneType = "mobile";
var obj = { [phoneType]: 12345 };
```

## Arrays

Arrrays are a special type of object, but they have one magic property called `length`, the length of the array is one more than the highest index.

```js
var a = ["dog", "cat", "hen"];
a[0]; // 'dog'
a.length; // 3
a[100] = "fox";
a.length; // 101
a[90]; // undefined

for (var i = 0; i < a.length; i++) {
  // Do something with a[i]
}

for (const currentValue of a) {
  // Do something with currentValue
}

a.forEach(function(currentValue, index, array) {
  // Do something with currentValue or array[index]
});

a.push("cow");
```

## Functions

```js
function add(x, y) {
  var total = x + y;
  return total;
}
```

Rest parameter operator:

```js
function avg(...args) {
  var sum = 0;
  for (let value of args) {
    sum += value;
  }
  return sum / args.length;
}

avg(2, 3, 4, 5); // 3.5
```
