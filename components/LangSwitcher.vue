<script setup lang="ts">
const { t, locales, locale, setLocale } = useI18n();

const language = computed({
  get: () => locale.value,
  set: (value) => {
    setLocale(value);
  },
});
</script>
<template>
  <ClientOnly>
    <select v-model="language">
      <option
        v-for="item in locales"
        :key="item.code"
        :value="item.code"
        class="flex items-center"
      >
        {{ t(`language_names.${item.code}`) }}
      </option>
    </select>
  </ClientOnly>
</template>
