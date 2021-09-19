// Button Click Get Input Value
const bookSearch = () => {
    const searchField = document.getElementById("searchBook");
    const searchText = searchField.value;
    const url = `https://openlibrary.org/search.json?q=${searchText}`;

    searchField.value = "";

    if(searchText === '') {
        document.getElementById("bookResult").innerHTML = `
            <h1 class="text-danger text-center mt-5"> Type Anything & Search Again...!! </h1>
        `;
    }
    else {
        // Loader Spinner
        const smSpinner = document.getElementById('resultInfo');
        smSpinner.innerHTML = `
        <div class="row">
            <div class="col-md-6 ">
                <p class="m-0"> <span class="load-wraper" style="width: 200px; height: 25px"> </span> </p>
            </div>
            <div class="activity"></div>
            <div class="col-md-6">
                <p class="m-0 text-end"> <span class="load-wraper" style="width: 200px; height: 25px">  </span> </p>
            </div>
        </div>
    `;

        const spinner = document.getElementById('bookResult');
        spinner.innerHTML = `
        <div class="col-12 mt-4">
            <div class="text-center">
                <h2 class="load-wraper" style="width: 60%; height: 50px"></h2>
            </div>
            <div class="row mt-4">
                <div class="col-md-3 my-2 loadingPlaceholder">
                    <div class="card p-0 border-0">
                        <div class="load-wraper" style="height: 300px"></div>
                        <div class="card-body pb-0">
                            <h5 class="card-title themeLette load-wraper" style="width: 100%; height: 25px; left: -15px"></h5>
                            <p class="card-text"><span class="themeLetter load-wraper" style="width: 20%; height: 18px; left: -15px"></span> <span class="load-wraper" style="width: 75%; height: 18px"></span></p>
                            <p class="card-text"><span class="themeLetter load-wraper" style="width: 60px; height: 60px; left: -15px; top: 3px; border-radius: 50%"></span> <span class="load-wraper" style="    width: 50%; height: 18px; top: -44px; left: -12px;"></span></p>
                            <p class="card-text more-text"><span class="load-wraper" style="width: 20%; height: 0; left: -15px; top: -20px"></span><span class="load-wraper" style="width: 80%; height: 40px; top: -47px; left: 7px"></span></p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 my-2 loadingPlaceholder">
                    <div class="card p-0 border-0">
                        <div class="load-wraper" style="height: 300px"></div>
                        <div class="card-body pb-0">
                            <h5 class="card-title themeLette load-wraper" style="width: 100%; height: 25px; left: -15px"></h5>
                            <p class="card-text"><span class="themeLetter load-wraper" style="width: 20%; height: 18px; left: -15px"></span> <span class="load-wraper" style="width: 75%; height: 18px"></span></p>
                            <p class="card-text"><span class="themeLetter load-wraper" style="width: 60px; height: 60px; left: -15px; top: 3px; border-radius: 50%"></span> <span class="load-wraper" style="    width: 50%; height: 18px; top: -44px; left: -12px;"></span></p>
                            <p class="card-text more-text"><span class="load-wraper"  style="width: 20%; height: 0; left: -15px; top: -20px"></span><span class="load-wraper" style="width: 80%; height: 40px; top: -47px; left: 7px"></span></p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 my-2 loadingPlaceholder">
                    <div class="card p-0 border-0">
                        <div class="load-wraper" style="height: 300px"></div>
                        <div class="card-body pb-0">
                            <h5 class="card-title themeLette load-wraper" style="width: 100%; height: 25px; left: -15px"></h5>
                            <p class="card-text"><span class="themeLetter load-wraper" style="width: 20%; height: 18px; left: -15px"></span> <span class="load-wraper" style="width: 75%; height: 18px"></span></p>
                            <p class="card-text"><span class="themeLetter load-wraper" style="width: 60px; height: 60px; left: -15px; top: 3px; border-radius: 50%"></span> <span class="load-wraper" style="    width: 50%; height: 18px; top: -44px; left: -12px;"></span></p>
                            <p class="card-text more-text"><span class="load-wraper"  style="width: 20%; height: 0; left: -15px; top: -20px"></span><span class="load-wraper" style="width: 80%; height: 40px; top: -47px; left: 7px"></span></p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 my-2 loadingPlaceholder">
                    <div class="card p-0 border-0">
                        <div class="load-wraper" style="height: 300px"></div>
                        <div class="card-body pb-0">
                            <h5 class="card-title themeLette load-wraper" style="width: 100%; height: 25px; left: -15px"></h5>
                            <p class="card-text"><span class="themeLetter load-wraper" style="width: 20%; height: 18px; left: -15px"></span> <span class="load-wraper" style="width: 75%; height: 18px"></span></p>
                            <p class="card-text"><span class="themeLetter load-wraper" style="width: 60px; height: 60px; left: -15px; top: 3px; border-radius: 50%"></span> <span class="load-wraper" style="    width: 50%; height: 18px; top: -44px; left: -12px;"></span></p>
                            <p class="card-text more-text"><span class="load-wraper"  style="width: 20%; height: 0; left: -15px; top: -20px"></span><span class="load-wraper" style="width: 80%; height: 40px; top: -47px; left: 7px"></span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
        fetch(url)
            .then(res => res.json())
            .then(data => dispalyBookresult(data.docs.slice(0, 50), data.numFound));
    }
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
const dispalyBookresult = (books, totalFound) => {
    const booksContainer = document.getElementById('bookResult');
    booksContainer.innerHTML = '';

    const resultCount = document.getElementById('resultInfo');
    resultCount.innerHTML = `
        <div class="row">
            <div class="col-md-6">
                <p class="m-0"> Total Book Found: ${totalFound} </p>
            </div>
            <div class="col-md-6">
                <p class="m-0 text-end"> Show Book: ${books.length} </p>
            </div>
        </div>
    `;

    // Error Handle
    if (books.length > 0) {
        books.forEach(book => {
            const div = document.createElement('div');
            div.classList.add('my-4');
            div.classList.add('col-md-3');
            div.innerHTML = `
                <div class="card book">
                    <img src="${book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : `assets/noImageAvailable.jpg`}"
                         class="card-img-top" alt="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg">
                    <div class="card-body pb-0">
                        <h5 class="card-title themeLetter" title="${book.title}"> ${book.title} </h5>
                        <p class="card-text author" title="${book.author_name}"><span class="themeLetter">Author:</span> ${book.author_name} </p>
                        <p class="card-text"><span>First Published:</span> ${book.first_publish_year} </p>
                        <p class="card-text more-text" title="${book.publisher}"><span>Publisher:</span> ${book.publisher} </p>
                    </div>
                </div>
            `;
            booksContainer.appendChild(div);
        })
    } else {
        document.getElementById("bookResult").innerHTML = `
            <h1 class="text-danger text-center mt-5"> No Result, Search Again...!! </h1>
        `;
    }
}