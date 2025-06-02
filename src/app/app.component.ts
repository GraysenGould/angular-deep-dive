import { Component, ViewChild, ElementRef , AfterViewInit} from '@angular/core';
import {COURSES, findCourseById} from '../db-data';
import {CourseCardComponent} from './course-card/course-card.component';
import {Course} from "./model/course";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent implements AfterViewInit{
 
    courses = COURSES;

    @ViewChild('cardRef1', {read: ElementRef})
    card1: ElementRef; 


    @ViewChild('courseImage')
    courseImage: ElementRef;

    constructor () { 
            console.log("containerDiv", this.card1);
    }

    ngAfterViewInit () {
        console.log("courseImage", this.courseImage);
    }

    onCourseSelected(course: Course) {
        console.log("App component - click event bubbled ...",course);
        console.log("card1", this.card1); 
    }

}
