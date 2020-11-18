// ------------> VARIABLES <------------
    // TRAINER
let trainerId = 1;
let trainerArray = [];

    // STUDENT
let studentId = 1;
let studentArray = [];


    // COURSE
let courseId = 1;
let courseArray = [];

    // ASSIGNMENT
let assignmentId = 1;
let assignmentArray = [];

    // FORM TOGGLE
const toggleTrainerForm = document.getElementById("toggleTrainer");
const toggleStudentForm = document.getElementById("toggleStudent");
const toggleTrainer_CourseForm = document.getElementById("toggleTrainer_Course");
const toggleStudent_CourseForm = document.getElementById("toggleStudent_Course");
const toggleCoursesform = document.getElementById("toggleCourses");
const toggleAssingmentsform = document.getElementById("toggleAssignments");
const toggleAssignments_CourseForm = document.getElementById("toggleAssignments_Course");
const toggleBigForm = document.getElementById("toggleBigForm");
let message = document.querySelectorAll(".message");

// LIST NUMBERING


// for Forms
const toggleTrainer = toggleTrainerForm.addEventListener("click", function(){ 
    return toggleForm(trainers);
});
const toggleStudent = toggleStudentForm.addEventListener("click", function(){ 
    return toggleForm(students);
});
const toggleCourses = toggleCoursesform.addEventListener("click", function(){ 
    return toggleForm(courses);
});
const toggleAssignments = toggleAssingmentsform.addEventListener("click", function(){ 
    return toggleForm(assignments);
});
const toggleTrainer_Course = toggleTrainer_CourseForm.addEventListener("click", function(){ 
    return toggleForm(trainersPerCourse);
});
const toggleStudent_Course = toggleStudent_CourseForm.addEventListener("click", function(){ 
    return toggleForm(studentsPerCourse);
});
const toggleAssignments_Course = toggleAssignments_CourseForm.addEventListener("click", function(){ 
    return toggleForm(assignmentsPerCourse);
});
const toggleBig_Form = toggleBigForm.addEventListener("click", function(){ 
    return toggleForm(assignmentsStudentCourse);
});


// Toggle Function
function toggleForm (form) {
    if (form.style.display === "none" || form.style.display === "") {
        form.style.display = "block";
    } else {
        form.style.display = "none";
    }
    form.addEventListener("submit", function(x) {
        x.preventDefault();
    })
}


//Makes an array of objects
const newCourse = courses.addEventListener("submit", function(){

    function check() {
        let addCourse = function () {
            let course = new Course(courses.title.value, courses.type.value, courses.stream.value, courses.start_date.value, courses.end_date.value, courseId);
            courseArray.push(course);
            courses.title.value = ""; 
            courses.type.value = "";
            courses.stream.value = "";
            courses.start_date.value = "";
            courses.end_date.value = "";
            console.log(course);
        }
        addCourse();
        newLine();
        }

    let newLine = function() {
        thisEntry = courseId -1 ;
        let ulData = document.querySelector(".ul.data");
        let entry = document.createElement("li");
        entry.append(`Course ID :${courseId} - Title: ${courseArray[thisEntry].title}, Type: ${courseArray[thisEntry].type}, Stream: ${courseArray[thisEntry].stream}. From ${courseArray[thisEntry].startDate} to ${courseArray[thisEntry].endDate} `);
        ulData.appendChild(entry);
        courseId++;
    }
    check();
});

const newTrainer = trainers.addEventListener("submit", function() {

    function check() {
      
        let addTrainer = function () {
            let trainer = new Trainer(trainers.trainerFirstName.value, trainers.trainerLastName.value, trainers.trainerSubject.value, trainerId);
            trainerArray.push(trainer);
            trainers.trainerFirstName.value = "";
            trainers.trainerLastName.value = "";
            trainers.trainerSubject.value = "";
            console.log(trainerArray);
        }
    addTrainer();
    newLine();
    }
    
    let newLine = function() {
        thisEntry = trainerId -1 ;
        let ulData = document.querySelector(".ul.data");
        let entry = document.createElement("li");
        entry.append(`Trainer ID: ${trainerId} - Name: ${trainerArray[thisEntry].trainerFirstName}, ${trainerArray[thisEntry].trainerLastName}, Subject ${trainerArray[thisEntry].trainerSubject}`);
        ulData.appendChild(entry);
        trainerId++;
    }
    check();
});

const newStudent = students.addEventListener("submit", function() {
    function check() {
        let addStudent = function () {   
        let student = new Student(students.studentFirstName.value, students.studentLastName.value, students.dateOfBirth.value, students.tuitionFees.value, studentId);
        studentArray.push(student);
        students.studentFirstName.value = "";
        students.studentLastName.value = "";
        students.dateOfBirth.value = "";
        students.tuitionFees.value = "";
        console.log(studentArray);
        }
        addStudent();
        newLine();
    }

    let newLine = function() {
        thisEntry = studentId -1 ;
        let ulData = document.querySelector(".ul.data");
        let entry = document.createElement("li");
        entry.append(`Trainer ID: ${studentId} - Name :${studentArray[thisEntry].studentFirstName}, ${studentArray[thisEntry].studentLastName}, born ${studentArray[thisEntry].dateOfBirth}. Tuition: ${studentArray[thisEntry].tuitionFees}€`);
        ulData.appendChild(entry);
        studentId++;
    }
    check();
});

