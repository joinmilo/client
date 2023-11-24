import { Maybe } from 'graphql/jsutils/Maybe'
import { BreadcrumbSchema } from '../breadcrump'

export type PageEntitySchema = {
  '@context': string,
  '@type': string,
  breadcrumb: BreadcrumbSchema  //MenuItems
  // lastRevied - modified
  // mainContentOfPage - content
  // primaryImageOfPage - uploads
  // relatedLink - callUrl
  // abstract - shortDesciption
  // dateCreated - created
  url: Maybe<string>, // slug
}