/*
    Objectives
    ---------------------------------------------------------------
    
    = Define the event loop and the queue
    ---------------------------------------------------------------------------
        The Queue
        - An ordered list of functions waiting to be placed on the stack
        - Functions in the queue are processed on a first in, first out (FIFO)
        
        The Event Loop
        - Functionality in the JavaScript runtime that checks the queue when
            the stack is empty
        - If the stack is empty, the front of the queue is placed in the stack
        
    = Describe how the event loop and the queue work with the stack
    ---------------------------------------------------------------------------
    
    = Define JavaScript as a single threaded language
    ---------------------------------------------------------------------------
        - Single Threaded: Code execution is linear. Code that is running cannot
            be interrupted by something else going on in the program.

*/