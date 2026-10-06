function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}
const student1 = new Student("Max", "male", 19);
const student2 = new Student("Eva", "female", 18);
const student3 = new Student("Petr", "male", 20);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if (this.marks === undefined) {
    return;
  }
  this.marks.push(...marks);
}

Student.prototype.getAverage = function () {
  if (this.marks === undefined || this.marks.length === 0) {
    return 0;
  }
  let sumMarks = 0;

  for (let mark of this.marks) {
    sumMarks += mark;
  }
  return sumMarks / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
