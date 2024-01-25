

let departments = [
    {"_id":1, "name":"opensource", "location":"3rdfloor", "phone":12345},

    {"_id":2, "name":"sd", "location":"2ndfloor", "phone":12345},
    {"_id":3, "name":"ai", "location":"1stfloor", "phone":12345},

    {"_id":4, "name":"cloud", "location":"3rdfloor", "phone":12345},
    {"_id":5, "name":"graphics", "location":"3rdfloor", "phone":12345},

]



let students = [

    {"_id":1, "firstName": "Ahmed", 
    "lastName":"Ali", 
    "addresses": [
        { "city": "mansoura", "street":10 },
        { "city": "cairo", "street":20}],

        "department":1, 
        "subjects": [1,2,5] 

    },
    
    
    {"_id":2, "firstName": "Mohamed", 
    "lastName":"Ali", 
    "addresses": [
        { "city": "alex", "street":10 },
        { "city": "cairo", "street":30}],

        "department":2, 
        "subjects": [3,2,5] 

    },

    {"_id":3, "firstName": "Omar", 
    "lastName":"Ahmed", 
    "addresses": [
        { "city": "mansoura", "street":100 }],
        "department":2, 
        "subjects": [3,2,5] 

    },

    {"_id":4, "firstName": "Mohamed", 
    "lastName":"Ahmed", 
    "addresses": [
        { "city": "Assuit", "street":100 }],
        "department":2, 
        "subjects": [3,4,5] 

    }

]
    
    
// db.departments.insertMany(departments)
    
db.students.insertMany(students)