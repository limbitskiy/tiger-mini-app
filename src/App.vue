<template>
  <div class="main-page flex w-full min-h-[100dvh] p-4">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from "@/store/user.ts";
import { storeToRefs } from "pinia";

const userStore = useUserStore();
const { introShown } = storeToRefs(userStore);
</script>
