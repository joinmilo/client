import { createReducer, on } from '@ngrx/store';
import { AppEntity, ConfigurationEntity, InformationDto, LanguageEntity, Maybe, SocialMediaEntity, ThemeEntity } from 'src/app/core/api/generated/schema';
import { languageLocalStorage } from '../../constants/core.constants';
import { Translatable } from '../../typings/translatable';
import { CoreUserActions } from '../actions/core-user.actions';
import { CoreActions } from '../actions/core.actions';

export interface CoreState {
  apps?: Maybe<AppEntity[]>,
  configurations?: ConfigurationEntity[]
  currentTheme?: Maybe<ThemeEntity>,
  labels?: Map<string, Maybe<Translatable>[]>,
  language?: Maybe<LanguageEntity>,
  languages?: LanguageEntity[],
  serverInfo?: Maybe<InformationDto>,
  socialMedia?: Maybe<SocialMediaEntity[]>,
  themes?: ThemeEntity[],
}

export const initialState: CoreState = {
  language: { locale: localStorage.getItem(languageLocalStorage)
    ? localStorage.getItem(languageLocalStorage)
    : navigator.language.substring(0,2)
  },
};

export const coreReducer = createReducer(
  initialState,

  on(CoreUserActions.getMe, (state, action): CoreState => {
    return { ...state, language: action.user.user?.language ?? state.language  }
  }),

  on(CoreActions.changeLanguage, (state, action): CoreState => {
    if (action.language.locale) {
      localStorage.setItem(languageLocalStorage, action?.language?.locale);
    }
    return { ...state, language: action.language }
  }),

  on(CoreActions.setApps, (state, action): CoreState => (
    { ...state, apps: action.apps }
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

  on(CoreActions.setServerInfo, (state, action): CoreState => (
    { ...state, serverInfo: action.info }
  )),

  on(CoreActions.setSocialMedia, (state, action): CoreState => (
    { ...state, socialMedia: action.socialMedia }
  )),

  on(CoreActions.setThemes, (state, action): CoreState => (
    {
      ...state,
      currentTheme: action.themes?.find(theme => theme.isDefault),
      themes: action.themes
    }
  )),

);
