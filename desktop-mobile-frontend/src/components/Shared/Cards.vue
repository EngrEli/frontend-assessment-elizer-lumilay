<template>
    <div class="card">
        <div class="card__image">
            <img :src="`${cardImage}`" />
        </div>
        <div class="card__content">
            {{ cardContent }}
        </div>
        <Button
            @handleClick="handleClick"
            button-text="READ MORE"
            button-class="button--card-primary"
        />
    </div>
</template>

<style>
.card {
    max-width: 300px;
    min-height: 400px;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 3px 2px 29px -12px rgba(0, 0, 0, 0.39);
    -webkit-box-shadow: 3px 2px 29px -12px rgba(0, 0, 0, 0.39);
    -moz-box-shadow: 3px 2px 29px -12px rgba(0, 0, 0, 0.39);
}

.card__content {
    min-height: 100px;
    max-height: 150px;
    overflow: hidden;
    margin-top: 8px;
    text-align: center;
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
