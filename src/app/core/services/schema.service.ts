import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { Maybe } from 'graphql/jsutils/Maybe';
import { ArticleEntity, DealEntity, EventEntity, MenuItemEntity, OrganisationEntity, PageEntity, PageableList_ArticleEntity, PageableList_DealEntity, PageableList_EventEntity, PageableList_OrganisationEntity, PageableList_PageEntity, PageableList_UserContextEntity, UserContextEntity } from '../api/generated/schema';
import { Array } from '../typings/schema.org/arrays/array';
import { ArticleEntitySchema } from '../typings/schema.org/entities/article-entity';
import { DealEntitySchema } from '../typings/schema.org/entities/deal-entity';
import { EventEntitySchema } from '../typings/schema.org/entities/event-entity';
import { OrganisationEntitySchema } from '../typings/schema.org/entities/organisation-entity';
import { PageEntitySchema } from '../typings/schema.org/entities/page-entity';
import { UserContextEntitySchema } from '../typings/schema.org/entities/user-context-entity';
import { AggregateRatingSchema } from '../typings/schema.org/properties/aggregate-rating';
import { BreadcrumbList } from '../typings/schema.org/properties/breadcrumb';
import { CommentSchema } from '../typings/schema.org/properties/comment';
import { ItemSchema } from '../typings/schema.org/properties/item';
import { ListItemSchema } from '../typings/schema.org/properties/list-item';
import { OfferSchema } from '../typings/schema.org/properties/offer';
import { OrganisationSchema } from '../typings/schema.org/properties/organisation';
import { PersonSchema } from '../typings/schema.org/properties/person';
import { PostalSchema } from '../typings/schema.org/properties/postal';
import { SchemaData, SchemaDataArray, SchemaEntity, SchemaEntityArray, SchemaOverview } from '../typings/schema.org/schema';
import { Schema } from '../typings/schema.org/schema-class';

@Injectable({ providedIn: 'root' })
export class SchemaService {

  private breadcrumb?: BreadcrumbList;

  private renderer: Renderer2;
  
  private previousScript?: HTMLScriptElement;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    rendererFactory: RendererFactory2,
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  public addFooterSchema(data?: Maybe<SchemaDataArray>): void {
    if (data?.length) {
      this.breadcrumb = new BreadcrumbList(
        data.map(item => this.menuItemToJSON(item as MenuItemEntity))
      );
    }
  }

