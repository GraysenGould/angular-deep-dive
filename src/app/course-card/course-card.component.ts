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

    //@Input({required: true})
    cardIndex: number;

    @Output()
    courseSelected = new EventEmitter<Course>();

    constructor () {
    }

    ngOnInit () {
    }

    isImageVisible() {
      return this.course && this.course.iconUrl;
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
