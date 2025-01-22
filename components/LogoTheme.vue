<script setup lang="ts">
const colorMode = useColorMode();

const image = computed(() =>
  colorMode.value === "dark" ? "logo_biale.png" : "logo_czarne.png"
);
</script>

<template>
  <div>
    <NuxtLink to="/">
      <NuxtImg :src="image" class="w-auto h-6 text-white" />
    </NuxtLink>
  </div>
</template>
