<script lang="ts" setup>
import { works } from "@/data/Project";
import { ref } from "vue";

// Create reactive state for expanded items
const expandedItems = ref<{ [key: number]: boolean }>({});

const toggleReadMore = (index: number) => {
  expandedItems.value[index] = !expandedItems.value[index];
};

const isExpanded = (index: number) => {
  return expandedItems.value[index] || false;
};
</script>

<template>
  <div>
    <div
      class="tw:grid tw:min-lg:grid-cols-5 tw:gap-4 tw:my-12 tw:last:my-0 tw:group work-item"
      v-for="(work, index) in works"
      :key="index"
      :style="{ '--animation-delay': `${index * 0.5}s` }"
    >
      <!-- Card Section -->
      <div class="tw:w-fit tw:min-lg:col-span-2">
        <div
          class="tw:bg-white tw:w-fit tw:p-2 tw:relative tw:min-md:overflow-hidden tw:hover:min-md:shadow-xl tw:rounded-lg tw:transition-transform tw:duration-300 tw:h-full tw:xl:h-60 tw:group/card"
        >
          <div class="tw:overflow-hidden tw:h-full">
            <img
              :src="work.img"
              alt=""
              class="tw:h-full tw:object-contain tw:w-full"
            />
          </div>
          <div
            class="tw:min-md:absolute tw:h-full tw:max-md:hidden tw:w-full tw:bg-black/50 tw:top-0 tw:left-0 tw:group-hover/card:min-md:opacity-100 tw:opacity-0 tw:transition-opacity tw:duration-300 tw:overflow-hidden"
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
      </div>
      <div class="tw:inline-flex tw:min-md:hidden">
        <a
          :href="work.link"
          class="tw:text-blue-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <iconify
            icon="solar:link-outline"
            width="24"
            height="24"
          />
        </a>
      </div>
      <!-- Content Section -->
      <div class="tw:group/card tw:min-lg:col-span-3">
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
          <!-- Description (always shown, optionally truncated) -->
          <div
            class="hover:tw:text-gray-800 tw:transition-colors tw:duration-200 tw:my-4"
          >
            <p>{{ work.description }}</p>
          </div>
          <!-- Contributions with Read More and Overlay -->
          <div
            class="hover:tw:text-gray-800 tw:transition-colors tw:duration-200 tw:my-4 tw:relative"
          >
            <p class="tw:font-semibold">Contributions:</p>
            <ul>
              <li
                v-for="(contribution, i) in isExpanded(index)
                  ? work.contribution
                  : work.contribution?.slice(0, 1)"
                :key="i"
                class="tw:relative"
                :class="{
                  'tw:last-child:after:content-[\'...\']':
                    !isExpanded(index) && work.contribution?.length > 1,
                  'tw:last-child:after:absolute tw:last-child:after:bg-gradient-to-t tw:last-child:after:from-white tw:last-child:after:to-transparent tw:last-child:after:bottom-0 tw:last-child:after:left-0 tw:last-child:after:w-full tw:last-child:after:h-6':
                    !isExpanded(index) && work.contribution?.length > 1,
                }"
              >
                {{ contribution }}
              </li>
            </ul>
            <button
              v-if="work.contribution?.length > 1"
              @click="toggleReadMore(index)"
              class="tw:text-blue-600 hover:tw:text-blue-800 tw:text-sm tw:font-medium tw:mt-2 tw:transition-colors tw:duration-200 tw:underline tw:cursor-pointer"
            >
              {{ isExpanded(index) ? "Read Less" : "Read More" }}
            </button>
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
  </div>
</template>
