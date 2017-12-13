/*
    A callback function is...a function that is passed into another
    function as a parameter then invoked by that other function
    
    A higher order function is.. a function that accept a callback
    as a parameter
    
    What are callbacks used for?
    -- Advanced Array Methods
    -- Browser events
    -- AJAX Requests
    -- React Development
*/

function callback() {
    console.log("Coming from callback");
}

// higher order function
function higherOrder(fn){
    console.log("About to call callback");
    fn();   // Callback function is invoked
    console.log("Callback has been invoked");
    
}

higherOrder(callback);