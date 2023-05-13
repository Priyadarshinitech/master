let book = document.querySelector("#book-info");
let form = document.createElement("form");
form.setAttribute("class","container col-10 col-sm-8 col-lg-4");
let rowData = null;
book.appendChild(form);

//no of books
let noOfBooksDiv = document.createElement("div");
noOfBooksDiv.setAttribute("class", "form-group col-12 mt-5 bg-white");
let noOfBooksInput = document.createElement("input");
noOfBooksInput.id = "no-of-books";
noOfBooksInput.type = "number";
noOfBooksInput.classList = "form-control form-control-lg";
noOfBooksInput.placeholder = "Enter no.of books";
noOfBooksDiv.appendChild(noOfBooksInput);
let noOfBooksPara = document.createElement("p");
noOfBooksPara.className = "error-font";
noOfBooksPara.id = "error-no-of-books";
noOfBooksDiv.appendChild(noOfBooksPara);
form.appendChild(noOfBooksDiv);
 
//name of the book
let nameOftheBookDiv = document.createElement("div");
nameOftheBookDiv.classList = "form-group col-12 bg-white mt-3";
let nameOftheBooksInput = document.createElement("input");
nameOftheBooksInput.id = "name-of-books";
nameOftheBooksInput.type = "text";
nameOftheBooksInput.classList = "form-control form-control-lg";
nameOftheBooksInput.placeholder = "Name of the book";
nameOftheBookDiv.appendChild(nameOftheBooksInput);
let nameOfBooksPara = document.createElement("p");
nameOfBooksPara.className = "error-font";
nameOfBooksPara.id = "error-name-books";
nameOftheBookDiv.appendChild(nameOfBooksPara);
form.appendChild(nameOftheBookDiv);

//author name
let authorAmountDiv = document.createElement("div");
authorAmountDiv.className = "row";
let authorNameDiv = document.createElement("div");
authorNameDiv.classList = "form-group col bg-white mt-3";
let authorNameInput = document.createElement("input");
authorNameInput.id = "author-name";
authorNameInput.type = "text";
authorNameInput.classList = "form-control form-control-lg";
authorNameInput.placeholder = "Author";
authorNameDiv.appendChild(authorNameInput);
let authorPara = document.createElement("p");
authorPara.className = "error-font";
authorPara.id = "error-author-name";
authorNameDiv.appendChild(authorPara);

//amount
let AmountDIv = document.createElement("div");
AmountDIv.classList = "form-group col bg-white mt-3";
let AuthorDivInput = document.createElement("input");
AuthorDivInput.id = "amount";
AuthorDivInput.type = "number";
AuthorDivInput.classList = "form-control form-control-lg";
AuthorDivInput.placeholder = "Amount";
AmountDIv.appendChild(AuthorDivInput);
let amountPara = document.createElement("p");
amountPara.className = "error-font";
amountPara.id = "error-book-amount";
AmountDIv.appendChild(amountPara);
authorAmountDiv.appendChild(authorNameDiv);
authorAmountDiv.appendChild(AmountDIv);
form.appendChild(authorAmountDiv);

//addclearupdatediv
let addclearDiv = document.createElement("div");
addclearDiv.classList = "d-flex justify-content-end";


//addbutton
let addDiv = document.createElement("div");
let addButton = document.createElement("button");
addButton.id = "add-button";
addButton.type = "button";
addButton.classList = "btn btn-success btn-lg me-3 mt-5 ";
addButton.innerText = "Add";
addDiv.appendChild(addButton);
addclearDiv.appendChild(addDiv);


//updatebutton
let updateDiv = document.createElement("div");
let updateButton = document.createElement("button");
updateButton.id = "update-button";
updateButton.type = "button";
updateButton.classList = "btn btn-success btn-lg text-center update-button me-4 mt-5 ";
updateButton.innerText = "Update";
updateDiv.appendChild(updateButton);
addclearDiv.appendChild(updateDiv);

//clearbutton
let clearDiv = document.createElement("div");
let clearButton = document.createElement("button");
clearButton.id = "clear-button";
clearButton.type = "button";
clearButton.classList = "btn btn-success btn-lg clear-button mt-5 ";
clearButton.innerText = "Clear";
clearDiv.appendChild(clearButton);
addclearDiv.appendChild(clearDiv);
form.appendChild(addclearDiv);



//addevent
addButton.addEventListener("click",addBooks);

clearButton.addEventListener("click",clearBooks);

//table
let bookDetailsDiv = document.querySelector("#book-details-container");
let table = document.createElement("table");
table.classList = "table table-striped book-details-table";
bookDetailsDiv.appendChild(table);

//tablehead
let thead = document.createElement("thead");
thead.classList = "col-3";
let theadTr = document.createElement("tr");
let th1 = document.createElement("th");
th1.setAttribute("scope","col");
th1.innerText = "No.";
theadTr.appendChild(th1);
let th2 = document.createElement("th");
th2.setAttribute("scope","col");
th2.innerText = "Name";
theadTr.appendChild(th2);
let th3 = document.createElement("th");
th3.setAttribute("scope","col");
th3.innerText = "Publisher";
theadTr.appendChild(th3);
let th4 = document.createElement("th");
th4.setAttribute("scope","col");
th4.innerText = "Price";
theadTr.appendChild(th4);
let th5 = document.createElement("th");
th5.setAttribute("scope","col");
th5innerText = "Edit";
theadTr.appendChild(th5);
let th6 = document.createElement("th");
th6.setAttribute("scope","col");
th6.innerText = "";
theadTr.appendChild(th6);
thead.appendChild(theadTr);
table.appendChild(thead);

//tbody
let tbody = document.createElement("tbody");
table.appendChild(tbody);

