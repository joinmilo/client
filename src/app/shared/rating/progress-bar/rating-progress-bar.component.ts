import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating-progress-bar',
  templateUrl: './rating-progress-bar.component.html',
  styleUrls: ['./rating-progress-bar.component.scss'],
})
export class ProgressBarComponent {
  @Input() value = 0;
  @Input() star = 0;
}
