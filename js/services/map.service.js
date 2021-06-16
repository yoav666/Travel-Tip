import {
    locService
} from './loc.service.js'

export const mapService = {
    initMap,
    addMarker,
    panTo
}

var gMap;

function initMap(lat = 32.0749831, lng = 34.9120554) {
    console.log('InitMap');

    return _connectGoogleApi()
        .then(() => {
            console.log('google available');

            gMap = new google.maps.Map(
                document.querySelector('#map'), {
                    center: {
                        lat,
                        lng
                    },
                    zoom: 15
                })
            onClickMap(gMap)

            console.log('Map!', gMap);
        })
}

function onClickMap(map) {
    const myLatlng = {
        lat: 32.0749831,
        lng: 34.9120554
    };

    let infoWindow = new google.maps.InfoWindow({
        content: '',
        position: myLatlng,
    });
    infoWindow.open(map);
    map.addListener("dblclick", (mapsMouseEvent) => {
        infoWindow.close();
        infoWindow = new google.maps.InfoWindow({
            position: mapsMouseEvent.latLng,
        });
        var latAndLang = JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2) // **
        locService.getLoc(latAndLang) // **
        infoWindow.setContent(
            latAndLang // **
        );
        infoWindow.open(map);
    });
}

function addMarker(loc) {
    var marker = new google.maps.Marker({
        position: loc,
        map: gMap,
        title: 'Hello World!'
    });
    return marker;
}

function panTo(lat, lng) {
    var laLatLng = new google.maps.LatLng(lat, lng);
    gMap.panTo(laLatLng);
}

function _connectGoogleApi() {
    if (window.google) return Promise.resolve()
    const API_KEY = 'AIzaSyCauVw0aMOumoErJPhnJvrZjFOjZOgq1Fk'; //: Enter your API Key
    var elGoogleApi = document.createElement('script');
    elGoogleApi.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}`;
    elGoogleApi.async = true;
    document.body.append(elGoogleApi);

    return new Promise((resolve, reject) => {
        elGoogleApi.onload = resolve;
        elGoogleApi.onerror = () => reject('Google script failed to load')
    })
}

// function getPos(pos) { // **
//     console.log(pos);
// }