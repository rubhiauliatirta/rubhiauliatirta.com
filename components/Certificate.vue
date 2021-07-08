<template>
  <div class="w-full bg-white shadow-lg rounded-lg border-1 border-primary">
    <div class="relative rounded-lg">
      <div class="aspect-ratio-16/9"></div>
      <img :src="certificate.imageURL" alt="" class="absolute left-0 top-0 w-full h-full object-cover rounded-md" v-img:group>
    </div>
    <div class="p-5">
      <p class="text-lg font-bold text-primary">{{certificate.title}}</p>
      <p class="text-xs ">Issued by: {{certificate.issuer}}</p>
      <div class="mt-3"></div>
      <p v-if="certificate.score" class="font-semibold text-sm">Score: {{certificate.score}}</p>
      <p v-if="certificate.status" class="font-semibold text-sm">Status: {{certificate.status}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Certificate',
  props: ['certificate'],
}
</script>

<style>
</style>