<script setup>
import { ref, computed } from 'vue';

const props = defineProps([
    "modelValue",
])

const emits = defineEmits([
    "update:modelValue",
])

const feedbackOpen = ref(false)
const dialogStatus = ref(null);
const searchClass = ref(null);

const classes = [
    { 
        id: 1,
        name: '7° ano B 2026',
    },
    {
        id: 2,
        name: '3° ano C 2026',
    },
    {
        id: 3,
        name: '4° ano A 2026',
    }
]

const statusConfig = {
    true: {
        title: 'SUCESSO!!!',
        subtitle: 'Turma removida com sucesso!',
        btnText: 'Confirmar',
        dialogType: 'success',
        dialogOptions: false,
    },
    false: {
        title: 'ERRO!!!',
        subtitle: 'Erro ao remover turma. Tente novamente!',
        btnText: 'Confirmar',
        dialogType: 'error',
        dialogOptions: false,
    }
}

const currentStatus = computed(() => {
    if (dialogStatus.value === null) return null
    return statusConfig[dialogStatus.value]
})

const hasError = computed(() => {
    return searchClass.value ? false : true
})

const closeModal = (isActive) => {
    isActive.value = false
}

const deleteClass = () => {
    const sucesso = true 
    dialogStatus.value = sucesso
    feedbackOpen.value = true
}

const openModal = () => {
    feedbackOpen.value = false;
}

</script>

<template>
    <v-dialog :model-value="props.modelValue"
        @update:model-value="emits('update:modelValue', $event)" 
        class="v-dialog"
        max-width="356">
        <template v-slot:default="{ isActive }">
            <v-card class="v-title" title="Remover turma">
                <div class="inputs-content">
                    <label for="class">
                        Turma:
                    </label>
                    <v-select
                        class="input arrow" 
                        id="class" 
                        v-model="searchClass" 
                        variant="outlined"
                        :items="classes"
                        item-title="name"
                        item-value="id"
                    />
                </div>
                <v-card-actions 
                    class="btn-content"
                    :style="{ marginTop: '0px' }"
                    >
                    <v-btn 
                        class="btn btn-back" 
                        text="Voltar" 
                        @click="closeModal(isActive)"
                    >
                    </v-btn>
                    <v-btn 
                        class="btn btn-save" 
                        text="Excluir" 
                        :disabled="hasError"
                        @click="deleteClass"
                    >
                    </v-btn>
                </v-card-actions>
            </v-card>
        </template>
    </v-dialog>
    <dialog-component 
        v-if="currentStatus"
        v-model="feedbackOpen"
        :title="currentStatus.title" 
        :subtitle="currentStatus.subtitle" 
        :btnText="currentStatus.btnText" 
        :dialogType="currentStatus.dialogType"
        :dialogOptions="currentStatus.dialogOptions" 
        @actionBtn="openModal" 
    />
</template>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.selected-class {
    background-color: #00C174 !important;
    color: #ffffff !important;
}

.disabled-btn {
    background-color: #B5B5B5 !important;
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
    color: #1a1a1a;
}

.v-dialog .inputs-content {
    margin: 15px 0 0 0;
}

.v-dialog .inputs-content label {
    font-size: 16px;
    font-weight: 500;
    font-family: 'Inter', sans-serif;
    color: #1a1a1a;
    margin: 10px 0 0 0;
}

.v-dialog .inputs-content .input {
    font-size: 16px;
    font-weight: 400;
    font-family: 'Inter', sans-serif;
    color: #1a1a1a;
    height: 44px;
    position: relative;
}

.v-dialog .inputs-content .arrow:after {
    content: url('../../assets/images/arrow-down.png');
    position: absolute;
    right: 10px;
    transform: translate(0%, 50%);
    height: 17px;
}

.v-dialog:deep(.v-input--indent-details .v-input__details) {
    padding: 0;
}

.v-dialog:deep(.v-input__control) {
    height: 44px;
}

.v-dialog:deep(.v-field__input) {
    padding: 0;
    min-height: auto;
    height: 44px;
}

.v-dialog:deep(.v-field__field) {
    padding: 0 10px;
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
    color: #6D6D6D;
    padding: 10px;
    flex: 1;
    background-color: #D9D9D9;
    margin: 15px 0 0 0;
    border-radius: 10px;
}

.v-dialog .btn-content .btn-save {
    background-color: #00C174 !important;
    color: #F6F6F6 !important;
}

.btn-extra {
    font-size: 24px;
    font-weight: 600;
    font-family: 'Inter', sans-serif;
    color: #ffffff;
}
</style>
