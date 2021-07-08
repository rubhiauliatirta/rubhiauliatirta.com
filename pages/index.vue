<template>
  <div class="w-100 bg-white h-screen">
    <div class="w-full h-full overflow-hidden absolute">
      <img 
        v-for="(banner, idx) in banners"
        :src="banner" 
        :key="idx"
        :style="`animation-delay:${idx * 5}s`"
        class="absolute object-cover w-full h-full animate-minislide opacity-0"/>
    </div>
    <div class="w-full h-full overflow-hidden absolute bg-white opacity-70 z-10"></div>
    <div class="w-full h-full flex flex-col justify-start md:justify-center items-center z-20 relative gap-4">
      <div class="h-32 md:h-0"></div>
      <img  id="pp" :src="profile_picture" class="rounded-full w-48 md:w-60 lg:w-72 h-auto border-4 md:border-8 border-current shadow">
      <div class="text-center" style="max-width: 80%">
        <p class="text-2xl lg:text-6xl font-bold" >Hi, I'm <span style="color: #850000">Rubhi Aulia Tirta</span></p>
        <p 
          class="text-md md:text-xl lg:text-2xl font-medium text-current">
          {{ desc }}
        </p>
      </div>
      <div class="flex justify-between gap-x-4 mb-4 md:absolute z-20 items-center bottom-0 md:bottom-auto md:flex-col md:gap-y-8 md:right-0 md:mr-7 ">
        <a id="linkedin" class="social-media-btn" href="https://www.linkedin.com/in/rubhiauliatirta" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="fill-current w-4 h-4 md:w-6 md:h-6">
            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
          </svg>
        </a>
        <a id="github" class="social-media-btn" href="https://github.com/rubhiauliatirta" target="_blank">
         <svg class="fill-current w-4 h-4 md:w-6 md:h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        </a>
        <a id="soundcloud" class="social-media-btn" href="https://soundcloud.com/rubhiauliatirta" target="_blank">
         <svg class="fill-current w-4 h-4 md:w-6 md:h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 17.939h-1v-8.068c.308-.231.639-.429 1-.566v8.634zm3 0h1v-9.224c-.229.265-.443.548-.621.857l-.379-.184v8.551zm-2 0h1v-8.848c-.508-.079-.623-.05-1-.01v8.858zm-4 0h1v-7.02c-.312.458-.555.971-.692 1.535l-.308-.182v5.667zm-3-5.25c-.606.547-1 1.354-1 2.268 0 .914.394 1.721 1 2.268v-4.536zm18.879-.671c-.204-2.837-2.404-5.079-5.117-5.079-1.022 0-1.964.328-2.762.877v10.123h9.089c1.607 0 2.911-1.393 2.911-3.106 0-2.233-2.168-3.772-4.121-2.815zm-16.879-.027c-.302-.024-.526-.03-1 .122v5.689c.446.143.636.138 1 .138v-5.949z"/></svg>
        </a>
      </div>
      <button class="bg-transparent text-primary py-2 px-2 border hover:bg-primary hover:text-white mt-5 border-primary rounded shadow animate-bounce">
        Download My Resume
      </button>
      <button class="bg-transparent text-current lg:hidden font-semibold underline" @click="showMenu">
        More about me...
      </button>
    </div>
  </div>
</template>

<script>
import {
  banner1,
  banner2,
  banner3,
  banner4,
  banner5,
  banner6,
  profile_picture,
} from '~/assets/images/home'

export default {
  name: 'Home',
  data() {
    return {
      desc: `"Ex-Geoscientist, Full-time Programmer, Falling in love with <code/>"`,
      banners: [banner1, banner2, banner3, banner4, banner5, banner6],
      profile_picture,
    }
  },
  methods: {
    showMenu() {
      this.$nuxt.$emit('showMenu')
    },
  },
}
</script>

<style scoped>
#pp {
  box-shadow: 0 0 15px;
}

.social-media-btn {
  @apply bg-primary hover:opacity-50 text-white rounded p-2;
}
</style>
