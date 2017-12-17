/*
    findIndex defintion
    Returns the index of the first element in the array for which the callback
    returns a truthy value. -1 is returned if the callback never returns a truthy value.

    function findIndex(array, callback){
        // findIndex code to be implemented
    }
    
    function callback(currentElement, currentIndex, array){
        // callback implemented by caller of function    
    }
    
*/



function findIndex(arr, callback){
    for(var i = 0; i <arr.length; i++){
                    // (currentElement, currentIndex, array)        
        if(callback(arr[i], i, arr)){
            return i;
        }
    }
    return -1;
    
}