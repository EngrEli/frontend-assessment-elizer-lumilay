<template>
    <div class="tabs">
        <div class="tabs__buttons-container">
            <button
                class="tabs__button"
                v-for="(section, index) in sections"
                :key="index"
                @click="setActiveSection(index)"
                :class="{ 'tabs__button--active': activeSection === index }"
            >
                {{ section.title }}
            </button>
        </div>
        <div
            v-if="sections[activeSection]"
            class="tabs__content"
            v-html="sections[activeSection].content"
        ></div>
    </div>
</template>
<style scoped>
.tabs {
    width: 700px;
    margin: 0 auto;
}

.tabs__buttons-container {
    display: flex;
}

.tabs__button {
    flex: 1;
    background: #f3f3f3;
    color: #c0c0c0;
    border: 1px solid #ddd;
    padding: 8px 24px;
    cursor: pointer;
    transition: background 0.3s;
}

.tabs__buttons-container .tabs__button:nth-child(1) {
    border-radius: 15px 0 0 0;
}

.tabs__buttons-container .tabs__button:nth-child(4) {
    border-radius: 0 15px 0 0;
}

.tabs__button.tabs__button--active {
    background: #fff;
    color: #3d5af1;
    border: 1px solid #ddd;
    border-bottom: 0;
    font-weight: 600;
}

.tabs__button.tabs__button--active:hover {
    background: #fff;
    color: #3d5af1;
}

.tabs__button:hover {
    background: #dfdfdf;
    color: #909090;
}

.tabs__content {
    padding: 45px;
    border: 1px solid #ddd;
    border-top: #f5f5f5;
    background-color: #fff;
    border-radius: 0 0 15px 15px;
    line-height: 2rem;
}
</style>
<script setup>
import { ref } from "vue";

const props = defineProps({
    sections: Array,
});

const activeSection = ref(0);

const setActiveSection = (index) => {
    activeSection.value = index;
};
</script>
