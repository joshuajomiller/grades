import {Component, Input, OnInit} from '@angular/core';
import {StudentGrade} from '../grades-model';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  @Input() studentDetail: StudentGrade;
  @Input() chosenClass: string;
  @Input() editable: boolean;

  constructor() { }

  ngOnInit() {
  }

}
