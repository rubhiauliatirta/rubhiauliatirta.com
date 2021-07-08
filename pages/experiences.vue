<template>
  <div class="w-full p-10 md:p-20">
    <div class="mt-10"></div>
    <p class="text-xl md:text-2xl lg:text-4xl font-bold text-primary">Experiences</p>
    <div class="mt-10 gap-y-5 flex flex-col">
      <div v-for="experience in experiences" :key="experience.id"
        class="bg-white border-2 border-gray-200 hover:border-gray-300 p-6 rounded-md shadow-lg w-full"
       >
        <div class="flex gap-x-10 items-center flex-wrap lg:flex-nowrap">
          <div class="w-full lg:w-max lg:h-max">
            <div class="mx-auto shadow-xl border-2 border-gray-200 mb-6 p-4 w-36 h-36 lg:w-28 lg:h-28 lg:p-0 lg:mb-0 lg:shadow-none lg:border-0">
              <img :src="experience.image" :alt="`Logo ${experience.company}`" >
            </div>
          </div>
      
          <div class="mt-6 md:mt-0 flex-1 order-2 md:order-1">
            <div class="flex gap-x-2 items-center">
              <Building :nohidden="true"/>
              <p class="font-bold text-primary text-sm md:text-lg">{{experience.company}}</p>
            </div>
            <p class="text-gray-500 mt-1 text-xs md:text-sm">{{experience.description}}</p>
          </div>
          <div class="w-full md:w-1/2 lg:w-1/3 flex items-center order-1 md:order-2">
            <div class="w-1/2">
              <div class="flex gap-x-2 items-center">
                  <Clipboard />
                  <p class="font-semibold text-primary text-sm md:text-lg">{{experience.contract}}</p>
              </div>
            
              <div class="flex gap-x-2 items-center">
                <Clock />
                <p class="text-gray-500 text-gray text-xs md:text-sm">{{experience.time}}</p>
              </div>
            </div>
            <div class="w-1/2 self-center">
              <div class="flex gap-x-2 items-center">
                <Briefcase />
                <p class="font-semibold text-xs md:text-base">{{experience.job_title}}</p>
              </div>
            </div>
          </div>   
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Building from '../components/svg/Building'
import Clock from '../components/svg/Clock'
import Clipboard from '../components/svg/Clipboard'
import Briefcase from '../components/svg/Briefcase'
import experiences from '~/data/experiences.json'
export default {
  components: { Building, Clock, Clipboard, Briefcase },
  name: 'Experiences',
  data() {
    return {
      experiences,
    }
  },
}
</script>