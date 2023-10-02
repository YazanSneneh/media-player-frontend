<script setup lang="ts">
import { computed } from "vue";


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

let imagegUrl = computed(()=>{
    if(props.url === "play") return `/images/bg.svg`
    return `/images/${props.url}.svg`;
})
</script>

<template>
    <div class="action" :class="classes" @click="handleAction">
            <img :src="imagegUrl" :style="url== 'pause' || 'play' ? {position: 'relative', top: '3px' }: ''" />
    </div>
</template>

<style scoped>
.action {
    display: flex;
    margin: 0 3px;
}

</style>