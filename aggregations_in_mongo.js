// aggregation and pipeline



// db.instuctors.aggregate([]) /// apply stages on the data 
/// db.instuctors.find()


/// how to use the aggregate 


// db.instuctors.aggregate(
// [
// 
//     {
//         $match: {"age": {$gt: 21}, "lastName":{"$exists":1}}
//     }// age > 21 ---> first_stage
//     // I need to take the out of the first stage ==> sort 
//     ,{
//         $sort : {"firstName":1, "lastName":1}
//       } // sort data 
// 
// ])

/// projection on data  ---> stage 3 

// db.instuctors.aggregate(
// [
//     {
//         $match: {"age": {$gt: 21}, "lastName":{"$exists":1}}
//     }// age > 21 ---> first_stage
//     ,{
//         $sort : {"firstName":1, "lastName":1}
//     } ,// sort data 
//     {
// //          $project: {"firstName":1, "lastName":1, "salary":1}
//         $project: {"fullname": {$concat: ["$firstName", " ", "$lastName"]}
//             , "salary":1}
// 
//      }, /// stage three projection 
//      // create newcollection with this result
//      {
//          $out: "insturctors_data"// save the output doc to new collection
//      }
// //    
// ])
 
/////****************check this *********************

// db.instuctors.aggregate(
// [
//     {
//         $match: {"age": {$gt: 21}, "lastName":{"$exists":1}}
//     }// age > 21 ---> first_stage
//     ,{
//         $sort : {"firstName":1, "lastName":1}
//     } ,// sort data 
//     {
// //          $project: {"firstName":1, "lastName":1, "salary":1}
// //         $project: {"fullname": {$concat: ["$firstName", " ", "$lastName"]}
// //             , "salary":1}
//         $project: {"fullname": {$concat: ["$firstName", " ", "$lastName"]}
//             , "salary":1, _id:0} //// DON'T DO THIS
// 
//      }, /// stage three projection 
//      {
//          $out: "insturctors_data"// save the output doc to new collection
//      }
// //    
// ])

/// display salary ---> net salary
// db.instuctors.aggregate(
// [
//     {
//         $match: {"age": {$gt: 21}, "lastName":{"$exists":1}}
//     }
//     ,{
//         $sort : {"firstName":1, "lastName":1}
//     } ,// sort data 
//     {
//         $project: {"fullname": {$concat: ["$firstName", " ", "$lastName"]}
//             , "salary":1, 
//             "netsalary": {$multiply: ["$salary", .8]}
//         }
// 
//      }
//     
// ])
// 


/// display ---> additional info ===> no_of courses
// db.instuctors.aggregate(
// [
//     {
//         $match: {"age": {$gt: 21}, "lastName":{"$exists":1}}
//     }
//     ,{
//         $sort : {"firstName":1, "lastName":1}
//     } ,// sort data 
//     {
//         $project: {"fullname": {$concat: ["$firstName", " ", "$lastName"]},
// //             "netsalary": {$multiply: ["$salary", .8]}, 
//             "additional_info": {
//                  "netsalary": {$multiply: ["$salary", .8]},
//                  "no_of_courses": {$size: "$courses"}
//                }
//         }
//      }, {
//          
//          $out: "instructor_bio"
//      }    
// ])
///////// 

// **************** get number of instucturs ---> *****************/


// db.instuctors.aggregate([
//     {
//             $match: {age: {$gt:20}}
//     }, 
//     
//     {
//             $group: {_id:"$age"}  // _id ---> field used with grouping 
//        
//     }
//     
// ])



//////////////////******* display no_of_instructor have the same age ***********////////

// db.instuctors.aggregate([
//     {
//             $match: {age: {$gt:20}}
//     }, 
//     
//     {
//             $group: {
//               _id : "$age", /// this the field I want to group with
//                 // step two --> get no_of_instructor for each age 
//               "number_of_instrucors_have_same_age": {$sum:1} ,    /// count no of inst. in each age
//               "total_salaries": {$sum: "$salary"}
//               }
//        
//     }
//     
// ])

