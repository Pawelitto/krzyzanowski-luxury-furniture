<script setup>
import { useI18n } from "vue-i18n";
import { computed } from "vue";

const { t } = useI18n();

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
</script>

<template>
  <UHeader :links="links">
    <template #logo>
      Nuxt UI Pro
      <!-- <Logo class="w-auto h-6" /> -->
    </template>

    <template #right>
      <UColorModeButton />
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
