import {
    locService
} from './services/loc.service.js'
import {
    mapService
} from './services/map.service.js'
import {
    storageService
} from './services/storage.service.js'

// export const appContriller = {
//     getUser
// }
import {
    weatherService
} from './services/weather.service.js'


window.onload = onInit;
window.onAddMarker = onAddMarker;
window.onPanTo = onPanTo;
window.onGetLocs = onGetLocs;
window.onGetUserPos = onGetUserPos;
window.onDelLoc = onDelLoc
// window.onDelLoc = onDelLoc

function onInit() {
    mapService.initMap()
        .then(() => {
            // mapService.clickMap()
            // mapService.clickMap()
            // weatherService.getWeather()
            console.log('Map is ready');
        })
        .catch(() => console.log('Error: cannot init map'));
}


// This function provides a Promise API to the callback-based-api of getCurrentPosition
function getPosition() {
    console.log('Getting Pos');
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })
}

function onAddMarker() {
    console.log('Adding a marker');
    mapService.addMarker({
        lat: 32.0749831,
        lng: 34.9120554
    });
}

function onGetLocs() {
    locService.getLocs()
        .then(locs => {
            console.log('Locations:', locs)
            // console.log('Locations:', locs[0].name)

            renderLocs(locs)
            // document.querySelector('.locs').innerText = JSON.stringify(locs)
        })
}
function onDelLoc(id) {
    locService.delLoc(id)
}

function onGetUserPos() {
    getPosition()
        .then(pos => {
            console.log('User position is:', pos.coords);
            document.querySelector('.user-pos').innerText =
                `Latitude: ${pos.coords.latitude} - Longitude: ${pos.coords.longitude}`
        })
        .catch(err => {
            console.log('err!!!', err);
        })
}

function onPanTo(lat=35.6895,lng=139.6917) {
    console.log('Panning the Map');
    mapService.panTo(lat, lng);
    // mapService.panTo(35.6895, 139.6917);
}



// getUser()

// function render(obj) {
//     console.log(obj);
// }

// function getObjData() {
//     //     return storageService.load('user-data')
//     // }
//     var obj = storageService.load(DATA_DB)
//     render(obj)
// }

function renderLocs(locs) {
    console.log('hi')
    if (!locs.length) return
    const elLocs = document.querySelector('.locs')
    var strHTMLS = locs.map(loc => {
        return `<h2>${loc.name}</h2>
        <h3>lat:${loc.lat.toFixed(3)}</h3>
        <h3>lng:${loc.lng.toFixed(3)}</h3>
        <h3>creatAt:${loc.time}</h3>
        <button onclick="onDelLoc(${loc.id})">x</button>
        <button onclick="onPanTo(${loc.lat},${loc.lng})">go</button>`
    })
    elLocs.innerHTML = strHTMLS.join('')

}