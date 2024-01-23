
// db.instuctors.find({}, {})

// db.instuctors.findOne({}, {}) // return one object ?
//  
// db.instuctors.findOne().constructor.name  // object

// update 

// update students set name='ahmed' where id = 10;
// 
// db.instuctors.updateOne(
// {
//     _id:6, 
// //     "age": {"$gt":21}
// }, // condition that we will use to get the object 
// 
// {
//     // update existing field 
//     "$set": {"lastName":"Shehab"}
//     
// } /// update processes 
// 
// )

/// update different existing fields


db.instuctors.updateOne(
// {
//     _id:6, 
// }, // condition that we will use to get the object 
// 
// {
//     // update existing field 
//     "$set": {"salary":10000, "age":31}
//     
// } /// update processes 
// 
// )
// 



/// update non_existing field 




// db.instuctors.updateOne(
// {
//     _id:6, 
// //     "age": {"$gt":21}
// }, // condition that we will use to get the object 
// 
// {
//     // update existing field  and non existing field
//     "$set": {"firstName":"Noha", "gender": "female"}
//     
// } /// update processes 
// 
// )
// 
// 

/// modify field name 



// db.instuctors.updateOne(
// {
//     _id:6, 
// }, // condition that we will use to get the object 
// 
// {
//     "$rename": {"gender":"Gender"}
//     
// } /// update processes 
// 
// )





// add email field to all documents

// db.instuctors.updateMany({}, 
// {
//     
//         "$set": {"email":"temp@mongo.com"}
//     
// })


// db.instuctors.updateMany({
//         "Gender": {"$exists": false}
//     }, 
// {
//     
//         "$set": {"Gender":"female"}
//     
// })



/// remove property from document ??

// 
// db.instuctors.updateMany(
// {
//     _id: 6
// }, 
// {   
//         "$unset": {"email":""}
//     
// })
// 



/// check this scenario 
// if object doesn't exists for update please create it. 

// db.instuctors.updateMany(
// {
//     _id: 22
// },  // condition
// {   
//         "$set": {"firstName":"Ahmed", "lastName":"Kamale",
//             "salary": 25000}
//  }, // update process
//  {
//         "upsert":true
//   } // update options ---> 
// 
// )



////////////// update embedded objects 



// db.instuctors.updateOne(
// { _id:6},
// {
//     "$set":{"address.street": 100, "address.building":"iti"}
//     
// }
// 
// )


//// update arrays 



/// update array at known index 
// db.instuctors.updateMany(
// {
//     _id: 6
// }, 
// {   
//         "$set": {"courses.0":"JavaScript"} // update at index 
//     
// })
// 

/// update element at array ---> I don't know the index



// 
// db.instuctors.updateMany(
// {
//     _id: 6 , "courses":"mvc"  // 
// }, 
// {   
//      "$set": {"courses.$":"Mongodb"} // unknown index 
// 
// })
// 


// update courses ['admin01', 'php']

// db.instuctors.updateOne(
// {
//     _id: 6 , 
// }, 
// {   
//      "$set": {"courses": ["admin01", "PHP"]}
// 
// })
// 

/// $addToSet
// db.instuctors.updateOne(
// {
//     _id: 6 , 
// }, 
// {   
//      "$addToSet": {"courses": "laravel"}
// 
// })



// db.instuctors.updateOne(
// {
//     _id: 6 , 
// }, 
// {   
//      "$addToSet": {"courses": ["flask", "django"]}
// 
// })

// db.instuctors.updateOne(
// {
//     _id: 6 , 
// }, 
// {   
//      "$addToSet": {"courses":  {"$each":  ["flask","django"]}
//      }
// 
// })
// 
// 
/// push elements to the array

db.instuctors.updateOne(
{
    _id: 6 , 
}, 
{   
     "$push": {"courses":  {"$each":  ["C","C++"]}
     }

})



/// pop element from the array ?
// from beginning  --> -1 /// end /// 1

db.instuctors.updateOne(
{
    _id: 6 , 
}, 
{   
     "$pop": {"courses":-1}


})


/// pop specific element> ? flask

// db.instuctors.updateOne(
// {
//     _id: 6 , 
// }, 
// {   
//      "$pull": {"courses":"flask"}
// 
// 
// })


db.instuctors.updateOne(
{
    _id: 6 , 
}, 
{   
     "$pull": {"courses":"laravel"}


})



// update  --> $inc --> 500 

db.instuctors.updateOne(
{"_id": 7}, 

{
        "$inc": {"salary": 500}
    
}
)























































































































































































































