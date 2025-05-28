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

    title = COURSES[0].description;
    
    price: number  = 9.999;

    rate =  0.67;

    startDate = new Date(2000, 0, 1);

    onCourseSelected(course: Course) {
        console.log("App component - click event bubbled ...",course);
    }

    trackCourse(index: number, course: Course){ // is this correct?
        return course.id;
    }

}
