import * as path from "path";
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-primevue",
    "@nuxtjs/i18n",
  ],
  primevue: {
    cssLayerOrder: "tailwind-base, primevue, tailwind-utilities",
    components: {
      exclude: ["Editor", "Chart"],
    },
  },
  i18n: {
    langDir: "locales",
    strategy: "prefix_except_default",
    locales: [
      {
        code: "en-us",
        iso: "en-us",
        name: "English",
        file: "en-us.json",
      },
      {
        code: "fa",
        iso: "fa",
        name: "فارسی",
        file: "fa.json",
      },
    ],
    defaultLocale: "fa",
  },
  build: {
    transpile: ["primevue"],
  },
  devtools: { enabled: true },
  css: [
    "primevue/resources/themes/lara-light-indigo/theme.css",
    "primevue/resources/primevue.min.css",
    "primeicons/primeicons.css",
  ],
});
