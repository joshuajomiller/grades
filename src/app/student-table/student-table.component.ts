import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StudentGrade} from '../grades-model';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})
export class StudentTableComponent implements OnInit {

  @Input() students: StudentGrade[];
  @Output() selectedStudent = new EventEmitter<any>();

  currentStudent: StudentGrade;

  constructor() { }

  ngOnInit() {
  }

  selectStudent(student) {
    this.currentStudent = student;
    this.selectedStudent.emit(student);
  }
}
