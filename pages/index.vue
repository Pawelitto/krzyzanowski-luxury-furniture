<script setup lang="ts">
const { t } = useI18n();

const testimonials = [
  {
    quote: "Nostrud reprehenderit magna deserunt dolor.",
    author: {
      name: "Evan you",
      job: "Creator of Vue.js and Vite",
      src: "https://ipx.nuxt.com/f_auto,s_40x40/gh_avatar/yyx990803",
    },
  },
  {
    quote:
      "Irure irure dolore Lorem dolor anim velit id fugiat minim cupidatat dolore nulla Lorem aliquip cillum.",
    author: {
      name: "Guillermo Rauch",
      job: "Co-founder and CEO of Vercel",
      src: "https://ipx.nuxt.com/f_auto,s_40x40/gh_avatar/rauchg",
    },
  },
  {
    quote:
      "Magna labore amet velit eiusmod velit dolor cillum sunt est tempor ea commodo fugiat amet tempor.",
    author: {
      name: "Addy Osmani",
      job: "Chief Engineer of Chrome",
      src: "https://ipx.nuxt.com/f_auto,s_40x40/gh_avatar/addyosmani",
    },
  },
  {
    quote:
      "Culpa amet do sit officia non magna cillum ullamco dolore qui sunt occaecat.",
    author: {
      name: "Sarah Drasner",
      job: "Director of Engineering, Google",
      src: "https://ipx.nuxt.com/f_auto,s_40x40/gh_avatar/sdras",
    },
  },
  {
    quote: "Ex veniam eu incididunt.",
    author: {
      name: "Dominik Angerer",
      job: "Co-founder of Storyblok",
      src: "https://ipx.nuxt.com/f_auto,s_40x40/gh_avatar/DominikAngerer",
    },
  },
  {
    quote:
      "Nostrud id Lorem laborum ut eiusmod voluptate aliquip non esse sint occaecat.",
    author: {
      name: "Savas Vedova",
      job: "Sernior Frontend Engineer at GitLab",
      src: "https://ipx.nuxt.com/f_auto,s_40x40/gh_avatar/svedova",
    },
  },
];

const faqItems = [
  {
    label: t("faq.questions[0].question"),
    content: t("faq.questions[0].answer"),
  },
  {
    label: t("faq.questions[1].question"),
    content: t("faq.questions[1].answer"),
  },
  {
    label: t("faq.questions[2].question"),
    content: t("faq.questions[2].answer"),
  },
  {
    label: t("faq.questions[3].question"),
    content: t("faq.questions[3].answer"),
  },
];

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
        v-motion
        :initial="{
          opacity: 0,
        }"
        :enter="{
          opacity: 1,
        }"
        :leave="{
          opacity: 0,
        }"
        :duration="0.5"
        :key="currentImageIndex"
        :src="currentImage"
        class="w-full h-full object-cover brightness-50 pointer-events-none"
        quality="80"
        format="webp"
        prerender
      />
    </div>

    <div class="h-screen">
      <ULandingHero
        :ui="{
          title: 'text-white',
          description: 'text-gray-300',
          headline: 'mb-5',
        }"
      >
        <template #headline>
          <NuxtImg
            src="hero/Logo_furtniture_biale_raster_lowres.png"
            class="mx-auto w-3/4 md:w-1/3"
          />
        </template>
        <template #title>
          <!-- <div
            class="text-5xl font-bold tracking-tight text-gray-200 dark:text-white sm:text-7xl"
          >
            Krzyżanowski Luxury Furniture
          </div> -->
        </template>
        <template #description>
          <div
            class="mt-6 text-2xl font-medium tracking-tight text-gray-300 dark:text-gray-300"
          >
            <span class=""> Inspired by excellence </span>
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

    <ULandingSection
      title="The freedom to build anything"
      icon="i-heroicons-user-group"
    >
      <UPageColumns>
        <UPageCard v-for="(testimonial, index) in testimonials" :key="index">
          <q class="italic text-gray-500 dark:text-gray-400">
            {{ testimonial.quote }}
          </q>

          <div class="flex gap-x-3 items-center mt-3">
            <UAvatar
              :src="testimonial.author.src"
              :alt="testimonial.author.name"
              size="sm"
            />

            <div class="min-w-0 text-sm">
              <p class="font-semibold">
                {{ testimonial.author.name }}
              </p>
              <p class="truncate">
                {{ testimonial.author.job }}
              </p>
            </div>
          </div>
        </UPageCard>
      </UPageColumns>
    </ULandingSection>

    <ULandingSection
      title="Frequently Asked Questions"
      icon="i-heroicons-question-mark-circle"
    >
      <ULandingFAQ :items="faqItems" multiple />
    </ULandingSection>
  </div>
</template>
<style scoped></style>
