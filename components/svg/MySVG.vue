<template>
  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current text-gray-300" :class="nohidden ? '': 'hidden md:block'" viewBox="0 0 20 20"
    style="min-width: 1.25rem;">
    <slot></slot>
  </svg>
</template>

<script>
export default {
  name: 'MySVG',
  props: ['nohidden'],
}
</script>
