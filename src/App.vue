<script lang="ts" setup>
import { Footer } from "@/components/app";

import { ref, onMounted, onUnmounted } from "vue";

const isHeaderVisible = ref(false);
const animatedSections = ref(new Set<string>());
onMounted(() => {
  isHeaderVisible.value = true;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute("data-section");
          if (sectionId && !animatedSections.value.has(sectionId)) {
            entry.target.classList.add("animate-section");
            animatedSections.value.add(sectionId);
            observer.unobserve(entry.target); // Ensure animation happens only once
          }
        }
      });
    },
    { threshold: 0.1 }
  );
  document.querySelectorAll("[data-section]").forEach((section) => {
    observer.observe(section);
  });
  onUnmounted(() => {
    observer.disconnect();
  });
});
</script>
<template>
  <div class="tw:max-md:p-4 tw:min-md:max-w-8/12 tw:mx-auto">
    <div
      class="tw:flex tw:items-center tw:justify-between tw:py-3"
      :class="{ 'animate-header': isHeaderVisible }"
    >
      <router-link
        :to="{ name: 'Home' }"
        class="tw:font-dancing tw:text-white tw:text-4xl link"
        >Ohhjee</router-link
      >
      <div>
        <!-- <router-link
          :to="{ name: 'Project.index' }"
          class="tw:flex tw:cursor-pointer tw:items-center"
        >
          <iconify
            icon="ph:briefcase-fill"
            class="tw:text-blue-400 tw:size-6"
          />
          <span class="tw:link">Project</span>
        </router-link> -->
      </div>
    </div>

    <main class="tw:mt-16">
      <router-view />
    </main>
    <Footer />
  </div>
</template>
