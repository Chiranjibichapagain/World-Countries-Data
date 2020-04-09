// let countries= require("./countryData")
import { countries } from "./countryData.js";

let totalPopulation = countries.reduce((acc, val) => {
  return acc + val.population;
}, 0);

countries.map(
  (item) =>
    (item.popPercent =
      ((item.population / totalPopulation) * 100).toFixed(2) + "%")
);

console.log(countries);

function displayCountries(arr) {
  for (let i = 0; i < arr.length; i++) {
    let countryBox = document.createElement("div");
    countryBox.className = "countryBox";
    let flagImage = document.createElement("img");
    flagImage.id = "flagImage";
    flagImage.src = arr[i].flag;
    let countryName = document.createElement("h4");
    countryName.id = "countryName";
    countryName.textContent = arr[i].name;
    let capital = document.createElement("p");
    capital.id = "capital";
    capital.textContent = "Capital: " + arr[i].capital;
    let languages = document.createElement("p");
    languages.id = "languages";
    languages.textContent = "Languages: " + arr[i].languages;
    let population = document.createElement("p");
    population.id = "population";
    population.textContent = "Population: " + arr[i].population;
    countryBox.appendChild(flagImage);
    countryBox.appendChild(countryName);
    countryBox.appendChild(capital);
    countryBox.appendChild(languages);
    countryBox.appendChild(population);
    document.querySelector(".countryDisplay").appendChild(countryBox);
  }
}
displayCountries(countries);

function clearIt() {
  let x = document.querySelectorAll(".countryBox");
  x.forEach((item) => item.remove());
  return x;
}

function filterCountries() {
  clearIt();

  let textInput = document.querySelector("#searchBox").value.toLowerCase();
  let newArr = searchThrough(countries, textInput);
  displayCountries(newArr);
}

document.getElementById("searchBox").addEventListener("keyup", filterCountries);

function searchThrough(arr, input) {
  let filArr = [];
  for (let i = 0; i < arr.length; i++) {
    let LAN = arr[i].languages;

    for (let j = 0; j < LAN.length; j++) {
      if (
        arr[i].name.toLowerCase().indexOf(input) > -1 ||
        arr[i].capital.toLocaleLowerCase().indexOf(input) > -1 ||
        arr[i].languages[j].toLowerCase().indexOf(input) > -1
      ) {
        filArr.push(arr[i]);
      }
    }
  }
  return filArr;
}

function sortByName() {
  clearIt();
  let textInput = document.querySelector("#searchBox").value.toLowerCase();
  let Arr = searchThrough(countries, textInput);
  let sortedArr = Arr.sort(compareName);
  displayCountries(sortedArr);
}

document.getElementById("b-name").addEventListener("click", sortByName);

function sortByCapital() {
  clearIt();
  let textInput = document.querySelector("#searchBox").value.toLowerCase();
  let Arr = searchThrough(countries, textInput);
  let sortedArr = Arr.sort(compareCapital);
  displayCountries(sortedArr);

  console.log(Arr);
}

document.getElementById("b-capital").addEventListener("click", sortByCapital);

function sortByPopulation() {
  clearIt();
  let textInput = document.querySelector("#searchBox").value.toLowerCase();
  let Arr = searchThrough(countries, textInput);
  let sortedArr = Arr.sort(comparePopulation);
  displayCountries(sortedArr);

  // console.log(Arr);
}

document
  .getElementById("b-population")
  .addEventListener("click", sortByPopulation);

// grpahs

function displayGrpah() {}

/// filter functions( name, capital, population)

function compareName(a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
}

function compareCapital(a, b) {
  if (a.capital < b.capital) {
    return -1;
  }
  if (a.capital > b.capital) {
    return 1;
  }
  return 0;
}

function comparePopulation(a, b) {
  if (a.population < b.population) {
    return -1;
  }
  if (a.population > b.population) {
    return 1;
  }
  return 0;
}

let copyArr = [...countries];

let sortedByPopulation = copyArr.sort(comparePopulation).reverse();

let topPopulation = [];
for (let i = 0; i < 10; i++) {
  topPopulation.push({
    name: copyArr[i].name,
    population: copyArr[i].population.toString(),
    popPercent: copyArr[i].popPercent,
  });
}

topPopulation.unshift({
  name: "World",
  population: totalPopulation,
  popPercent: "100%",
});

function displayGraph(arr) {
  let popPercent = arr.map((item) => item.popPercent);

  for (let i = 0; i < arr.length; i++) {
    let mainDiv = document.createElement("div");
    mainDiv.id = "mainDiv";
    let graphCountry = document.createElement("p");
    graphCountry.id = "graphCountry";
    let graphOuter = document.createElement("div");
    graphOuter.id = "graphOuter";
    let graphInner = document.createElement("div");
    graphInner.id = "graphInner";
    let graphPopulation = document.createElement("p");
    graphPopulation.id = "graphPopulation";

    graphCountry.textContent = arr[i].name;
    graphPopulation.textContent = arr[i].population;
    graphInner.style.width = popPercent[i];

    graphOuter.appendChild(graphInner);
    mainDiv.appendChild(graphCountry);
    mainDiv.appendChild(graphOuter);
    mainDiv.appendChild(graphPopulation);
    document.querySelector("#graphContainer").appendChild(mainDiv);
  }
}
displayGraph(topPopulation);
