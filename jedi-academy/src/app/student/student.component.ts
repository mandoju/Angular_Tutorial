import { Component, OnInit, Input } from '@angular/core';
import { isJsObject } from '@angular/core/src/change_detection/change_detection_util';

import {Student} from './student.model'

@Component({
  selector: 'jad-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  @Input() student: Student

  constructor() { }

  ngOnInit() {
  }

}
