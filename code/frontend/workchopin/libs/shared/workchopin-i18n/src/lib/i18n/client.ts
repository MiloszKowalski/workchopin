'use client';

import { useEffect, useState } from 'react';
import i18next from 'i18next';
import { UseTranslationOptions, initReactI18next, useTranslation as useTranslationOrg } from 'react-i18next';
import { useCookies } from 'react-cookie';
import resourcesToBackend from 'i18next-resources-to-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { getOptions, languages, cookieName, fallbackLng, defaultNS } from './settings';

const isSSR = typeof window === 'undefined';

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(resourcesToBackend((language: string, namespace: string) => import(`./locales/${language}/${namespace}.json`)))
  .init({
    ...getOptions(),
    lng: undefined, // let detect the language on client side
    detection: {
      order: ['path', 'htmlTag', 'cookie', 'navigator'],
    },
    preload: isSSR ? languages : [],
  });

export function useTranslation(
  lng: string = fallbackLng,
  ns: string = defaultNS,
  options: UseTranslationOptions<undefined> = {},
) {
  const [cookies, setCookie] = useCookies([cookieName]);
  const ret = useTranslationOrg(ns, options);
  const { i18n } = ret;

  const shouldChangeLanguage = isSSR && lng && i18n.resolvedLanguage !== lng;

  if (shouldChangeLanguage) {
    i18n.changeLanguage(lng);
  }

  const [activeLng, setActiveLng] = useState(i18n.resolvedLanguage);

  useEffect(() => {
    if (activeLng === i18n.resolvedLanguage || !shouldChangeLanguage) {
      return;
    }
    setActiveLng(i18n.resolvedLanguage);
  }, [activeLng, i18n.resolvedLanguage, shouldChangeLanguage]);

  useEffect(() => {
    if (!lng || !shouldChangeLanguage) {
      return;
    }
    i18n.changeLanguage(lng);
  }, [lng, i18n, shouldChangeLanguage]);

  useEffect(() => {
    if (cookies.i18next === lng || !shouldChangeLanguage) {
      return;
    }

    setCookie(cookieName, lng, { path: '/' });
  }, [lng, cookies.i18next, shouldChangeLanguage]);

  return ret;
}
