import { storageService } from './storage.service.js'
export const locService = {
    getLocs,
    getLoc
}
const DATA_DB='DATA_DB';


const locs = [
    {name: 'Greatplace', lat: 32.047104, lng: 34.832384 }, 
    {name: 'Neveragain', lat: 32.047201, lng: 34.832581 }
]

function getLocs(pos) {
    console.log('aaaaaaaaaaaa');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(locs);
        }, 2000)
    });
    
}

function getLoc(pos){ // **
    console.log(pos);
}



// storageService.save(DATA_DB,locs);