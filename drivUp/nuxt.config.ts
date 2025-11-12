// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  runtimeConfig: {
    DATABASE_URL: process.env.DATABASE_URL,
  },
  app: {
    head: {
      title: "Driv'Up",
      titleTemplate: "%s | Driv'Up",
      htmlAttrs: {
        lang: 'fr'
      },
      meta: [
        {
          name: "description",
          content: "Driv'Up est votre auto-école moderne à Strasbourg. Préparez votre permis B et code de la route avec des moniteurs expérimentés. Taux de réussite 92%.",
        },
        {
          name: "keywords",
          content: "auto-école, permis B, code de la route, Strasbourg, formation conduite, AAC",
        },
        {
          name: "author",
          content: "Driv'Up",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          name: "theme-color",
          content: "#6B2EFF",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:url",
          content: "https://drivup-ae.com",
        },
        {
          property: "og:title",
          content: "Driv'Up - Auto-école à Strasbourg | Permis B & Code de la Route",
        },
        {
          property: "og:description",
          content: "Driv'Up est votre auto-école moderne à Strasbourg. Préparez votre permis B et code de la route avec des moniteurs expérimentés. Taux de réussite 92%.",
        },
        {
          property: "og:image",
          content: "https://drivup-ae.com/og-image.jpg",
        },
        {
          property: "twitter:card",
          content: "summary_large_image",
        },
        {
          property: "twitter:url",
          content: "https://drivup-ae.com",
        },
        {
          property: "twitter:title",
          content: "Driv'Up - Auto-école à Strasbourg",
        },
        {
          property: "twitter:description",
          content: "Préparez votre permis B avec Driv'Up. Moniteurs expérimentés, taux de réussite 92%.",
        },
        {
          name: "robots",
          content: "index, follow",
        },
        {
          name: "language",
          content: "fr-FR",
        },
      ],
      link: [
        {
          rel: "canonical",
          href: "https://drivup-ae.com",
        },
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
      ],
    },
  },
});
