<template>

  <div class="bg-bgGray lg:bg-white overflow-x-hidden">
    <div class="fixed w-full lg:w-1/2 bottom-0 z-40 flex justify-center px-10 md:px-20" v-if="!isEndScroll">
      <div class="bg-gradient-to-b from-transparent via-bgGray70 to-bgGray w-full flex flex-col justify-end items-center h-48">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 z-40 mb-5" viewBox="0 0 20 20" fill="#850000" :class="scrollIndicator">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clip-rule="evenodd" />
        </svg>       
      </div>
    </div>

    <div class="w-100 flex">
      <svg
        id="wave"
        viewBox="0 0 1440 490"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        class="h-screen fixed bottom-0 w-full hidden lg:block"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop
              stop-color="rgba(193.982, 193.982, 193.982, 1)"
              offset="0%"
            ></stop>
            <stop
              stop-color="rgba(225.857, 225.857, 225.857, 1)"
              offset="100%"
            ></stop>
          </linearGradient>
        </defs>
        <path
          style="transform: translate(0, 0px); opacity: 1"
          fill="url(#sw-gradient-0)"
          d="M0,49L60,57.2C120,65,240,82,360,81.7C480,82,600,65,720,122.5C840,180,960,310,1080,367.5C1200,425,1320,408,1440,359.3C1560,310,1680,229,1800,228.7C1920,229,2040,310,2160,318.5C2280,327,2400,261,2520,253.2C2640,245,2760,294,2880,285.8C3000,278,3120,212,3240,220.5C3360,229,3480,310,3600,285.8C3720,261,3840,131,3960,122.5C4080,114,4200,229,4320,269.5C4440,310,4560,278,4680,253.2C4800,229,4920,212,5040,204.2C5160,196,5280,196,5400,236.8C5520,278,5640,359,5760,351.2C5880,343,6000,245,6120,187.8C6240,131,6360,114,6480,155.2C6600,196,6720,294,6840,294C6960,294,7080,196,7200,204.2C7320,212,7440,327,7560,343C7680,359,7800,278,7920,245C8040,212,8160,229,8280,220.5C8400,212,8520,180,8580,163.3L8640,147L8640,490L8580,490C8520,490,8400,490,8280,490C8160,490,8040,490,7920,490C7800,490,7680,490,7560,490C7440,490,7320,490,7200,490C7080,490,6960,490,6840,490C6720,490,6600,490,6480,490C6360,490,6240,490,6120,490C6000,490,5880,490,5760,490C5640,490,5520,490,5400,490C5280,490,5160,490,5040,490C4920,490,4800,490,4680,490C4560,490,4440,490,4320,490C4200,490,4080,490,3960,490C3840,490,3720,490,3600,490C3480,490,3360,490,3240,490C3120,490,3000,490,2880,490C2760,490,2640,490,2520,490C2400,490,2280,490,2160,490C2040,490,1920,490,1800,490C1680,490,1560,490,1440,490C1320,490,1200,490,1080,490C960,490,840,490,720,490C600,490,480,490,360,490C240,490,120,490,60,490L0,490Z"
        ></path>
      </svg>
      <div
        class="hidden lg:fixed lg:h-full lg:w-1/2 lg:right-0 lg:flex lg:justify-center lg:items-center lg:p-10 lg:pt-32 lg:z-10">
        <img :src="me" alt="me" class="w-96 object-contain max-w-lg" />
      </div>
      <div class="w-full lg:w-1/2 z-30 p-10 md:p-20">
          <div class="mt-20"></div>
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold self-start text-primary">About Me</h1>
          <div class="mt-5">
            <p class="font-bold text-lg">{{pageData.title}}</p>
            <p class="mt-3 text-sm md:text-base" v-for="(paragraph, index) in pageData.about" :key="index">
              {{ paragraph }}
            </p>
          </div> 
          <div class="mt-12 mb-5 relative ">
            <div class="rounded left-1 md:left-1/2 border-2 h-full border-current absolute"></div>
            <div class="flex flex-col py-10 gap-y-5 md:gap-y-0">
              <div v-for="(item, index) in pageData.timeline" :key="item.id"
                class="flex w-full md:w-1/2 gap-x-5 md:gap-x-10 items-center "
                :class="index % 2 === 0 ? 'ml-0 md:ml-2 flex-row-reverse md:flex-row' : 'self-start md:self-end flex-row-reverse mr-1'"
                :data-aos=" isMedium || index % 2 !== 0 ? 'fade-left' : 'fade-right'"
                >
                <div class="flex-1 flex flex-col" :class="index % 2 === 0 ? 'items-start md:items-end md:text-right' : ''">
                  <p class="text-primary font-bold text-lg md:text-2xl">{{ item.time }}</p>
                  <p class=" md:mt-3 text-sm md:text-base">
                    {{ item.description }}
                  </p>
                </div>
                <div class="w-3 h-3 rounded-full bg-primary z-10"></div>
              </div>
            </div> 
          </div>
          
        </div>
    </div>
  </div>
</template>

<script>
import me from '~/assets/images/about/me.png'
import arrowDown from '~/assets/images/about/arrow-down.png'
import pageData from '~/data/about.json'

export default {
  name: 'About',
  data() {
    return {
      me,
      arrowDown,
      pageData,
      isEndScroll: false,
      isScrolling: false,
      resizeEventId: null,
      windowWidth: 0,
    }
  },
  mounted() {
    this.windowWidth = window.innerWidth
    window.addEventListener('scroll', this.onScroll)
    window.addEventListener('resize', this.onResize)
  },
  destroyed() {
    window.removeEventListener('scroll', this.onScroll)
    window.removeEventListener('scroll', this.onResize)
  },
  methods: {
    onResize() {
      if (this.resizeEventId !== null) {
        clearTimeout(this.resizeEventId)
      }
      this.resizeEventId = setTimeout(() => {
        this.windowWidth = window.innerWidth
      }, 500)
    },
    onScroll() {
      if (
        window.innerHeight + window.pageYOffset >=
        document.body.offsetHeight - 100
      ) {
        this.isEndScroll = true
      } else {
        this.isEndScroll = false
        this.isScrolling = true
        setTimeout(() => {
          this.isScrolling = false
        }, 1000)
      }
    },
  },
  computed: {
    scrollIndicator() {
      let className = []
      if (this.isScrolling) {
        className.push('opacity-30')
      }
      if (this.isEndScroll) {
        className.push('hidden')
      }
      if (!this.isEndScroll && !this.isScrolling) {
        className.push('animate-bounce-fast')
      }
      return className.join(' ')
    },
    isMedium() {
      return this.windowWidth <= 768
    },
  },
}
</script>

<style scoped>
#about::-webkit-scrollbar {
  display: none;
}

#about {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
