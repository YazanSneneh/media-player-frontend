import { ref } from "vue";
import { socket } from "@/socket";

export const useAudioPlayerHelpers = () => {

const audio = ref<HTMLAudioElement>();
const isPlaying = ref<boolean>(false);
const isMuted = ref<boolean>(false);
const currentTime = ref<string>("0:00")
const progressBarWidth = ref<string>("0%")

const togglePlay = () => {
    let message: string;
    isPlaying.value = !isPlaying.value;

    if(isPlaying.value){
        audio.value?.play();
        message = "User played audio";
        startUpdatingProgress();
    }else{
        audio.value?.pause();
        message = "User Paused audio";
    }
    emitSocketMessage(message);
};

const toggleMute = () => {
    isMuted.value = !isMuted.value;

    if(audio.value) {
        audio.value.volume = isMuted.value ? 0 : 1;
        emitSocketMessage(isMuted.value ? "User muted audio" : "User Unmuted audio" );
    }
}

const backward = () => {
    if(audio.value) audio.value.currentTime -=5;
    emitSocketMessage("User backward audio 5s");
}
const forward = () => {
    if(audio.value) audio.value.currentTime +=5;
    emitSocketMessage("User forward audio 5s");
}

const formatTime = (time: number) => {
    const minutes = Math.floor( time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

const getProgressBarWidth = () => {
    const time:number = audio.value?.currentTime ?? 0;
    const duration = 130;
    return `${(time / duration) * 100}%`;
}

const emitSocketMessage = (message: string, timeout: number = 5000) => {
    socket.timeout(timeout).emit("message", message);
};

const startUpdatingProgress = () =>{
    setInterval(()=> {
        currentTime.value = formatTime(audio.value?.currentTime ?? 0);
        progressBarWidth.value = getProgressBarWidth();
    }, 1000)
};

    return {
        audio,
        isPlaying,
        isMuted,
        currentTime,
        togglePlay,
        toggleMute,
        backward,
        forward,
        progressBarWidth,
    };
};