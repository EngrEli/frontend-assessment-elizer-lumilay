<template>
    <div
        class="flex-wrap max-w-7xl mx-auto flex mt-9 px-8 flex-col md:flex-row gap-1 justify-around pb-9"
    >
        <Cards
            v-for="(data, index) in cardData"
            :key="index"
            :card-content="data.content"
            card-image="https://via.placeholder.com/400x300"
            :is-content-shown="openCardIndex === index"
            :is-desktop-view="isDesktopView"
            @toggleCardShow="() => toggleCard(index)"
        />
    </div>
</template>

<style></style>
<script setup>
import Cards from "./Shared/Cards.vue";
import CardsData from "../data/data.json";
import { onMounted, onUnmounted, ref } from "vue";

const cardData = ref(CardsData);
const openCardIndex = ref(null);

const toggleCard = (index) => {
    if (openCardIndex.value === index) {
        openCardIndex.value = null;
    } else {
        openCardIndex.value = index;
    }
};

const isDesktopView = ref(true);

onMounted(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    handleWindowSizeChange();

    if (isDesktopView.value) {
        openCardIndex.value = null;
    } else {
        openCardIndex.value = 0;
    }
});

onUnmounted(() => {
    window.removeEventListener("resize", handleWindowSizeChange);
});

const handleWindowSizeChange = () => {
    console.log(screen.width, "screen width");
    if (screen.width <= 768) {
        isDesktopView.value = false;
    } else {
        isDesktopView.value = true;
        openCardIndex.value = null;
    }
};
</script>
