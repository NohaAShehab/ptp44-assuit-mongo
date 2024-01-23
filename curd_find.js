
// find ---> select 


// db.instuctors.find()  /// select * from ; 

// db.instuctors.find({})

// db.instuctors.find(
//     {_id:6}, // condition
//     {_id:1 , firstName:1} // projection 
// )
//     
    
    
// db.instuctors.find(
//     {_id: {"$eq": 10}}, // condition
//     {_id:1 , firstName:1} // projection 
// )
//  


// db.instuctors.find(
//     {_id: {"$gt": 10}}, // condition
//     {_id:1 , firstName:1} // projection 
// )
//     
    
// in operator ---> check if element exists in set of data 
/// get documents salary 1000 , 2000 , 3000 

// db.instuctors.find(
// 
// { 
//     "firstName":"noha",  // comma in the condition object ---> represent and 
//     "salary": {"$in": [1000,3500, 3600]}
//     
//  }, // condition 
// {})
// 
// or oprtator  ---> top level operator 

// db.instuctors.find(
// {
//         "$or": [ {"salary": 3600}, 
//                 {"salary":3500}, 
//                 {"age": {"$gt":21}}
//         ]
//     
//  },  // condition
// {"salary":1, "age":1} // projection
// )


// another solution 

// db.instuctors.find(
// {
//         "$or": [ {"salary": {"$in": [3500, 3600]}}, 
//                 {"age": {"$gt":21}}
//         ]
//     
//  },  // condition
// {"salary":1, "age":1} // projection
// )
// 



////////////  Embeded object //////////////////////////
// 
// db.instuctors.find(
// 
//   {"address": 10 },  // address=10 
//   
//   {}
//   
//   
// )



// db.instuctors.find(
//   {"address.street": 10 },  // address=10 
//   {}
//   
// )

// db.instuctors.find({
//     "address.city": "cairo", "firstName":"noha"
//     
//     },// condition
//    
//     {"fristName":1, "address.city":1, firstName:1}  // projection 
//     
//   )
// 


// array operators 

// db.instuctors.find(
// 
//     {
//        "courses": "js" // mongo shortcut   ---> js exists in courses
//     }, 
//     {}
// 
// )

// get insturctors js , signalR 
// array operators 

// db.instuctors.find(
// {
//     "courses": {"$all": ["js", "signalR"]}  // used when the object contains array 
//     // array contains all values included js , signalR
//  }, 
// 
// 
// {})
// 

/// get instructors -->teach only 3 courses

// db.instuctors.find(
// 
//     {
//             "age": 21,
//             "courses": {"$size":3}
//      }, 
//     
//     {}
// )
// 

////////////////////////////////////////////////////////////////

// find avg of salary for the insturctor 

// element operators ??? 
// $type

// db.instuctors.find(
// {
//         "salary": {"$type": "number"}
//   },
// 
// {}
// )

// db.instuctors.find(
// {
//         "email": {"$exists":true}
//   },
// 
// {}
// )
// 

//////
/// function ---> do operation  ---> return type of functions 
// db.instructors.find().constructor.name   // output DBQuery
// I need to do some operations on the resutled data 

///mongo ---> js env ---> some times you need to do operation on the resulted data ---> 
// provide function toArray ---> convert the result --> DBQuery to ---> js Array 

// jsarray  ---> foreach , sort 
db.instuctors.find({}, {}).toArray()

// db.instuctors.find({}, {}).toArray().constructor.name

///  print full name 


// db.instuctors.find({}, {})
// .toArray()
// .forEach((document)=> {
// //    print(document.firstName)
//     print(`FullName : ${document.firstName} ${document.lastName}`)
//     
//    })

db.instuctors.find({
//     "firstName": {"$exists":true},
//     "lastName": {"$exists": true}
    }, {firstName:1, lastName:1})
.toArray()
.forEach((document)=> {
//    print(document.firstName)
    print(`FullName : ${document.firstName} ${document.lastName}`)
    
   })
//    
//    
 /// mongo --> knows that you may need to loop over the resulted DataConsistencyChecker(
 // using foreach ---> you may need to convert it Toarray
 // mongo shortcut  ---> I can use foreach with ?  DBQuery
db.instuctors.find({}).forEach((document)=>{
print(document);
})


// db.instuctors.find(
// {'firstName': {"$exists":true}},
// {"firstName":1}
// ).forEach((abbass)=> {print(abbass.firstName)})
//    
   
// sum of salary 
let sum = 0;
let no_of_object= 0

db.instuctors.find(
{
//     "salary":{"$exists":true},
    
    "salary": {"$type": "number"}

}, 
{
       "salary":1
}).forEach(
 
    (document)=> {
        sum +=document.salary
        no_of_object +=1
       
     }
)
     
print(sum, no_of_object)
sum=0
no_of_object= 0





















   
   
   
   
   
   
   
   

// check this print(

print("Hello from Ghaza")









{
        "_id" : 6.0,
        "firstName" : "noha",
        "lastName" : "hesham",
        "age" : 21.0,
        "salary" : 3500.0,
        "address" : {
            "city" : "cairo",
            "street" : 10.0,
            "building" : 8.0
        },
        "courses" : [ 
            "js", 
            "mvc", 
            "signalR", 
            "expressjs"
        ]
    },
    {
        "_id" : 7.0,
        "firstName" : "mona",
        "lastName" : "ahmed",
        "age" : 21.0,
        "salary" : 3600.0,
        "address" : {
            "city" : "cairo",
            "street" : 20.0,
            "building" : 8.0
        },
        "courses" : [ 
            "es6", 
         










 







































    {
       "courses": "js" // mongo shortcut   ---> js exists in courses
    }, 
    {}

)

















































    