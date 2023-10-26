import { Component, OnInit } from '@angular/core';
import { COURSES } from 'src/db-data';
import { Course } from './module/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  angularCourses: Course = COURSES[0];

  rxjsCourses = COURSES[1];

  ngrxCourses = COURSES[2];
  ngOnInit(): void {
    console.log(this.angularCourses);
  }
}
