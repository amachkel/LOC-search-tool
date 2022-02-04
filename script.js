const searchFormEl = document.getElementById("search-form");

handleSearchSubmit = e => {
    e.preventDefault();

    let searchInputVal = document.getElementById("search-input").value;
    let formControlVal = document.getElementById("formControl").value;

    if  (!searchInputVal) {
        alert("Type something in the search bar!");
        return;
    }

    let queryString = `./search-results.html?q=${searchInputVal}&format=${formControlVal}`;
    
    window.location  = (queryString);
}

searchFormEl.addEventListener("submit", handleSearchSubmit);

