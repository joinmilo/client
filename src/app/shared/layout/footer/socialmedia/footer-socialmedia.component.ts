import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngrx/store';
import { Maybe } from 'src/app/core/api/generated/schema';
import { selectSocialMedia } from 'src/app/core/state/selectors/core.selectors';
import { IconComponent } from 'src/app/shared/widgets/icon/icon.component';
import { BrandIconsType } from 'src/app/shared/widgets/icon/typings/brand-icons';

@Component({
  selector: 'app-footer-socialmedia',
  templateUrl: './footer-socialmedia.component.html',
  styleUrls: ['./footer-socialmedia.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IconComponent,
    MatButtonModule,
  ]
})
export class FooterSocialMediaComponent {

  public socialMedia = this.store.select(selectSocialMedia);

  constructor(
    private store: Store,
  ) { }

  public icon(name?: Maybe<string>) {
    return name as BrandIconsType;
  }

}
