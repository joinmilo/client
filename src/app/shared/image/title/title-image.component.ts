import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { Maybe, MediaEntity } from 'src/schema/schema';

@Component({
  selector: 'app-title-image',
  templateUrl: './title-image.component.html',
  styleUrls: ['./title-image.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    CoreModule,
  ]
})
export class TitleImageComponent {

  @Input()
  public alt = 'title-image';

  @Input()
  public image?: Maybe<MediaEntity>;

}
