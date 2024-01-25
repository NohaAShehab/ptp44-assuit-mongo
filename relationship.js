/// relationship

/// I need to ask you if you use reference to another collection 
// 
// db.students.insertOne({
//     "_id" : 15,
//     "firstName" : "Mohamed",
//     "lastName" : "Ahmed",
//     "addresses" : [ 
//         {
//             "city" : "Assuit",
//             "street" : 100.0
//         }
//     ],
//     "department" : 10,  // foreign key 
//     "subjects" : [ 
//         3.0, 
//         4.0, 
//         5.0
//     ]
// })

///////////////////////////////
/// ****************print student with dept info ***************
// db.students.find(
// {    "department":{"$exists":true}
// 
// }, 
//     {"firstName":1, "lastName":1 , "department":1} // projection
// 
// ).forEach((document)=> {
// //         print(document.department)
//        dept= db.departments.findOne({"_id": document.department})
// //        print(dept)
// //        /// student info
//        print(` "fullname":${document.firstName} ${document.lastName} ${dept.name}`)
//        
//     
//  })  // in forEach  ---> pure js  
// 



//////////////////////



// db.students.find(
// {    "department":{"$exists":true}
// 
// }, 
//     {"firstName":1, "lastName":1 , "department":1} // projection
// 
// ).forEach(
//  (document)=>{
//      // get deptname for each student ./// given dept_id? 
//      
//      /// another find statement --> to get dept name
//      
//      dept = db.departments.findOne({_id: document.department})
// //      print(dept)
//      // print student data 
//      
//      print(` ${document.firstName} ${document.lastName} at dept: ${dept.name}`)
//      
//      }  
//     
//     
//  )
/// better performance 

// db.students.find(
// {    "department":{"$exists":true, "$type":"number"}
// 
// }, 
//     {"firstName":1, "lastName":1 , "department":1} // projection
// 
// ).forEach(
//  (document)=>{
//      // get deptname for each student ./// given dept_id? 
//      /// another find statement --> to get dept name
//      dept = db.departments.findOne({_id: document.department}, {"name":1})
// //      print(dept)
//      // print student data 
//      if (dept){
//      print(` ${document.firstName} ${document.lastName} at dept: ${dept.name}`)
//     } else{
//              print(` ${document.firstName} ${document.lastName} at dept:null `)
// 
//      }
//     }  
//  )
// 

/// the deptartments appeared many times - --> search about it again

/// reduce time to get dept  ===> dept shared between many documents



alldepts=db.departments.find({}, {_id:1, name:1}).toArray()

print(alldepts)  /// get once 


db.students.find(
{    "department":{"$exists":true, "$type":"number"}

}, 
    {"firstName":1, "lastName":1 , "department":1} // projection

).forEach(
 (document)=>{
    // search about dept name in the array 
     /// array.find --> return with first element statisfy condition 
     /// alldepts ---> array of objects 
     dept= alldepts.find( (element)=> element._id== document.department )
    if (dept){
     print(` ${document.firstName} ${document.lastName} at dept: ${dept.name}`)
    } else{
             print(` ${document.firstName} ${document.lastName} at dept:null `)

     }
    
     
  }  
 )

//////// es6 ==> array functions  ---> array.find ,  array.findIndex














































































