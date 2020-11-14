

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
    let studentFirstName = document.getElementById("studentFirstName").value;
    let studentLastName = document.getElementById("studentLastName").value;
    let dateOfBirth = document.getElementById("dateOfBirth").value;
    let tuitionFees = document.getElementById("tuitionFees").value;
    let student = new Student(studentFirstName, studentLastName, dateOfBirth, tuitionFees);
    console.log(student);
  }


// TRAINER INSTANCE
let addTrainer = function () {
    let trainerFirstName = document.getElementById("trainerFirstName").value;
    let trainerLastName = document.getElementById("trainerLastName").value;
    let trainerSubject = document.getElementById("trainerSubject").value;
    let trainer = new Trainer(trainerFirstName, trainerLastName, trainerSubject);
    console.log(trainer);
  }


// COURSE INSTANCE
  let addCourse = function () {
    let courseTitle = document.getElementById("courseTitle").value;
    let courseStream = document.getElementById("courseStream").value;
    let courseType = document.getElementById("courseType").value;
    let start_date = document.getElementById("start_date").value;
    let end_date = document.getElementById("end_date").value;
    let course = new Course(courseTitle, courseStream, courseType, start_date, end_date);
    console.log(course);
  }

  // ASSIGNMENT INSTANCE
  let addAssignment = function () {
    let assignmentTitle = document.getElementById("assignmentTitle").value;
    let assignmentDescription = document.getElementById("assignmentDescription").value;
    let assignmentSubDate = document.getElementById("assignmentSubDate").value;
    let assignmentOralMark = document.getElementById("assignmentOralMark").value;
    let assignmentTotalMark = document.getElementById("assignmentTotalMark").value;
    let assignment = new Assignment(assignmentTitle, assignmentDescription, assignmentSubDate, assignmentOralMark, assignmentTotalMark);
    console.log(assignment);
  }
