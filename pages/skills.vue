<template>
  <div class="w-full p-10 md:p-20">
    <div class="mt-10"></div>
    <p class="text-xl md:text-2xl lg:text-4xl font-bold text-primary mb-5">Skills</p>
    <div v-for="skill in skills" :key="skill.title" class="mt-10">
      <p class="text-center font-semibold text-lg md:text-xl lg:text-2xl">{{skill.title}}</p>
      <div 
        class="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-3">
        <Skill v-for="data in skill.data" :key="data.title"
          :value="data.value"
          :title="data.title"/>
      </div>
    </div>
    <div class="mt-20"></div>
    <p class="text-xl md:text-2xl lg:text-4xl font-bold text-primary mb-5">Certifications</p>
    <div class="mt-10"></div>
    <div 
      class="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-5">
      <Certificate v-for="data in certificates" :key="data.id"
        :certificate="data"/>
    </div>
    
  </div>
</template>

<script>
import 'viewerjs/dist/viewer.css'
import Skill from '~/components/Skill'
import Certificate from '~/components/Certificate'
import skills from '~/data/skills.json'
import certificates from '~/data/certificates.json'

export default {
  name: 'Skills',
  components: {
    Skill,
    Certificate,
  },
  data() {
    return {
      skills,
      certificates,
    }
  },
}
</script>


