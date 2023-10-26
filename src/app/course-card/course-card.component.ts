import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../module/course';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
})
export class CourseCardComponent {
  @Input({ required: true }) test!: Course;
//შეგვიძლია სხვა სახელი დავარქვათ აუთფუთის მხაეს მაგრამ ის სახელი რომელზც არის უნდა ჩაისვსს ფრჩხილებში  :   @Output(selectCourse) Course = new EventEmitter<Course>()
  @Output() selectCourse = new EventEmitter<Course>()


  showMore(){
    console.log('ახლა ნახე რა ვქნა')

    this.selectCourse.emit(this.test)
  }
}
