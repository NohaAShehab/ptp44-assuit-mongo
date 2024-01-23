// db.instructors.drop()
// schema ----> create schema for the collection ? 

// no-sql  ---> Not Only sql ---> 
/// create collection /// define its schema 
// employees - --> name , age

/// create collection with schema
// db.createCollection("employees", 
// {
//        "validator" : {
//            $jsonSchema:{
//                bsonType: "object",  // bson object
//                properties : {
//                    name: {bsonType: "string"},
//                    age: {bsonType: "number"}
//                    
//                    }// properties here are optional
// 
//                }// json schema
//            
//         } // validation rules of my schema 
//     
// } /// option
// );

/// show schema related to the collection 

// db.getCollectionInfos({"name":"employees"})


/// insert data to the collection 

// db.employees.insertOne({
//         "name":"sara", 
//           "age":23
//     
//     })

// db.employees.insertOne({
//         "name":"mohamed" 
//  })
// 

// db.employees.insertOne({
//         "name":"sara", 
//           "age":"iti"
//     
//  })
// 

// db.employees.insertOne({
//         "name":"mohamed", 
//           "age":25, 
//     "email" : "mohamed@gmail.com"
//     
//  })
// 
// 

///// update validation rules on existing schema


/// add salary to the employees schema

// db.employees.runCommand( 'collMod', {
//     
//     "validator" : {
//            $jsonSchema:{
//                bsonType: "object",  // bson object
//                properties : {
//                    name: {bsonType: "string"},
//                    age: {bsonType: "number"},
//                    salary: {
//                         bsonType: "number", 
//                        "minimum": 10000
//                        }
//  
//                   }// properties here are optional
// 
//                }// json schema
//            
//         } // validation rules of my schema 
//     
//     }
// )

// db.employees.insertOne({"name": "ali" ,"salary":10000})

///// allow only specified properties to be added 




// db.employees.runCommand( 'collMod', {
//     
//     "validator" : {
//            $jsonSchema:{
//                bsonType: "object",  // bson object
//                additionalProperties: false,
//                properties : {
//                    name: {bsonType: "string"},
//                    age: {bsonType: "number"},
//                    salary: {
//                         bsonType: "number", 
//                        "minimum": 10000
//                        }
//  
//                   }// properties here are optional
// 
//                }// json schema
//            
//         } // validation rules of my schema 
//     
//     }
// )
// 



// db.employees.insertOne({"name":"noha", 
//     
//   "age":31,"salary":20000})
// 
// 
// db.getCollectionInfos({"name": "employees"})
// 

/// if you disable additional properties 
/// You must addd the id 

// 
// db.employees.runCommand( 'collMod', {
//     
//     "validator" : {
//            $jsonSchema:{
//                bsonType: "object",  // bson object
//                additionalProperties: false,
//                properties : {
//                    _id : {} ,// id bson id object 
//                    name: {bsonType: "string"},
//                    age: {bsonType: "number"},
//                    salary: {
//                         bsonType: "number", 
//                        "minimum": 10000
//                        }
//  
//                   }// properties here are optional
// 
//                }// json schema
//            
//         } // validation rules of my schema 
//     
//     }
// )

// db.employees.insertOne({"name":"noha", 
//     
//   "age":31,"salary":20000})
// 


// id number 


// db.employees.runCommand( 'collMod', {
//     
//     "validator" : {
//            $jsonSchema:{
//                bsonType: "object",  // bson object
//                additionalProperties: false,
//                properties : {
//                    _id : {bsonType: "number"} , 
//                    name: {bsonType: "string"},
//                    age: {bsonType: "number"},
//                    salary: {
//                         bsonType: "number", 
//                        "minimum": 10000
//                        }
//  
//                   }// properties here are optional
// 
//                }// json schema
//            
//         } // validation rules of my schema 
//     
//     }
// )



// db.employees.insertOne({"name":"noha", '_id':11,
//     
//   "age":31,"salary":20000})




//// employee ---> gender male / female 
// 
// db.employees.runCommand( 'collMod', {
//     
//     "validator" : {
//            $jsonSchema:{
//                bsonType: "object",  // bson object
//                additionalProperties: false,
//                properties : {
//                    _id : {bsonType: "number"} , 
//                    name: {bsonType: "string"},
//                    age: {bsonType: "number"},
//                    salary: {
//                         bsonType: "number", 
//                        "minimum": 10000
//                        }, 
//                     gender : {"enum": ["male", "female"]}
//  
//                   }// properties here are optional
// 
//                }// json schema
//            
//         } // validation rules of my schema 
//     
//     }
// )
// 
// 

// db.employees.insertOne({"name":"noha", '_id':15,
//     
//   "age":31,"gender":"female"})
// 
// 




// 
// db.employees.runCommand( 'collMod', {
//     
//     "validator" : {
//            $jsonSchema:{
//                bsonType: "object",  // bson object
//                additionalProperties: false,
//                properties : {
//                    _id : {bsonType: "number"} , 
//                    name: {bsonType: "string"},
//                    age: {bsonType: "number"},
//                    salary: {
//                         bsonType: "number", 
//                        "minimum": 10000, 
//                        "description": "salary must 10000" // docs for developer
//                        }, 
//                     gender : {"enum": ["male", "female"]}
//  
//                   }// properties here are optional
// 
//                }// json schema
//            
//         } // validation rules of my schema 
//     
//     }
// )
// 
// 



// db.employees.insertOne({"name":"noha", '_id':16,
//     
//   "age":31,"salary":"hjkhjkh"})
// 
// 






db.employees.runCommand( 'collMod', {
    
    "validator" : {
           $jsonSchema:{
               bsonType: "object",  // bson object
               additionalProperties: false,
               required : ["name", "age"],
               properties : {
                   _id : {bsonType: "number"} , 
                   name: {bsonType: "string"},
                   age: {bsonType: "number"},
                   salary: {
                        bsonType: "number", 
                       "minimum": 10000, 
                       "description": "salary must 10000" // docs for developer
                       }, 
                    gender : {"enum": ["male", "female"]}
 
                  }// properties here are optional

               }// json schema
           
        } // validation rules of my schema 
    
    }
)





db.employees.insertOne({ '_id':21,
  "age":31})


//// I need to implement unique --->
  
  /// Mongo db --> main focus validata document structure 
 
/// rather  cross-referece values between different documents  



/// install plugins for --> unique validation -node js -
  
  
// MVC ---> Model view Controller ---> model ---> create schema 

























/// add schema to existing collection 


