

import {
    storageService
} from './storage.service.js'



export const locService = {
    getLocs,
    getLoc
    // getUser
}
const DATA_DB = 'DATA_DB';


const locs = [{
        name: 'Greatplace',
        lat: 32.047104,
        lng: 34.832384
    },
    {
        name: 'Neveragain',
        lat: 32.047201,
        lng: 34.832581
    }
]

function getLocs(pos) {
    return new Promise((resolve, reject) => {
        // setTimeout(() => {
            resolve(locs);
        // }, 2000)
    });
}

function getLoc(loc) { // **
    createObj(loc)
}

function createObj(loc) { // **
    var obj = {}
    const time = Date.now()
    // var pos = JSON.parse(loc)
    
    var pospos = JSON.parse(loc)
    // console.log('pospos', pospos['lat']);
    obj.posLat = pospos['lat']
    obj.posLng = pospos['lng']
    obj.timeNow = time
    obj.id = _makeId()

    // getUser(pos)
    console.log(obj);
    storageService.save('user-data', obj)
}

function _makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}


function getUser(userDatas) {
    console.log(userDatas)
    // return userDatas
    // render(userDatas)
}

// storageService.save(DATA_DB,locs);