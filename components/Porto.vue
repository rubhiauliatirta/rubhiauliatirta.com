<template>
  <div class="w-full bg-white shadow-lg rounded-lg flex flex-col">
    <div class="relative rounded-lg">
      <div class="aspect-ratio-16/9"></div>
      <img :src="thumbnail" alt="" class="absolute left-0 top-0 w-full h-full object-cover rounded-md">
    </div>
    <div class="p-2 flex flex-col justify-between flex-1 gap-y-3">
      <div>
        <p class="text-xl font-bold text-current">{{title}} ({{year}})</p>
        <p class="text-sm text-gray-600">{{techs}}</p>
      </div>
      <div class="self-end">
        <nuxt-link class="bg-white cursor-pointer text-primary text-sm font-semibold py-2 px-4" :to="`/portofolios/${id}`">
          SHOW DETAIL
        </nuxt-link>
      </div>
  
    </div>
  </div>
</template>

<script>
export default {
  name: 'Porto',
  props: ['title', 'thumbnail', 'year', 'id', 'tags'],
  computed: {
    techs() {
      return this.tags ? this.tags.slice(0, 5).join(', ') : ''
    },
  },
}
</script>

<style>
</style>