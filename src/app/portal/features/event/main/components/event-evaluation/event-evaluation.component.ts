import { Component } from '@angular/core';

@Component({
  selector: 'app-event-evaluation',
  templateUrl: './event-evaluation.component.html',
  styleUrls: ['./event-evaluation.component.scss'],
})
export class EventEvaluationComponent {
  showRating: boolean = true;
  ratingsResult = [
    { star: 5, percentage: 72 },
    { star: 4, percentage: 10 },
    { star: 3, percentage: 12.5 },
    { star: 2, percentage: 3 },
    { star: 1, percentage: 2.5 },
  ];
  onRatingChanged(value: number) {
    console.log('his is the value of stars', value);
    this.showRating = false;
  }
}
