import {Injectable} from '@angular/core';
import {GradesModel, StudentGrade} from './grades-model';

@Injectable({
  providedIn: 'root'
})
export class GradesService {

  constructor() {}

  getStudents(chosenClass, chosenYear): StudentGrade[] {
    let chosenStudents = [];
    this.getData().classStudents.forEach(classStudent => {
      if (!chosenClass || chosenClass === classStudent.classType) {
        chosenStudents.push(...classStudent.students);
      }
      if (chosenYear) {
        chosenStudents = chosenStudents.filter(student => student.year === chosenYear);
      }
    });
    return chosenStudents;
  }

  getYears(chosenClass): number[] {
    const chosenYears = [];
    this.getData().classStudents.forEach(classStudent => {
      if (!chosenClass || chosenClass === classStudent.classType) {
        classStudent.students.forEach(student => {
          if (!chosenYears.includes(student.year)) {
            chosenYears.push(student.year);
          }
        });
      }
    });
    return chosenYears;
  }

  getClassTypes() {
    return this.getData().classTypes;
  }

  getData(): GradesModel {
    return {
      classStudents: [{
        students: [
          {fname: 'Jones', lname: 'Smith', grade: 84.2, year: 1940},
          {fname: 'Barbara', lname: 'Farly', grade: 55.0, year: 1940},
          {fname: 'Shirly', lname: 'Tema', grade: 30.0, year: 2012},
          {fname: 'Santa', lname: 'Rummi', grade: 75.0, year: 2012}
          ],
        classType: 'Biology'
      }, {
        students: [
          {fname: 'Sara', lname: 'Karlson', grade: 99.2, year: 1960},
          {fname: 'Avi', lname: 'Kaster', grade: 70.0, year: 1960},
          {fname: 'Sami', lname: 'Perez', grade: 90.0, year: 2009}
          ],
        classType: 'Chemistry'
      }, {
        students: [
          {fname: 'Tevon', lname: 'Barens', grade: 43.0, year: 1980},
          {fname: 'Josef', lname: 'Cohen', grade: 60.0, year: 1980},
          {fname: 'Nati', lname: 'Green', grade: 99.0, year: 2001},
          {fname: 'Shakil', lname: 'Jareh', grade: 88.0, year: 2001}
          ],
        classType: 'ComputerScience'
      }], classTypes: ['Biology', 'Chemistry', 'ComputerScience']
    };
  }
}
