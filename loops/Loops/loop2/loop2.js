const library = [
    "Lord of the Rings",
    "Catcher of the Rye",
    "Wuthering Heights",
    "The Devine Comedy",
    "To Kill a Mocking Bird",
]

let text = "";

for (let i = 0; i < library.length; i++) {
    text = text + library [i] + "<br>";
}

document.getElementById("book-list").innerHTML = text;  // outputs contents of array





