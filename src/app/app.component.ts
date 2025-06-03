import { Component, ViewChild, ElementRef , AfterViewInit, ViewChildren, QueryList} from '@angular/core';
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

    // @ViewChild('cardRef1', {read: ElementRef})
    // card1: ElementRef; 
    @ViewChildren (CourseCardComponent, {read: ElementRef}) 
    cards: QueryList<ElementRef>;


    ngAfterViewInit () {
        // this.cards.changes.subscribe(
        //     cards => console.log(cards)
        // );
        // console.log("cards:", this.cards.first);
        console.log(this.cards);
        
        
    }

    onCoursesEdited () {
        this.courses.push(    {
        id: 1,
        description: "Angular core deep dive",
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
        longDescription: "A detailed walk-through of the most important part of Angular - the Core and Common modules",
        category: 'INTERMEDIATE',
        lessonsCount: 10
        }
    );
    }

    onCourseSelected(course: Course) {
        console.log("App component - click event bubbled ...",course);
    }

}
