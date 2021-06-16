export const storageService = {
    load: loadFromStorage,
    save: saveToStorage
}


function saveToStorage(key, val) {
    localStorage.setItem(key, JSON.stringify(val))
}

function loadFromStorage(key) {
    const json = localStorage.getItem(key)
    return JSON.parse(json)
}