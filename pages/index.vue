<script setup lang="ts">
const { t } = useI18n();

const defaultWords = ["", "", "", "", ""];

const words = computed(() => {
  return [
    t("hero.animated_words[0]") || defaultWords[0],
    t("hero.animated_words[1]") || defaultWords[1],
    t("hero.animated_words[2]") || defaultWords[2],
    t("hero.animated_words[3]") || defaultWords[3],
    t("hero.animated_words[4]") || defaultWords[4],
  ];
});

const activeWordIndex = ref(0);

const activeWord = computed(() => {
  return words.value[activeWordIndex.value] || "";
});

let intervalId;
let intervalId2;

const currentImageIndex = ref(1);

const currentImage = computed(() => {
  return `/hero/image${currentImageIndex.value}.png`;
});

const imageLoaded = ref(false);

const beforeEnter = () => {
  imageLoaded.value = false;
};

const afterLeave = () => {
  imageLoaded.value = true;
};

onMounted(() => {
  intervalId = setInterval(() => {
    const wordCount = words.value.length;
    if (wordCount > 0) {
      activeWordIndex.value = (activeWordIndex.value + 1) % wordCount;
    }
  }, 5000);

  intervalId2 = setInterval(() => {
    currentImageIndex.value = (currentImageIndex.value % 11) + 1;
  }, 5000);
});

onUnmounted(() => {
  clearInterval(intervalId);
  clearInterval(intervalId2);
});
</script>
<template>
  <div>
    <div class="w-full h-screen absolute top-0">
      <NuxtImg
        v-if="currentImage"
        :key="currentImageIndex"
        :src="currentImage"
        class="w-full h-full object-cover brightness-50 pointer-events-none image"
        quality="80"
        width="1920"
        height="1080"
        format="webp"
      />
    </div>

    <div class="h-screen">
      <ULandingHero :ui="{ title: 'text-white', description: 'text-gray-300' }">
        <template #title>
          <div
            class="text-5xl font-bold tracking-tight text-gray-200 dark:text-white sm:text-7xl"
          >
            Krzyżanowski Luxury Furniture
          </div>
        </template>
        <template #description>
          <div
            class="mt-6 text-2xl font-medium tracking-tight text-gray-300 dark:text-gray-300"
          >
            <span class="hidden md:block"> {{ t("hero.title") }}</span
            ><br />
            {{ t("hero.subtitle") }}
            <span
              :key="activeWord"
              v-motion
              :initial="{
                opacity: 0,
                y: 50,
              }"
              :visible="{
                opacity: 1,
                y: 0,
              }"
              :duration="200"
              class="inline-block w-[6ch] text-center md:text-left"
            >
              {{ activeWord }}
            </span>
          </div>
        </template>
        <template #links>
          <div class="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3">
            <NuxtLink
              to="/portfolio"
              class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 transition-all font-medium rounded-md text-sm gap-x-2.5 px-3.5 py-2.5 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 aria-disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-950 dark:disabled:bg-gray-800 dark:aria-disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
            >
              <UIcon
                name="i-heroicons-check-badge-16-solid"
                class="flex-shrink-0 h-5 w-5"
              />
              <span>{{ t("navbar_links.projects") }}</span>
            </NuxtLink>
            <NuxtLink
              to="/contact"
              class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 transition-all font-medium rounded-md text-sm gap-x-2.5 px-3.5 py-2.5 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 aria-disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-950 dark:disabled:bg-gray-800 dark:aria-disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
            >
              <UIcon
                name="i-heroicons-phone-16-solid"
                class="flex-shrink-0 h-5 w-5"
              />
              <span>{{ t("navbar_links.contact") }}</span>
            </NuxtLink>
          </div>
        </template>
      </ULandingHero>
    </div>

    <ULandingSection title="The freedom to build anything" align="left" />

    <ULandingSection
      title="The flexibility to control your data"
      align="right"
    />
  </div>
</template>
<style scoped>
.image {
  transition: opacity 0.9s ease-in-out;
  opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
