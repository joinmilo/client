import { Component, Input } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Maybe } from 'src/app/core/api/generated/schema';

@Component({
  selector: 'app-details-title',
  templateUrl: './details-title.component.html',
  styleUrls: ['./details-title.component.scss']
})
export class DetailsTitleComponent {

  @Input()
  public title?: Maybe<string>;

  @Input()
  public titleLabel?: Maybe<string>;

  @Input()
  public link?: Maybe<string[]>;

  @Input()
  public linkLabel?: Maybe<string>;

  @Input()
  public linkIcon?: IconProp

}
