use osassuitdb


// select * from instuctors ;

// db.instuctors.find()


// select first 5 documents 
// select * from instructors limit 5; 
// db.instuctors.find().limit(5)


// select * from instructors where age > 21 ; 
// db.instuctors.find(
//       {"age" : {"$gt":21}}  // send condition in form of object 
// )
// //       
      
// select name , age from tablename;
      
// db.instuctors.find(
//       {"age" : {"$gt":21}},  // send condition in form of object
//      {"name":1, "age":1, "firstName":1} 
// )  
//       
// by default id is displayed 

db.instuctors.find(
      {"age" : {"$gt":21}},  // send condition in form of object
     {"name":1, "age":1, "firstName":1, "_id":0} 
)  
      
      
      