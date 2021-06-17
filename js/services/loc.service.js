

import {
    storageService
} from './storage.service.js'



export const locService = {
    getLocs,
    getLoc,
    delLoc
    // getUser
}
const DATA_DB = 'DATA_DB';



// {name: 'Greatplace', lat: 32.047104, lng: 34.832384 }, 
// {name: 'Neveragain', lat: 32.047201, lng: 34.832581 }
const locs = storageService.load(DATA_DB) || []

function getLocs(pos) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(locs);
        }, 2000)
    });
}

function getLoc(loc) { // **
    createObj(loc)
}

function createObj(loc) { // **
    // var obj = {}
    // const time = Date.now()
    // // var pos = JSON.parse(loc)

    var pospos = JSON.parse(loc)
    // // console.log('pospos', pospos['lat']);
    // obj.posLat = pospos['lat']
    // obj.posLng = pospos['lng']
    // obj.timeNow = time
    // obj.id = _makeId()

    // // getUser(pos)

    var obj = {
        name: prompt('what is the name of this place?'),
        time: Date.now(),
        id: _makeId(),
        lat: pospos['lat'],
        lng: pospos['lng'],
    }
    console.log(obj);
    locs.push(obj)
    storageService.save(DATA_DB, locs)
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


function delLoc(id){
    console.log('hi im here',id)
    var idx =locs.findIndex(loc=>{
        return loc.id===id})
        console.log(idx)
        locs.splice(idx,1)
        console.log(locs)
        storageService.save(DATA_DB, locs)
       return Promise.resolve(locs)
        
}