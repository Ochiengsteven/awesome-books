// empty array to store the books
let books = [];
let nextId = 1;

//  function to add a new book to the collection, with title and author
function addBook(title, author) {
  const book = {
    id: nextId,
    title,
    author,
  };
  books.push(book);
  nextId += 1;
}

// function to display the books in the collection
function displayBooks() {
  const tableBody = document.querySelector('#book-table tbody');
  tableBody.innerHTML = '';
  books.forEach((book) => {
    const row = tableBody.insertRow();
    const titleCell = row.insertCell();
    const authorCell = row.insertCell();
    const removeCell = row.insertCell();
    titleCell.innerText = book.title;
    authorCell.innerText = book.author;
    removeCell.innerHTML = `<button onclick="removeBook(${book.id})">Remove</button>`;
  });
}

// function to remove a book from the collection
function removeBook(id) {
  books = books.filter((book) => book.id !== id);
  displayBooks();
}

// example usage
removeBook(1);

// Add an event listener to the form submit button to call the addBook()
const form = document.querySelector('#add-book-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const titleInput = document.querySelector('#title-input');
  const authorInput = document.querySelector('#author-input');
  addBook(titleInput.value, authorInput.value);
  displayBooks();
  titleInput.value = '';
  authorInput.value = '';
});

// Call the displayBooks() function on page load to show any books that were added.
window.addEventListener('load', () => {
  if (localStorage.getItem('books')) {
    books = JSON.parse(localStorage.getItem('books'));
    nextId = books.length + 1;
    displayBooks();
  }
});

// Save the books to local storage when the page is unloaded.
window.addEventListener('unload', () => {
  localStorage.setItem('books', JSON.stringify(books));
});
