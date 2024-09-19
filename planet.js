//https://swapi.dev/documentation#planets

let planetResponse = {
  count: 0,
  next: null,
  previous: null,
  results: [],
};

const getData = async (url) => {
  document.getElementById("monsuperloader").style.display = "block";
  document.getElementById("next").disabled = false;
  document.getElementById("previous").disabled = false;
  document.getElementById("planets").innerHTML = "";
  try {
    const result = await fetch(url);
    const data = await result.json();
    document.getElementById("monsuperloader").style.display = "none";
    planetResponse = data;
    if (!data.next) document.getElementById("next").disabled = true;
    if (!data.previous) document.getElementById("previous").disabled = true;
    data.results.forEach((planet) => {
      const p = document.createElement("p");
      p.innerText = planet.name;
      document.getElementById("planets").appendChild(p);
    });
    console.log(data);
    console.log("coucou");
  } catch (error) {}
};

getData("https://swapi.dev/api/planets");

document.getElementById("next").addEventListener("click", () => {
  getData(planetResponse.next);
});

document.getElementById("previous").addEventListener("click", () => {
  getData(planetResponse.previous);
});
