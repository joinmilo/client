import { Component, OnInit } from '@angular/core';
import { fadeInFromRightAnimation } from 'src/app/core/animations/animations';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss'],
  animations: [
    fadeInFromRightAnimation,
  ]
})
export class ImageSliderComponent implements OnInit {

  public images = [
    { path: 'assets/features/calendar.svg', description: 'calendarDescription' },
    { path: 'assets/features/dashboard.svg', description: 'dashboardDescription' },
    { path: 'assets/features/friends.svg', description: 'friendDescription' },
    { path: 'assets/features/notifications.svg', description: 'notificatonsDescription' }
  ];

  selectedImage?: string;
  
  ngOnInit(): void {
    this.selectedImage = 'assets/features/calendar.svg'
  }

  onImageChange(imagePath: string) {
    this.selectedImage = imagePath;
  }
}
