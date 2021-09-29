'use strict'


function Student(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.location = new Array(10);
    this.marcks = new Array(10);
   };

Student.prototype.present = function () {
        for (let i = 0; i < this.location.length; i++) {
                if (typeof this.location[i] === 'undefined') {
                this.location[i] = 'true';
                break;
            }
        }
};
    Student.prototype.absent = function () {
        
      for (let i = 0; i < this.location.length; i++) {
                if (typeof this.location[i] === 'undefined') {
                this.location[i] = 'false';
                break;
            }
        }
    };

Student.prototype.mark = function (numMark) {
    if (!(numMark >= 0 && numMark <= 10)) return alert('Incorect mark');
    for (let i = 0; i < this.marcks.length; i++) {
        if (typeof this.marcks[i] === 'undefined') {
            this.marcks[i] = Number(`${numMark}`);
            break;
        }
    }
};
Student.prototype.summary = function () {

    const newArrAverageMarcks = this.marcks.filter((item) => {
        return (typeof item === 'number')
    });
    let averageMarks = newArrAverageMarcks.reduce((peviousValue, curentValue, index, array) => {
        return (peviousValue + curentValue)
    });
    let averageResultMarks = averageMarks / newArrAverageMarcks.length
    let newArrAverageLocation = this.location.map((item) => {
        if (item === 'true') {
            return (item = 1);
        };
        if (item === 'false') {
            return (item = 0);
        };
    }).filter((item) => {
        return typeof item === 'number';
    });
            
    console.log(newArrAverageLocation);
    let averageLocation = newArrAverageLocation.reduce((peviousValue, curentValue, index, array) => {
        return peviousValue + curentValue;
    });
    let averageResultLocation = averageLocation / newArrAverageLocation.length

    console.log(averageResultLocation, 'средняя посещаемость');
    console.log(averageResultMarks, 'средняя оценка');
    if (averageResultMarks > 9 && averageResultLocation > 0.9) {
        alert('Ути какой молодчинка!');
    };
    if (averageResultMarks < 9 && averageResultLocation < 0.9) {
        alert('Редиска!');
    };
    if ((averageResultMarks <= 9 && averageResultLocation >= 0.9) || (averageResultMarks >= 9 && averageResultLocation <= 0.9)) {
        alert('Норм но можно лучше');
    };
        
};

// console.log(Student.prototype.summary);
console.log(Student.prototype);



let student3 = new Student('Nastia', 'Oleshkina', 12);
console.log(student3);
console.log(student3.present());
console.log(student3.present());
console.log(student3.absent());
console.log(student3.absent());
console.log(student3.absent());
console.log(student3.mark(10));
console.log(student3.mark(10));
console.log(student3.mark(9.5));
console.log(student3.summary());
console.log(student3.absent());
console.log(student3.absent());
console.log(student3.absent());
console.log(student3.mark(10));
console.log(student3.mark(10));
console.log(student3.mark(8));
console.log(student3.summary());
console.log(student3.mark(10));
console.log(student3.mark(10));
console.log(student3.mark(9.5));

console.log(student3.absent());
console.log(student3.absent());
console.log(student3.absent());
console.log(student3.absent());
console.log(student3.absent());
console.log(student3.mark(10));
console.log(student3.mark(10))
console.log(student3.summary());



let studentNtasha = new Student('Natashia', 'Oleshkina', 26);
console.log(studentNtasha.present());
console.log(studentNtasha.present());
console.log(studentNtasha.present());
console.log(studentNtasha.present());
console.log(studentNtasha.absent());
console.log(studentNtasha.mark(3));
console.log(studentNtasha.mark(8));
console.log(studentNtasha.mark(9.5));
console.log(studentNtasha.summary());
console.log(studentNtasha.absent());
console.log(studentNtasha.absent());
console.log(studentNtasha.absent());
console.log(studentNtasha.mark(7));
console.log(studentNtasha.mark(10));
console.log(studentNtasha.present());
console.log(studentNtasha.present());
console.log(studentNtasha.mark(10));
console.log(studentNtasha.mark(10));
console.log(studentNtasha.mark(9.5));

console.log(studentNtasha.absent());
console.log(studentNtasha.present());
console.log(studentNtasha.present());
console.log(studentNtasha.absent());
console.log(studentNtasha.mark(10));
console.log(studentNtasha.mark(10))
console.log(studentNtasha);
console.log(studentNtasha.summary());
let Margarita = new Student('Margarita', 'Margarin', 23);
console.log(Margarita.mark(9));
console.log(Margarita.mark(9.5));
console.log(Margarita.mark(9.5));
console.log(Margarita.present());
console.log(Margarita.present());
console.log(Margarita.present());
console.log(Margarita.present());
console.log(Margarita.summary());
console.log(Margarita);



