let appid = '&APPID=1a41a50ea9afa8171ef556a9e33f2fe6';
let BASE_URL = "https://api.openweathermap.org/data/2.5/weather?"

let inputbox = document.getElementById('inputbox');
let submit = document.getElementById('submit');
let container = document.getElementById('container');
let h1 = document.getElementById('h1');
let header = document.getElementById('header');
let maintemp = document.querySelector('.maintemp');
let alltemp = document.querySelector('.alltemp');
let mintemp = document.querySelector('.mintemp');
let maxtemp = document.querySelector('.maxtemp');
let nameorzipvalue = '';

submit.addEventListener('click', function (e) {
  e.preventDefault();
  if (isNaN(inputbox.value)) {
    nameorzipvalue = 'q=';
    checkweather(nameorzipvalue, inputbox.value);
  }
  else {
    nameorzipvalue = 'zip=';
    checkweather(nameorzipvalue, inputbox.value);
  }
});

function focusfun() {
  inputbox.placeholder = '';
}
function unfocusfun() {
  inputbox.placeholder = 'CITY / ZIP';
}

function checkweather(nameorzip, value) {
  fetch(BASE_URL + nameorzip + value + "&units=imperial" + appid)
    .then(function (response) {
      response.json()
        .then(function (json) {
          changeclass();
          maintemp.innerHTML = json.main.temp;
          mintemp.innerHTML = json.main.temp_min;
          maxtemp.innerHTML = json.main.temp_max;
          weatherpic(json);
        })
    })
}

function changeclass() {
  container.className = 'newcontainer';
  header.className = 'newheader';
  h1.className = 'newh1';
  alltemp.style.display = 'block';
}

function weatherpic(json) {
  let backimg = document.querySelector('.backimg');
  backimg.style.display = 'block';
  backimg.style.backgroundImage = "url(images/" + json.weather[0].main + ".jpg)";
}