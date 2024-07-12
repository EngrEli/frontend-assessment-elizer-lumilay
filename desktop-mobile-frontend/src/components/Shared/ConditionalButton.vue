<template>
    <component
        :is="isDesktopView ? 'a' : 'button'"
        :href="isDesktopView ? url : null"
        :target="isDesktopView ? '_blank' : null"
        :class="['button', `${buttonClass}`]"
    >
        {{ buttonText }}
    </component>
</template>

<style>
.button {
    font-size: 18px;
    text-align: center;
    margin: 0 auto;
    width: 60%;
    cursor: pointer;
    padding: 5px;
}

.button--card-primary {
    border-radius: 15px;
    border: 2px solid #000;
    color: #000;
}
</style>
<script setup>
import { onMounted, ref } from "vue";

const props = defineProps({
    url: {
        type: String,
        default: "",
    },
    buttonText: {
        type: String,
        default: "READ ME",
    },
});

const isDesktopView = ref(false);

onMounted(() => {
    if (screen.width <= 760) {
        isDesktopView.value = false;
    } else {
        isDesktopView.value = true;
    }
});
</script>
