<script setup lang="ts">
import { ref, onMounted } from "vue";
const textColor = ref("");
const colors = [
  "#1e90ff",
  "#87ceeb",
  "#ffc107",
  "#ffa07a",
  "#f4c430",
  "#ff4500",
  "#ffffff",
];

const toolKit = [
  "Vuejs",
  "Laravel/php",
  "Typescript",
  "Git",
  "Javascript",
  "Css",
];

const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

onMounted(() => {
  textColor.value = toolKit.map(() => getRandomColor());
});
</script>
<template>
  <div class="tw:max-w-8/12 tw:mx-auto">
    <div class="tw:flex tw:items-center tw:justify-between tw:py-3">
      <router-link to="#" class="tw:font-dancing tw:text-white tw:text-4xl"
        >Ohhjee</router-link
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
      <div class="tw:max-w-xl">
        <div class="tw:text-6xl tw:font-extrabold tw:text-shadow-lg">
          I am <span class="tw:tracking-wide"> Oluwagbenga </span>
        </div>
        <div class="tw:text-6xl textShadow tw:font-extrabold">
          A Web Developer
        </div>
        <div class="tw:text-lg">
          Full-stack Developer specializing in Vue.js & Laravel.
        </div>
      </div>
      <div class="tw:my-20 tw:flex tw:items-start tw:justify-between tw:gap-10">
        <div class="tw:gap-4 tw:flex tw:items-center">
          <div class="tw:rounded-full tw:size-40 tw:overflow-hidden tw:avatar">
            <img
              src="https://loremflickr.com/320/240/dog"
              class="tw:size-full"
            />
          </div>
          <span class="tw:text-lg tw:max-w-sm">
            I am passionate about crafting solid and scalable products with
            great user experiences.
          </span>
        </div>
      </div>
      <section>
        <div class="tw:text-xl tw:text-justify">
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
      <section class="tw:my-10">
        <div class="tw:text-3xl tw:font-extrabold tw:mb-8">My Toolkit</div>
        <div
          class="tw:grid tw:min-md:grid-cols-3 tw:min-sm:grid-cols-2 tw:gap-5 tw:font-bold tw:grid-cols-1"
        >
          <div
            v-for="(tools, index) in toolKit"
            :key="index"
            class="tw:text-xl toolkit"
          >
            {{ tools }}
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
