/* Complete the reverseString function, it has one parameter s. You must perform the following actions:
. Try to reverse string s using the split, reverse, and join methods.
. If an exception is thrown, catch it and print the contents of the exception's message on a new line.
. Print s on new line. If no exception was thrown, then this should be the reversed string, if an
exception was thrown, this should be the original string. 

You must write two print statements using console.log():
. Print the contents of a caught exception's message on a new line. If no exception was thrown, this
line should not be printed.
. Print s on a new line. If no exception was thrown, then this should be the reversed string, if an
exception was thrown, this should be the original string.*/

function reverseString(s) {
    try {
        let str = s.split("").reverse().join("");  
        console.log(str);
    } catch(err) {
        console.log(err.message);
        console.log(s);
    } 
}
reverseString("Yerevan");
// reverseString(123456);



