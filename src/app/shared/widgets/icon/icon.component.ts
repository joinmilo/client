import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BrandIcon } from './typings/brand-icons';
import { RegularIcon } from './typings/regular-icons';
import { SolidIcon } from './typings/solid-icons';

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
  public set icon(icon: SolidIcon | RegularIcon | BrandIcon) {
    this.iconClasses = `${icon[0]} fa-${icon[1]} fa-${this.size}`;
  }

  @Input()
  public size?: string = '1x';
  
  public iconClasses!: string;
}