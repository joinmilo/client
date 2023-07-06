import { CommonModule } from '@angular/common';
import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { EditorConfig } from '@ckeditor/ckeditor5-core';

@Component({
  selector: 'app-ck-editor-form',
  templateUrl: './ck-editor-form.component.html',
  styleUrls: ['./ck-editor-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CkEditorFormComponent),
      multi: true
    }
  ],
  standalone: true,
  imports: [
    CommonModule,
    CKEditorModule,
  ]
})

export class CkEditorFormComponent implements ControlValueAccessor {

  public Editor = ClassicEditor;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public editorInstance: any;
  
  public model = {
    editorData: ''
  }

  @Input()
  public config: EditorConfig = {
    toolbar: [
      'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', '|', 'indent', 'outdent', '|', 'undo', 'redo'
    ]
  };

  public onChange?: (value: string) => void;

  writeValue(value: string): void {
    this.model.editorData = value;
  }

  registerOnChange(onChange: (value: string) => void): void {
    this.onChange = onChange;
  }

  registerOnTouched(): void {
    return;
  }

  handleEditorReady(editor: unknown): void {
    this.editorInstance = editor;
  }

  handleEditorChange(): void {
    const data = this.editorInstance.getData();
    this.onChange && this.onChange(data);
  }

}
