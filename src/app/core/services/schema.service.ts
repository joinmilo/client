import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { Maybe } from 'graphql/jsutils/Maybe';
import { ArticleEntity, DealEntity, EventEntity, MenuItemEntity, OrganisationEntity, PageEntity, UserContextEntity } from '../api/generated/schema';
import { ArticleEntitySchema } from '../typings/schema.org/entities/article-entity';
import { DealEntitySchema } from '../typings/schema.org/entities/deal-entity';
import { EventEntitySchema } from '../typings/schema.org/entities/event-entity';
import { OrganisationEntitySchema } from '../typings/schema.org/entities/organisation-entity';
import { PageAttributeEntitySchema } from '../typings/schema.org/entities/page-attribute-entity';
import { PageEmbeddingsEntitySchema } from '../typings/schema.org/entities/page-embeddings-entity';
import { PageEntitySchema } from '../typings/schema.org/entities/page-entity';
import { TranslatableEntitySchema } from '../typings/schema.org/entities/translateable-entity';
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
import { SchemaData, SchemaEntity } from '../typings/schema.org/schema';
import { Schema } from '../typings/schema.org/schema-class';

@Injectable({ providedIn: 'root' })
export class SchemaService {

  private footerSchema?: BreadcrumbList;

  private renderer: Renderer2;
  
  private previousScript?: HTMLScriptElement;

  private locale = 'de';

  constructor(
    @Inject(DOCUMENT) private document: Document,
    rendererFactory: RendererFactory2,
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }


  // ARRAY
  public createArraySchema
  (
    entity: SchemaEntity,
    data: Maybe<SchemaData[]>,
  ): void {
    if (data) {
      this.createSchema(
        this.arrayToSchema(entity, data)
      );
    }
  }

  // ENTITY
  public createEntitySchema(
    entity: SchemaEntity,
    data: Maybe<SchemaData>, 
  ): void {

    if (data) {
      this.createSchema(
        this.entityToSchema(entity, data)
      );
    }
  }

