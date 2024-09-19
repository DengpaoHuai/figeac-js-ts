const beer_form = document.getElementById("beer_form");

beer_form.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(beer_form);
  const beerName = form.get("name");
  const degree = form.get("degree");
  const country = form.get("country");
  console.log(beerName, degree, country);
  fetch("https://crudcrud.com/api/49ccfefdf8da4166994c92fb0ced6e29/beers", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      name: beerName,
      degree: degree,
      country: country,
    }),
  })
    .then((data) => {
      console.log(data);
      window.location = "beers_list.html";
    })
    .catch((err) => {
      console.err(err);
    });
});
