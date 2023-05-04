import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CoreModule } from "../../core/core.module";
import { CommentComponent } from './component/comment.component';

const components = [
  CommentComponent,
];

const framework = [
  CommonModule,
  RouterModule,
];

const modules = [
  CoreModule,

];

const libs = [
  FontAwesomeModule,
];

@NgModule({
    declarations: [...components],
        imports: [
        ...framework,
        // ...materials,
        ...modules,
        ...libs,
    ],
    exports: [...components],
})
export class CommentModule { }