import {Component, OnInit} from '@angular/core';
import {GradesService} from './grades.service';
import {ClassGrades, GradesModel, StudentGrade} from './grades-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  gradeData: GradesModel;
  chosenStudent: StudentGrade|null;
  classes: string[];
  years = [];
  chosenStudents: StudentGrade[];
  chosenClass: string;
  chosenYear: number;
  gradesView = 'table';

  constructor(private gradesService: GradesService) {
    // this.gradeData = this.gradesService.getData();
    this.getStudents();
    this.getClasses();
    this.getYears();
  }

  ngOnInit() {}

  getStudents() {
    this.chosenStudents = this.gradesService.getStudents(this.chosenClass, this.chosenYear);
  }

  getYears() {
    this.years = this.gradesService.getYears(this.chosenClass);
  }

  getClasses() {
    this.classes = this.gradesService.getClassTypes();
  }

  classChanged(classGrade) {
    this.chosenClass = classGrade;
    this.chosenStudent = null;
    this.getYears();
    this.getStudents();
  }

  yearChanged(year) {
    this.chosenYear = year;
    this.getStudents();
  }

  studentChanged(student) {
    this.chosenStudent = student;
  }

  changeView(format: string) {
    this.gradesView = format;
  }
}
