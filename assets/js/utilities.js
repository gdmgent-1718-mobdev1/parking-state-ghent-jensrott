// Reusable function

function getJSON(url, succesHandler, errorHandler){
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json'
    xhr.open('GET', url, true)
    xhr.onload = function(){
        if(xhr.status == 200){
            var data = (!xhr.responseType)?JSON.parse(response):xhr.response;
            succesHandler && succesHandler(data)
        } else{
            errorHandler && errorHandler(xhr.status)
        }
    };
    xhr.onerror = function(){
        errorHandler && errorHandler('network Error')
    };
    
    xhr.send(null);
    };