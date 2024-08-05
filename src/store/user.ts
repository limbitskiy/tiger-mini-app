import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

export const useUserStore = defineStore("user", () => {
  const router = useRouter();

  const state = ref({
    data: {},
    tutorial: [
      {
        id: 0,
        title: "Hello and welcome!",
        subtitle: "This is a small battle app for learning something!",
        picture: "tiger.png",
      },
      {
        id: 1,
        title: "Play battles, earn friends and learn!",
        subtitle: "In our app you can play different types of battles and win prizes",
        picture: "tiger1.png",
      },
    ],
  });

  const tutorialData = computed(() => state.value.tutorial);

  const setData = (data) => {
    state.value.data = data;
  };

  const fetchInitData = async () => {
    const data = await axios.get("https://httpbin.org/delay/3");

    setData(data);

    if (state.value.tutorial?.length) {
      router.push("/tutorial");
    } else {
      router.push("/");
    }
  };

  return { tutorialData, fetchInitData };
});
