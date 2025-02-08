import { createInstance } from "i18next";
import LocaleOptions from "./index.types";
import { initReactI18next } from "react-i18next";
import baseEnTranslation from "@app/translations/en.translation.json";

const resources = {
  [LocaleOptions.EN]: {
    base: baseEnTranslation,
  },
} as const;

export type LocaleResource = (typeof resources)[LocaleOptions.EN];

export const i18n = createInstance({
  compatibilityJSON: "v4",
  debug: process.env.NODE_ENV === "development",
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
