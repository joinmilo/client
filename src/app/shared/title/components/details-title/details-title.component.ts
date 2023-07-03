import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-details-title',
  templateUrl: './details-title.component.html',
  styleUrls: ['./details-title.component.scss']
})
export class DetailsTitleComponent {

  @Input()
  public title?: string;

  @Input()
  public titleLabel?: string;

}
