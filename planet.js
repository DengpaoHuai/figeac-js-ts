//https://swapi.dev/documentation#planets

const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

const getData = async () => {
  await delay(2000);
  try {
    const result = await fetch("https://swapi.dev/api/planets");
    const data = await result.json();
    console.log(data);
    console.log("coucou");
  } catch (error) {}
};
getData();

/*
  fetch("https://swapi.dev/api/planets")
    .then((result) => {
      result.json().then((data) => console.log(data));
    })
    .catch((err) => console.log(err));
  */
/*
  fetch("https://swapi.dev/api/planets")
    .then((result) => {
      return result.json();
    })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
  */

fetch("https://swapi.dev/api/planets")
  .then((result) => result.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
