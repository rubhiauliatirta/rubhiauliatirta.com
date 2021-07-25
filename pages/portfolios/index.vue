<template>
  <div class="w-full p-10 md:p-20">
    <div class="mt-10"></div>
    <p class="text-xl md:text-2xl lg:text-4xl font-bold text-primary">Portfolios</p>
    <div class="mt-10"></div>
    <div 
      class="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-5">
      <Porto v-for="data in portfolios" :key="data.id"
        :title="data.title"
        :year="data.year"
        :thumbnail="data.thumbnail"
        :id="data.id"
        :tags="data.tech_stack"/>
    </div>
  </div>
</template>

<script>
import portfolios from '~/data/portfolios.json'
import Porto from '~/components/Porto.vue'
export default {
  name: 'Portfolios',
  data() {
    return {
      portfolios,
    }
  },
  components: {
    Porto,
  },
}
</script>

<style>
</style>