import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StudentGrade} from '../grades-model';

@Component({
  selector: 'app-student-grid',
  templateUrl: './student-grid.component.html',
  styleUrls: ['./student-grid.component.css']
})
export class StudentGridComponent implements OnInit {

  @Input() students: StudentGrade[];
  @Input() chosenClass: string;
  @Output() selectedStudent = new EventEmitter<any>();

  currentStudent: StudentGrade;

  constructor() { }

  ngOnInit() {}

  selectStudent(student) {
    this.currentStudent = student;
    this.selectedStudent.emit(student);
  }

}
