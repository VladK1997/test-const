 function sendRequest(url ,callback,send){
        if(typeof url !== 'string') return;
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.send();
        xhr.onreadystatechange = function() {
            if (this.readyState != 4) return;
            if (this.status != 200) {
                alert( 'ошибка: ' + (this.status ? this.statusText : 'запрос не удался') );
                return;
            }
            var data = JSON.parse(this.responseText);
            if(typeof callback !== 'undefined'){
                callback(data);
            }
        }
    }
    function getCategoryJoke(category){
        if(typeof category !== 'string') return;
        sendRequest('https://api.chucknorris.io/jokes/random?category=' + category, function(data){
            if(typeof data !== 'undefined' && typeof data.value === 'string'){
                printJoke(data.value);
            }
        });
    }

     function uploadFile(uploadUrl, file) {
         var xhr = new XMLHttpRequest();
         xhr.onprogress = function (e) {
          ...
         };

         xhr.onload = function (e) {
          ...
         };

         xhr.onerror = function (e) {
          ...
         };
         xhr.open("post", uploadUrl, true);
         xhr.setRequestHeader("Content-Type", "multipart/form-data");
         xhr.setRequestHeader("X-File-Name", file.name);
         xhr.setRequestHeader("X-File-Size", file.size);
         xhr.setRequestHeader("X-File-Type", file.type);
         xhr.send(file);
     };
 };
