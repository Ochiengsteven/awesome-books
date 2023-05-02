class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class BookManager {
  constructor() {
    this.books = [];
    this.tableBody = document.querySelector('#book-table tbody');
    this.form = document.querySelector('#add-book-form');
    this.form.addEventListener('submit', (event) => {
      event.preventDefault();
      this.addBook();
    });
    window.addEventListener('load', () => {
      if (localStorage.getItem('books')) {
        this.books = JSON.parse(localStorage.getItem('books')).map(
          (book) => new Book(book.title, book.author)
        );
        this.displayBooks();
      }
    });
    window.addEventListener('unload', () => {
      localStorage.setItem('books', JSON.stringify(this.books));
    });
  }

  addBook() {
    const titleInput = document.querySelector('#title-input');
    const authorInput = document.querySelector('#author-input');
    const book = new Book(titleInput.value, authorInput.value);
    this.books.push(book);
    this.displayBooks();
    titleInput.value = '';
    authorInput.value = '';
  }

  removeBook(title) {
    this.books = this.books.filter((book) => book.title !== title);
    this.displayBooks();
  }

  displayBooks() {
    this.tableBody.innerHTML = '';
    this.books.forEach((book) => {
      const row = this.tableBody.insertRow();
      const titleCell = row.insertCell();
      const removeCell = row.insertCell();
      const bookTitle = `${book.title} by ${book.author}`;
      titleCell.innerText = bookTitle;
      removeCell.innerHTML = `<button onclick="bookManager.removeBook('${book.title}')">Remove</button>`;
    });
  }
}

const bookManager = new BookManager();
