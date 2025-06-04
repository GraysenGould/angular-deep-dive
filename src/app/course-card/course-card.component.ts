import { Component, Input, Output, EventEmitter, OnInit, ViewChild, ContentChild, ContentChildren, ElementRef, AfterContentInit, QueryList} from '@angular/core';
import {CourseImageComponent} from "../course-image/course-image.component";
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css',
  standalone: false

})
export class CourseCardComponent implements OnInit, AfterContentInit {
	@Input()
    course: Course;

    //@Input({required: true})
    cardIndex: number;

    @Output()
    courseSelected = new EventEmitter<Course>();
    
    @ContentChildren(CourseImageComponent, {read: ElementRef})
    images: QueryList<CourseImageComponent>;

    constructor () {
    }

    ngOnInit () {
    }

    isImageVisible() {
		return this.course && this.course.iconUrl;
    }

    ngAfterViewInit () {

    }
    ngAfterContentInit () {
        console.log(this.images);
    }

    onCourseViewed() {
		console.log("card component - button clicked ...");
		this.courseSelected.emit(this.course);
    }

    cardClass (){
		if (this.course.category == 'BEGINNER'){
			return 'beginner';
		}
    }

    cardStyles () {
      	return {'text-decoration': 'underline'};
    }
}
