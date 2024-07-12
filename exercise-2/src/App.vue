<template>
    <div id="app">
        <template v-if="isDesktopView">
            <Tabs :sections="sections" />
        </template>
        <template v-else>
            <Accordion :sections="sections" />
        </template>
    </div>
</template>

<style>
#app {
    font-family: "Roboto", sans-serif;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>

<script setup>
import { ref, onMounted, computed } from "vue";
import data from "./data/data.json";
import Tabs from "./components/Shared/Tabs.vue";
import Accordion from "./components/Shared/Accordion.vue";

const sections = ref([]);

const isDesktopView = computed(() => window.innerWidth >= 768);

onMounted(() => {
    sections.value = data;
});
</script>
