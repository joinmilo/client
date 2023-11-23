import { Maybe } from '../../api/generated/schema';

export type MediaSchema = {
  '@context': string,
  '@type': string,
  // embedURL?: Maybe<string>,
  // contentSize?: Maybe<string>,
  // productionCompany?: OrganisationSchema | PersonSchema,
  // uploadDate?: Maybe<string>,
  encodingFormat: Maybe<string>,

}