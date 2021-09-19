// Button Click Get Input Value
const bookSearch = () => {
    const searchField = document.getElementById("searchBook");
    const searchText = searchField.value;
    const url = `https://openlibrary.org/search.json?q=${searchText}`;

    searchField.value = "";

    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data.docs))
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

