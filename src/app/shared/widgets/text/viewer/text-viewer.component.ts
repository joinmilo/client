import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { IconComponent } from 'ngx-cinlib/icons';
@Component({
  selector: 'app-text-viewer',
  templateUrl: './text-viewer.component.html',
  styleUrls: ['./text-viewer.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IconComponent,
    MatButtonModule,
    MatDialogModule,
  ]
})
export class TextViewerComponent{

  constructor(
    public dialogRef: MatDialogRef<TextViewerComponent>,
    @Inject(MAT_DIALOG_DATA) public text: string,
  ) { }


  public closeDialog(): void {
    this.dialogRef.close();
  }
}
