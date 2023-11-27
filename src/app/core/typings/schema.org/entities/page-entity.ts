import { Maybe } from 'graphql/jsutils/Maybe'

export type PageEntitySchema = {
  '@context': string,
  '@type': string,
  // breadcrumb: BreadcrumbSchema  
  // primaryImageOfPage - uploads //img
  
  abstract: Maybe<string>,
  dateCreated: Maybe<string>,
  description: Maybe<string>,
  lastReviewed: Maybe<string>,
  mainContentOfPage: Maybe<string>,
  name: Maybe<string>, 
  significantLink: Maybe<string>,
  url: Maybe<string>, // slug
}