<template>
    <div
        class="max-w-7xl mx-auto flex mt-9 flex-wrap px-8 flex-col md:flex-row gap-1 justify-around pb-9"
    >
        <Cards
            v-for="(data, index) in cardData"
            :key="index"
            :card-content="data.content"
            card-image="https://via.placeholder.com/400x300"
            :is-content-shown="openCardIndex === index"
            @toggleCardShow="() => toggleCard(index)"
        />
    </div>
</template>

<style></style>
<script setup>
import Cards from "./Shared/Cards.vue";
import CardsData from "../data/data.json";
import { ref } from "vue";

const cardData = ref(CardsData);
const openCardIndex = ref(null);

const toggleCard = (index) => {
    if (openCardIndex.value === index) {
        openCardIndex.value = null;
    } else {
        openCardIndex.value = index;
    }
};
</script>
