/* Convert the code using try...catch.

function reverseString(s) {
typeof s !== "string"
? console.log("s.split is not a function")
: (s = s.split("").reverse().join(""));
console.log(s);
} */

function reverseString(s) {
   try {
     s = s.split("").reverse().join("");
     console.log(s);
   } catch(err) {
     console.log(err.message);
   }
}
reverseString(123456);
reverseString("Armenia");