  private createSchema(
    schema: Maybe<Schema> | Maybe<Maybe<Schema>[]>,
  ): void {
    const result = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          ...schema
        },
        {
          ...this.footerSchema
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
  
  public arrayToSchema(
    entity: SchemaEntity, 
    data: SchemaData[],
  ): Maybe<Schema[]> {   
    switch(entity) {
      case 'ArticleEntity':
        return this.articleArrayToSchema(data as ArticleEntity[]);
      case 'DealEntity':
        return this.dealArrayToSchema(data as DealEntity[]); 
      case 'EventEntity':
        return this.eventArrayToSchema(data as EventEntity[]);       
      case 'OrganisationEntity':
        return this.organisationArrayToSchema(data as OrganisationEntity[]);  
      case 'PageEntity':
        return this.pageArrayToSchema(data as PageEntity[]);  
      case 'UserContextEntity':
        return this.userContextArrayToSchema(data as UserContextEntity[]);
      default:
        return undefined;
    }
  }

  public entityToSchema(
    entity: SchemaEntity, 
    data: SchemaData
  ): Maybe<Schema> {    
    switch(entity) {
      case 'ArticleEntity':
        return this.articleToSchema(data as ArticleEntity);
      case 'DealEntity':
        return this.dealToSchema(data as DealEntity);
      case 'EventEntity':
        return this.eventToSchema(data as EventEntity);
      case 'MenuItemEntity':
        return this.menuItemToSchema(data as MenuItemEntity);
      case 'OrganisationEntity':
        return this.organisationToSchema(data as OrganisationEntity);
      case 'PageEntity':
        return this.pageToSchema(data as PageEntity);
      case 'UserContextEntity':
        return this.userContextToSchema(data as UserContextEntity);
      default:
        return undefined;
    }
  }

  private articleArrayToSchema(data?: ArticleEntity[]): Maybe<ArticleEntitySchema[]> {
    return data?.map(entity => this.articleToSchema(entity));
  }

  private articleToSchema(entity?: Maybe<ArticleEntity>): ArticleEntitySchema {
    return new ArticleEntitySchema(
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
    );
  }

  private getCategoryNameArticle(entity?: Maybe<ArticleEntity>): Maybe<string> {
    return entity?.category?.translatables
      ?.filter(category => category?.language?.locale === this.locale)
      ?.map(category => category?.name)
      ?.join()
  }

  private dealArrayToSchema(data?: DealEntity[]): Maybe<DealEntitySchema[]> {
    return data?.map(entity => this.dealToSchema(entity));
  }

  private dealToSchema(entity?: Maybe<DealEntity>): DealEntitySchema {
    return new DealEntitySchema(
      this.getCategoryNameDeal(entity),
      entity?.content,
      entity?.name,
      new OfferSchema(
        entity?.price
      ),
      entity?.slug,
    );
  }


  private getCategoryNameDeal = (entity?: Maybe<DealEntity>): Maybe<string> => {
    return entity?.category?.translatables
      ?.filter(category => category?.language?.locale === this.locale)
      ?.map(category => category?.name)
      ?.join();
  };


  private eventArrayToSchema(data: EventEntity[]): Maybe<EventEntitySchema[]> {
    return data?.map(entity => this.eventToSchema(entity));
  }

  private eventToSchema(entity?: Maybe<EventEntity>): EventEntitySchema {
    return new EventEntitySchema(
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
    );
  }

  private getCategoryNameEvent = (entity?: Maybe<EventEntity>): Maybe<string> => {
    return entity?.category?.translatables
      ?.filter(category => category?.language?.locale === this.locale)
      ?.map(category => category?.name)
      ?.join();
  };


  private organisationArrayToSchema(data?: OrganisationEntity[]): Maybe<OrganisationEntitySchema[]> {
    return data?.map(entity => this.organisationToSchema(entity));
  }

  private organisationToSchema(entity?: Maybe<OrganisationEntity>): OrganisationEntitySchema {
    return new OrganisationEntitySchema(
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
    );
  }
  
  private getMemberOfOrganisation = (entity?: Maybe<OrganisationEntity>): Maybe<Maybe<PersonSchema>[]> => {
    return entity?.members
      ?.filter(member => member?.userContext)
      ?.map(member => {
        const user = member?.userContext?.user;
        return user
          ? new PersonSchema(
              user.email,
              user.firstName,
              user.lastName,
              user.phone
            )
          : null;
      })
      ?.filter(person => person !== null);
  };


  private pageArrayToSchema(data?: PageEntity[]): Maybe<PageEntitySchema[]> {
    return data?.map(entity => this.pageToSchema(entity));
  }

  private pageToSchema(entity?: Maybe<PageEntity>): PageEntitySchema {
    return new PageEntitySchema(
      this.getPageEmbeddings(entity)
    );
  }
 
  private getPageEmbeddings = (entity?: Maybe<PageEntity>): PageEmbeddingsEntitySchema[] => {
    return entity?.embeddings
      ?.filter(embedding => embedding?.id)
      ?.map(embedding => {
        const attributes = embedding?.attributes;
        if (attributes) {
          const pageAttributes = attributes.map(attribute => {
            const translatables = attribute?.translatables
            ?.filter(translatable => translatable?.language?.locale === this.locale)
            .map(translatable => {
              return new TranslatableEntitySchema(
                translatable?.translatable
              );
            }) ?? [];
            return new PageAttributeEntitySchema(translatables);
          }) ?? [];
          return new PageEmbeddingsEntitySchema(pageAttributes);
        }
        return new PageEmbeddingsEntitySchema([]);
      }) ?? [];
  };

  private userContextArrayToSchema(data?: UserContextEntity[]): Maybe<UserContextEntitySchema[]> {
    return data?.map(entity => this.userContextToSchema(entity))
  }

  private userContextToSchema(entity?: Maybe<UserContextEntity>): UserContextEntitySchema {
    return new UserContextEntitySchema(
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
    );
  }

  private getMemberOf(entity?: Maybe<UserContextEntity>): Maybe<Maybe<string>[]> {
    return entity?.members
      ?.filter(member => member?.organisation)
      .map(member => member?.organisation?.name)
      .filter(name => name !== undefined && name !== null);
  }

  // FOOTER

  public addFooterSchema(data?: Maybe<MenuItemEntity[]>): void {
    if (data?.length) {
      this.footerSchema = new BreadcrumbList(
        data.map(item => this.menuItemToSchema(item))
      );
    }
  }

  private menuItemToSchema(entity?: Maybe<MenuItemEntity>): ListItemSchema {
    return new ListItemSchema(
      new ItemSchema(
        this.getMenuNames(entity),
        this.getMenuDescription(entity)
      ),
      entity?.order,
    );
  }

  private getMenuNames(entity: Maybe<MenuItemEntity>): Maybe<string> {
    return entity?.subMenuItems
      ?.flatMap(subMenu =>
        subMenu?.translatables
          ?.filter(translatable => translatable?.language?.locale === this.locale)
          ?.map(translatable => ({ name: translatable?.name, }))
      )
      ?.map(item => item?.name)
      ?.join(', ');
  }

  private getMenuDescription(entity: Maybe<MenuItemEntity>): Maybe<string> {
    return entity?.subMenuItems
      ?.flatMap(subMenu => subMenu?.translatables
        ?.filter(translatable => translatable?.language?.locale === this.locale)
        .map(translatable => ({
          shortDescription: translatable?.shortDescription,
        }))
      )
      .map(item => item?.shortDescription)
      .join(', ');
  }

}