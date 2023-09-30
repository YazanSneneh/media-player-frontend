<script setup lang="ts">
import { onMounted, ref } from "vue";
import LogEntry from "../types/Log.ts";
import Entry from "../components/EntryComponent.vue"
import { socket } from "@/socket";


const logEntries = ref<LogEntry[]>()

onMounted(() => {
  socket.on("log_entries", (messages: LogEntry[]) => {
    // Update the logEntries ref with the received messages
    logEntries.value = messages;
  });
});

</script>

<template>
      <div class="log-container">
        <Entry v-for="entry in logEntries" :entry="entry" :key="entry.id" />
      </div>
</template>

<style>
.log-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2% 5%;
}

</style>
