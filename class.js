class User{

    constructor(name,email){
    this.name = name ;
    this.email = email ;
    }

    viewdata(){
        console.log("here is the data");
    }
 }

class Student extends User{
     
    course = "MCA";

    details(){
        console.log("my name is : " + this.name + " and my email is : " + this.email + ", I am enrolled in " + this.course + ".");
    }
 }

 class Teacher extends User{

    details(education,specification){
        
        console.log("my name is : " + this.name + " and my email is : " + this.email + ", my education is " + education + " and my specification is in " + specification + ".");
    }
 }

let obj = new Student("gargi","gargi@gmail.com");
obj.details();

let obj2 = new Teacher("ashu","ashu@gmail.com");
obj2.viewdata();
obj2.details("phd","data science");
