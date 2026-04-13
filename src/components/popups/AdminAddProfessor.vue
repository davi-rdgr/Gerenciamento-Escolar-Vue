<script setup>
import { ref, computed, watch } from 'vue';

const props = defineProps([
    "modelValue",
])

const emits = defineEmits([
    "update:modelValue",
])

const feedbackOpen = ref(false)
const dialogStatus = ref(null);

const professorInfo = ref({
    name: '',
    email: '',
    login: '',
    password: '',
    specialty: '',
    class: ''
})

const statusConfig = {
    true: {
        title: 'SUCESSO!!!',
        subtitle: 'Professor adicionado com sucesso!',
        btnText: 'Confirmar',
        dialogType: 'success',
        dialogOptions: false,
    },
    false: {
        title: 'ERRO!!!',
        subtitle: 'Erro ao adicionar professor. Tente novamente!',
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
    if (!professorInfo.value.born) return ''
    const d = new Date(professorInfo.value.born)
    const day = String(d.getDate()).padStart(2, '0')
    const month = String(d.getMonth() + 1).padStart(2, '0')
    const year = d.getFullYear()
    return `${day}/${month}/${year}`  
})

const hasError = computed(() => {
    return Object.values(professorInfo.value).some(value => 
        value === '' || value === null || value === undefined
    )
})

watch(formattedDate, (newDate) => {
    professorInfo.value.bornFormatted = newDate
})

const closeModal = (isActive) => {
    isActive.value = false
}

const saveProfessor = () => {
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
            <v-card class="v-title" title="Adicionar professor">
                <div class="inputs-content">
                    <label for="name">
                        Nome:
                    </label>
                    <v-text-field
                        class="input" 
                        id="name" 
                        v-model="professorInfo.name" 
                        type="text"
                        variant="outlined" 
                    />
                    <label for="email">
                        Email:
                    </label>
                    <v-text-field
                        class="input" 
                        id="email" 
                        v-model="professorInfo.email" 
                        type="email"
                        variant="outlined" 
                    />
                    <label for="login">
                        Login:
                    </label>
                    <v-text-field
                        class="input" 
                        id="login" 
                        v-model="professorInfo.login" 
                        type="text"
                        variant="outlined"
                    />
                    <label for="password">
                        Senha:
                    </label>
                    <v-text-field
                        class="input" 
                        id="password" 
                        v-model="professorInfo.password" 
                        type="password"
                        variant="outlined"
                    />
                    <label for="specialty">
                        Especialidade:
                    </label>
                    <v-select
                        :items="[
                            'Matemática',
                            'Português',
                            'História'
                        ]"
                        class="input arrow" 
                        id="specialty" 
                        v-model="professorInfo.specialty" 
                        type="text"
                        variant="outlined"
                    />
                    <label for="class">
                        Turma:
                    </label>
                    <v-select
                        :items="[
                            'Turma 1',
                            'Turma 2',
                            'Turma 3'
                        ]"
                        class="input arrow" 
                        id="class" 
                        v-model="professorInfo.class" 
                        type="text"
                        variant="outlined"
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
                        text="Salvar" 
                        :disabled="hasError"
                        @click="saveProfessor"
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
