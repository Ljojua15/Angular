import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { COURSES } from 'src/db-data';
import { Course } from './module/course';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  course = COURSES;
  // descriptioColor = this.cards;
  startDate = new Date(2023, 11, 29);

  title = COURSES[1].category;

  @ViewChildren(CourseCardComponent, { read: ElementRef })
  cards?: QueryList<ElementRef>;

  // @ViewChild('imageTest', { read: ElementRef })
  // imageTest?: ElementRef;

  // @ViewChild('card2', { read: ElementRef })
  // card2?: ElementRef;

  // @ViewChild('mamuka', { read: ElementRef })
  // mamuka?: ElementRef;

  // changeColor() {
  //   const lasha = this.mamuka?.nativeElement;
  //   lasha.style.backgroundColor = 'red';
  // }

  constructor() {}

  ngAfterViewInit() {
    this.cards?.changes.subscribe((cards) => console.log(cards));
    // this.cards?.forEach((e, index) => {
    //   console.log(e.nativeElement.querySelector('p').innerHTML);

    //   e.nativeElement.querySelector('p').textContent = 'lasha';
    //   console.log(e.nativeElement.querySelector('p').textContent);
    // });
    // let descriptionColor = this.card.test.description;
    const p = this.cards?.get(1)?.nativeElement.querySelector('p');
    p.style.color = 'blue';
  }

  addCourse() {
    const p = this.cards?.get(1)?.nativeElement.querySelector('p');
    p.style.color = 'blue';
  }

  toSelect(test: Course) {
    // console.log(this.imageTest);
    // console.log(this.card2);
    // console.log(this.mamuka?.nativeElement.offsetWidth);
  }
}
