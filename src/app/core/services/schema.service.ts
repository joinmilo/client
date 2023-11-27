import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2 } from '@angular/core';
import { Maybe } from 'graphql/jsutils/Maybe';
import { ArticleEntity, DealEntity, EventEntity, OrganisationEntity, PageEntity, UserContextEntity } from '../api/generated/schema';
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

    // console.log(this.schemaToElement('ArticleEntity', data));
    // console.log(JSON.stringify(this.schemaToElement('ArticleEntity', data)));
    // console.log(JSON.stringify(this.schemaToElement('EventEntity', data)));
    // console.log(JSON.stringify(this.schemaToElement('OrganisationEntity', data)));
    // console.log(JSON.stringify(this.schemaToElement('DealEntity', data)));
    // console.log(JSON.stringify(this.schemaToElement('UserContextEntity', data)));
    console.log(JSON.stringify(this.schemaToElement('PageEntity', data)));

    renderer.appendChild(this.document.body, script);

  }

  schemaToElement = (entity: any, data: any): ArticleEntitySchema 
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
  const getCategoryName = (): Maybe<string> => {
    const categoryNames = entity?.category?.translatables
      ?.filter(category => category?.name)
      .map(category => category?.name);

    return categoryNames && categoryNames.length > 0 ? categoryNames.join() : null;
  };

  const articleElement: ArticleEntitySchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    articleBody: entity?.content,
    articleSection: getCategoryName(),
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
    const getCategoryName = (): Maybe<string> => {
      const categoryNames = entity?.category?.translatables
        ?.filter(category => category?.name)
        .map(category => category?.name);

      return categoryNames && categoryNames.length > 0 ? categoryNames.join() : null;
    };

    const dealElement: DealEntitySchema = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      category: getCategoryName(),
      description: entity?.content,
      name: entity?.name,
      offers: {
        '@context': 'https://schema.org',
        '@type': 'Offer',
        price: entity?.price
      },
      url: entity?.slug,
    };

    return dealElement;
  };


  private eventToJSON = (entity?: Maybe<EventEntity>): EventEntitySchema => {
    const getCategoryName = (): Maybe<string> => {
      const categoryNames = entity?.category?.translatables
        ?.filter(category => category?.name)
        .map(category => category?.name);

      return categoryNames && categoryNames.length > 0 ? categoryNames.join() : null;
    };

    const eventElement: EventEntitySchema = {
      '@context': 'https://schema.org',
      '@type': 'Event',
      about: getCategoryName(),
      aggregateRating: {
        '@context': 'https://schema.org',
        '@type': 'AggregateRating',
        ratingValue: entity?.ratingDistribution?.average,
        ratingCount: entity?.ratingDistribution?.sum,
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


  private pageToJSON = (entity?: Maybe<PageEntity>): PageEntitySchema => {
    const pageElement: PageEntitySchema = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      // breadcrumb: {
      //   '@context': 'https://schema.org',
      //   '@type': 'BreadcrumbList',
      //   itemListElement: {
      //     '@context': 'https://schema.org',
      //     '@type': 'ListItem',
      //       position: position ?? null,
      //       item: itemName ?? null
      //   },
      // },
      abstract: entity?.shortDescription,
      dateCreated: entity?.created,
      description: entity?.callText,
      lastReviewed: entity?.modified,
      mainContentOfPage: entity?.content,
      name: entity?.name,
      significantLink: entity?.callUrl,
      url: entity?.slug

    }
    return pageElement;
  };


  private userContextToJSON = (entity?: Maybe<UserContextEntity>): UserContextEntitySchema => {
    const getMemberOf = (): Maybe<string>[] => {
      const organisationNames = entity?.members
        ?.filter(member => member?.organisation)
        .map(member => member?.organisation?.name)
        .filter(name => name !== undefined && name !== null) as Maybe<string>[];

      return organisationNames ?? [];
    };
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
      memberOf: getMemberOf(),
      telephone: entity?.user?.phone,
      url: entity?.slug
    }
    return userContextElement;
  };

}