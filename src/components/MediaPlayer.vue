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
    width: 25%;
    margin: auto;
    border-radius: 10px;
    padding: 0.5rem 0.4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.audio-duration {
    display: inline-block;
    margin: 0 10px;
    font-size: 0.9em;
}

.progress-bar {
    display: inline-block;
    width: 11rem;
    background: #FFFFFF;
    border-radius: 10px;
}

.progress-bar div {
    background: #DF315D;
    border-radius: 10px;
    height: 10px;
}

@media (max-width: 860px) {
    .hide {
        display: none;
    }
    .player {
        width: fit-content;
    }
}
</style>