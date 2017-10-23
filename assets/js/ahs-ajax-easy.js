function getJSONByCallbacks(url, successHandler, errorHandler){
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('GET', url, true);
    xhr.onload = function() {
        if(xhr.status === 200) {
            var data = (!xhr.responseType)?JSON.parse(xhr.response):xhr.response;
            successHandler && successHandler(data)
        } else {
            errorHandler && errorHandler(`Error: ${xhr.status}`);
        }
    };
    xhr.onerror = function() {
        errorHandler && errorHandler('Network Error!');
    }
    xhr.send(null);
}

function getJSONPByCallbacks(url, successHandler, errorHandler){
    var name = 'jsonp' + new Date().getTime();
    if (url.match(/\?/)) url += '&callback='+name;
    else url += '?callback='+name;
    
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    
    window[name] = function(data){
        document.getElementsByTagName('head')[0].removeChild(script);
        script = null;
        delete window[name];

        successHandler && successHandler(data);
    };

    document.getElementsByTagName('head')[0].appendChild(script);
}