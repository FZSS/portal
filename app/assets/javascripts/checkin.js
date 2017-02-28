function checkIn() {
    
    var result = document.getElementById("result");
    
    if (!navigator.geolocation){
        result.innerHTML = "<p>Geolocation is not supported by your browser</p>";
        return;
    }

    function success(position) {
        var latitude  = position.coords.latitude;
        var longitude = position.coords.longitude;
    
        result.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';
    }
    
    function error(err) {
        result.innerHTML = '<p>Unable to retrieve your location</p>' +
                           'Error ' + err.code + ': ' + err.message;
    }
    
    navigator.geolocation.getCurrentPosition(success, error);
}