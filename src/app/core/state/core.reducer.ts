import { createReducer, on } from '@ngrx/store';
import { LanguageEntity, Maybe, ThemeEntity, UserContextEntity } from 'src/schema/schema';
import { Translatable } from '../typings/translatable';
import { ConfigurationEntity } from './../../../schema/schema';
import { CoreActions } from './core.actions';

export interface CoreState {
  configurations?: ConfigurationEntity[]
  currentTheme?: Maybe<ThemeEntity>,
  currentUser?: UserContextEntity,
  ongoingRequests: number,
  language?: LanguageEntity,
  languages?: LanguageEntity[],
  labels?: Map<string, Maybe<Translatable>[]>,
  themes?: ThemeEntity[],
}

export const initialState: CoreState = {
  ongoingRequests: 0,
  language: { locale: 'de' },
};

export const coreReducer = createReducer(
  initialState,

  on(CoreActions.changeLanguage, (state, action): CoreState => (
    { ...state, language: action.language }
  )),

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

  on(CoreActions.addRequest, (state): CoreState => (
    { ...state, ongoingRequests: state.ongoingRequests + 1 }
  )),

  on(CoreActions.removeRequest, (state): CoreState => (
    { ...state, ongoingRequests: state.ongoingRequests - 1 }
  )),

  on(CoreActions.getMe, (state, action): CoreState => (
    { ...state, currentUser: action.user }
  )),

  on(CoreActions.logout, (state): CoreState => (
    { ...state, currentUser: undefined }
  )),

);
