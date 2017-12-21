
var XHR = new XMLHttpRequest();

// event listener
XHR.onreadystatechange = function() {
    if(XHR.readyState == 4){
        if(XHR.status == 200){
            console.log(XHR.responseText);
        } else {
            console.log("There is a problem!");
        }
    }
}

XHR.open("GET", "https://api.github.com/zen");  // type of request
XHR.send(); // initiate