function validation(){
    let noOfBooks = document.querySelector("#no-of-books").value;
    let errorOfBooks = document.getElementById("error-no-of-books");

    if(noOfBooks == "" || noOfBooks == undefined || noOfBooks == null){
        errorOfBooks.innerText = "Please enter no. of books";
        return false;
    } else{
        errorOfBooks.innerText = "";
    }

    let nameOfBooks = document.getElementById("name-of-books").value;
    let errorNameOfBooks = document.getElementById("error-name-books");
    let regexAlphabets = /^[A-Za-z]+$/;

    if(nameOfBooks == "" || nameOfBooks == undefined || nameOfBooks == null){
        errorNameOfBooks.innerText = "Please enter book name";
        return false;
    } else if(!regexAlphabets.test(nameOfBooks)) {
        errorNameOfBooks.innerText = "Please enter alphabets only";
        return false;
    } else{
        errorNameOfBooks.innerText = "";
    }

    let bookAuthor = document.getElementById("author-name").value;
    let errorBookAuthor = document.getElementById("error-author-name");

    if(bookAuthor == "" || bookAuthor == undefined || bookAuthor == null){
        errorBookAuthor.innerText = "Please enter author name";
        return false;
    } else if(!regexAlphabets.test(bookAuthor)){
        errorBookAuthor.innerText = "Please enter alphabets only";
        return false;
    } else{
        errorBookAuthor.innerText = "";
    }

    let bookAmount = document.getElementById("amount").value;
    let errorBookAmount = document.getElementById("error-book-amount");

    if(bookAmount == "" || bookAmount == undefined || bookAmount == null){
        errorBookAmount.innerText = "Please enter amount";
        return false;
    } else {
        errorBookAmount.innerText = "";
    }
    return true;

}


//add function
function addBooks(event){

    let validTrue = validation();

    if(validTrue){

    let noOfBooksInputValue = document.querySelector("#no-of-books").value;

    let nameOftheBooksInputvalue = document.querySelector("#name-of-books").value;

    let authorNameInputvalue = document.querySelector("#author-name").value;

    let AuthorDivInputvalue = document.querySelector("#amount").value;

    let tbodyTr1 = document.createElement("tr");
    tbodyTr1.className = "col-3";
    let thNoOfBooks = document.createElement("th")
    thNoOfBooks.setAttribute("scope","row");
    thNoOfBooks.className = "row-data";
    thNoOfBooks.innerText = noOfBooksInputValue;
    let td1 = document.createElement("td");
    td1.className = "row-data";
    td1.innerText = nameOftheBooksInputvalue;
    let td2 = document.createElement("td");
    td2.className = "row-data";
    td2.innerText = authorNameInputvalue;
    let td3 = document.createElement("td");
    td3.className = "row-data";
    td3.innerText = AuthorDivInputvalue;
    let td4 = document.createElement("td");
    let iEdit = document.createElement("i");
    iEdit.classList = "bi bi-pencil-square";
    iEdit .addEventListener("click",editBooks);
    td4.appendChild(iEdit);
    let td5 = document.createElement("td");
    let iDelete = document.createElement("i");
    iDelete.classList = "bi bi-x-circle deleteButton";
    iDelete.addEventListener("click",removeBooks);
    td5.appendChild(iDelete);
    tbodyTr1.appendChild(thNoOfBooks);
    tbodyTr1.appendChild(td1);
    tbodyTr1.appendChild(td2);
    tbodyTr1.appendChild(td3);
    tbodyTr1.appendChild(td4);
    tbodyTr1.appendChild(td5);
    tbody.appendChild(tbodyTr1);

    let bookDetails = document.querySelector(".book-details-table");
    bookDetails.style.display = "table";


    clearBooks();
    }
}

//delete function
function removeBooks(event){
    event.target.parentElement.parentElement.remove();
    let bookDetails= document.querySelector(".book-details-table");
    var totalRowCount = bookDetails.tBodies[0].rows.length;

    if (totalRowCount==0){
        bookDetails.style.display = "none";
    }
}

//edit function
function editBooks(event){
    rowData = event.target.parentElement.parentElement.getElementsByClassName("row-data");
    let bookNo =  rowData[0].innerText;
    let bookName =  rowData[1].innerText;
    let authorName =  rowData[2].innerText;
    let amount =  rowData[3].innerText;

    //document.querySelector("#no-of-books").value = bookNo;
    let noOfBooks = document.querySelector("#no-of-books");
    noOfBooks.value = bookNo;

    let nameOfBooks  = document.querySelector("#name-of-books");
    nameOfBooks.value = bookName;

    let authOrName   = document.querySelector("#author-name");
    authOrName.value = authorName;

    let amOunt   = document.querySelector("#amount");
    amOunt.value = amount;

    let addButton = document.querySelector("#add-button");
    addButton.style.display = "none";

    let updateButton = document.querySelector("#update-button");
    updateButton.style.display = "block";


}

updateButton.addEventListener("click",updateBooks);


//update function
function updateBooks(event){
    rowData[0].innerText =  document.querySelector("#no-of-books").value;
    rowData[1].innerText =  document.querySelector("#name-of-books").value;
    rowData[2].innerText =  document.querySelector("#author-name").value;
    rowData[3].innerText =  document.querySelector("#amount").value;

    clearBooks();

    let updateButton = document.querySelector("#update-button");
    updateButton.style.display = "none";

    let addButton = document.querySelector("#add-button");
    addButton.style.display = "block";


}

function clearBooks(){
    document.querySelector("#no-of-books").value = "";
    document.querySelector("#name-of-books").value = "";
    document.querySelector("#author-name").value = "";
    document.querySelector("#amount").value = "";
}

