$(document).ready(function(){
        //get current location

       navigator.geolocation.getCurrentPosition(success, error);
        
        //if get location
        function success(pos){
            var lat = pos.coords.latitude;  //find latitude from position object
            var lon = pos.coords.longitude; //find longitude in position object
            weather(lat, lon);      
        }

        function error(){       //if error
            console.log('error found', error);
        }

        //weather function
        
        function weather(lat, lon){
        var URL = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${lon}`;        //replace coords with lat and lon parameters
        $.getJSON(URL, function(data){
            updateData(data);
        });
    }
        //update the weather data

        function updateData(data){
        var city = data.name;   //city name from object
        var temp = data.main.temp;  //tempreture from object
        var desc = data.weather[0].description;     //description form object [index 0]
        var icon = data.weather[0].icon;    //icon from object [index 0]
        $('#city').html(city);  
        $('#temp').html(Math.round(temp));
        $('#desc').html(desc);
        $('#icon').attr('src', icon);       //replace weather icon with icon form object
    }
});
