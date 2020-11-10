class Course {
    constructor(title, stream, type, startDate, endDate) {
        this.title = title;
        this.stream = stream;
        this.type = type;
        this.startDate =startDate;
        this.endDate= endDate;

        this.newCourse = function () {
            return [`${this.title}`, `${this.stream}`, `${this.type}`, `${this.startDate}`, `${this.endDate}`]
        }
    }
}
