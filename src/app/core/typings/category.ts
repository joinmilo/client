import { Maybe } from 'src/schema/schema'
import { Translatable } from './translatable'

export type Category = {
  color?: Maybe<string>,
  icon?: Maybe<string>,
  translatables?: Maybe<Maybe<Translatable>[]>,
}