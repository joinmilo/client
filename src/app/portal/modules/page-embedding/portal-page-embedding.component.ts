import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Maybe, PageEmbeddingEntity } from 'src/app/core/api/generated/schema';
import { PortalPluginEmbeddingComponent } from '../plugin-embedding/portal-plugin-embedding.component';

@Component({
  selector: 'app-portal-page-embedding',
  templateUrl: './portal-page-embedding.component.html',
  styleUrls: ['./portal-page-embedding.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    
    PortalPluginEmbeddingComponent,
  ],
})
export class PortalPageEmbeddingComponent implements OnInit, OnChanges {

  @Input()
  public embeddings?: Maybe<Maybe<PageEmbeddingEntity>[]>;

  public ngOnChanges(): void {
    this.sortEmbeddings();
  }

  public ngOnInit(): void {
    this.sortEmbeddings();
  }

  private sortEmbeddings(): void {
    this.embeddings = [...(this.embeddings || [])].sort((f1, f2) => (f1?.order || 0) - (f2?.order || 0));
  }

}
