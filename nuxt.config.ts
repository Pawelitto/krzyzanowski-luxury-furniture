// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/i18n"],
  i18n: {
    lazy: true,
    langDir: "./locales",
    strategy: "no_prefix",
    locales: [
      {
        code: "en-US",
        iso: "en-US",
        name: "English(US)",
        file: "en-US.json",
      },
      {
        code: "de-DE",
        iso: "de-DE",
        name: "Deutschland",
        file: "de-DE.json",
      },
      {
        code: "pl-PL",
        iso: "pl-PL",
        name: "Polish",
        file: "pl-PL.json",
      },
    ],
    defaultLocale: "en-US",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      alwaysRedirect: true,
      fallbackLocale: "en-US",
      redirectOn: "root",
    },
  },
});
