function formatDate(timeStamp) {
    let date = new Date(timeStamp);
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
   let day = days[date.getDay()];
    return `${day} ${hours}:${minutes}`
}


function showTemperature(response) {
  let temperatureElement = document.querySelector('#temperature');
  let cityElement = document.querySelector('#city');
  let descriptionElement = document.querySelector('#description');
  let humidityElement = document.querySelector('#humidity');
   let windElement = document.querySelector('#wind');
   let dateElement = document.querySelector('#date');
   let iconElement = document.querySelector('#icon');
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
   dateElement.innerHTML = formatDate(response.data.dt * 1000);
    iconElement.setAttribute('src', `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
     iconElement.setAttribute("alt", response.data.weather[0].description);
}


let apiKey = '8b7c83c1d2550cda541e73c93abe2c90';
let city = 'Lagos'
 let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

 axios.get(apiUrl).then(showTemperature);