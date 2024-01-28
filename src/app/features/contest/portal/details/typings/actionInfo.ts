import { Maybe, MediaEntity } from 'src/app/core/api/generated/schema';

export type ActionInfo = {
  text?: Maybe<string>;
  media?: Maybe<MediaEntity>
  disabled?: boolean;
  label?: string;
}