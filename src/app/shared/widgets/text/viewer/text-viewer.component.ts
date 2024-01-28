import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
import { IconComponent } from '../../icon/icon.component';

@Component({
  selector: 'app-text-viewer',
  templateUrl: './text-viewer.component.html',
  styleUrls: ['./text-viewer.component.scss'],
  standalone: true,
  imports: [
    IconComponent,
    MatButtonModule, MatDialogModule, TitleModule
  ]
})
export class TextViewerComponent{

  constructor(
    public dialogRef: MatDialogRef<TextViewerComponent>,
    @Inject(MAT_DIALOG_DATA) public text: String,
  ) { }


  public closeDialog(): void {
    this.dialogRef.close();
  }
}
