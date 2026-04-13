<script setup>
import { computed } from 'vue';
const props = defineProps([
    "title",
    "subtitle",
    "btnText",
    "dialogType",
    "dialogOptions",
    "modelValue"
])

const emits = defineEmits([
    "actionBtn",
    "update:modelValue"
])

const typeStyles = computed(() => {
    const map = {
        success: { color: '#7BE88C', border: '1px solid #7BE88C' },
        error: { color: '#FF6666', border: '1px solid #FF6666' },
        warning: { color: '#FFCD1C', border: '1px solid #FFCD1C' },
        neutral: { color: '#2ED0DC', border: '1px solid #2ED0DC' },
    }
    return map[props.dialogType] ?? map['neutral'];
})

const emitEvent = () => {
    emits('actionBtn')
}

const closeModal = (isActive) => {
    isActive.value = false;
}

</script>

<template>
    <v-dialog 
        :model-value="props.modelValue"
        @update:model-value="emits('update:modelValue', $event)"
        class="v-dialog" 
        max-width="356">
        <template v-slot:default="{ isActive }">
            <v-card 
                :style="{ '--type-color': typeStyles.color }" 
                class="v-title" 
                :title="props.title">
                    <v-card-text class="v-subtitle">
                        {{ props.subtitle }}
                    </v-card-text>
                    <v-card-actions 
                        class="btn-content" 
                        v-if="props.dialogOptions">
                            <v-btn 
                                class="btn btn-back" 
                                text="Voltar" 
                                @click="closeModal(isActive)"
                            >
                            </v-btn>
                            <v-btn 
                                class="btn" 
                                :text="props.btnText" 
                                @click="emitEvent"
                            >
                        </v-btn>
                    </v-card-actions>
                    <v-card-actions 
                        class="btn-content" 
                        v-else>
                            <v-btn 
                                class="btn" 
                                :text="props.btnText" 
                                @click="emitEvent"
                            >
                        </v-btn>
                    </v-card-actions>
            </v-card>
        </template>
    </v-dialog>
</template>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.v-dialog:deep(.v-card--variant-elevated) {
    background-color: #ffffff;
    padding: 20px;
}

.v-dialog:deep(.v-card-item),
.v-dialog:deep(.v-card-actions),
.v-dialog:deep(.v-card-text) {
    padding: 0;
}

.v-dialog:deep(.v-card-actions),
.v-dialog:deep(.v-btn.v-btn--density-default) {
    min-height: auto;
    height: auto;
}

.v-dialog .v-title {
    font-size: 20px;
    font-weight: 600;
    font-family: 'Inter', sans-serif;
    color: var(--type-color);
    border: 1px solid var(--type-color);
}

.v-dialog .v-subtitle {
    font-size: 14px;
    font-weight: 500;
    font-family: 'Inter', sans-serif;
    color: #1a1a1a;
    margin: 15px 0 0 0;
}

.v-dialog .btn-content {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
}

.v-dialog .btn-content .btn {
    font-size: 20px;
    font-weight: 500;
    font-family: 'Inter', sans-serif;
    color: #ffffff;
    padding: 10px;
    flex: 1;
    background-color: var(--type-color);
    margin: 15px 0 0 0;
    border-radius: 10px;
}

.v-dialog .btn-content .btn-back {
    background-color: #D9D9D9 !important;
    color: #6D6D6D !important;
}

.btn-logout {
    font-size: 24px;
    font-weight: 600;
    font-family: 'Inter', sans-serif;
    color: #ffffff;
}
</style>
