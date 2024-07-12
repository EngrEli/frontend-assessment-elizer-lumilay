<template>
    <div :class="['button', `${buttonClass}`]" @click="buttonClick">
        {{ buttonText }}
    </div>
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
const props = defineProps({
    buttonText: {
        type: String,
        default: "READ MORE",
    },
    buttonClass: {
        type: String,
        // We may add more classes in the future
        validator(value) {
            return ["button--card-primary"].includes(value);
        },
    },
});

const emit = defineEmits(["handleClick"]);

const buttonClick = () => {
    emit("handleClick");
};
</script>
