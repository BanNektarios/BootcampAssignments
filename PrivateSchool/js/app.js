// ------------> VARIABLES <------------
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

    // ASSIGNMENT
const assignmentTitle = document.getElementById("assignmentTitle");
const assignmentDescription = document.getElementById("assignmentDescription");
const assignmentSubDate = document.getElementById("assignmentSubDate");
const assignmentOralMark = document.getElementById("assignmentOralMark");
const assignmentTotalMark = document.getElementById("assignmentTotalMark");
let message = document.querySelectorAll(".message");

    // ADD BUTTONS
const addTrainerBtn = document.getElementById("addTrainer");
const addCourseBtn = document.getElementById("addCourse");
const addStudentBtn = document.getElementById("addStudent");
const addAssignmentBtn = document.getElementById("addAssignment");

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
    //TODO the validation can call the instance to be created
let nameValidate = function (name) {
    let isNotLetters = new RegExp(/[\d\W]/)
    switch (name) {
        case studentFirstName.value:
            if (isNotLetters.test(name)) {
                studentFirstName.style.boxShadow = "0 0 1em red";
                message[0].style.display = "inherit";
                addStudentBtn.disabled = true;

            } else {
                studentFirstName.style.boxShadow = "inherit";
                message[0].style.display = "none"; 
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
            
        case trainerFirstName.value:
            if (isNotLetters.test(name)) {
                trainerFirstName.style.boxShadow = "0 0 1em red";
                message[2].style.display = "inherit";
                addTrainerBtn.disabled = true;
            } else {
                trainerFirstName.style.boxShadow = "inherit";
                message[2].style.display = "none"; 
                addTrainerBtn.disabled = false;
            }
            break;

        case trainerLastName.value:
            if (isNotLetters.test(name)) {
                trainerLastName.style.boxShadow = "0 0 1em red";
                message[3].style.display = "inherit";
                addTrainerBtn.disabled = true;
            } else {
                trainerLastName.style.boxShadow = "inherit";
                message[3].style.display = "none"; 
                addTrainerBtn.disabled = false;
            }
            break;
        
    }
    
}

let hasInput = function(){
    document.querySelectorAll("<input>")
}

    // EVENT LISTENERS
// for name inputs
const trainerFirstListener = trainerFirstName.addEventListener('input', function() {
    return nameValidate(trainerFirstName.value);
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
}


// GO TO TOP BUTTON
let goTop = document.getElementById("goTop").addEventListener("click", function() {
    window.scrollTo(0,0);
});

//TODO
//Validation for other forms <-3
//Data to appear at a dynamic table on our page <---1
//Forms submited to show as options to other forms <--2


//TESTS