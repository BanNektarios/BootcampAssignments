// ------------> VARIABLES <------------
    // TRAINER
// const trainerFirstName = document.getElementsByClassName("trainerFirstName");
// const trainerLastName = document.getElementsByClassName("trainerLastName");
// const trainerSubject = document.getElementsByClassName("trainerSubject");
let trainerId = 1;
let trainerArray = [];

    // STUDENT
const studentFirstName = document.getElementsByClassName("studentFirstName");
const studentLastName = document.getElementsByClassName("studentLastName");
const dateOfBirth = document.getElementsByClassName("dateOfBirth");
const tuitionFees = document.getElementsByClassName("tuitionFees");
let studentId = 1;
let studentArray = [];


    // COURSE
// const courseTitle = document.getElementsByClassName("courseTitle");
// const courseStream = document.getElementsByClassName("courseStream");
// const courseType = document.getElementsByClassName("courseType");
// const start_date = document.getElementsByClassName("start_date");
// const end_date = document.getElementsByClassName("end_date");
let courseId = 1;
let courseArray = [];

    // ASSIGNMENT
const assignmentTitle = document.getElementsByClassName("assignmentTitle");
const assignmentDescription = document.getElementsByClassName("assignmentDescription");
const assignmentSubDate = document.getElementsByClassName("assignmentSubDate");
const assignmentOralMark = document.getElementsByClassName("assignmentOralMark");
const assignmentTotalMark = document.getElementsByClassName("assignmentTotalMark");
let assignmentId = 1;
let assignmentArray = [];

    // ADD BUTTONS
// const addTrainerBtn = document.getElementsByClassName("addTrainer");
// const addCourseBtn = document.getElementsByClassName("addCourse");
// const addStudentBtn = document.getElementsByClassName("addStudent");
// const addAssignmentBtn = document.getElementsByClassName("addAssignment");

    // FORM TOGGLE
const toggleTrainerForm = document.getElementById("toggleTrainer");
const toggleStudentForm = document.getElementById("toggleStudent");
const toggleTrainer_CourseForm = document.getElementById("toggleTrainer_Course");
const toggleStudent_CourseForm = document.getElementById("toggleStudent_Course");
const toggleCoursesform = document.getElementById("toggleCourses");
const toggleAssingmentsform = document.getElementById("toggleAssignments");
const toggleAssignments_CourseForm = document.getElementById("toggleAssignments_Course");
const toggleBigForm = document.getElementById("toggleBigForm");

    // FORMS
const trainersForm = document.forms.trainers;
const studentsForm = document.forms.students;
const coursesForm = document.forms.courses;
const assignmentForm = document.forms.assignments;
const trainer_CourseForm = document.forms.trainersPerCourse;
const student_CourseForm = document.forms.studentsPerCourse;
const assignments_CourseForm = document.forms.assignmentsPerCourse;
const bigForm = document.forms.assignmentsStudentCourse;
let message = document.querySelectorAll(".message");

// LIST NUMBERING


