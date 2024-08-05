<template>
  <div class="stepper">
    <div class="circles-cnt flex items-center gap-[6px] rounded-xl bg-gray-600 px-[6px] py-[3px]">
      <div v-for="circle in total" :key="circle" class="circle h-[7px] rounded-full" :class="circle === current ? 'w-10 bg-white' : 'w-[7px] bg-gray-400'"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  total: number;
  current: number;
}>();
</script>
