/*
    forEach
*/


// Basic Method: Print Values Doubed

var arr = [1,2,3,4,5,6];

function double(arr){
    for(var i=0; i< arr.length; i++){
        console.log(arr[i] * 2);
    }
}

double(arr);


// Refactor with forEach

var arr = [1,2,3,4,5,6];

forEach(arr, function(number){
   console.log(number *2); 
});


/******** Definition of forEach **************/

function forEach(array, callback){
    // To be implemented
}
    
// Callback Signature
    function callback(curElement, currentIndex, array){
    // Implemented by the caller of forEach
}