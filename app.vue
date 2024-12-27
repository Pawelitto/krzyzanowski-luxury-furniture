<script setup lang="ts">
const links = [
  {
    label: "Documentation",
    icon: "i-heroicons-book-open",
    to: "https://github.com/nuxt/ui/releases",
  },
  {
    label: "Playground",
    icon: "i-simple-icons-stackblitz",
    to: "https://github.com/nuxt/ui/releases",
  },
  {
    label: "Roadmap",
    icon: "i-heroicons-map",
    to: "https://github.com/nuxt/ui/releases",
  },
  {
    label: "Pro",
    icon: "i-heroicons-square-3-stack-3d",
    to: "https://github.com/nuxt/ui/releases",
  },
  {
    label: "Releases",
    icon: "i-heroicons-rocket-launch",
    to: "https://github.com/nuxt/ui/releases",
    target: "_blank",
  },
];
</script>
<template>
  <div>
    <div class="h-10 w-10 bg-red-500"></div>
    <UHeader :links="links">
      <template #logo> </template>

      <template #right>
        <UColorModeButton />

        <UButton
          icon="i-simple-icons-github"
          to="https://github.com/nuxt/nuxt"
          target="_blank"
          color="gray"
          variant="ghost"
        />
      </template>
    </UHeader>
    <NuxtPage />
    <LangSwitcher />
  </div>
</template>
