import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2 } from '@angular/core';
import { Maybe } from 'graphql/jsutils/Maybe';
import { ArticleEntity, DealEntity, EventEntity, OrganisationEntity, PageEntity, UserContextEntity } from '../api/generated/schema';
import { ContentData } from '../typings/content-entity';
import { ArticleEntitySchema } from '../typings/schema.org/entities/article-entity';
import { DealEntitySchema } from '../typings/schema.org/entities/deal-entity';
import { EventEntitySchema } from '../typings/schema.org/entities/event-entity';
import { OrganisationEntitySchema } from '../typings/schema.org/entities/organisation-entity';
import { PageEntitySchema } from '../typings/schema.org/entities/page-entity';
import { UserContextEntitySchema } from '../typings/schema.org/entities/user-context-entity';

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

    console.log(this.schemaToElement('ArticleEntity', data));
    console.log(JSON.stringify(this.schemaToElement('EventEntity', data)));
    console.log(JSON.stringify(this.schemaToElement('OrganisationEntity', data)));
    console.log(JSON.stringify(this.schemaToElement('DealEntity', data)));
    console.log(JSON.stringify(this.schemaToElement('UserContextEntity', data)));
    console.log(JSON.stringify(this.schemaToElement('PageEntity', data)));

    renderer.appendChild(this.document.body, script);

  }

  schemaToElement = (entity: any, data: ContentData): ArticleEntitySchema 
    | DealEntitySchema
    | EventEntitySchema
    | OrganisationEntitySchema
    | PageEntitySchema
    | UserContextEntitySchema
    | undefined => {
    switch(entity) {
      case 'ArticleEntity':
        return this.articleToJSON(data as ArticleEntity);
      case 'DealEntity':
        return this.dealToJSON(data as DealEntity)
      case 'EventEntity':
        return this.eventToJSON(data as EventEntity);
      case 'OrganisationEntity':
        return this.organisationToJSON(data as OrganisationEntity);
      case 'PageEntity':
        return this.pageToJSON(data as PageEntity);
      case 'UserContextEntity':
        return this.userContextToJSON(data as UserContextEntity);
      }
      
    return undefined;
  }

  private articleToJSON = (entity?: Maybe<ArticleEntity>): ArticleEntitySchema => {
    const articleElement: ArticleEntitySchema = {
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
          email: entity?.lastArticleComment?.userContext?.user?.email,
          givenName: entity?.lastArticleComment?.userContext?.user?.firstName,
          familyName: entity?.lastArticleComment?.userContext?.user?.lastName,
          telephone: entity?.lastArticleComment?.userContext?.user?.phone,
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

  private dealToJSON = (entity?: Maybe<DealEntity>): DealEntitySchema => {
    const dealElement: DealEntitySchema = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      description: entity?.content,
      name: entity?.name,
      offers: {
        '@context': 'https://schema.org',
        '@type': 'Offer',
        price: entity?.price
      },
      owns: { //Die Property owns wird von dem Schema nicht als Objekt des Typs Product erkannt.
        '@context': 'https://schema.org',
        '@type': 'Person',
        email: entity?.creator?.user?.email,
        givenName: entity?.creator?.user?.firstName,
        familyName: entity?.creator?.user?.lastName,
        telephone: entity?.creator?.user?.phone,
      },
      url: entity?.slug,
    };

    return dealElement;
  };


  private eventToJSON = (entity?: Maybe<EventEntity>): EventEntitySchema => {
    const eventElement: EventEntitySchema = {
      '@context': 'https://schema.org',
      '@type': 'Event',
      // about: {} //category
      aggregateRating: {
        '@context': 'https://schema.org',
        '@type': 'AggregateRating',
        ratingValue: entity?.ratingDistribution?.average,
        ratingCount: entity?.ratingDistribution?.sum,
      },
      comment: {
        '@context': 'https://schema.org',
        '@type': 'Comment',
        text: entity?.lastEventComment?.content, //not working
        // commentTime: entity?.lastArticleComment?.created, //not recognized as date
        creator: {
          '@context': 'https://schema.org',
          '@type': 'Person',
          email: entity?.lastEventComment?.userContext?.user?.email,
          givenName: entity?.lastEventComment?.userContext?.user?.firstName,
          familyName: entity?.lastEventComment?.userContext?.user?.lastName,
          telephone: entity?.lastEventComment?.userContext?.user?.phone,
        }
      },
      description: entity?.content,
      endDate: entity?.schedule?.endDate,
      startDate: entity?.schedule?.startDate,
      location: {
        '@context': 'https://schema.org',
        '@type': 'PostalAddress',
          addressLocality: entity?.address?.suburb?.name,
          streetAddress: `${entity?.address?.street} ${entity?.address?.houseNumber}`,
          postalCode: entity?.address?.postalCode,
          addressRegion: entity?.address?.place,
      },
      maximumAttendeeCapacity: entity?.attendeeConfiguration?.maxAttendees,
      name: entity?.name,
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
      url: entity?.slug,
    };
    return eventElement;
  };


  private organisationToJSON = (entity?: Maybe<OrganisationEntity>): OrganisationEntitySchema => {
    const organisationElement: OrganisationEntitySchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      aggregateRating: {
        '@context': 'https://schema.org',
        '@type': 'AggregateRating',
        ratingValue: entity?.ratingDistribution?.average,
        ratingCount: entity?.ratingDistribution?.sum,
      },
      email: entity?.contact?.email,
      legalName: entity?.name,
      location: {
        '@context': 'https://schema.org',
        '@type': 'PostalAddress',
        addressLocality: entity?.address?.suburb?.name,
        streetAddress: `${entity?.address?.street} ${entity?.address?.houseNumber}`,
        postalCode: entity?.address?.postalCode,
        addressRegion: entity?.address?.place,
      },
      telephone: entity?.contact?.phone,
      description: entity?.description,
      sameAs: entity?.contact?.website,
      url: entity?.slug,
    }
    return organisationElement;
  };


  // private pageToJSON = (entity?: Maybe<PageEntity>): PageEntitySchema => {
  //   const pageElement: PageEntitySchema = {
  //     '@context': 'https://schema.org',
  //     '@type': 'WebPage',

  //   }
  //   return pageElement;
  // };


  private userContextToJSON = (entity?: Maybe<UserContextEntity>): UserContextEntitySchema => {
    const userContextElement: UserContextEntitySchema = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      address: {
        '@context': 'https://schema.org',
        '@type': 'PostalAddress',
        addressLocality: entity?.address?.suburb?.name,
        streetAddress: `${entity?.address?.street} ${entity?.address?.houseNumber}`,
        postalCode: entity?.address?.postalCode,
        addressRegion: entity?.address?.place,
      },
      description: entity?.description,
      email: entity?.user?.email,
      familyName: entity?.user?.lastName,
      givenName: entity?.user?.firstName,
      // memberOf: {
      //   '@context': 'https://schema.org',
      //   '@type': 'Organization',
      //   name: entity?.members?
      // },
      telephone: entity?.user?.phone,
      url: entity?.slug
    }
    return userContextElement;
  };

}