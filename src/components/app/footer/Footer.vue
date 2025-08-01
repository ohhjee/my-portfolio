<script lang="ts" setup>
const date = new Date().getFullYear();

const contacts = [
  {
    id: 1,
    name: "Github",
    icon: "ri:github-fill",
    link: "https://github.com/ohhjee",
    downloadable: false,
  },
  {
    id: 2,
    name: "LinkedIn",
    icon: "uil:linkedin",
    link: "https://www.linkedin.com/in/orotunji-gbenga",
    downloadable: false,
  },
  {
    id: 3,
    name: "Email",
    icon: "ri:github-fill",
    link: "mailto:orotunjigbega@gmail.com",
    downloadable: false,
  },
  {
    id: 4,
    name: "Resume",
    icon: "ri:github-fill",
    link: "Orotunji_Oluwagbenga.pdf",
    downloadable: true,
  },
];
</script>
<template>
  <footer>
    <div class="tw:mt-4">
      <span
        class="tw:inline-flex"
        v-for="contact in contacts"
        :key="contact.id"
      >
        <a
          :href="contact.link"
          target="_blank"
          :download="contact.downloadable ? contact.link : false"
          rel="noopener noreferrer"
          class="tw:ml-2 tw:inline-flex tw:items-center"
        >
          <iconify
            :icon="contact.icon"
            class="tw:text-blue-300 tw:size-4"
          />
          <span class="tw:ml-2 tw:text-sm">
            {{ contact.name }}
            <!-- {{ contact.name }} -->
          </span>
        </a>
      </span>
    </div>
    <div class="tw:py-10 tw:text-left">
      <div class="tw:text-sm tw:mt-2">
        All rights reserved © Ohhjee
        {{ date }}
      </div>
    </div>
  </footer>
</template>
