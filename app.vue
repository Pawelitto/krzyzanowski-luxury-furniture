<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { computed } from "vue";

const { t, locale, locales } = useI18n();
const colorMode = useColorMode();

const color = computed(() =>
  colorMode.value === "dark" ? "#1c1917" : "white"
);

const links = computed(() => [
  {
    label: t("navbar_links.home"),
    icon: "i-heroicons-home-solid",
  },
  {
    label: t("navbar_links.projects"),
    icon: "i-heroicons-check-badge-16-solid",
  },
  {
    label: t("navbar_links.partners"),
    icon: "i-heroicons-user-group-20-solid",
  },
  {
    label: t("navbar_links.contact"),
    icon: "i-heroicons-phone-16-solid",
  },
]);

const path =
  process.env.NODE_ENV === "production"
    ? "https://krzyzanowski-luxuryfurniture.com"
    : "http://localhost:3000";

useHead({
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { key: "theme-color", name: "theme-color", content: color },
  ],
  link: [{ rel: "icon", href: "/favicon.ico" }],

  htmlAttrs: {
    lang: locales.value.find((l) => l.code === locale.value)?.lang,
  },
});

useSeoMeta({
  titleTemplate: "Krzyżanowski Luxury Furniture %s",
  ogTitle: t("seo.title"),
  twitterTitle: t("seo.title"),
  twitterCard: "summary_large_image",
  ogImage: `${path}/banner.png`,
  twitterImage: `${path}/banner.png`,
  description: t("seo.description"),
  ogDescription: t("seo.description"),
  twitterDescription: t("seo.description"),
});

useSchemaOrg([
  defineQuestion({
    name: t("faq.questions[0].question"),
    acceptedAnswer: t("faq.questions[0].answer"),
  }),
  defineQuestion({
    name: t("faq.questions[1].question"),
    acceptedAnswer: t("faq.questions[1].answer"),
  }),
  defineQuestion({
    name: t("faq.questions[2].question"),
    acceptedAnswer: t("faq.questions[2].answer"),
  }),
  defineQuestion({
    name: t("faq.questions[3].question"),
    acceptedAnswer: t("faq.questions[3].answer"),
  }),
]);
</script>

<template>
  <UHeader
    :links="links"
    v-motion="{
      initial: {
        y: -50,
        opacity: 0,
      },
      enter: {
        y: 0,
        opacity: 1,
        transition: {
          delay: 200,
        },
      },
      preset: 'visible-once',
    }"
  >
    <template #logo>
      <LogoTheme />
    </template>

    <template #right>
      <LangSwitcher />
      <UColorModeButton />
    </template>

    <template #panel>
      <ul class="space-y-2 px-3">
        <li
          v-for="(item, index) in links"
          :key="item.label"
          v-motion="{
            initial: {
              y: -20,
              opacity: 0,
            },
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                delay: 250 * index,
              },
            },
            preset: 'visible-once',
          }"
          class="flex items-center justify-start space-x-3"
        >
          <UIcon :name="item.icon" class="w-5 h-5" />
          <ULink>{{ item.label }}</ULink>
        </li>
      </ul>
    </template>
  </UHeader>

  <UMain>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UMain>

  <UFooter>
    <template #left>
      <p class="text-gray-500 dark:text-gray-400 text-sm">
        Copyright © {{ new Date().getFullYear() }}
        <NuxtLink
          class="hover:underline"
          to="https://fluentique.com"
          target="_blank"
        >
          Fluentique.com
        </NuxtLink>
        -
        <NuxtLink
          class="hover:underline"
          to="https://github.com/nuxt/nuxt/blob/main/LICENSE"
          target="_blank"
        >
          All rights reserved
        </NuxtLink>
      </p>
    </template>

    <template #right>
      <UButton
        to="https://x.com/nuxt_js"
        target="_blank"
        icon="i-simple-icons-x"
        color="gray"
        variant="ghost"
      />
      <UButton
        to="https://discord.com/invite/ps2h6QT"
        target="_blank"
        icon="i-simple-icons-discord"
        color="gray"
        variant="ghost"
      />
      <UButton
        to="https://github.com/nuxt/nuxt"
        target="_blank"
        icon="i-simple-icons-github"
        color="gray"
        variant="ghost"
      />
    </template>
  </UFooter>
  <UNotifications />
</template>
