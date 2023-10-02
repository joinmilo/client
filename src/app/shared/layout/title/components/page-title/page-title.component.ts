import { Component, Input } from '@angular/core';
import { Maybe } from 'src/app/core/api/generated/schema';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss']
})
export class PageTitleComponent {

  @Input()
  public title?: Maybe<string>;

  @Input()
  public titleLabel?: string;

}
