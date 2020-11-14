// VARIABLES
    // TRAINER
const trainerFirstName = document.getElementById("trainerFirstName");
const trainerLastName = document.getElementById("trainerLastName");
const trainerSubject = document.getElementById("trainerSubject");
    // STUDENT
const studentFirstName = document.getElementById("studentFirstName");
const studentLastName = document.getElementById("studentLastName");
const dateOfBirth = document.getElementById("dateOfBirth");
const tuitionFees = document.getElementById("tuitionFees");
    // COURSE
const courseTitle = document.getElementById("courseTitle");
const courseStream = document.getElementById("courseStream");
const courseType = document.getElementById("courseType");
const start_date = document.getElementById("start_date");
const end_date = document.getElementById("end_date");
    //ASSIGNMENT
const assignmentTitle = document.getElementById("assignmentTitle");
const assignmentDescription = document.getElementById("assignmentDescription");
const assignmentSubDate = document.getElementById("assignmentSubDate");
const assignmentOralMark = document.getElementById("assignmentOralMark");
const assignmentTotalMark = document.getElementById("assignmentTotalMark");
const message = document.querySelectorAll("message");


//Our object constructors
class Course {
    constructor(title, stream, type, startDate, endDate) {
        this.title = title;
        this.stream = stream;
        this.type = type;
        this.startDate =startDate;
        this.endDate= endDate;
    }
}

class Student {
    constructor(firstName, lastName, dateOfBirth, tuitionFees) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.tuitionFees = tuitionFees;
    }
}

class Assignment {
    constructor(assignmentTitle, assignmentDescription, assignmentSubDate, assignmentOralMark, assignmentTotalMark) {
        this.assignmentTitle = assignmentTitle;
        this.assignmentDescription = assignmentDescription;
        this.assignmentSubDate = assignmentSubDate;
        this.assignmentOralMark = assignmentOralMark;
        this.assignmentTotalMark =assignmentTotalMark;
    }
}

class Trainer {
    constructor(trainerFirstName, trainerLastName, trainerSubject) {
        this.trainerFirstName = trainerFirstName;
        this.trainerLastName = trainerLastName;
        this.trainerSubject = trainerSubject;
    }
}

// STUDENT INSTANCE
let addStudent = function () {   
    let student = new Student(studentFirstName.value, studentLastName.value, dateOfBirth.value, tuitionFees.value);
    console.log(student);
}


// TRAINER INSTANCE
let addTrainer = function () {
    let trainer = new Trainer(trainerFirstName.value, trainerLastName.value, trainerSubject.value);
    console.log(trainer);
}


// COURSE INSTANCE
let addCourse = function () {
    let course = new Course(courseTitle.value, courseStream.value, courseType.value, start_date.value, end_date.value);
    console.log(course);
}


// ASSIGNMENT INSTANCE
let addAssignment = function () {
    let assignment = new Assignment(assignmentTitle.value, assignmentDescription.value, assignmentSubDate.value, assignmentOralMark.value, assignmentTotalMark.value);
    console.log(assignment);
}


//VALIDATION
// ----> the validation can call the instance to be created
let nameValidate = function (name) {
    let isNotLetters = new RegExp(/[\d\W]/)
    names = new Array[trainerFirstName, trainerLastName, studentFirstName, studentLastName];
    for ( name in names) {
        if (isNotLetters.test(names) === false) {
            
        }
    }
}


//EVENT LISTENERS
// ----> the
