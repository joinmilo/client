import { createReducer, on } from '@ngrx/store';
import { AppEntity, ConfigurationEntity, InformationDto, LanguageEntity, Maybe, SocialMediaEntity, ThemeEntity } from 'src/app/core/api/generated/schema';
import { Translatable } from '../../typings/translatable';
import { CoreActions } from '../actions/core.actions';

export interface CoreState {
  apps?: Maybe<AppEntity[]>,
  configurations?: ConfigurationEntity[]
  currentTheme?: Maybe<ThemeEntity>,
  labels?: Map<string, Maybe<Translatable>[]>,
  languages?: LanguageEntity[],
  serverInfo?: Maybe<InformationDto>,
  socialMedia?: Maybe<SocialMediaEntity[]>,
  themes?: ThemeEntity[],
}

export const initialState: CoreState = { };

export const coreReducer = createReducer(
  initialState,

  on(CoreActions.setApps, (state, action): CoreState => (
    { ...state, apps: action.apps }
  )),

  on(CoreActions.setConfigurations, (state, action): CoreState => (
    { ...state, configurations: action.configurations }
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
