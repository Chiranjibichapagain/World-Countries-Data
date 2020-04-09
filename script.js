// let countries= require("./countryData")
import { countries } from "./countryData.js";

// console.log(countries);

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

function filterCountries(arr) {
  let x = document.querySelectorAll(".countryBox");
  x.forEach((item) => item.remove());

  let textInput = document.querySelector("#searchBox").value.toLowerCase();
  // let newArr= countryData.filter(item=> {return item.indexOf(textInput)> -1})
}

document.getElementById("searchBox").addEventListener("keyup", filterCountries);

// let x = countries.map((item) => item.name);
// let y = countries.map((item) => item.capital);
// let arr = countries.map((item) => item.languages);
// let languages= arr.map(item=>{
//     for(let i=0; i<arr.length; i++){
//         return item[i]
//     }
// })
// console.log("vittu", languages);

let languages = [];
for (let i = 0; i < countries.length; i++) {
  let lan = countries[i].languages;
  for (let j = 0; j < lan.length; j++) {
    languages.push(lan[j]);
  }
}
// console.log(languages)

function searchThrough(arr, input) {
  for (let i = 0; i < arr.length; i++) {
    let LAN= arr[i].languages
    
    for(let j=0; j<LAN.length; j++){
        if (
          arr[i].name.toLowerCase().indexOf(input) > -1 ||
          arr[i].capital.toLocaleLowerCase().indexOf(input) > -1
        ) {
          let x = arr[i];
        }
        
    }
    
  }
}
searchThrough(countries, "ind");

// languages[i].toLowerCase().indexOf(input) > -1




