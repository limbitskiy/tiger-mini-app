<template>
  <div class="tutorial-slide flex-1 flex flex-col gap-2 py-2">
    <h2 class="text-3xl font-bold">{{ data.title }}</h2>
    <span class="text-md">{{ data.subtitle }}</span>
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
