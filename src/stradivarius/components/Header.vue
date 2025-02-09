<script setup>
import { onMounted } from "vue";

const props = defineProps({
    title: String,
    subtitle: String,
});

onMounted(() => {
    console.log('from vue component')
});
</script>

<template>
    <div>
        <h1>This is a vue component</h1>
        <span>{{ props.title }}</span><br>
        <span>{{ props.subtitle }}</span>
    </div>
</template>

<style lang="scss" scoped>

</style>