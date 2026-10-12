const library = [
    "Lord of the Rings",
    "Catcher of the Rye",
    "Wuthering Heights",
    "The Devine Comedy",
    "To Kill a Mocking Bird"
];

function searchBooks() {
    let searchInput = document.getElementById('searchInput').ariaValueMax.toLowerCase();
    let searchResult = document.getElementById('searchResult');
    searchResult.innerHTML = '';

    let foundBooks = [];

    for (let i = 0; i < library.length; i++) {
        if (library[i].toLowerCase().includes(searchInput)) {
            foundBooks.push(library[i]);
        }
    }

    if (foundBooks.length > 0) {
        for (let i = 0; i < foundBooks.length; i++) {
            let bookInfo = document.createElement('p');
            bookInfo.textContent = foundBooks[i];
            searchResult.appendChild(bookInfo);
        }
    } else {
        let noResultMsg = document.createElement('p');
        noResultMsg.textContent = 'No matching books found.';
        searchResult.appendChild(noResultMsg);
    }
}

document.getElementById('addBookForm').addEventListener('submit', addBook);
displayBooks();






