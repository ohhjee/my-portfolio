<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
// import { Footer } from "@/components/app";

import { Footer } from "./components/app";
import type { IsWork } from "@/definition";

const toolKitIcon = [
  "teenyicons:typescript-outline",
  "famicons:logo-laravel",
  "teenyicons:javascript-outline",
  "iconoir:git-solid",
  "ri:vuejs-line",
  "akar-icons:css-fill",
  "akar-icons:php-fill",
];

const isHeaderVisible = ref(false);
const animatedSections = ref(new Set<string>());

// https://devapp-new.vercel.app/

const works = [
  {
    id: 1,
    company: "Buysimply",
    location: "Lagos, Nigeria",
    year: "2024",
    title: "Frontend Developer",
    role: "Contract",
    description:
      "I built the complete frontend architecture, styling, and component logic. API connectivity was implemented by a backend developer I collaborated with.",
    languages: ["Vue", "Vuetify", "Typescript"],
    icons: ["devicon:vuejs", "devicon:vuetify", "devicon:typescript"],
    img: "/img/buySimply.png",
    link: "https://web.buysimply.app/",
  },
  {
    id: 2,
    company: "TriftToWin",
    location: "Lagos, Nigeria",
    year: "2024",
    title: "Frontend Developer",
    role: "Contract",
    description:
      "I built the complete frontend architecture, styling, and component logic. I also connected the api.",
    languages: ["Vue", "Vuetify", "Typescript"],
    icons: ["devicon:vuejs", "devicon:vuetify", "devicon:typescript"],
    img: "/img/trift.png",
    link: "https://play.google.com/store/apps/details?id=com.playthriftowin",
  },
  {
    id: 3,
    company: "E skool",
    location: "Lagos, Nigeria",
    year: "2022",
    title: "Frontend Developer",
    role: "Contract",
    description:
      "I built the complete frontend architecture, styling, and component logic.",
    languages: ["React", "Tailwind", "Typescript"],
    icons: [
      "vscode-icons:file-type-reactjs",
      "devicon:tailwindcss",
      "devicon:typescript",
    ],
    img: "/img/eskool.png",
    link: "https://www.results.eskoolnow.com/",
  },
] as IsWork[];

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
    link: "demand.pdf",
    downloadable: true,
  },
];

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
    <!-- Header with load animation -->
    <div
      class="tw:flex tw:items-center tw:justify-between tw:py-3"
      :class="{ 'animate-header': isHeaderVisible }"
    >
      <a href="/" class="tw:font-dancing tw:text-white tw:text-4xl link"
        >Ohhjee</a
      >
      <div>
        <router-link to="#" class="tw:flex tw:cursor-pointer tw:items-center">
          <iconify
            icon="ph:briefcase-fill"
            class="tw:text-blue-400 tw:size-6"
          />
          <span class="tw:link">Project</span>
        </router-link>
      </div>
    </div>

    <!-- Intro section with scroll animation -->
    <div class="tw:mt-16" data-section="intro">
      <div class="tw:inline-flex tw:items-center">
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
    </div>

    <!-- Avatar section with scroll animation -->
    <div
      class="tw:my-20 tw:flex tw:items-start tw:justify-between tw:gap-10"
      data-section="avatar"
    >
      <div
        class="tw:gap-4 tw:flex tw:items-center tw:min-lg:flex-row tw:max-lg:flex-col tw:w-full"
      >
        <div class="tw:rounded-full tw:size-60 tw:overflow-hidden tw:avatar">
          <img
            src="/profile/1.jpg"
            class="tw:size-full tw:object-top tw:object-contain tw:overflow-hidden"
          />
        </div>
        <div
          class="tw:min-sm:text-lg tw:text-sm tw:max-w-sm tw:max-md:text-center"
        >
          I am passionate about crafting solid and scalable products with great
          user experiences.
        </div>
      </div>
    </div>

    <!-- Description section with scroll animation -->
    <section data-section="description">
      <div class="tw:min-sm:text-lg tw:text-sm">
        I craft seamless, user-focused web applications by blending dynamic
        front-ends with robust backends. With expertise in
        <span class="tw:text-lightblue tw:font-bold tw:link">Vue.js</span> for
        building
        <span class="tw:text-lightblue tw:font-bold tw:link"> intuitive</span>,
        <span class="tw:text-lightblue tw:font-bold tw:link"
          >responsive interfaces</span
        >
        and
        <span class="tw:text-lightblue tw:font-bold tw:link">Laravel</span> for
        creating
        <span class="tw:text-lightblue tw:font-bold tw:link">secure</span>,
        <span class="tw:text-lightblue tw:font-bold tw:link">
          scalable server-side solutions</span
        >, I deliver
        <span class="tw:text-lightblue tw:font-bold tw:link">end-to-end</span>
        web experiences that drive results.
      </div>
    </section>

    <!-- Toolkit section with scroll animation -->
    <section
      class="tw:py-10 tw:max-md:flex tw:items-center tw:justify-between tw:flex-col tw:text-left"
      data-section="toolkit"
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
          class="tw:text-lg tw:bg-white/5 tw:w-fit tw:py-4 tw:px-10 tw:rounded-2xl tw:last:col-span-1 tw:hover:shadow-[0px_0px_5px] tw:hover:shadow-gray-100 tw:hover:transition-all toolkit-item"
          :style="{ '--animation-delay': `${index * 0.5}s` }"
        >
          <iconify :icon="tools" class="tw:text-white/50 tw:size-8" />
        </div>
      </div>
    </section>
    <section class="tw:py-10" data-section="project">
      <div
        class="tw:text-3xl tw:font-extrabold tw:mb-8 tw:text-center tw:min-md:text-left tw:w-full"
      >
        Projects
      </div>
      <div
        class="tw:grid tw:min-lg:grid-cols-2 tw:gap-4 tw:my-12 tw:last:my-0 tw:group work-item"
        v-for="(work, index) in works"
        :key="index"
        :style="{ '--animation-delay': `${index * 0.5}s` }"
      >
        <!-- Card Section -->
        <div>
          <div
            class="tw:bg-white tw:p-2 tw:relative tw:min-md:overflow-hidden tw:hover:min-md:shadow-xl tw:rounded-lg tw:transition-transform tw:duration-300 tw:h-64 tw:group/card"
          >
            <div class="tw:overflow-hidden tw:h-full">
              <img
                :src="work.img"
                alt=""
                class="tw:h-full tw:object-contain tw:w-full"
              />
            </div>
            <div
              class="tw:min-md:absolute tw:h-full tw:w-full tw:bg-black/50 tw:top-0 tw:left-0 tw:group-hover/card:min-md:opacity-100 tw:opacity-0 tw:transition-opacity tw:duration-300 tw:overflow-hidden"
            >
              <div class="tw:flex tw:items-center tw:justify-center tw:h-full">
                <div
                  class="tw:ring-2 tw:ring-lightblue tw:p-1 tw:rounded-full tw:z-10 tw:transition-all tw:duration-300"
                >
                  <a
                    :href="work.link"
                    target="_blank"
                    class="tw:group-hover/card:pointer-events-auto tw:pointer-events-none"
                  >
                    <iconify
                      icon="mdi:arrow-up"
                      width="30"
                      height="30"
                      class="tw:bg-lightblue tw:rounded-full tw:group-hover/card:bg-blue-200 tw:transition-transform tw:duration-300 tw:rotate-45"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="tw:mt-3 tw:inline-flex tw:min-md:hidden tw:relative tw:z-50">
            <a
              :href="work.link"
              class="tw:text-blue-300 tw:inline-flex tw:items-center "
              target="_blank"
              rel="noopener noreferrer"
            >
             <iconify icon="solar:link-outline" width="24" height="24" /> 
              <span class="tw:link"> link </span>
            </a>
          </div>
        </div>

        <!-- Content Section -->
        <div class="tw:group/card">
          <!-- Card Header -->
          <div
            class="card-header tw:flex tw:items-center tw:gap-2 tw:text-sm tw:group/header"
          >
            <div
              class="title hover:tw:text-blue-600 tw:transition-colors tw:duration-200"
            >
              {{ work.company }}
            </div>
            <div
              class="location tw:bg-lightblue tw:rounded tw:p-1 tw:text-xs tw:text-black tw:capitalize group-hover/header:tw:bg-blue-200 tw:transition-all tw:duration-200"
            >
              {{ work.location }}
            </div>
            <div
              class="year group-hover/header:tw:text-blue-600 tw:transition-colors tw:duration-200"
            >
              | {{ work.year }}
            </div>
          </div>

          <!-- Card Role -->
          <div
            class="card-role tw:flex tw:items-center tw:gap-2 tw:text-sm tw:mt-2 group/role"
          >
            <div
              class="title hover:tw:text-blue-600 tw:transition-colors tw:duration-200"
            >
              {{ work.title }}
            </div>
            <div
              class="year group-hover/role:tw:text-blue-600 tw:transition-colors tw:duration-200"
            >
              | {{ work.role }}
            </div>
          </div>

          <!-- Card Body -->
          <div class="card-body">
            <div
              class="hover:tw:text-gray-800 tw:transition-colors tw:duration-200 tw:my-4"
            >
              {{ work.description }}
            </div>

            <!-- Card Language Tags -->
            <div
              class="card-language tw:space-x-3 tw:max-sm:space-y-4 group/lang"
            >
              <span
                v-for="(lang, i) in work.languages"
                :key="i"
                class="tw:border tw:border-lightblue tw:rounded tw:px-2 tw:py-1 tw:text-xs tw:inline-flex tw:items-center tw:gap-2 tw:font-bold tw:whitespace-nowrap hover:tw:bg-blue-100 hover:tw:border-blue-400 tw:transition-all tw:duration-200"
              >
                <iconify
                  :icon="work.icons[i]"
                  class="group-hover/lang:tw:scale-125 tw:transition-transform tw:duration-200"
                />
                <span>
                  {{ lang }}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div>
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
          <iconify :icon="contact.icon" class="tw:text-blue-300 tw:size-4" />
          <span class="tw:ml-2 tw:text-sm">
            {{ contact.name }}
            <!-- {{ contact.name }} -->
          </span>
        </a>
      </span>
    </div>
    <Footer />
  </div>
</template>

<style scoped>
/* Header animation on load */
.animate-header a,
.animate-header div {
  animation: fadeInUp 0.6s ease-out forwards;
}

/* Section animation on scroll */
[data-section].animate-section > * {
  animation: fadeInUp 0.8s ease-out forwards;
}

/* Toolkit items animation with stagger */
[data-section="toolkit"].animate-section .toolkit-item {
  animation: fadeInStagger 0.6s ease-out forwards;
  animation-delay: var(--animation-delay);
}
[data-section="project"].animate-section .work-item {
  animation: fadeInStagger 0.6s ease-out forwards;
  animation-delay: var(--animation-delay);
}

/* Keyframes for animations */
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInStagger {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

/* Ensure elements are initially hidden */
[data-section] > * {
  opacity: 0;
}

[data-section="toolkit"] .toolkit-item {
  opacity: 0;
}
[data-section="project"] .work-item {
  opacity: 0;
}
</style>
