import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Course } from "../module/course";

@Component({
  selector: "app-course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.scss"],
})
export class CourseCardComponent {
  @Input({ required: true }) test!: Course;
  @Input() placeNumber!: number;
  @Output()
  selectCourse = new EventEmitter<Course>();

  seeMore() {
    console.log("პირველი ეტაპი");

    this.selectCourse.emit(this.test);
  }
}
