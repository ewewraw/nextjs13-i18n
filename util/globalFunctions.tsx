export const getLocalizedURL = (path: string, lang: string) => {
    return lang === "en" ? path : `${path}?lang=${lang}`;
};