//const tinderUser=new Object()
//console.log(tinderUser);

 const tinderUser={}
 tinderUser.id="123abc"
 tinderUser.name="Sammy"
 tinderUser.isLoggedIn=false
 //console.log(tinderUser);
const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"devesh",
            lastname:"sing"
        }
    }
}

//console.log(regularUser.fullname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
//const obj3={obj1,obj2}
//console.log(obj3);
//most used method
const obj3={...obj1,...obj2}
//console.log(obj3);


//database se object

const users=[
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:2,
        email:"h@gmail.com"
    },
    {
        id:3,
        email:"h@gmail.com"
    },
    {
        id:4,
        email:"h@gmail.com"
    }
]

users[1].email
//console.log(tinderUser);
//console.log(Object.keys(tinderUser));
//console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser));
//console.log(tinderUser.hasOwnProperty('isLoggedIn'));

//OBJECT DESTRUCTURING
const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"devesh"
}
//acess karna
//course.courseInstructor

///new method
//destructoring of object
const {courseInstructor:instructor}=course
//console.log(courseInstructor);
//console.log(instructor);

/*{
    "name":"devesh",
    "coursename":"js in hindi",
    "price":"free"
}*/
[
{},
{},
{}
]