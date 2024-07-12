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
                @click="toggleCardEmit"
                button-text="READ MORE"
                button-class="button--card-primary"
            />
        </div>
    </div>
</template>

<style>
.card {
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
    max-height: 100px;
    overflow: hidden;
    margin-top: 8px;
    text-align: center;
}

.card__content--shown {
    max-height: fit-content !important;
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
import { onMounted, onUnmounted, ref, watch } from "vue";
import Button from "./Button.vue";
import ConditionalButton from "./ConditionalButton.vue";
const emit = defineEmits(["toggleCardShow"]);

const props = defineProps({
    cardImage: String,
    cardContent: String,
    isContentShown: Boolean,
});
const isDesktopView = ref(false);

const toggleCardEmit = () => {
    if (isDesktopView.value) {
        window.open("/", "_blank");
    } else {
        emit("toggleCardShow");
    }
};

onMounted(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    handleWindowSizeChange();
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
    }
};
</script>
