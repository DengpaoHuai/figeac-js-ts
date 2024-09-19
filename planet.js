//https://swapi.dev/documentation#planets

const getData = async (page = 1) => {
  try {
    const result = await fetch("https://swapi.dev/api/planets?page=" + page);
    const data = await result.json();
    data.results.forEach((planet) => {
      const p = document.createElement("p");
      p.innerText = planet.name;
      document.getElementById("planets").appendChild(p);
    });
    console.log(data);
    console.log("coucou");
  } catch (error) {}
};

getData();

document.getElementById("next").addEventListener("click", () => {
  console.log("next");
});

document.getElementById("previous").addEventListener("click", () => {
  console.log("previous");
});
