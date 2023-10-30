import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Course } from '../module/course';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
})
export class CourseCardComponent implements OnInit {
  @Input({ required: true }) test!: Course;
  @Input() placeNumber!: number;
  @Output()
  selectCourse = new EventEmitter<Course>();
  isBeginner = false;
  ngOnInit(): void {
    this.isBeginner = this.test.category === 'BEGINNER';
  }
  chveneba() {
    return this.test && this.test.iconUrl;
  }
  satauri() {
    return this.test && this.test.description;
  }
  agwera() {
    return this.test && this.test.longDescription;
  }
  seeMore() {
    console.log('პირველი ეტაპი');

    this.selectCourse.emit(this.test);
  }

  // colorChange() {
  //   if (this.test.category == 'BEGINNER') {
  //     return 'begginer';
  //   }
  //   return;
  // }
}
