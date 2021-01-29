//Js is a synchromous single-threaded languge(perfom one task at a time in sequence)
//in every JS program, an execution context is created consisting of two sections one is of memory and other is of code
//this is then pushed in the call stack - main thread (this happens for every function present in the program)

console.log(x);                                 //var can be hoisted (global execution - windows[in case of browser],this)
// console.log(y);                              //present in the temporal dead zone (gives not defined exception)

a();                                           //the difference between this function statement and below function expression is hoisiting
// v();                                         //this gives an error as un defined as that function is created in local space

var x = 5;
let y = 7;                                      //can be defined later as well, unlike const

function test(param1){                            //while calling test() it is not necessary to pass a paramter
    var x = 2;                                   //closure helps in remebering show() value of x
    console.log(x);  
    show();                           
    function show(){                            //lexical environment, scope chain (stactrace), this function is formed inside the local scope
        let y = 9;
        console.log("Namaste",y);               //shadowing (let and const are these block scoped)
    }
    console.log(y);     
    return show;                            //we can pass functions as arguments as well as return them from a function
}                                           //(this ability of functions to be treated as value is known as first class functions)

console.log(x);
console.log(test());                              //var is function scoped


// test()();                                     //this calls the show(), similar to the below two lines
var t = test();
t();

function a(){                                   //function statement / function declaration 
    console.log("a called");                    //we cannot use anonymous function as function statement but as expressions
}

var v = function xyz(){                         //function expression (in JS we can assign variable a function (acts as value))
    console.log("b called");                   //we can even return an entire function
}

//due to all the above speciality of functions, they are known as first class citizens in javascript
//when passing function1() into function2(), function1() is called as the call back function (help achieve asynchronity) e.g setTimeOut()
//it also avoids the blocking of main thread

//setTimeOut() and eventListner(), register the call backs in browser's web API env (callback queue/ microtask queue used)
//and later pushed inside call stack for execution this is done by the event loop
//Micro task queue has higher priority, promises and mutation observer are pused inside it rest in callback queue

//Concurrency Model - when using setTimout() the particular function gets registered in the Web API environment and
//timer is started accordingly while the rest of the code is executing via the call stack, and as the timer is over
//that function gets pushed inside the call back queue and checks if the call stack is empty or not. When it gets 
//completely empty the queue pushes the function to the call stack and is executed. setTimout(fn,0) too works same