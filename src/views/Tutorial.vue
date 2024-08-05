<template>
  <div v-if="!data" class="tutorial-error">No tutorial data found</div>
  <div v-else class="tutorial-cnt flex-1 flex flex-col tutorial-bg" :style="{ backgroundImage: computedStyles }">
    <div class="tutorial-header py-2 flex items-center justify-between">
      <div class="tutorial-header__start">
        <span class="text-[var(--accent-color)]">Taxes</span>
      </div>
      <div class="tutorial-header__end">
        <button class="border border-gray-400 px-6 py-1 rounded-lg">Skip</button>
      </div>
    </div>
    <div class="tutorial-body flex-1 flex">
      <TutorialSlide :data="data[currentSlide]" />
    </div>
    <div class="bnt-cnt w-full flex justify-between">
      <Button variant="black" label="Back" @click="prevSlide" />
      <Button label="Next" @click="nextSlide" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useUserStore } from "@/store/user.ts";
import { storeToRefs } from "pinia";
import TutorialSlide from "../components/TutorialSlide.vue";
import Button from "@/components/UI/Button.vue";

const userStore = useUserStore();
const { tutorialData: data } = storeToRefs(userStore);

const currentSlide = ref(0);

console.log(data.value);

const computedStyles = computed(() => "url(/" + data.value[currentSlide.value].picture + ")");
// const backgroundImageStyle = computed(() => `url(fuck)`);

const nextSlide = () => {
  currentSlide.value += 1;
};

const prevSlide = () => {
  currentSlide.value -= 1;
};
</script>
