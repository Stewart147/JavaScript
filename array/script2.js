
// Parking Boom - toll - boolean expression either true or false
var isWord = true; // whether the value is a word
if (isWord) {
    console.log("Boom lifted. Thank you for your payment. Have a safe journey!");
} else {
    console.log("Please pay the parking fee before exiting the car park.");
}



// setup word array of five words

const words = [
    "one",
    "two",
    "three",
    "four",
    "five"
];

// setup numeric array of 5 numbers



let numbers = [ 1, 2, 3, 4, 5];


// output contents of  array

words[0];
words[1];
words[2];
words[3];
words[4];

document.getElementById("list-words").innerHTML = words;  // outputs contents of array
document.getElementById("list-numbers").innerHTML = numbers;  // outputs contents of array


// if true then is a word, boolean expression either true or false
var isWord = false; // whether the value is a word
if (isWord) {
 



/* As can be seen from above display, array output is displayed all on one line, thus we need line breaks <br>
   We cannot use <br> with array thus we add 2 strings together and store as a string value, this is called concatenation. 
*/

let text = "";

text = text + words[0] + "<br>";
text = text + words[1] + "<br>";
text = text + words[2] + "<br>";
text = text + words[3] + "<br>";
text = text + words[4] + "<br>";

document.getElementById("list-newline").innerHTML = text;

} else {
    



// define numb variable and concantenate number with <br> to output array on newlines

let numb = "";

numb = numbers[0] + "<br>";
numb = numbers[1] + "<br>";
numb = numbers[2] + "<br>";
numb = numbers[3] + "<br>";
numb = numbers[4] + "<br>";



// use a for loop to iterate through numbers array

for (let i = 0; i < numbers.length; i++) {
    numb = numb + numbers[i] + "<br>";
}



document.getElementById("list-loop").innerHTML = numb;  // outputs contents of number array

}

// using a switch statement

let favouriteColour = "blue";

switch (favouriteColour) {
    case "yellow":
        alert("Your favourite colour is Yellow");
        break;

    case "red":
        alert("Your favourite colour is Red");
        break;

    case "blue":
        alert("Your favourite colour is Blue");
        break;

     default:
        alert("no known colour specified");
        break;
}

