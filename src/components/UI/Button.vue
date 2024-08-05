<template>
  <button :class="buttonColors" class="py-4 px-6 rounded-2xl font-bold">{{ label }}</button>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  variant?: string;
  label: string;
}>();

const buttonColors = computed(() => {
  if (props.variant === "black") {
    return "bg-black";
  } else {
    return "bg-[var(--accent-color)] text-black";
  }
});
</script>
