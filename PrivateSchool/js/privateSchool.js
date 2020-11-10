class Course {
    constructor(title, stream, type, startDate, endDate) {
        this.title = title;
        this.stream = stream;
        this.type = type;
        this.startDate =startDate;
        this.endDate= endDate;

        this.newCourse = new Map();
        newCourse.set ('Course info :',{
            'Title': `${this.title}`,
            'Stream': `${this.stream}`,
            'Type': `${this.type}`,
            'Start Date': `${this.startDate}`,
            'End Date': `${this.endDate}`
        });
    }
}

class Student {
    constructor(firstName, lastName, dateOfBirth, tuitionFees) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.tuitionFees = tuitionFees;

        this.newStudent = new Map();
        newStudent.set ('Student info :',{
            'First Name': `${this.firstName}`,
            'Last Name': `${this.lastName}`,
            'Date of Birth': `${this.dateOfBirth}`,
            'Tuition Fees': `${this.tuitionFees}`            
        });
    }
}