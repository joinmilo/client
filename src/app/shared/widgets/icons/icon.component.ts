import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BrandIcon } from 'src/assets/fontawesome/brand-icons';
import { RegularIcon } from 'src/assets/fontawesome/regular-icons';
import { SolidIcon } from 'src/assets/fontawesome/solid-icons';


@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
  ]
})
export class IconComponent {

  @Input({ required: true })
  public icon!: SolidIcon | RegularIcon | BrandIcon;

  @Input()
  public size?: string = '1x';
  
  get iconClasses(): string {
    return `${this.icon[0]} fa-${this.icon[1]} fa-${this.size}`;
  }
}