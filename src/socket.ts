import { reactive } from "vue";
import { io } from "socket.io-client";


interface State {
    connected: boolean;
    fooEvents: any[];
    barEvents: any[];
}


export const state: State = reactive({
    connected: false,
    fooEvents: [],
    barEvents: [],
});

export const socket = io("http://localhost:3001");

socket.on("connect", () => {
    state.connected = true;
});

socket.on("disconnect", () => {
    state.connected = false;
});

socket.on("foo", (...args: any[]) => {
    state.fooEvents.push(args);
});

socket.on("bar", (...args: any[]) => {
    state.barEvents.push(args);
});