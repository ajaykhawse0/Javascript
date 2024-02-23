//Singleton,constructor

// const tinderUser = new Object()  // Singleton object
const tinderUser ={} // non-singleton object

tinderUser.id = "234asd"
tinderUser.name = "Ajay"
tinderUser.age = 18
tinderUser.isLoggedIn = true

// console.log(tinderUser);

const regularUser = {
      email: "ajay@rty",
      fullname : {
   userfullname:{
    firstname: "Ajay",
    lastname : "Khawse06"}}}

    // console.log(regularUser)
    // console.log(regularUser.fullname)
    // console.log(regularUser.fullname.userfullname)
    // console.log(regularUser.fullname.userfullname.firstname)
    // console.log(regularUser.fullname.userfullname.lastname)



    const Obj1 = {1:"A",2:"B"}
    const Obj2 = {3:"A",4:"B"}

    // const Obj3 = {Obj1,Obj2}
    // const Obj3 = Object.assign({},Obj1,Obj2) // first one is target and others are sources 
    // that is why there is a n empty paranthises {}
    const Obj3 = {...Obj1,...Obj2}// it is called spread opertor it act same as assign
    console.log(Obj3);

    const Users = [
        {
            id:1,
            email:"s@one",
        },
        {
            id:2,
            email:"d@uyt",

        },
        {
            id:3,
            email:"e@ert",

        }
    ]

    Users[1].email
    console.log( Users[1].email);
    console.log(Object.keys(tinderUser));
    console.log(Object.values(tinderUser));
    console.log(Object.entries(tinderUser));
    console.log(tinderUser.hasOwnProperty('name'));
    
