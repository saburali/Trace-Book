const bookSearch = () => {
    const searchField = document.getElementById("searchBook");
    const searchText = searchField.value;
    const url = `https://www.openlibrary.org/search.json?q=${searchText}`;
    console.log(url);
}