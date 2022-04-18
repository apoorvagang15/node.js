const express = require('express');
const https = require('https');

const app = express();

app.get("/", function(req, res){
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Noida&appid=dcd598afc658fb3cc40c53b7bab0f6d2&units=metrics";
    https.get(url, function(response){
        
        console.log(response.statusCode);
        response.on("data", function(data){
            const weather = JSON.parse(data);
            const temp= weather.main.temp;
            console.log(temp);
            res.send("<h1>Temp of Noida is "+temp +"C</h1>");

        });
    });

    // res.sendFile(__dirname+"/index.html");

});

app.listen(3000, function(){
    console.log("started");
});