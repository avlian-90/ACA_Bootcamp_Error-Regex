> ## ***Error, Regex***

**During this homework:**

**I have read the given materials, which are the following:**

- [*JavaScript Errors*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)
- [*7 Types of Errors in JavaScript](https://blog.bitsrc.io/types-of-native-errors-in-javascript-you-must-know-b8238d40e492)
- [*Error Handling](https://javascript.info/try-catch)
- [*JavaScript Error Handling*](https://www.tutorialrepublic.com/javascript-tutorial/javascript-error-handling.php)
- [*try/catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)
- [*throw*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)


**And done the given tasks, which are the following:**

1. [Complete the reverseString function, it has one parameter s. You must perform the following actions:<br>
. Try to reverse string s using the split, reverse, and join methods.<br>
. If an exception is thrown, catch it and print the contents of the exception's message on a new line.<br>
. Print s on new line. If no exception was thrown, then this should be the reversed string, if an
exception was thrown, this should be the original string.](./reverseString.js)<br>
2. [Complete the isPositive function below. It has one integer parameter a . If the value of a is positive, it must
return the string YES. Otherwise, it must throw an Error according to the following rules:<br>
. If a is 0, throw an Error with message = Zero Error.<br>
. If a is negative, throw an Error with message = Negative Error.](./isPositive.js)<br>
3. [Convert the code using try...catch.](./convert.js)<br>
4. [A teacher has created a gradeLabs function that verifies if student programming labs work. This function
loops over an array of JavaScript objects that should contain a student property and runLab property.
The runLab property is expected to be a function containing the student's code. The runLab function is
called and the result is compared to the expected result. If the result and expected results don't match,
then the lab is considered a failure.<br>
gradeLabs<br>
The gradeLabs function works for the majority of cases. However, what happens if a student named their
function incorrectly?<br>
Add a try/catch block inside of gradeLabs to catch an exception if the runLab property is not defined.
If the exception is thrown, the result should be set to the text "Error thrown".](./gradeLabs.js)<br>
