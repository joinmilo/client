import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Maybe, collapse } from 'ngx-cinlib/core';
import { I18nDirective } from 'ngx-cinlib/i18n';
import { IconComponent, RegularIcon, SolidIcon } from 'ngx-cinlib/icons';
import { CoreModule } from 'src/app/core/core.module';
@Component({
  selector: 'app-gradient-button',
  templateUrl: './gradient-button.component.html',
  styleUrls: ['./gradient-button.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    CoreModule,
    I18nDirective,
    MatButtonModule,
    IconComponent    
  ],
  animations:[
    collapse()
  ]
})
export class GradientButtonComponent {

  @Input()
  public url?: Maybe<string>;
  
  @Input()
  public label?: Maybe<string>;
  
  @Input()
  public name?: Maybe<string>;
  
  @Input()
  public description?: Maybe<string>;
  
  @Input()
  public icon?: SolidIcon | RegularIcon;

  @Input()
  public openNewTab = false;
  
  public showDescription = false;

}