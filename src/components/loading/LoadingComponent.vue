<script setup>

const props = defineProps([
    "active"
]);

</script>

<template>
    <div v-if="props.active" class="bg-color">
        <v-progress-circular 
            indeterminate 
            :size="70" 
            :color="'#00C174'"
            :width="5">
        </v-progress-circular>
    </div>
</template>

<style scoped>
.bg-color {
    background-color: #1a1a1a;
    position: fixed;
    width: 100%;
    min-height: 100%;
    top: 0;
    left: 0;
    opacity: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>