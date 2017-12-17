function countDow(seconds){
    var intervalID = setInterval(function(){
        seconds --;
        if(seconds>0){
            console.log("Timer: ", seconds);
        } else {
            console.log("Ring Ring Ring!!");
            clearInterval(intervalID);
        }
    }, 1000);
}