'use strict'
export const weatherService = {
getWeather,
}

const API_KEY='6dece0c88e772ac44eed00e2032e587f'


function getWeather(){
    return axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&APPID=${API_KEY}`)
    .then(res=>console.log(res))
}

