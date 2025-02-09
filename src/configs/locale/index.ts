import LocaleOptions from './index.types';
import homeEnTranslation from '@app/pages/Home/translations/en.translation.json';
import baseEnTranslation from '@app/translations/en.translation.json';
import { createInstance } from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  [LocaleOptions.EN]: {
    base: baseEnTranslation,
    home: homeEnTranslation,
  },
} as const;

export type LocaleResource = (typeof resources)[LocaleOptions.EN];

export const i18n = createInstance({
  compatibilityJSON: 'v4',
  debug: process.env.NODE_ENV === 'development',
  defaultNS: false,
  fallbackLng: LocaleOptions.EN,
  fallbackNS: false,
  lng: LocaleOptions.EN,
  ns: Object.keys(resources[LocaleOptions.EN]),
  resources,
  returnNull: false,
});

i18n.use(initReactI18next);
i18n.init();
