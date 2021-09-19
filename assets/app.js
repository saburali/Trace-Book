// Button Click Get Input Value
const bookSearch = () => {
    const searchField = document.getElementById("searchBook");
    const searchText = searchField.value;
    const url = `https://openlibrary.org/search.json?q=${searchText}`;

    searchField.value = "";

    fetch(url)
        .then(res => res.json())
        .then(data => dispalyBookresult(data.docs))
};

// Hit Enter Get Search Value
const enterBtnAction = () => {
    let input = document.getElementById("searchBook");
    input.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("searchBtn").click();
        }
    });
}
enterBtnAction();

// Showing Book Result
const dispalyBookresult = books => {
    const booksContainer = document.getElementById('bookResult');
    // Error Handle
    if (books.length > 0) {
        books.forEach(book => {
            console.log(book);
            const div = document.createElement('div');
            div.classList.add('my-4');
            div.classList.add('col-md-3');
            div.innerHTML = `
                <div class="card book">
                    <img src="${book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : `assets/noImageAvailable.jpg`}"
                         class="card-img-top" alt="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg">
                    <div class="card-body pb-0">
                        <h5 class="card-title themeLetter"> ${book.title} </h5>
                        <p class="card-text" title="${book.author_name}"><span class="themeLetter">Author:</span> ${book.author_name} </p>
                        <p class="card-text"><span>First Published:</span> ${book.first_publish_year} </p>
                        <p class="card-text more-text" title="${book.publisher}"><span>Publisher:</span> ${book.publisher} </p>
                    </div>
                </div>
            `;
            booksContainer.appendChild(div);
        })
    }
    else {
        document.getElementById("bookResult").innerHTML = `
            <h1 class="text-danger text-center mt-5"> Please Type Anything and Search Again </h1>
        `;
    }
}