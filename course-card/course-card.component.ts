import { Component, Input } from '@angular/core';
import { Course } from '../module/course';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
})
export class CourseCardComponent {
  @Input({ required: true }) test!: Course;
}
