<template>
    <button
        :class="[
            'button',
            `${buttonClass}`,
            { 'button--active': isContentShown },
        ]"
    >
        {{ buttonText }}
    </button>
</template>

<style>
.button {
    font-size: 18px;
    text-align: center;
    width: 60%;
    cursor: pointer;
    padding: 10px 20px;
    border: 2px solid transparent;
    outline: none;
    transition:
        color 0.3s,
        background-color 0.3s,
        border-color 0.3s;
}

.button--card-primary {
    border-radius: 15px;
    border: 2px solid #000;
    color: #000;
    background-color: transparent;
}

.button--active {
    color: #fff;
    background-color: #000;
    border-color: #000;
}

/* Remove hover effects for mobile devices */
@media (hover: hover) and (pointer: fine) {
    .button--card-primary:hover {
        color: #fff;
        background-color: #000;
        border-color: #000;
    }
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
    isContentShown: {
        type: Boolean,
        default: false,
    },
});
</script>
