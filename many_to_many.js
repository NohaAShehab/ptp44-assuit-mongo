// many to many


/// 1-  add student info in the studetn document 
// student {_id, name, subject: [{}, {}, {}]}

//  collection students 

// {
//     "_id" : 1.0,
//     "firstName" : "Ahmed",
//     "lastName" : "Ali",
//     "addresses" : [ 
//         {
//             "city" : "mansoura",
//             "street" : 10.0
//         }, 
//         {
//             "city" : "cairo",
//             "street" : 20.0
//         }
//     ],
//     "department" : 1.0,
//     "subjects" : [  {"_id":1 , "name": "js"}
//       , {"_id":2 , "name": "mongo"}
//     ]
// }
// 
// 
// {
//     "_id" : 2.0,
//     "firstName" : "Ahmed",
//     "lastName" : "Ali",
//     "addresses" : [ 
//         {
//             "city" : "mansoura",
//             "street" : 10.0
//         }, 
//         {
//             "city" : "cairo",
//             "street" : 20.0
//         }
//     ],
//     "department" : 1.0,
//     "subjects" : [  {"_id":1 , "name": "js"}
//       , {"_id":2 , "name": "mongo"}
//     ]
// }


//// add students to each subject 
// student studies 5 subjexts ////----> insert --> much ....
// data about one student ====> check if students exists in all subject===

// subject {_id, subname, students: [{}, {}, {}]


//// third aproach ?
// new collection ---> {sub_id , student_id } //// data reterival 
/// student  ====> student_subject ---> subjects ---> get data from subjects collection 


/// 4th approach 
//      subject {_id, subname, students: [1,2,3,4]}
///  student {_id, name, subject: [_id ,1,4,5]}
        

// 5th approach
//   subject {_id, subname, students: [1,2,3,4]}


/// 6th
///  student {_id, name, subject: [_id ,1,4,5]}

//// save only important info 

student {_id, name, subject: [{_id, name}, {_id, name}]}


//// save student grade in each subject 
/// name ---> 90% will not be changed 
// student {_id, name, "subject": [{_id, name, std_score}, {_id, name}, {}]}


/// get students and the subject he/she study 

db.students.find({"subjects": {$exists:true}}, {"subjects":1})


//print student with subject names
// get subjects 

let allsubjects = db.subjects.find({}, {name:1}).toArray()

print(allsubjects)

//  get the students with their subjects 

db.students.find({
    "subjects":{"$exists":true},
    "subjects": {"$type": "array"}
    } ,
 {}).forEach((document)=> {
     
//      print(document.subjects)
     // print student name and subject names
     
     subjects_ = ""
     for (i of document.subjects) {
//          print(i)
         subname = allsubjects.find((element)=>element._id==i)
//       ` print(subname.name)
         subjects_ +=subname.name +" " 
         }
//      
//     print(subjects_)
         
         print(`${document.firstName} studies ${subjects_}`)
         
  })




































