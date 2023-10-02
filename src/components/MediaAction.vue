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
    <div class="action" :class="classes" @click="handleAction">
            <img v-if="url==='play'" :src="`/images/bg.svg`" :style="{ position: 'relative', top: '3px' }" />
            <img v-else :src="`/images/${url}.svg`" :style="url== 'pause' ? {position: 'relative', top: '3px' }: ''" />
    </div>
</template>

<style scoped>
.action {
    display: flex;
    align-items: center;
    margin: 0 3px;
}

</style>