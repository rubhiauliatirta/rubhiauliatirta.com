<template>
  <div class="w-full">
    <div class="flex justify-between items-center">
      <p class="text-base font-semibold">{{title}}</p>
      <p class="text-xs text-current">{{percent}}</p>
    </div>
    
    <div class="bg-gray-300 w-full shadow-lg rounded-l-md rounded-r-2xl  border border-gray-200">
      <div :style="{width: `${width}%`}" class="bg-primary p-1 pr-2 rounded-l-md rounded-r-xl transition-all duration-1000 ease-in-out">
       
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skill',
  props: ['value', 'title'],
  mounted() {
    setTimeout(() => {
      this.width = this.value
    }, 500)
  },
  data() {
    return {
      width: 0,
    }
  },
  computed: {
    percent() {
      return this.width + ' %'
    },
  },
}
</script>
