import { Component } from '@angular/core';


@Component({
  selector: 'app-event-evaluation',
  templateUrl: './event-evaluation.component.html',
  styleUrls: ['./event-evaluation.component.scss']
})
export class EventEvaluationComponent {
  showRating: boolean = true;
  onRatingChanged(value: number){
    console.log('THis is the value of stars', value);
    this.showRating = false;

  }

}
