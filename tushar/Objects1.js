//SINGLETON-The Singleton Pattern is a design pattern that ensures a class has only one instance while providing a global point of access to that instance.

// Object Literals

const MYsymbol = Symbol("key1")

const JSuser= {
    name : "Ajay",
    age : 17,
    [MYsymbol] :" mykey1",
    location: "Multai",
    email : "ajay@gmail" , 
     isLoggedIn : true
    
}
JSuser.email="ajay@yahoo.in"

console.log(JSuser.email)
console.log(JSuser["email","name"])
console.log(JSuser[MYsymbol].trim());
console.log(typeof JSuser[MYsymbol]);
// Object.freeze(JSuser)
JSuser.email="ajay@ert"

console.log(JSuser);

///// functions///

JSuser.greeting = function () {console.log("HELLO JS USER");
}




console.log(JSuser.greeting);
console.log(JSuser.greeting());

JSuser.greetingTWO = function () {console.log(`HELLO JS USER ,${this.age}`);
}
console.log(JSuser.greetingTWO());
