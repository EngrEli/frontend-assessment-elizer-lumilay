<template>
    <div class="accordion">
        <div
            class="accordion__item-container"
            v-for="(section, index) in sections"
            :key="index"
        >
            <button
                class="accordion__item"
                @click="toggleSection(index)"
                :class="{ 'accordion__item--active': activeSection === index }"
            >
                {{ section.title }}
                <font-awesome-icon
                    :icon="[
                        'fas',
                        `angle-${activeSection === index ? 'up' : 'down'}`,
                    ]"
                />
            </button>
            <div
                v-if="activeSection === index"
                class="accordion__content"
                v-html="section.content"
            ></div>
        </div>
    </div>
</template>
<style scoped>
.accordion {
    width: 80%;
    margin: 0 auto;
}

.accordion__item-container {
    margin: 10px 0;
}

.accordion__item-container .accordion__item {
    width: 100%;
    text-align: left;
    background: #fff;
    color: #686868;
    border: 1px solid #e9e9e9;
    padding: 16px 24px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
    border-radius: 15px;
    transition: all 0.3s;
}

.accordion__item-container .accordion__item.accordion__item--active {
    border-bottom: 0;
    color: #3d5af1;
    border-radius: 15px 15px 0 0;
}

.accordion__content {
    padding: 20px;
    border: 1px solid #e9e9e9;
    color: #9a9a9a;
    border-top: 0;
    position: relative;
    border-radius: 0 0 15px 15px;
}

.accordion__content::before {
    content: "";
    position: absolute;
    height: 1px;
    width: 90%;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: #e9e9e9;
}
</style>
<script setup>
import { ref } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const props = defineProps({
    sections: Array,
});

const activeSection = ref(0);

const toggleSection = (index) => {
    if (activeSection.value === index) {
        activeSection.value = -1;
    } else {
        activeSection.value = index;
    }
};
</script>