  public singleJsonLd(
    data: SchemaData, 
    entity: SchemaEntity,
  ): void {
    
    const result = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          ...this.entityToSchema(entity, data)
        },
        {
          ...this.breadcrumb
        }
      ]
    };

    const script = this.renderer.createElement('script');
    script.type = 'application/ld+json';
    script.text = `${JSON.stringify(result)}`;

    if (this.previousScript) {
      this.renderer.removeChild(this.document.body, this.previousScript);
    }

    this.renderer.appendChild(this.document.body, script);

    this.previousScript = script;
  }

  public multiJsonLd(
    entity: SchemaEntityArray,
    data: SchemaOverview,
    ): void {

    const result = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          ...this.arrayToSchema(entity, data)
        },
        {
          ...this.breadcrumb
        }
      ]
    };
   
    const script = this.renderer.createElement('script');
    script.type = 'application/ld+json';
    script.text = `${JSON.stringify(result)}`;

    if (this.previousScript) {
      this.renderer.removeChild(this.document.body, this.previousScript);
    }

    this.renderer.appendChild(this.document.body, script);
    
    this.previousScript = script;
  }

  public entityToSchema(
    entity: SchemaEntity, 
    data: SchemaData
  ): Maybe<Schema> {
    let result: Maybe<Schema>;
    
    switch(entity) {
      case 'ArticleEntity':
        result = this.articleToJSON(data as ArticleEntity);
        break;
      case 'DealEntity':
        result = this.dealToJSON(data as DealEntity);
        break;
      case 'EventEntity':
        result = this.eventToJSON(data as EventEntity);
        break;
      case 'MenuItemEntity':
        result = this.menuItemToJSON(data as MenuItemEntity);
        break;
      case 'OrganisationEntity':
        result = this.organisationToJSON(data as OrganisationEntity);
        break;
      case 'PageEntity':
        result = this.pageToJSON(data as PageEntity);
        break;
      case 'UserContextEntity':
        result = this.userContextToJSON(data as UserContextEntity);
        break;
      default:
        result = undefined;
        break;
    }

    return result;
  }

   public arrayToSchema(
    entity: SchemaEntityArray, 
    data: SchemaOverview,
  ): Array {
    let result: Array;
    
    switch(entity) {
      case 'PageableList_ArticleEntity':
        result = this.articleArrayToJSON(data as PageableList_ArticleEntity);
        break;
      case 'PageableList_DealEntity':
        result = this.dealArrayToJSON(data as PageableList_DealEntity);
        break; 
      case 'PageableList_EventEntity':
        result = this.eventArrayToJSON(data as PageableList_EventEntity);
        break;       
      case 'PageableList_OrganisationEntity':
        result = this.organisationArrayToJSON(data as PageableList_OrganisationEntity);
        break;  
      case 'PageableList_PageEntity':
        result = this.pageArrayToJSON(data as PageableList_PageEntity);
        break;  
      case 'PageableList_UserContextEntity':
        result = this.userContextArrayToJSON(data as PageableList_UserContextEntity);
        break; 
    }

    return result;
  }

  
  // ARTICLE

  private articleToJSON = (entity?: Maybe<ArticleEntity>): ArticleEntitySchema => {
  
    const articleElement = new ArticleEntitySchema(
      entity?.content,
      this.getCategoryNameArticle(entity),
      new PersonSchema(
        entity?.author?.user?.email,
        entity?.author?.user?.firstName,
        entity?.author?.user?.lastName,
        entity?.author?.user?.phone,
      ),
      new PersonSchema(
        entity?.publicAuthor?.email,
        entity?.publicAuthor?.name,
        entity?.publicAuthor?.phone,
      ),
      entity?.ratingDistribution?.average,
      new CommentSchema(
        entity?.lastArticleComment?.content,
        new PersonSchema(
          entity?.lastArticleComment?.userContext?.user?.email,
          entity?.lastArticleComment?.userContext?.user?.firstName,
          entity?.lastArticleComment?.userContext?.user?.lastName,
          entity?.lastArticleComment?.userContext?.user?.phone,
        )
      ),
      entity?.created,
      entity?.modified,
      entity?.shortDescription,
      entity?.name,
      entity?.slug,
    )

    return articleElement;
  };

  private getCategoryNameArticle(entity?: Maybe<ArticleEntity>): Maybe<string> {
    const categoryNames = entity?.category?.translatables
      ?.filter(category => category?.name)
      .map(category => category?.name);

    return categoryNames && categoryNames.length > 0 ? categoryNames.join() : null;
  }

  private articleArrayToJSON = (entity?: Maybe<PageableList_ArticleEntity>): Array => {
    const articlesArray = new Array(
      (entity?.result || []).map(entity => {
        const article = this.articleToJSON(entity);
        return article;
      }));

    return articlesArray;
  };
  
  
  // DEAL

  private dealToJSON = (entity?: Maybe<DealEntity>): DealEntitySchema => {

    const dealElement = new DealEntitySchema(
      this.getCategoryNameDeal(entity),
      entity?.content,
      entity?.name,
      new OfferSchema(
        entity?.price
      ),
      entity?.slug,
    );

    return dealElement;
  };


  private getCategoryNameDeal = (entity?: Maybe<DealEntity>): Maybe<string> => {
    const categoryNames = entity?.category?.translatables
      ?.filter(category => category?.name)
      .map(category => category?.name);

    return categoryNames && categoryNames.length > 0 ? categoryNames.join() : null;
  };

  private dealArrayToJSON = (entity?: Maybe<PageableList_DealEntity>): Array => {
    const dealsArray = new Array(
      (entity?.result || []).map(entity => {
        const deal = this.dealToJSON(entity);
        return deal;
      }));
    
    return dealsArray;
  };


  // EVENT

  private eventToJSON = (entity?: Maybe<EventEntity>): EventEntitySchema => {

    const eventElement = new EventEntitySchema(
      this.getCategoryNameEvent(entity),
      new AggregateRatingSchema(
        entity?.ratingDistribution?.average,
        entity?.ratingDistribution?.sum,
      ),
      entity?.content,
      entity?.schedule?.endDate,
      entity?.schedule?.startDate,
      new PostalSchema(
        entity?.address?.suburb?.name,
        `${entity?.address?.street} ${entity?.address?.houseNumber}`,
        entity?.address?.postalCode,
        entity?.address?.place,
      ),
      entity?.attendeeConfiguration?.maxAttendees,
      entity?.name,
      new OrganisationSchema(
      entity?.organisation?.name,
        new PostalSchema(
          entity?.organisation?.address?.suburb?.name,
          entity?.organisation?.address?.street,
          entity?.organisation?.address?.postalCode,
          entity?.organisation?.address?.place,
        )
      ),
      entity?.slug,
    )
    return eventElement
    
  };

  private getCategoryNameEvent = (entity?: Maybe<EventEntity>): Maybe<string> => {
    const categoryNames = entity?.category?.translatables
      ?.filter(category => category?.name)
      .map(category => category?.name);

    return categoryNames && categoryNames.length > 0 ? categoryNames.join() : null;
  };

  private eventArrayToJSON = (entity?: Maybe<PageableList_EventEntity>): Array => {
    const eventsArray = new Array(
      (entity?.result || []).map(entity => {
        const event = this.eventToJSON(entity);
        return event;
      }));

    return eventsArray;
  };


  // MENU

  private menuItemToJSON = (entity?: Maybe<MenuItemEntity>): ListItemSchema => {    

    const menuItemElement = new ListItemSchema(
        new ItemSchema(
          this.getMenuNames(entity),
          this.getMenuDescription(entity)
        ),
        entity?.order,
      )
    return menuItemElement;
  };

  private getMenuNames(entity: Maybe<MenuItemEntity>): Maybe<string> {
    const menuNames = entity?.subMenuItems
      ?.flatMap(subMenu => subMenu?.translatables
      ?.filter(translatable => translatable?.language?.locale === 'de')
      .map(translatable => ({
        name: translatable?.name,
      }))
    );

    if (menuNames && menuNames.length > 0) {
      const namesArray = menuNames.map(item => item?.name);
      const joinedNames = namesArray.join(', ');

      return joinedNames;
    }
    
    return null;
  }

  private getMenuDescription(entity: Maybe<MenuItemEntity>): Maybe<string> {
    const menuDescription = entity?.subMenuItems
      ?.flatMap(subMenu => subMenu?.translatables
        ?.filter(translatable => translatable?.language?.locale === 'de')
        .map(translatable => ({
          shortDescription: translatable?.shortDescription,
        }))
      );
  
    if (menuDescription && menuDescription.length > 0) {
      const descriptionArray = menuDescription.map(item => item?.shortDescription);
      const joinedDescription = descriptionArray.join(', ');

      return joinedDescription;
    }

    return null;
  }


  // ORGANISATION

  private organisationToJSON = (entity?: Maybe<OrganisationEntity>): OrganisationEntitySchema => {
    
    const organisationElement = new OrganisationEntitySchema(
      new AggregateRatingSchema(
        entity?.ratingDistribution?.average,
        entity?.ratingDistribution?.sum,
      ),
      entity?.contact?.email,
      entity?.name,
      new PostalSchema(
        entity?.address?.suburb?.name,
        `${entity?.address?.street} ${entity?.address?.houseNumber}`,
        entity?.address?.postalCode,
        entity?.address?.place,
      ),
      this.getMemberOfOrganisation(entity),
      entity?.contact?.phone,
      entity?.description,
      entity?.contact?.website,
      entity?.slug,
    )
    return organisationElement;
  };
  
  private getMemberOfOrganisation = (entity?: Maybe<OrganisationEntity>): PersonSchema[] => {
    const organisationMembers = entity?.members
      ?.filter(member => member?.userContext)
      .map(member => {
        const user = member?.userContext?.user;
        if (user) {
          return new PersonSchema(
            user.email,
            user.firstName,
            user.lastName,
            user.phone
          );
        }
        return null;
      })
      .filter(person => person !== null) as PersonSchema[];

    return organisationMembers ?? [];
  };

  private organisationArrayToJSON = (entity?: Maybe<PageableList_OrganisationEntity>): Array => {
    const organisationsArray = new Array(
      (entity?.result || []).map(entity => {
        const organisation = this.organisationToJSON(entity);
        return organisation;
    }));
  
    return organisationsArray;
  };

  // PAGE

  private pageToJSON = (entity?: Maybe<PageEntity>): PageEntitySchema => {
    
    const pageElement = new PageEntitySchema(
      entity?.shortDescription,
      entity?.created,
      '', //entity?.callText,
      entity?.modified,
      '', // entity?.content,
      '', //entity?.name,
      '', //entity?.callUrl,
      entity?.slug

      // new PageEmbeddingsEntitySchema (
      //   entity?.embeddings?.
      // )
    )
    return pageElement;
  };

  private pageArrayToJSON = (entity?: Maybe<PageableList_PageEntity>): Array => {
    const pagesArray = new Array(
      (entity?.result || []).map(entity => {
        const page = this.pageToJSON(entity);
        return page;
      }));

    return pagesArray;
  };


  // USER

  private userContextToJSON = (entity?: Maybe<UserContextEntity>): UserContextEntitySchema => {

    const userContextElement = new UserContextEntitySchema(
      new PostalSchema(
        entity?.address?.suburb?.name,
        `${entity?.address?.street} ${entity?.address?.houseNumber}`,
        entity?.address?.postalCode,
        entity?.address?.place,
      ),
      entity?.description,
      entity?.user?.email,
      entity?.user?.lastName,
      entity?.user?.firstName,
      this.getMemberOf(entity),
      entity?.user?.phone,
      entity?.slug
    )
    return userContextElement;
  };

  private getMemberOf = (entity?: Maybe<UserContextEntity>): Maybe<string>[] => {
    const organisationNames = entity?.members
      ?.filter(member => member?.organisation)
      .map(member => member?.organisation?.name)
      .filter(name => name !== undefined && name !== null) as Maybe<string>[];

    return organisationNames ?? [];
  };

  private userContextArrayToJSON = (entity?: Maybe<PageableList_UserContextEntity>): Array => {
    const userContextsArray = new Array(
      (entity?.result || []).map(entity => {
        const userContext = this.userContextToJSON(entity);
        return userContext;
      }));
    
    return userContextsArray;
  };

}