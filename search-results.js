const card = document.getElementById("cardContainer");
let data1;
const searchApi = (query, format) => {
  var url = `https://www.loc.gov/${format}/?q=${query}&fo=json`;
  //   console.log(url)

  fetch(url)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      if (!data) {
        console.log("There's no data associated to the search");
      }
      data1 = data;
      console.log(data1);

      //   console.log(data);
      for (var i = 0; i < 10; i++) {
        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const h5 = document.createElement("h5");
        h5.classList.add("card-title");
        h5.textContent = data.results[i].partof[0];
        //   console.log(h5)

        const p = document.createElement("p");
        p.classList.add("card-text");
        p.textContent = `Contributor: ${data.results[i].contributor[0]}`;
        //   console.log(p)

        const a = document.createElement("a");
        a.classList.add("btn");
        a.classList.add("btn-primary");
        a.textContent = "Click here";
        a.setAttribute("href", data.results[i].url);
        //   console.log(a)

        cardBody.appendChild(h5);
        cardBody.appendChild(p);
        cardBody.appendChild(a);
        card.appendChild(cardBody);
      }
    });
};

// function getParams() {

// }

const getParams = () => {
  //searchParams = [q={query}, format={format}];
  let searchParams = document.location.search.split("&");
  //param format = after the '?', param=value. Separate params using '&'
  //user's query is first in searchParams.
  //at index of 0, get q={query};   Split at '='; remove last item from array;
  //      searchQuery = [q, {query}].pop(), so searchQuery = [q];
  let query = searchParams[0].split("=").pop();
  //      searchFormat = [f];
  let format = searchParams[1].split("=").pop();

  //call function with these search parameters
  searchApi(query, format);
  console.log(format);
};

getParams();

// https://www.loc.gov/
// maps/?
// q=civil war
// &fo=json

// search-results.html?q={query}&format={format};
// API:
// .com/{format}/?q={query}&fo=json