// for Forms
const toggleTrainer = toggleTrainerForm.addEventListener("click", function(){ 
    return toggleForm(trainersForm);
});
const toggleStudent = toggleStudentForm.addEventListener("click", function(){ 
    return toggleForm(studentsForm);
});
const toggleCourses = toggleCoursesform.addEventListener("click", function(){ 
    return toggleForm(coursesForm);
});
const toggleAssignments = toggleAssingmentsform.addEventListener("click", function(){ 
    return toggleForm(assignmentForm);
});
const toggleTrainer_Course = toggleTrainer_CourseForm.addEventListener("click", function(){ 
    return toggleForm(trainer_CourseForm);
});
const toggleStudent_Course = toggleStudent_CourseForm.addEventListener("click", function(){ 
    return toggleForm(student_CourseForm);
});
const toggleAssignments_Course = toggleAssignments_CourseForm.addEventListener("click", function(){ 
    return toggleForm(assignments_CourseForm);
});
const toggleBig_Form = toggleBigForm.addEventListener("click", function(){ 
    return toggleForm(bigForm);
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

let listMaker = function () {
    
    
}
//Makes an array of objects
const newCourse = courses.addEventListener("submit", function(){

    function check() {

            //VALIDATION (outdated)
        // if (courses.title.value === ""){
        //     alert("Enter a Title");
        // } else if (courses.type.value === ""){
        //     alert("Enter course stream");
        // } else if (courses.stream.value === ""){
        //     alert("Enter course type");
        // } else if (courses.start_date.value === ""){
        //     alert("Enter start date");
        // } else if (courses.end_date.value === ""){
        //     alert("Enter end date");
        // } else {}

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
        entry.append(`Course ID :${courseId} - ${courseArray[thisEntry].title}, ${courseArray[thisEntry].type}, ${courseArray[thisEntry].stream}. From ${courseArray[thisEntry].startDate} to ${courseArray[thisEntry].endDate} `);
        ulData.appendChild(entry);
        courseId++;
    }
    check();
});

const newTrainer = trainers.addEventListener("submit", function() {

    function check() {
        // if (trainers.trainerFirstName.value === ""){
        //     alert("Enter first name");
        // } else if (trainers.trainerLastName.value === "") {
        //     alert("Enter last name");
        // } else if (trainers.trainerSubject.value === ""){
        //     alert("Enter a Subject");
        // } else { 
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
        entry.append(`ID: ${trainerId} - ${trainerArray[thisEntry].trainerFirstName}, ${trainerArray[thisEntry].trainerLastName}, ${trainerArray[thisEntry].trainerSubject}`);
        ulData.appendChild(entry);
        trainerId++;
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
    constructor(firstName, lastName, dateOfBirth, tuitionFees, studentId) {
        this.firstName = firstName;
        this.lastName = lastName;
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


// STUDENT INSTANCE
// addStudentBtn[0].addEventListener("click", function() { 
//     if (studentFirstName.value === ""){
//         return alert("Enter first name");
//     } else if (studentLastName.value === "") {
//         alert("Enter last name");
//     } else if (document.getElementsByClassName("dateOfBirth").value === ""){
//         alert("Enter an age");
//     } else if (document.getElementsByClassName("tuitionFees").value === "") {
//         alert("Enter the tuition");
//     } else { let addStudent = function () {   
//         let student = new Student(studentFirstName.value, studentLastName.value, dateOfBirth.value, tuitionFees.value);
//         studentArray.push(student);
//         studentId++;
//         studentFirstName.value = "";
//         studentLastName.value = "";
//         dateOfBirth.value = "";
//         tuitionFees.value = "";
//         console.log(studentArray);
//     }
//     addStudent();
// }
// });


// // TRAINER INSTANCE
// addTrainerBtn[0].addEventListener("click", function() {
//     if (trainerFirstName.value === ""){
//         return alert("Enter first name");
//     } else if (trainerLastName.value === "") {
//         alert("Enter last name");
//     } else if (document.getElementsByClassName("trainerSubject").value === ""){
//         alert("Enter a Subject");
//     } else { let addTrainer = function () {
//         let trainer = new Trainer(trainerFirstName.value, trainerLastName.value, trainerSubject.value);
//         trainerArray.push(trainer);
//         trainerId++;
//         trainerFirstName.value = ""; // Can be function
//         trainerLastName.value = "";
//         trainerSubject.value = "";
//         console.log(trainerArray);
//     }
//     addTrainer();
// }
// });


// // COURSE INSTANCE
// addCourseBtn[0].addEventListener("click", function() {
//     if (courseTitle.value === ""){
//         return alert("Enter a Title");
//     } else if (courseStream.value === ""){
//         alert("Enter course stream");
//     } else if (courseType.value === ""){
//         alert("Enter course type");
//     } else if (start_date.value === ""){
//         alert("Enter start date");
//     } else if (end_date.value === ""){
//         alert("Enter end date");
//     } else {let addCourse = function () {
//         let course = new Course(courseTitle.value, courseStream.value, courseType.value, start_date.value, end_date.value);
//         trainerArray.push(course);
//         courseId++;
//         courseTitle.value = ""; // Can be function
//         courseStream.value = "";
//         courseType.value = "";
//         start_date.value = "";
//         end_date.value = "";
//         console.log(course);
//     }
//     addCourse();
//     }
// });


// // ASSIGNMENT INSTANCE
// addAssignmentBtn[0].addEventListener("click", function() {
//     if (assignmentTitle.value === ""){
//         return alert("Enter a Title");
//     } else if (assignmentDescription.value === "") {
//         alert("Enter a description");
//     } else if (assignmentSubDate.value === ""){
//         alert("Enter a Submission Date");
//     } else if (assignmentOralMark.value === ""){
//         alert("Enter an Oral Mark");
//     } else if (assignmentTotalMark.value === ""){
//         alert("Enter a Total Mark");
//     } else {let addAssignment = function () {
//         let assignment = new Assignment(assignmentTitle.value, assignmentDescription.value, assignmentSubDate.value, assignmentOralMark.value, assignmentTotalMark.value);
//         assignmentArray.push(assignment);
//         assignmentId++;
//         assignmentTitle.value = ""; // Can be function
//         assignmentDescription.value = "";
//         assignmentSubDate.value = "";
//         assignmentOralMark.value = "";
//         assignmentTotalMark.value = "";
//         console.log(assignment);
//     }
//     addAssignment();
//     }
// });



//VALIDATION
    //TODO the validation can call the instance to be created
let nameValidate = function () {
    let isNotLetters = new RegExp(/[\d\W]/)
    switch (name) {
        case studentFirstName.value:
            if (isNotLetters.test(name)) {
                studentFirstName.style.boxShadow = "0 0 1em red";
                message[1].style.display = "inherit";
                addStudentBtn.disabled = true;
            } else {
                studentFirstName.style.boxShadow = "inherit";
                message[1].style.display = "none"; 
                addStudentBtn.disabled = false;
            }
            break;

        case studentLastName.value:
            if (isNotLetters.test(name)) {
                studentLastName.style.boxShadow = "0 0 1em red";
                message[1].style.display = "inherit";
                addStudentBtn.disabled = true;
            } else {
                studentLastName.style.boxShadow = "inherit";
                message[1].style.display = "none"; 
                addStudentBtn.disabled = false;
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
    return nameValidate();
});
const trainerLastListener = trainerLastName.addEventListener('input', function() {
    return nameValidate(trainerLastName.value);
});
const studentFirstListener = studentFirstName.addEventListener('input', function() {
    return nameValidate(studentFirstName.value);
});
const studentLastListener = studentLastName.addEventListener('input', function() {
    return nameValidate(studentLastName.value);
});



// GO TO TOP BUTTON
let goTop = document.getElementById("goTop").addEventListener("click", function() {
    window.scrollTo(0,0);
});

//TODO
//Data to appear at a dynamic table on our page <---1
//Forms submited to show as options to other forms <--2


//TESTS