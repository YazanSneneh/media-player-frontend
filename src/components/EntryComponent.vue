<script setup lang="ts">
import { PropType } from "vue";

interface LogEntry {
    text: string,
    id: string,
    timestamp: string
}

defineProps({
    entry: {
        type: Object as PropType<LogEntry>,
        required: true,
    }
})

</script>

<template>
    <div class="entry">
        <p>{{ entry.id }}</p>
        <p>{{ entry.text }}</p>
        <p>{{ entry.timestamp }}</p>
    </div>
</template>

<style scoped>
.entry {
    width: 70%;
    padding: 2%;
    margin: 20px auto;
    background: #1A1A1A;
    display: flex;
    flex-wrap: wrap;
}

.entry p {
    margin: 0.8rem 5em;
}
</style>