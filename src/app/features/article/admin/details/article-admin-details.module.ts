import { NgModule } from '@angular/core';
import { ArticleAdminDetailsRoutingModule } from './article-admin-details-routing.module';
import { ArticleAdminDetailsLayoutModule } from './modules/layout/article-admin-details-layout.module';

const modules = [
  ArticleAdminDetailsLayoutModule,
  ArticleAdminDetailsRoutingModule,
];

@NgModule({
  imports: [
    ...modules,
  ],
  exports: [],
})
export class ArticleAdminDetailsModule { }
