//get the UI Element
let form = document.querySelector("#book_form")
let title = document.querySelector("#title");
let author = document.querySelector("#author");
let isbn = document.querySelector("#isbn");
let book_list = document.querySelector("#book_list")
// let =document.querySelector("#")



console.log(form)




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
    constructor() {

    }
    addToBooklist(book) {
        let row = document.createElement("tr");
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn} </td>
        <td><a href="#" class="delete"> X</a></td>`;
        book_list.appendChild(row);
        // console.log(row)

    }
    clearFields() {  //Input জায়গা ক্লিয়ার এর জন্য
        document.querySelector("#title").value = "";
        document.querySelector("#author").value = "";
        document.querySelector("#isbn").value = "";

    }
}







//add event listener
form.addEventListener("submit", newBook)







//Define function

function newBook(e) {
    // console.log(e);
        let title = document.querySelector("#title").value,
            author = document.querySelector("#author").value,
            isbn = document.querySelector("#isbn").value;
        let book = new Book(title, author, isbn);
        let ui = new UI();
        ui.addToBooklist(book);
        ui.clearFields()//Input জায়গা ক্লিয়ার এর জন্য
    e.preventDefault() //Browser যে না রিলড হয় সে জন্য

}




