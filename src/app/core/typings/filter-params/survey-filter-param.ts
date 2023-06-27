import { Maybe } from 'src/schema/schema';

export enum SurveyFilterQueryDefinition {
  past = 'past',
}

export type SurveyFilterQueryParams = {
  [SurveyFilterQueryDefinition.past]?: Maybe<boolean | string>,
};
