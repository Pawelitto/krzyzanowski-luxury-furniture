<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t, locales, locale, setLocale } = useI18n();

const language = computed({
  get: () => locale.value,
  set: (value) => {
    setLocale(value);
  },
});

const languageOptions = computed(() => {
  return locales.value.map((item) => ({
    label: t(`language_names.${item.code}`),
    value: item.code,
    icon: item.icon,
  }));
});

const selected = computed({
  get: () =>
    languageOptions.value.find((option) => option.value === language.value),
  set: (newValue) => {
    if (newValue && newValue.value) {
      language.value = newValue.value;
    }
  },
});
</script>

<template>
  <USelectMenu
    v-model="selected"
    :options="languageOptions"
    :ui="{ base: 'min-h-7' }"
  >
    <template #leading>
      <UIcon v-if="selected?.icon" :name="selected?.icon" class="w-5 h-5" />
    </template>
    <template #label>
      <span class="hidden md:flex">{{ selected?.label }}</span>
    </template>
    <template #option="{ option }">
      <UIcon :name="option.icon" class="w-5 h-5" />
      <span class="hidden md:flex">{{ option.label }}</span>
    </template>
  </USelectMenu>
</template>
