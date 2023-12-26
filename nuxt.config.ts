// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/main.css", "~/assets/reset.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@pinia/nuxt", "@ant-design-vue/nuxt"],
  build: {
    transpile: [],
  },
  devtools: { enabled: true },
  runtimeConfig: {},
});
