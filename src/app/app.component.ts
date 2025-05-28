import { Component } from '@angular/core';
import {COURSES, findCourseById} from '../db-data';
import {CourseCardComponent} from './course-card/course-card.component';
import {Course} from "./model/course";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {

    courses = COURSES;

    onCourseSelected(course: Course) {
        console.log("App component - click event bubbled ...",course);
    }


}
