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

class Assignments {
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