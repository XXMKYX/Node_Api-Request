const request = require('request');

request.get('https://api.coingecko.com/api/v3/ping',function(error,response,body){
    console.log(error); //Error
    //console.log(response); //Respuesta Servidor
    console.log(body); //Contenido 
})