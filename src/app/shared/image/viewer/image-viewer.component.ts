import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CoreModule } from 'src/app/core/core.module';
import { Maybe, MediaEntity } from 'src/schema/schema';
import { FileCardComponent } from '../../file/components/card/file-card.component';
import { MimeTypeDefinition } from '../../file/typings/file';
import { mimeTypeDefinition } from '../../file/utils/file.utils';
import { SliderComponent } from '../../sliders/slider/slider.component';

interface DialogData {
  media: MediaEntity[],
  currentIndex: number
}
@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    CoreModule,
    SliderComponent,
    FontAwesomeModule,
    FileCardComponent,
    MatButtonModule,
  ]
})
export class ImageViewerComponent implements OnInit{

  public currentIndex = 0;

  constructor(
    public dialogRef: MatDialogRef<ImageViewerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit(): void {
    this.currentIndex = this.data.currentIndex;
  }

  public mimeType(element?: Maybe<MediaEntity>): Maybe<MimeTypeDefinition> {
    return mimeTypeDefinition(element);
  }

  public getCurrentImage(): MediaEntity{
    console.log(this.data.media[this.currentIndex]);
    return this.data.media[this.currentIndex]
  }

  public navigate(direction: number): void {
    
    const nextIndex = this.currentIndex + direction;

    if(nextIndex >= 0 && nextIndex < this.data.media.length) {
      this.currentIndex = nextIndex;
      console.log("current", this.currentIndex);
    }
    else {
      direction === 1 
      ? this.currentIndex = 0
      : direction === -1   
        ? this.currentIndex = this.data.media.length -1
        : null;
      console.log("else", this.currentIndex);
    }
  }

  isFirstImage(): boolean {
    return this.currentIndex === 0;
  }

  isLastImage(): boolean {
    return this.currentIndex === this.data.media.length - 1;
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
