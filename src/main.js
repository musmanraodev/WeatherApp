console.log('main.js is connected!');

let appid = '1a41a50ea9afa8171ef556a9e33f2fe6';
let BASE_URL = "https://api.openweathermap.org/data/2.5/weather"

let inputbox = document.getElementById('inputbox');
let submit = document.getElementById('submit');
let container = document.getElementById('container');
let h1 = document.getElementById('h1');
let header = document.getElementById('header');
let maintemp = document.querySelector('.maintemp');
let alltemp = document.querySelector('.alltemp');
let mintemp = document.querySelector('.mintemp');
let maxtemp = document.querySelector('.maxtemp');

submit.addEventListener('click', function (e) {
  e.preventDefault();
  checkweather(inputbox.value);
})

inputbox.addEventListener('click', function () {
  this.placeholder = '';
})

function checkweather(city) {
  fetch(`${BASE_URL}?q=${city}&APPID=${appid}`)
    .then(function (response) {
      response.json()
        .then(function (json) {
          changeclass();
          maintemp.innerHTML = json.main.temp;
          mintemp.innerHTML = json.main.temp_min;
          maxtemp.innerHTML = json.main.temp_max;
        })
    })
}

function changeclass() {
  container.className = 'newcontainer';
  header.className = 'newheader';
  h1.className = 'newh1';
  alltemp.style.display = 'block';
}
