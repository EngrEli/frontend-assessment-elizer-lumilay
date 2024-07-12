<template>
    <div class="card">
        <div class="card__image">
            <img :src="`${cardImage}`" />
        </div>
        <div
            :class="[
                'card__content',
                { 'card__content--shown': isContentShown },
            ]"
            v-html="cardContent"
        ></div>
        <div class="card__card-button-container">
            <Button
                @click="handleCardAction"
                :button-text="buttonText"
                :button-class="buttonClass"
            />
        </div>
    </div>
</template>

<style>
.card {
    width: 300px;
    margin: auto;
    margin-top: 25px;
    min-height: 400px;
    padding: 15px;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    box-shadow: 3px 2px 29px -12px rgba(0, 0, 0, 0.39);
    -webkit-box-shadow: 3px 2px 29px -12px rgba(0, 0, 0, 0.39);
    -moz-box-shadow: 3px 2px 29px -12px rgba(0, 0, 0, 0.39);
}

.card__image img {
    border-radius: 5px;
}

.card__content {
    min-height: 100px;
    max-height: 100px;
    overflow: hidden;
    margin-top: 8px;
    text-align: center;
}

.card__content--shown {
    max-height: fit-content;
}

.card__card-button-container {
    display: flex;
    justify-content: center;
    margin-top: 15px;
}

@media only screen and (min-width: 768px) {
    .card {
        flex: 0 0 30%;
    }
}
</style>
<script setup>
import { computed } from "vue";
import Button from "./Button.vue";
const emit = defineEmits(["toggleCardShow"]);

const props = defineProps({
    cardImage: String,
    cardContent: String,
    isContentShown: Boolean,
    isDesktopView: Boolean,
});

const handleCardAction = () => {
    if (props.isDesktopView) {
        alert("Read More Button Clicked");
    } else {
        emit("toggleCardShow");
    }
};

const buttonText = computed(() => {
    return props.isContentShown ? "SEE LESS" : "READ MORE";
});

const buttonClass = computed(() => {
    return [
        `button--card-primary ${props.isContentShown ? "button--active" : ""} `,
    ];
});
</script>
