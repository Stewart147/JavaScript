const library = [
    "Lord of the Rings",
    "Catcher of the Rye",
    "Wuthering Heights",
    "The Devine Comedy",
    "To Kill a Mocking Bird",
]

// library[0];
// library[1];
// library[2];
// library[3];
// library[4];

//document.getElementById("book-list").innerHTML = library;  // outputs contents of array

// As can be seen from above display, array output is displayed all on one line, thus we need line breaks <br>
// We cannot use <br> with array thus we add 2 strings together and store as a string value, this is called concatenation.

let text = "";

text = text + library[0] + "<br>";
text = text + library[1] + "<br>";
text = text + library[2] + "<br>";
text = text + library[3] + "<br>";
text = text + library[4] + "<br>";

document.getElementById("book-list").innerHTML = text;