///// get max salary 


// db.instuctors.aggregate([
//     {
//             $match: {age: {$gt:20}}
//     }, 
//     
//     {
//             $group: {
//               _id : "$age", /// this the field I want to group with
//               "number_of_instrucors_have_same_age": {$sum:1} ,    /// count no of inst. in each age
//               "total_salaries": {$sum: "$salary"}, 
//               "maxsalary": {$max: "$salary"}, 
//               "minsalary": {$min: "$salary"}
//               }
//        
//     }
//     
// ])

/// projection after grouping 
// db.instuctors.aggregate([
//     {
//             $match: {age: {$gt:20}}
//     }, 
//     
//     {
//             $group: {
//               _id : "$age", /// this the field I want to group with
//               "number_of_instrucors_have_same_age": {$sum:1} ,    /// count no of inst. in each age
//               "total_salaries": {$sum: "$salary"}, 
//               "maxsalary": {$max: "$salary"}, 
//               "minsalary": {$min: "$salary"}
//               }
//        
//     }, 
//     {
//         
//         $project : {
//             
//             "salary_info": {
//                 "minsal": "$minsalary", 
//                 "maxsal": "$maxsalary",
//                 "total": "$salary", 
//                 "age": "$_id"
//                 }
//                 
//        }
//     } // accept my input from the previous stage
//     
// ])
// 
///////////***group instructors with the same age and lives in the same city**/////////////////

// db.instuctors.aggregate([
//     {
//             $match: {age: {$gt:20}}
//     }, 
//     
//     {
//             $group: {
// //               _id : "$age"   //// _id ---> grouping fields 
//                 // grouping by 2 fields 
//                 _id : { "age":"$age", "city":"$address.city" }, 
//                 "total_number": {"$sum":1}
//                 
//              }
//        
//     }, 
//     {
//         
//         $project : {
//                 "age": "$_id.age", 
//                 "city": "$_id.city", 
//                 "no_of_instructors": "$total_number",
//                 _id: 0       
//         }
//         
//     } // projection 
//     
//     
// ])
// 
// 
// 
// 
// 
// 

///////////////////////////////////////////////////////////////////////////////

/// //**************************  lookup ***********************************//

/// used with referenced data  ---> join
 
// db.students.aggregate([
//     {
//             $match: {"department":{"$exists":true}}
//     } ,   
//     {
//         $lookup:{
//             from: "departments", // collection name 
//             localField: "department", /// fieldname in students
//             foreignField: "_id", /// fieldname --> departments
//             as: "dept_info"
//             
//         }   // lookup ---> return with array of objects
//     }, 
//     {
//         
//             $project: {
//                 
//                 "fullname": {$concat: ["$firstName", " ", "$lastName"]}
//                 ,
// //                 "dept_name": "$dept_info"
//                 
//                 "dept_name": {$arrayElemAt: ["$dept_info",0]}
//                 
//                 }
//      }, 
//      {
//          $project: {
//                     "fullname": "$fullname",
//                     "dept_name": "$dept_name.name"
//                 
//                 }
//       }
// //        
// ])
// 
// 

//// subjects 


db.students.aggregate([
    {
            $match: {"department":{"$exists":true}}
    } ,   
    {
        $lookup:{
            from: "subjects", // collection name 
            localField: "subjects", /// fieldname in students
            foreignField: "_id", /// fieldname --> departments
            as: "sub_info"
            
        }   // lookup ---> return with array of objects
    }, 
    {
        
          $project: {
              "sub_1": {$arrayElemAt: ["$sub_info", 0]},
               "sub_2": {$arrayElemAt: ["$sub_info", 1]}
              
              }
        
    }
   
//        
])








































































































































































































// select concat(firstname, ' ', lastname as fullname);














































