export const fallbackLng = 'en';
export const languages = [fallbackLng, 'pl'];
export const defaultNS = 'common';
export const cookieName = 'i18next';
export const languageNames = new Map<string, string>([
  ['en', 'English'],
  ['pl', 'Polski'],
]);

export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
