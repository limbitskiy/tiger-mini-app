<template>
  <div class="home-page flex-1 flex flex-col">
    <!-- <div class="home-page-content flex-1"> -->
    <RouterView v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </RouterView>
    <!-- </div> -->
    <Navigation />
  </div>
</template>

<script setup lang="ts">
import Navigation from "@/components/Navigation.vue";
</script>
