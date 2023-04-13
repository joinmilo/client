import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { EditorConfig } from '@ckeditor/ckeditor5-core';

@Component({
  selector: 'app-ck-editor-form',
  templateUrl: './ck-editor.form.component.html',
  styleUrls: ['./ck-editor.form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CkEditorFormComponent),
      multi: true
    }
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
    console.log(editor);
    this.editorInstance = editor;
  }

  handleEditorChange(): void {
    const data = this.editorInstance.getData();
    this.onChange && this.onChange(data);
  }

}
