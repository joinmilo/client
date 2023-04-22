/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, filter, isObservable, map, Observable, of } from 'rxjs';
import { ConfigurationEntity, LanguageEntity, Maybe } from 'src/schema/schema';
import { defaultLocaleConfig } from '../constants/core.constants';
import { selectConfiguration, selectLabels, selectLanguage } from '../state/core.selectors';
import { Translatable } from '../typings/translatable';

@Injectable({ providedIn: 'root' })
export class TranslationService {

  constructor(
    private store: Store,
  ) { }

  public label(tagId?: Maybe<string>): Observable<Maybe<string> | void> {
    return tagId
      ? combineLatest([
        this.store.select(selectLabels),
        this.store.select(selectLanguage),
        this.store.select(selectConfiguration(defaultLocaleConfig))
      ]).pipe(
        filter(([labels]) => !!labels),
        map(([labels, language, defaultLocale]) => {
          const label = labels?.get(tagId)?.find(label => label?.language?.locale === language?.locale);
          return label ?? labels?.get(tagId)?.find(label => label?.language?.locale === defaultLocale?.value)
        }),
        map((label) => label
          ? label['content'] as string
          : tagId
        )
      )
      : of(tagId);
  }

  public translatable(
    v?: any,
    field?: Maybe<string>): Observable<Maybe<string> | undefined> {
      
    return combineLatest([
      isObservable(v) ? v : of(v),
      this.store.select(selectLanguage),
      this.store.select(selectConfiguration(defaultLocaleConfig))
    ]).pipe(
      map(([value, language, defaultLocale]) => (Array.isArray(value) 
        ? [value, language, defaultLocale]
        : [(value as any)?.translatables, language, defaultLocale]) as [Maybe<Translatable[]>, LanguageEntity, ConfigurationEntity]),
      map(([translatables, language, defaultLocale]) => {
        const translatable = translatables?.find(t => t?.language?.locale === language?.locale);
        return translatable ?? translatables?.find(t => t?.language?.locale === defaultLocale.value);
      }),
      map(translatable => (translatable && field ? translatable[field] : '') as string),
    )
  }

}
