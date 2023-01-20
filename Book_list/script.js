//get the UI Element
let form = document.querySelector("#book_form")
let title = document.querySelector("#title");
let author = document.querySelector("#author");
let isbn = document.querySelector("#isbn");
let book_list = document.querySelector("#book_list")
// let =document.querySelector("#")



// console.log(form)




//book class

class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}
//UI CLASS 
class UI {

    static addToBooklist(book) {
        let row = document.createElement("tr");
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn} </td>
        <td><a  class="delete"><i href="#" class="fa-solid fa-xmark"></i></a></td>`;
        book_list.appendChild(row);
        // console.log(row)

    }
    static clearFields() {  //Input জায়গা ক্লিয়ার এর জন্য
        document.querySelector("#title").value = "";
        document.querySelector("#author").value = "";
        document.querySelector("#isbn").value = "";

    }
    static showAlert(message, ClassName) {
        let div = document.createElement("div");
        div.className = `alert ${ClassName}`;
        div.appendChild(document.createTextNode(message));
        let container = document.querySelector(".container");
        container.insertBefore(div, form);
        setTimeout(() => {
            document.querySelector(".alert").remove();
        }, 2000)
    }
    static deleleFromBooK(target) {
        if (target.hasAttribute("href")) {

            target.parentElement.parentElement.parentElement.remove()
            // store.removeBookmark
           
            store.removeBook(target.parentElement.parentElement.previousElementSibling.textContent.trim());
                UI.showAlert("Book Removed!", "success");

        }

    }
}
// localStorage class
class store {
    static getBooks() {
        let books;
        if (localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }
    static addBook(book) {
        let books = store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }
    static displayBools() {
        let books = store.getBooks();

        books.forEach(book => {
            UI.addToBooklist(book)

        });
    }
    static removeBook(isbn) {
        let books = store.getBooks();
        books.forEach((book, index) => {
            if (book.isbn === isbn) {
                books.splice(index, 1);

            }
        });
        localStorage.setItem('books', JSON.stringify(books));
    }

}




//add event listener
form.addEventListener("submit", newBook)
book_list.addEventListener("click", removeBook);
document.addEventListener("DOMContentLoaded", store.displayBools())





//Define function

function newBook(e) {
    // console.log(e);
    let title = document.querySelector("#title").value,
        author = document.querySelector("#author").value,
        isbn = document.querySelector("#isbn").value;


    if (title === "" || author === "" || isbn === "") {
        UI.showAlert("please fill all the fields!", "error");
    } else {
        let book = new Book(title, author, isbn);
        UI.addToBooklist(book);
        UI.clearFields();//Input জায়গা ক্লিয়ার এর জন্য
        UI.showAlert("Book Added", "success");
        store.addBook(book);
    }
    e.preventDefault() //Browser যে না রিলড হয় সে জন্য


}



function removeBook(e) {

    UI.deleleFromBooK(e.target)
    e.preventDefault();
}









