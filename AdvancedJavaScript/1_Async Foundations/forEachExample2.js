/******** Definition of forEach **************/

function forEach(array, callback){
    // To be implemented
}
    
// Callback Signature
function callback(curElement, currentIndex, array){
    // Implemented by the caller of forEach
}

/******* ACTUAL LONG HAND EXAMPLE OF FOREACH  *******/

var strings = ["my", "forEach", "example"];

var result = " ";

forEach(strings, function(str, index, array){
   if (array.length - 1 !== index){
       result += str + " ";
   } else {
       result += str + "!!!";
   }
});