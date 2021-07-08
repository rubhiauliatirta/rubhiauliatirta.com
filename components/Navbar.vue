<template>
  <nav class="flex items-center justify-between flex-wrap bg-current p-3 md:p-5  w-full fixed z-50">
    <NuxtLink to="/">
     <template>
       <div class="flex items-center flex-no-shrink text-white mr-6">
        <img :src="logo" alt="logo" class="w-8 md:w-10 lg:w-12" />
        <span class="font-bold text-xl ml-2 lg:font-extrabold lg:text-2xl lg:ml-4 tracking-tight">rubhiauliatirta.com</span>
       </div>
     </template>
    </NuxtLink>
    <div class="block lg:hidden">
      <button @click="toggle" class="flex items-center px-3 py-2 text-white ">
        <Menu />
      </button>
    </div>
    <div :class="open ? 'block': 'hidden'" class="w-full lg:flex lg:items-center lg:w-auto ">
      <div class="text-sm font-semibold lg:flex-grow lg:gap-x-5 lg:flex">
        <NuxtLink to="/about" class="nav-link" @click.native="toggle">About Me</NuxtLink>
        <NuxtLink to="/experiences" class="nav-link" @click.native="toggle">Experiences</NuxtLink>
        <NuxtLink to="/portofolios" class="nav-link" @click.native="toggle">Portofolios</NuxtLink>
        <NuxtLink to="/skills" class="nav-link" @click.native="toggle">Skills & Certifications</NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script>
import logo from '~/assets/images/logo48.png'
import Menu from '~/components/Menu.vue'

export default {
  name: 'Navbar',
  components: {
    Menu,
  },
  data() {
    return {
      logo,
      open: false,
    }
  },
  methods: {
    toggle() {
      this.open = !this.open
    },
  },
}
</script>

<style>
@tailwind components;

@layer components {
  .nav-link {
    @apply block mt-4 text-white lg:inline-block lg:mt-0 uppercase lg:border-b-2 lg:border-transparent lg:hover:border-primary;
  }
}
</style>