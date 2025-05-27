import { Component } from '@angular/core';
import {COURSES, findCourseById} from '../db-data';
import {CourseCardComponent} from './course-card/course-card.component';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {
    coreCourse = COURSES[0];
    rxjsCourse = COURSES[1];
    ngrxCourse = COURSES[2];


}
