import { Maybe, MediaEntity } from 'src/app/core/api/generated/schema';

export type ActionInfo = {
  media?: Maybe<MediaEntity>
  disabled?: boolean;
  label?: string;
}