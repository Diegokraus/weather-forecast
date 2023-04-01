
const key = "d4bde6208eb6e3c1ddcf0b1fbe76eb15"

function printData(data){
    console.log(data)
    document.querySelector(".city").innerHTML = "Tempo em " + data.name
    document.querySelector(".weather").innerHTML = Math.floor(data.main.temp) + "°C"
    document.querySelector(".text-weather").innerHTML = data.weather[0].description
    document.querySelector(".humidity").innerHTML = "Umidade: " + data.main.humidity + "%"
    document.querySelector(".img-weather").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
}

async function searchCity(city){
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then (response => response.json())

    printData(data)

}

function buttonClick(){
    const city = document.querySelector(".input-city").value

   searchCity(city)
}