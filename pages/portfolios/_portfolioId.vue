<template>
  <div class="w-full p-10 md:p-20" v-if="data">
    <div class="mt-10"></div>
    <div class="flex gap-5 flex-col lg:flex-row">
      <div class="relative w-full lg:w-1/3 md:self-start">
        <div class="aspect-ratio-16/9"></div>
        <img :src="data.thumbnail" alt="" class="absolute left-0 top-0 w-full h-full object-cover rounded-md">
      </div>
      <div class="flex-1 p-3">
        <p class="font-bold text-2xl">{{data.title}}</p>
        
        <div class="flex flex-col gap-y-3 mt-5">
          <div class="flex gap-x-5 items-center">
            <DateSVG />
            <p>{{data.year}}</p>
          </div>
          <div class="flex gap-x-5 items-center">
            <Link />
            <a v-if="data.application_link"
              :href="data.application_link"
              target="_blank"
              class="text-blue-500 hover:text-blue-800 underline">
              {{data.application_link}}
            </a>
            <p v-else>Not Available</p>
          </div>
          <div class="flex gap-x-5 items-center">
            <svg style="min-width: 1.25rem;" class="text-gray-300 fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            <a v-if="data.github_link"
              :href="data.github_link"
              class="text-blue-500 hover:text-blue-800 underline">
              {{data.github_link}}
            </a>
            <p v-else>Not Available</p>
          </div>
          <div class="flex flex-wrap gap-3 mt-5">
            <p v-for="(tag, index) in data.tech_stack" :key="index"
              class="bg-primary px-2 py-1 rounded-lg text-xs text-white">
              {{tag}}
            </p>
          </div>
        </div>
      </div>
    </div>
    <p class="text-lg md:text-xl lg:text-2xl font-bold mt-5 lg:mt-10">
      Description
    </p>
    <div class="ml-5 mt-5 flex flex-col gap-y-3">
      <p v-for="(description, index) in data.descriptions"
        :key="index"
        class="text-current">
        {{description}}
      </p>
    </div>
    <div v-if="data.screenshots.length !== 0" class="mt-5 lg:mt-10">
      <p class="text-lg md:text-xl lg:text-2xl font-bold">
        Screenshots
      </p>
      <div class="masonry mansory-column-1 md:mansory-column-2 lg:mansory-column-3 before:box-inherit after:box-inherit mt-5">
        <div class="rounded-lg bg-white p-2 shadow-lg mt-3 break-inside border border-gray-200" v-for="(item, index) in data.screenshots" :key="index">
          <img  
          :src="item" 
          alt="scrsht" 
          class="">
        </div>
      </div>
    </div>
    <div v-if="data.videos.length !== 0" class="mt-5 lg:mt-10">
      <p class="text-lg md:text-xl lg:text-2xl font-bold">
        Demo
      </p>
      <div 
        class="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-5">
        <div class="relative" v-for="(video,index) in data.videos" :key="index">
          <div class="aspect-ratio-16/9"></div>
           <iframe class="w-full h-full absolute left-0 top-0" 
            :src="video"
            allowfullscreen>
          </iframe> 
        </div>
  
      </div>
    </div>
  </div>
  <div class="w-full p-10 md:p-20 h-screen flex justify-center items-center" v-else>
    <p class="text-xl md:text-2xl lg:text-4xl text-primary">Data not found!</p>
  </div>
</template>

<script>
import portfolios from '~/data/portfolios'
import DateSVG from '~/components/svg/Date.vue'
import Link from '~/components/svg/Link.vue'

export default {
  name: 'PortfolioDetail',
  components: {
    DateSVG,
    Link,
  },
  created() {
    this.data = portfolios.find(
      (item) => item.id == this.$route.params.portfolioId
    )
  },
  data() {
    return {
      data: null,
    }
  },
}
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer utilities {
  @variants responsive {
    .masonry {
      column-gap: 1.5em;
    }
    .mansory-column-1 {
      column-count: 1;
    }
    .mansory-column-2 {
      column-count: 2;
    }
    .mansory-column-3 {
      column-count: 3;
    }
    .break-inside {
      break-inside: avoid;
    }
  }
}
</style>