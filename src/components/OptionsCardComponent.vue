<script setup>
const props = defineProps([
    "content"
]);

</script>

<template>
    <div class="options-rows">
        <div 
            class="row" 
            v-for="(item, index) in props.content" 
            :key="index" 
            @click="item.action">
            <h2>
                {{ item.title }}
            </h2>
            <p>
                {{ item.description }}
            </p>
        </div>
    </div>
</template>

<style scoped>
.options-rows {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 40px 0 40px 0;
}

.options-rows .row {
    padding: 10px 20px 30px 20px;
    background-color: #00C174;
    max-width: 486px;
    width: 100%;
    border-radius: 10px;
    cursor: pointer;
}

.options-rows .row h2 {
    font-size: 20px;
    font-weight: 500;
    font-family: 'Inter', sans-serif;
    color: #ffffff;
    margin: 0;
}

.options-rows .row p {
    font-size: 13px;
    font-weight: 500;
    font-family: 'Inter', sans-serif;
    color: #ffffff;
    margin: 13px 0 0 0;
}
</style>