import { createReducer, on } from '@ngrx/store';
import { LanguageEntity, Maybe, ThemeEntity } from 'src/schema/schema';
import { Translatable } from '../typings/translatable';
import { ConfigurationEntity } from './../../../schema/schema';
import { CoreActions } from './core.actions';

export interface CoreState {
  configurations?: ConfigurationEntity[]
  currentTheme?: Maybe<ThemeEntity>,
  language?: LanguageEntity,
  languages?: LanguageEntity[],
  labels?: Map<string, Maybe<Translatable>[]>,
  themes?: ThemeEntity[],
}

export const initialState: CoreState = {
  language: { locale: 'de' },
};

export const coreReducer = createReducer(
  initialState,

  on(CoreActions.setConfigurations, (state, action): CoreState => (
    { ...state, configurations: action.configurations }
  )),
  
  on(CoreActions.setLabels, (state, action): CoreState => (
    {
      ...state,
      labels: action.labels.reduce((map, label) =>
      (label.tagId && (map.set(label.tagId, label.translatables?.length
        ? label.translatables
        : [])), map),
        new Map())
    }
  )),

  on(CoreActions.setLanguages, (state, action): CoreState => (
    { ...state, languages: action.languages }
  )),

  on(CoreActions.setThemes, (state, action): CoreState => (
    {
      ...state,
      currentTheme: action.themes?.find(theme => theme.isDefault),
      themes: action.themes
    }
  )),

  on(CoreActions.changeLanguage, (state, action): CoreState => (
    { ...state, language: action.language }
  )),

);
