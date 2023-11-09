import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { AnimationComponent } from './animation/animation.component';
import { FrameComponent } from './frame/frame.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseCardComponent,
    AnimationComponent,
    FrameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
