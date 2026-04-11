<script setup>
import { ref, computed } from 'vue';

const props = defineProps([
    "modelValue",
    "classIndex",
    "classes",
    "professorSubjects"
])

const emits = defineEmits([
    "update:modelValue",
])

const student = ref('');
const subject = ref('');
const notes = ref('');
const touched = ref(false);

const notesRules = {
    required: v => !!v || 'Campo obrigatório',
    min: v => v >= 0 || 'Nota mínima é 0',
    max: v => v <= 10 || 'Nota máxima é 10',
    decimal: v => /^\d+(\.\d{1})?$/.test(v) || 'Máximo 1 casa decimal'
}

const notesHasError = computed(() => {
    if (!touched.value) return false;

    return (
        notesRules.required(notes.value) !== true ||
        notesRules.min(notes.value) !== true ||
        notesRules.max(notes.value) !== true ||
        notesRules.decimal(notes.value) !== true
    );
});

const hasError = computed(() => {
    return (
        notesHasError.value ||
        student.value === '' ||
        subject.value === ''
    );
});

const closeModal = (isActive) => {
    isActive.value = false;
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
            <v-card class="v-title" title="Adicionar nota">
                <div class="inputs-content">
                    <label for="student">
                        Aluno:
                    </label>
                    <v-select 
                        class="input arrow" 
                        id="student" 
                        :items="props.classes[props.classIndex].students"
                        item-title="name" 
                        item-value="id" 
                        v-model="student" 
                        type="text"
                        variant="outlined" 
                    />
                    <label for="subject">
                        Disciplina:
                    </label>
                    <v-select 
                        class="input arrow" 
                        id="subject" 
                        :items="props.professorSubjects"
                        item-title="name"
                        item-value="id" 
                        v-model="subject" 
                        type="text"
                        variant="outlined" 
                    />
                    <label for="note">
                        Nota:
                    </label>
                    <v-text-field 
                        class="input" 
                        id="note" 
                        v-model="notes" 
                        type="number" 
                        variant="outlined" 
                        :rules="[
                            notesRules.required,
                            notesRules.min,
                            notesRules.max,
                            notesRules.decimal,
                        ]"
                        @input="[notes = Math.min(10, Math.max(0, notes)), touched = true]"
                    />
                </div>
                <v-card-actions 
                    class="btn-content"
                    :style="{ marginTop: notesHasError ? '20px' : '0px' }"
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
                        @click="() => { }"
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
