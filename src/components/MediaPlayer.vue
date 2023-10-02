<script setup lang="ts">
import MediaAction from "./MediaAction.vue";
import { useAudioPlayerHelpers } from "../composables/useAudioPlayer";

const {
    audio,
    progressBarWidth,
    isPlaying,
    isMuted,
    currentTime,
    togglePlay,
    toggleMute,
    backward,
    forward,
} = useAudioPlayerHelpers();

const handleAction = (action: string) =>{
    const actions: {[key: string]: ()=> void} = {
        "backward": backward,
        "forward": forward,
        "pause": togglePlay,
        "play": togglePlay,
        "volume-high": toggleMute,
        "volume-cross": toggleMute,
    }

    actions[action]();
}

</script>

<template>
    <div class="player">
        <audio ref="audio" src="/sound/one.mp3"></audio>
        <MediaAction
            url="backward"
            @action="handleAction"
            :classes="['hide']"
        />
        <MediaAction
            :url="isPlaying ? 'pause' : 'play'"
            @action="handleAction"
        />
        <MediaAction
            url="forward"
            @action="handleAction"
            :classes="['hide']"
        />
        <div v-if="audio" class="audio-duration">
            {{ currentTime }}/2:10
        </div>
        <div class="progress-bar hide">
            <div :style="{ width: progressBarWidth }"></div>
        </div>
        <MediaAction
            :url="isMuted ? 'volume-cross' : 'volume-high'"
            @action="handleAction"
            :classes="['hide']"
        />

    </div>
</template>

<style scoped>
.player {
    background: #1A1A1A;
    width: fit-content;
    margin: auto;
    border-radius: 10px;
    border: 1px solid green;
    padding: 7px 5px;
    display: flex;
    align-items: center;
}

.audio-duration {
    display: inline-block;
    margin: 0 5px;
    font-size: 0.9em;
}

.progress-bar {
    background: #FFFFFF;
    height: 10px;
    width: 166px;
    border-radius: 10px;
    overflow: hidden;
}

.progress-bar div {
    background: #DF315D;
    border-radius: 10px;
    height: 10px;
}

@media (max-width: 720px) {
    .hide {
        display: none;
    }
}
</style>