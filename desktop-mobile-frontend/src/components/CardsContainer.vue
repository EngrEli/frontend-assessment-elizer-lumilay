<template>
    <div
        class="max-w-7xl mx-auto flex mt-9 flex-wrap gap-1 justify-around pb-9"
    >
        <Cards
            v-for="data in cardData"
            :key="data"
            :card-content="data.content"
            card-image="https://via.placeholder.com/400x300"
        />
    </div>
</template>

<style></style>
<script setup>
import Cards from "./Shared/Cards.vue";
import CardsData from "../data/data.json";
import { onMounted, ref } from "vue";

const cardData = ref(CardsData);

onMounted(() => {
    console.log(cardData.value, "this is cardData");
});
</script>
