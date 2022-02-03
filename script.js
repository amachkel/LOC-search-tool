var buttonEl = document.getElementById("search-btn");

buttonEl.addEventListener("click", function() {
    window.location = "./search-results.html";
    getApi();
})

function getApi() {
var requestUrl = 'https://www.loc.gov/film-and-videos/?q=dog&fo=json'
#category.val() + '/?q='+ #search-input.val().toLowerCase()+'&fo=json'
fetch(requestUrl)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data);
})
}