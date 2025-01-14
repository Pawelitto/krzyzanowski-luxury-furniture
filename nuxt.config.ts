// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  extends: ["@nuxt/ui-pro"],
  modules: [
    "@nuxt/ui",
    "@nuxtjs/i18n",
    "@nuxtjs/tailwindcss",
    "@vueuse/motion/nuxt",
    "@nuxtjs/seo",
    "@nuxt/image",
  ],
  i18n: {
    lazy: true,
    langDir: "./locales",
    strategy: "no_prefix",
    locales: [
      {
        lang: "en",
        code: "en-US",
        iso: "en-US",
        name: "English",
        file: "en-US.json",
        icon: "i-twemoji-flag-for-flag-united-kingdom",
      },
      {
        lang: "de",
        code: "de-DE",
        iso: "de-DE",
        name: "Deutschland",
        file: "de-DE.json",
        icon: "i-twemoji-flag-germany",
      },
      {
        lang: "pl",
        code: "pl-PL",
        iso: "pl-PL",
        name: "Polish",
        file: "pl-PL.json",
        icon: "i-twemoji-flag-poland",
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
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  routeRules: {
    "/_ipx/**": { prerender: true },
  },
});
