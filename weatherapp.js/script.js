const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const apiKey = "65fa988c3c6a83cb8641daa710ed5f66";

let searchBox = document.getElementById("search");
const btn = document.getElementById("btn");
const mainPic = document.getElementById("ballonImg");

localStorage.setItem("defaultCity", "Karachi");
const defaultCity = localStorage.getItem("defaultCity");
 checkWether(defaultCity);

// getLocation();
// function getLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition

async function checkWether(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();
    
    console.log(data);
    
    if(response.status === 404){
        document.getElementById("name").style.display = "none";


        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Invalid city name",
          });

    } else {
        document.getElementById("name").innerHTML = data.name;
        document.getElementById("region").innerHTML = `,&nbsp ${data.sys.country}`;
        document.getElementById("feelslike_c").innerHTML = "Feels like" + " " + Math.round(data.main.feels_like) + "&#176" + "c"
        document.getElementById("temp_c").innerHTML = Math.round(data.main.temp) + "&#176" + "c";
        document.getElementById("condition").innerHTML = data.weather[0].description;
        document.getElementById("cloud").innerHTML = data.clouds.all + "%"
        document.getElementById("humidity").innerHTML = data.main.humidity + "%"
        document.getElementById("wind_kph").innerHTML =`${data.wind.speed} km/h NE`;
        document.getElementById("gust_kph").innerHTML =`${data.wind.deg}`;
        document.getElementById("precip_mm").innerHTML =`${data.clouds.all} mm`;
        document.getElementById("pressure_mb").innerHTML =`${data.main.pressure} mb`;
        document.getElementById("vis_km").innerHTML =`${data.visibility} Km`;
        document.getElementById("sunrise").innerHTML =`${data.sys.sunrise}`;
        document.getElementById("sunset").innerHTML =`${data.sys.sunset} `;
    
        if(data.weather[0].main === "Clouds") {
            mainPic.src = "images/clouds1.gif"
        } 
        else if(data.weather[0].main === "Clear") {
            mainPic.src = "images/clear.gif";
        }
        else if(data.weather[0].main === "Rain") {
            mainPic.src = "images/rain.gif";
        }
        else if(data.weather[0].main === "Drizzle") {
            mainPic.src = "images/drizzle.gif";
        }
        else if(data.weather[0].main === "Mist") {
            mainPic.src = "images/mist-pic.gif";
        }
        else if(data.weather[0].main === "Haze") {
            mainPic.src = "images/haze.png";
        } 
        else if(data.weather[0].main === "Smoke") {
            mainPic.src = "images/smoke.png";
        } 
        
        else {
            mainPic.src = "images/balloon.png";
        }
       document.getElementById("name").style.display = "block";

    }

   
}


btn.addEventListener("click",() => {
    checkWether(searchBox.value);
})

// function showPosition(position) {
//     var latitude = position.coords.latitude;
//     var longitude = position.coords.longitude;
// //     console.log(latitude + " " + longitude);
//     getName(latitude, longitude)
// }
// async function getName(latitude, longitude) {
//     var access_key = 'fc3a65fc9ebd7761b6cd0379e6cb3775'
//     var url = `https://api.openweathermap.org/geo/1.0/reverse?lat=` + latitude + `&lon=` + longitude + `&limit=5&appid=` + access_key;
//     var res = await fetch(url);
//     var data = await res.json();
//     var location = data[0].name.split(" ")[0];
//     fetchData(location);
//     document.getElementById("body").style.filter = 'blur(0rem)';
// }

// function findWeather() {
//     var location = document.getElementById("search").value;
//     fetchData(location)
// }
// async function fetchData(location) {
//     var url = `https://api.weatherapi.com/v1/current.json?key=1c63857a8e0548f9a1a152750210909&q=` + location + `&aqi=yes`;
//     var res = await fetch(url);
//     var data = await res.json();
//     if(res.status == 200){
//         setValues(data);
//     }
//     else{
//         var tags = document.getElementsByClassName('reset');
//         for (let index = 0; index < tags.length; index++) {
//             tags.item(index).innerHTML = ""
//         }
//         document.getElementById("name").innerHTML = "Location not Found";
//     }
// }
// function setValues(data) {
//     var setter = document.getElementById("temp_c");
//     setter.innerHTML = data.current.temp_c + `&#176`;

//     setter = document.getElementById('name');
//     setter.innerHTML = data.location.name;

//     setter = document.getElementById("region");
//     setter.innerHTML = `&nbsp;` +  data.location.region + `, ` + data.location.country;
//     setter = document.getElementById("feelslike_c");
//     setter.innerHTML = `Feels like ` + data.current.feelslike_c + `&#176`;

//     setter = document.getElementById("condition");
//     setter.innerHTML = data.current.condition.text;

//     setter = document.getElementById("cloud");
//     setter.innerHTML = data.current.cloud + `%`;

//     setter = document.getElementById("humidity");
//     setter.innerHTML = data.current.humidity + `%`;

//     setter = document.getElementById("wind_kph");
//     setter.innerHTML = data.current.wind_kph + ` Km/h ` + data.current.wind_dir;

//     setter = document.getElementById("gust_kph");
//     setter.innerHTML = data.current.gust_kph + ` Km/h`;

//     setter = document.getElementById("precip_mm");
//     setter.innerHTML = data.current.precip_mm + `mm`;

//     setter = document.getElementById("pressure_mb");
//     setter.innerHTML = data.current.pressure_mb + `mb`;

//     setter = document.getElementById("vis_km");
//     setter.innerHTML = data.current.vis_km + ` KM`;

//     setter = document.getElementById("uv");
//     setter.innerHTML = data.current.uv + ` `;

// }