<script setup lang="ts">

const props = defineProps({
    url: {
        type: String,
        default: "",
        required: true,
    },
    classes: {
        type: Array,
        default: function () {
            return [];
        }
    }
})

const emits = defineEmits(["action"])

const handleAction = () =>{
    emits("action", props.url)
}
</script>

<template>
    <span class="action" :class="classes" @click="handleAction">
        <!-- Please Note this if statement was added because the play svg images were not grouped -->
        <span v-if="url=== 'play'" class="play-background">
            <img :src="`/images/bg.svg`" />
            <img :src="`/images/${url}.svg`" />
        </span>
        <img v-else :src="`/images/${url}.svg`" />
    </span>
</template>

<style scoped>
.action {
    display: inline-block;
    margin: 0 3px;
    transition: all .2s;
    cursor: pointer;
}

.action:hover {
    transform: scale(1.2);
}

.action:active {
    transform: scale(1);
}

.play-background {
    display: inline-block;
    position: relative;
}

.play-background img:nth-child(2) {
    position: absolute;
    right: 32%;
    top : 22%;
}
</style>