console.log("Hello");

//Constructor
function Book(name,author,type){
    this.name = name;
    this.author = author;
    this.type = type;
}

//Display constructor
function Display(){

}

//Add methods to display prototypes

//Add submit event listener to library form
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit',libraryFormSubmit);

function libraryFormSubmit(e){
    console.log('You have submitted library form');
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type ;
    // fiction programming, cooking

    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');

    if(fiction.checked){
        type = fiction.value;
    }
    else if(programming.checked){
        type = programming.value;
    }
    else if(cooking.checked){
        type = cooking.value;
    }

    let book = new Book(name, author, type);
    console.log(book);
    e.preventDefault();
}