const newAssignment = assignments.addEventListener("submit", function() {
    function check() {
        let addAssignment = function () {   
        let assignment = new Assignment(assignments.assignmentTitle.value, assignments.assignmentDescription.value, assignments.assignmentSubDate.value, assignments.assignmentOralMark.value, assignments.assignmentTotalMark.value, assignmentId);
        assignmentArray.push(assignment);
        assignments.assignmentTitle.value = "";
        assignments.assignmentDescription.value = "";
        assignments.assignmentSubDate.value = "";
        assignments.assignmentOralMark.value = "";
        assignments.assignmentTotalMark.value = "";
        console.log(assignmentArray);
        }
        addAssignment();
        newLine();
    }

    let newLine = function() {
        thisEntry = assignmentId -1 ;
        let ulData = document.querySelector(".ul.data");
        let entry = document.createElement("li");
        entry.append(`Assignment ID: ${assignmentId} - Title: ${assignmentArray[thisEntry].assignmentTitle}, Description: ${assignmentArray[thisEntry].assignmentDescription}, Submission Date ${assignmentArray[thisEntry].assignmentSubDate}. Oral mark: ${assignmentArray[thisEntry].assignmentOralMark}, Total Mark: ${assignmentArray[thisEntry].assignmentTotalMark}`);
        ulData.appendChild(entry);
        assignmentId++;
    }
    check();
});


//Our object constructors
class Course {
    constructor(title, stream, type, startDate, endDate, courseId) {
        this.title = title;
        this.stream = stream;
        this.type = type;
        this.startDate = startDate;
        this.endDate = endDate;
        this.courseId = courseId;
    }
}

class Student {
    constructor(studentFirstName, studentLastName, dateOfBirth, tuitionFees, studentId) {
        this.studentFirstName = studentFirstName;
        this.studentLastName = studentLastName;
        this.dateOfBirth = dateOfBirth;
        this.tuitionFees = tuitionFees;
        this.studentIdid = studentId;
    }
}

class Assignment {
    constructor(assignmentTitle, assignmentDescription, assignmentSubDate, assignmentOralMark, assignmentTotalMark, assignmentId) {
        this.assignmentTitle = assignmentTitle;
        this.assignmentDescription = assignmentDescription;
        this.assignmentSubDate = assignmentSubDate;
        this.assignmentOralMark = assignmentOralMark;
        this.assignmentTotalMark =assignmentTotalMark;
        this.assignmentId =assignmentId;
    }
}

class Trainer {
    constructor(trainerFirstName, trainerLastName, trainerSubject, trainerId) {
        this.trainerFirstName = trainerFirstName;
        this.trainerLastName = trainerLastName;
        this.trainerSubject = trainerSubject;
        this.trainerId = trainerId;
    }
}

//VALIDATION
let nameValidate = function (name) {
    let isNotLetters = new RegExp(/[\d\W]/);
    let isNotNumber = new RegExp(/[\D\W]/);
    switch (name) {
        case students.studentFirstName.value:
            if (isNotLetters.test(name)) {
                students.studentFirstName.style.boxShadow = "0 0 1em red";
                message[0].style.display = "inherit";
                students.add.disabled = true; // It doesn't disable !!!
            } else {
                students.studentFirstName.style.boxShadow = "inherit";
                message[0].style.display = "none"; 
                students.add.disabled = false;
            }
            break;

        case students.studentLastName.value:
            if (isNotLetters.test(name)) {
                students.studentLastName.style.boxShadow = "0 0 1em red";
                message[1].style.display = "inherit";
                students.add.disabled = true;
            } else {
                students.studentLastName.style.boxShadow = "inherit";
                message[1].style.display = "none"; 
                students.add.disabled = false;
            }
            break;
            
        case trainers.trainerFirstName.value:
            if (isNotLetters.test(name)) {
                trainers.trainerFirstName.style.boxShadow = "0 0 1em red";
                message[2].style.display = "inherit";
                trainers.add.disabled = true;
            } else {
                trainers.trainerFirstName.style.boxShadow = "inherit";
                message[2].style.display = "none"; 
                trainers.add.disabled = false;
            }
            break;

        case trainers.trainerLastName.value:
            if (isNotLetters.test(name)) {
                trainers.trainerLastName.style.boxShadow = "0 0 1em red";
                message[3].style.display = "inherit";
                trainers.add.disabled = true;
            } else {
                trainers.trainerLastName.style.boxShadow = "inherit";
                message[3].style.display = "none"; 
                trainers.add.disabled = false;
            }
            break;

        
    }
    
}

    // ---------> EVENT LISTENERS <----------

// for name inputs
const trainerFirstListener = trainers.addEventListener('input', function() {
    return nameValidate(trainers.trainerFirstName.value);
});
const trainerLastListener = trainers.addEventListener('input', function() {
    return nameValidate(trainers.trainerLastName.value);
});
const studentFirstListener = students.addEventListener('input', function() {
    return nameValidate(students.studentFirstName.value);
});
const studentLastListener = students.addEventListener('input', function() {
    return nameValidate(students.studentLastName.value);
});




// GO TO TOP BUTTON
let goTop = document.getElementById("goTop").addEventListener("click", function() {
    window.scrollTo(0,0);
});

//TODO
//Forms submited to show as options to other forms <--2


//TESTS