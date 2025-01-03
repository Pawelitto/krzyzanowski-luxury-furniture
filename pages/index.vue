<script setup lang="ts"></script>
<template>
  <div>
    <div class="w-full h-screen absolute top-0">
      <NuxtImg
        src="/hero/image1.png"
        class="w-full h-full object-cover brightness-50 pointer-events-none"
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
            class="mt-6 text-lg font-medium tracking-tight text-gray-300 dark:text-gray-300"
          >
            Projektujemy i wykonujemy meble, które harmonijnie łączą estetykę z
            funkcjonalnością, dopasowane do każdego wnętrza.<br />
            W naszej ofercie znajdziesz wyjątkowe: kuchnie, szafy, sypialnie,
            biurka, regały
          </div>
        </template>
        <template #links>
          <div class="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3">
            <a
              class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 transition-all font-medium rounded-md text-sm gap-x-2.5 px-3.5 py-2.5 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 aria-disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-950 dark:disabled:bg-gray-800 dark:aria-disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
              href="/portfolio"
            >
              <UIcon
                name="i-heroicons-check-badge-16-solid"
                class="flex-shrink-0 h-5 w-5"
              />
              <span class="">Zobacz realizacje</span></a
            >
            <a
              class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 transition-all font-medium rounded-md text-sm gap-x-2.5 px-3.5 py-2.5 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 aria-disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-950 dark:disabled:bg-gray-800 dark:aria-disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
              href="/contact"
            >
              <UIcon
                name="i-heroicons-phone-16-solid"
                class="flex-shrink-0 h-5 w-5"
              />
              <span class="">Kontakt</span>
            </a>
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
