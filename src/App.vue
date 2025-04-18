<script setup lang="ts">
const toolKitIcon = [
  "teenyicons:typescript-outline",
  "famicons:logo-laravel",
  "teenyicons:javascript-outline",
  "iconoir:git-solid",
  "ri:vuejs-line",
  "akar-icons:css-fill",
  "akar-icons:php-fill",
];
</script>
<template>
  <div class="tw:max-sm:p-4 tw:min-sm:max-w-8/12 tw:mx-auto">
    <div class="tw:flex tw:items-center tw:justify-between tw:py-3">
      <a href="/" class="tw:font-dancing tw:text-white tw:text-4xl link"
        >Ohhjee</a
      >

      <div>
        <div>
          <iconify icon="fluent-mdl2:work" class="tw:text-blue-400 tw:size-6" />
        </div>
      </div>
    </div>

    <div class="tw:mt-16">
      <div class="tw:flex tw:items-center">
        <span class="tw:text-lg tw:font-underdog">Hello</span>
        <span class="tw:ml-2">
          <iconify
            icon="mdi:greeting"
            class="tw:size-4 tw:text-blue-300 tw:animate-wiggle"
          />
        </span>
      </div>
      <div class="tw:min-ml:max-w-xl tw:max-lg:w-full">
        <div
          class="tw:min-lg:text-6xl tw:max-lg:text-3xl tw:font-extrabold tw:text-shadow-lg"
        >
          I am <span class="tw:tracking-wide"> Oluwagbenga </span>
        </div>
        <div
          class="tw:min-lg:text-6xl tw:max-lg:text-3xl textShadow tw:font-extrabold"
        >
          A Web Developer
        </div>
        <div class="tw:min-sm:text-lg tw:text-xs">
          Full-stack Developer specializing in Vue.js & Laravel.
        </div>
      </div>
      <div class="tw:my-20 tw:flex tw:items-start tw:justify-between tw:gap-10">
        <div
          class="tw:gap-4 tw:flex tw:items-center tw:min-lg:flex-row tw:max-lg:flex-col tw:w-full"
        >
          <div class="tw:rounded-full tw:size-40 tw:overflow-hidden tw:avatar">
            <img
              src="https://loremflickr.com/320/240/dog"
              class="tw:size-full"
            />
          </div>
          <div
            class="tw:min-sm:text-lg tw:text-sm tw:max-w-sm tw:max-md:text-center"
          >
            I am passionate about crafting solid and scalable products with
            great user experiences.
          </div>
        </div>
      </div>
      <section>
        <div class="tw:min-sm:text-lg tw:text-sm">
          I craft seamless, user-focused web applications by blending dynamic
          front-ends with robust backends. With expertise in
          <span class="tw:text-lightblue tw:font-bold tw:link">Vue.js</span> for
          building
          <span class="tw:text-lightblue tw:font-bold tw:link"> intuitive</span
          >,
          <span class="tw:text-lightblue tw:font-bold tw:link"
            >responsive interfaces</span
          >
          and
          <span class="tw:text-lightblue tw:font-bold tw:link">Laravel</span>
          for creating
          <span class="tw:text-lightblue tw:font-bold tw:link">secure</span>,
          <span class="tw:text-lightblue tw:font-bold tw:link">
            scalable server-side solutions</span
          >, I deliver
          <span class="tw:text-lightblue tw:font-bold tw:link">end-to-end</span>
          web experiences that drive results.
        </div>
      </section>
      <section
        class="tw:py-10 tw:max-md:flex tw:items-center tw:justify-between tw:flex-col tw:text-left"
      >
        <div
          class="tw:text-3xl tw:font-extrabold tw:mb-8 tw:text-center tw:min-md:text-left tw:w-full"
        >
          My Toolkit
        </div>

        <div
          class="tw:grid tw:lg:grid-cols-6 tw:xl:grid-cols-7 tw:sm:grid-cols-4 tw:gap-5 tw:font-bold tw:grid-cols-2 tw:place-content-center tw:w-fit"
        >
          <div
            v-for="(tools, index) in toolKitIcon"
            :key="index"
            class="tw:text-lg tw:bg-white/5 tw:w-fit tw:py-4 tw:px-10 tw:rounded-2xl tw:last:col-span-1 tw:hover:shadow-[0px_0px_5px] tw:hover:shadow-gray-100 tw:hover:transition-all"
          >
            <iconify :icon="tools" class="tw:text-white/20 tw:size-8" />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
