<template>
  <div class="tutorial-slide flex-1 flex flex-col gap-2">
    <div class="slide-content z-20">
      <h2 class="text-3xl font-bold mt-4 mb-2" v-html="data.title" />
      <span class="text-md" v-html="data.subtitle" />
    </div>
    <div class="tutorial-bg absolute inset-0 w-full h-full z-0" :style="{ backgroundImage: `url(/${data.background})` }"></div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  data: {
    title: string;
    subtitle: string;
  };
}>();
</script>
