import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2 } from '@angular/core';
import { Maybe } from 'graphql/jsutils/Maybe';
import { ArticleEntity, EventEntity } from '../api/generated/schema';
import { ContentData, ContentEntity } from '../typings/content-entity';
import { ArticleSchema } from '../typings/schema.org/features/article';
import { EventSchema } from '../typings/schema.org/features/event';

@Injectable({ providedIn: 'root' })
export class SchemaService {

  constructor(
  @Inject(DOCUMENT) private document: Document
  ) {
  }

  public setJsonLd(renderer: Renderer2, data: any): void {

    const script = renderer.createElement('script');
    script.type = 'application/ld+json';
    script.text = `${JSON.stringify(data)}`;

    // const jsonData = JSON.stringify(data);
    // console.log('JSON Data:', jsonData);

    // console.log(JSON.stringify(this.schemaToElement('ArticleEntity', data)));
    console.log(JSON.stringify(this.schemaToElement('EventEntity', data)));

    renderer.appendChild(this.document.body, script);

  }

  schemaToElement = (entity: ContentEntity, data: ContentData): ArticleSchema 
    | EventSchema
    | undefined => {
    switch(entity) {
      case 'ArticleEntity':
        return this.articleToJSON(data as ArticleEntity);
      case 'EventEntity':
        return this.eventToJSON(data as EventEntity);
      }
    return undefined;
  }

  private articleToJSON = (entity?: Maybe<ArticleEntity>): ArticleSchema => {
    const articleElement: ArticleSchema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      articleBody: entity?.content,
      articleSection: {
        '@context': 'https://schema.org',
        '@type': 'Text',
        category: entity?.category?.name, //TODO: doenst work because of translatables
      },
      // associatedMedia: {
      //   '@context': 'https://schema.org',
      //   '@type': 'MediaObject',
      //   encodingFormat: entity?.uploads?.
      // },
      author: {
        '@context': 'https://schema.org',
        '@type': 'Person',
        email: entity?.author?.user?.email,
        givenName: entity?.author?.user?.firstName,
        familyName: entity?.author?.user?.lastName,
        telephone: entity?.author?.user?.phone,
      },
      creator: {
        '@context': 'https://schema.org',
        '@type': 'Person',
        email: entity?.publicAuthor?.email,
        givenName: entity?.publicAuthor?.name,
        telephone: entity?.publicAuthor?.phone,
      },
      comment: {
        '@context': 'https://schema.org',
        '@type': 'Comment',
        text: entity?.lastArticleComment?.content,
        // commentTime: entity?.lastArticleComment?.created, //not recognized as date
        creator: {
          '@context': 'https://schema.org',
          '@type': 'Person',
          email: entity?.author?.user?.email,
          givenName: entity?.author?.user?.firstName,
          familyName: entity?.author?.user?.lastName,
          telephone: entity?.author?.user?.phone,
        },
      },
      contentRating: entity?.ratingDistribution?.average,
      datePublished: entity?.created,
      dateModified: entity?.modified,
      description: entity?.shortDescription,
      headline: entity?.name,
      url: entity?.slug,

    };

    return articleElement;
  };


  private eventToJSON = (entity?: Maybe<EventEntity>): EventSchema => {
    const articleElement: EventSchema = {
      '@context': 'https://schema.org',
      '@type': 'Event',
      organizer: {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: entity?.organisation?.name,
        location: {
          '@context': 'https://schema.org',
          '@type': 'PostalAddress',
          addressLocality: entity?.organisation?.address?.suburb?.name,
          streetAddress: entity?.organisation?.address?.street,
          postalCode: entity?.organisation?.address?.postalCode,
          addressRegion: entity?.organisation?.address?.place,
        }
      },
      name: entity?.name,
      description: entity?.content,      
    };

    return articleElement;
  };




}