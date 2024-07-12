<template>
    <div class="card">
        <div class="card__image">
            <img :src="`${cardImage}`" />
        </div>
        <div class="card__content" v-html="cardContent"></div>
        <div class="card__card-button-container">
            <Button
                @handleClick="handleClick"
                button-text="READ MORE"
                button-class="button--card-primary"
            />
        </div>
    </div>
</template>

<style>
.card {
    flex: 0 0 30%;
    margin-top: 15px;
    min-height: 400px;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 3px 2px 29px -12px rgba(0, 0, 0, 0.39);
    -webkit-box-shadow: 3px 2px 29px -12px rgba(0, 0, 0, 0.39);
    -moz-box-shadow: 3px 2px 29px -12px rgba(0, 0, 0, 0.39);
}

.card__image img {
    border-radius: 5px;
}

.card__content {
    min-height: 100px;
    max-height: 150px;
    overflow: hidden;
    margin-top: 8px;
    text-align: center;
}

.card__card-button-container {
    display: flex;
    justify-content: center;
    margin-top: 15px;
}
</style>
<script setup>
import Button from "./Button.vue";

const props = defineProps({
    cardImage: String,
    cardContent: String,
});

const handleClick = () => {
    console.log("you clicked");
};
</script>
