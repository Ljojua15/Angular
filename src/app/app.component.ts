import { Component, OnInit, ViewChild } from '@angular/core';
import { COURSES } from 'src/db-data';
import { Course } from './module/course';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  course = COURSES;

  startDate = new Date(2023, 11, 29);

  title = COURSES[1].category;

  @ViewChild(CourseCardComponent)
  card?: CourseCardComponent;
  // angularCourses = COURSES[0];

  // rxjsCourses = COURSES[1];

  // ngrxCourses = COURSES[2];

  toSelect(test: Course) {
    console.log(this.card);
  }

  ngOnInit(): void {}
}
