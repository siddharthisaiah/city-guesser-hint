function passEssentials() {
    let main = {};
    main.lat_lon = random_lat_lon || null;

    return main;
}


let temps = {
    'coordinates': null
}

const isNewCoordinates = function (newCoordinates) {
    let isNewCoords = false;
    if(newCoordinates && temps.coordinates != newCoordinates) {
	isNewCoords = true;
	temps.coordinates = newCoordinates;
    }

    return isNewCoords
}




function setGlobalMarkerCoords(lat, lon) {
    globallat = lat;
    globallon = lon;
}





setInterval(() => {
    essential = passEssentials();
    window.postMessage({'type': 'FROM_PAGE', essential});
}, 1000);
