import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sub-title',
  templateUrl: './sub-title.component.html',
  styleUrls: ['./sub-title.component.scss']
})
export class SubTitleComponent {

  @Input()
  public titleLabel?: string;

  @Input()
  public title?: string;

  @Input()
  public link?: string[];
}
