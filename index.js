//object literal
let bob = {
  fname: "bob",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1603',
      grades: [ 89, 34, 67 ]
    },
    {
      course: 'INFO 1601',
      grades: [ 89, 34, 67 ]
    }
  ]
};

let sally = {
  fname: "sally",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1601',
      grades: [ 100, 89, 79 ]
    }
  ]
};

let paul = {
  fname: "paul",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1600',
      grades: [ 89, 34, 67 ]
    }
  ]
};

const students = [bob, sally, paul];


function getAverateGrade(student, course){
    let avg = 0;

    for (let record of student.transcript){
        if(record.course !== course) continue;
        let sum = 0;
        for (let grade of record.grades){
            sum += grade;
        }
        return sum / record.grades.length;
    }
    return -1;
}

function getAssignmentMark(student, course, num){
    for (let record of student.transcript){
        if(record.course === course){
            if (num >= 0 && num <= record.grades.length) {
                return record.grades[num];
            }
        }
    }
    return -1;
}

console.log(getAverateGrade(bob, "INFO 1601"));
console.log(getAssignmentMark(bob, "INFO 1601", 2));