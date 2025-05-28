import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css',
  standalone: false

})
export class CourseCardComponent implements OnInit {
    @Input()
    course: Course;

    @Input({required: true})
    index: number;

    @Output()
    courseSelected = new EventEmitter<Course>();

    constructor () {
    }

    ngOnInit () {
    }

    onCourseViewed() {
      console.log("card component - button clicked ...");
      this.courseSelected.emit(this.course);
    }
}
