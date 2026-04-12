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
const menu = ref(false)

const classInfo = ref({
    name: '',
    year: '',
})

const statusConfig = {
    true: {
        title: 'SUCESSO!!!',
        subtitle: 'Turma adicionado com sucesso!',
        btnText: 'Confirmar',
        dialogType: 'success',
        dialogOptions: false,
    },
    false: {
        title: 'ERRO!!!',
        subtitle: 'Erro ao adicionar turma. Tente novamente!',
        btnText: 'Confirmar',
        dialogType: 'error',
        dialogOptions: false,
    }
}

const currentStatus = computed(() => {
    if (dialogStatus.value === null) return null
    return statusConfig[dialogStatus.value]
})

const formattedDate = computed(() => {
    if (!classInfo.value.year) return ''
    const d = new Date(classInfo.value.year)
    return d.getFullYear().toString()
})

const hasError = computed(() => {
    return Object.values(classInfo.value).some(value => 
        value === '' || value === null || value === undefined
    )
})

const closeModal = (isActive) => {
    isActive.value = false
}

const confirmDate = () => {
    menu.value = false
}

const saveClass = () => {
    const sucesso = true 
    dialogStatus.value = sucesso
    feedbackOpen.value = true
}

const openModal = () => {
    feedbackOpen.value = false;
}

</script>

<template>
    <v-dialog :model-value="props.activatorText ? undefined : props.modelValue"
        @update:model-value="props.activatorText ? null : emits('update:modelValue', $event)" class="v-dialog"
        max-width="356">
        <template v-if="props.activatorText" v-slot:activator="{ props: activatorProps }">
            <v-btn class="btn-extra" v-bind="activatorProps" :text="props.activatorText" variant="text" />
        </template>
        <template v-slot:default="{ isActive }">
            <v-card class="v-title" title="Adicionar turma">
                <div class="inputs-content">
                    <label for="name">
                        Nome:
                    </label>
                    <v-text-field
                        class="input" 
                        id="name" 
                        v-model="classInfo.name" 
                        type="text"
                        variant="outlined" 
                    />
                    <label for="year">
                        Ano:
                    </label>
                    <v-menu
                        v-model="menu"
                        :close-on-content-click="false">
                        <template v-slot:activator="{ props }">
                            <v-text-field
                                class="input arrow"
                                id="year"
                                v-bind="props"
                                :model-value="formattedDate"
                                readonly
                                variant="outlined"
                            />
                        </template>
                        <v-date-picker
                            v-model="classInfo.year"
                            :color="'#00C174'"
                            view-mode="year"
                            @update:model-value="confirmDate"
                        />
                    </v-menu>
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
                        text="Salvar" 
                        :disabled="hasError"
                        @click="saveClass"
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
