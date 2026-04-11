<script setup>
import { ref, computed } from 'vue';

const props = defineProps([
    "modelValue",
    "classIndex",
    "classes",
    "professorSubjects",
    "className"
])

const emits = defineEmits([
    "update:modelValue",
    "updateClasses"
])
const localClasses = ref(JSON.parse(JSON.stringify(props.classes)));

const notesRules = {
    required: v => !!v || '',
    decimal: v => /^\d+(\.\d{1})?$/.test(v) || ''
}

const hasError = computed(() => {
    return localClasses.value[props.classIndex].students.some(student =>
        student.grid.some(note => 
            note.nota === 0 || 
            note.nota === '' || 
            note.nota === null ||
            notesRules.decimal(note.nota) !== true
        )
    )
})

const closeModal = (isActive) => {
    isActive.value = false;
}

const saveNotes = (isActive) => {
    //emits('updateClasses', localClasses.value)
    closeModal(isActive)
}
</script>

<template>
    <v-dialog 
        :model-value="props.activatorText ? undefined : props.modelValue"
        @update:model-value="props.activatorText ? null : emits('update:modelValue', $event)" class="v-dialog"
        max-width="356">
        <template v-if="props.activatorText" v-slot:activator="{ props: activatorProps }">
            <v-btn 
                class="btn-extra" 
                v-bind="activatorProps" 
                :text="props.activatorText" 
                variant="text" 
            />
        </template>
        <template v-slot:default="{ isActive }">
            <v-card 
                class="v-title" 
                :title="'Minha turma - ' + props.className ">
                <v-table class="v-table">
                    <thead>
                        <tr>
                            <th>
                                ID
                            </th>
                            <th>
                                Aluno
                            </th>
                            <th>
                                Nota
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <template v-for="(student, index) in localClasses[props.classIndex].students" :key="index">
                            <tr v-for="(note, noteIndex) in student.grid" :key="noteIndex">
                                <td>{{ student.name }}</td>
                                <td>{{ note.disciplina }}</td>
                                <td>
                                    <v-text-field
                                        class="input-note"
                                        type="number"
                                        v-model="note.nota"
                                        step="0.1"
                                        :rules="[
                                            notesRules.required, 
                                            notesRules.decimal
                                        ]"
                                        @input="note.nota = Math.min(10, Math.max(0, Number(note.nota)))"
                                    />
                                </td>
                            </tr>
                        </template>
                    </tbody>
                </v-table>
                <v-card-actions class="btn-content">
                    <v-btn 
                        class="btn" 
                        text="Voltar" 
                        @click="closeModal(isActive)">
                    </v-btn>
                    <v-btn 
                        class="btn btn-save" 
                        text="Salvar" 
                        :disabled="hasError"
                        @click="saveNotes(isActive)"
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
    color: #1a1a1a;
}

.v-dialog .btn-content {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
}

.v-dialog .v-table {
    margin: 15px 0 0 0;
}

.v-dialog:deep(table) {
    border: 1px solid #B5B5B5;
    font-size: 14px;
    font-weight: 500;
    font-family: 'Inter', sans-serif;
    color: #1a1a1a;
}

.v-dialog:deep(td),
.v-dialog:deep(th) {
    height: 27px;
}

.v-dialog :deep(th:first-child),
.v-dialog :deep(td:first-child) {
    text-align: left;
    padding-left: 15px;
}

.v-dialog:deep(th) {
    background-color: #D9D9D9;
}

.v-dialog:deep(tr:nth-child(odd)) {
    background-color: #FFFFFF;
}

.v-dialog:deep(tr:nth-child(even)) {
    background-color: #D9D9D9;
}

.v-dialog .input-note {
    background-color: #ffffff;
    border: none;
    color: #1a1a1a;
    text-align: right;
    width: 40px;
    padding: 0;
    height: 28px;
}

.v-dialog .input-note:deep(.v-field__input) {
    padding: 0;
    min-height: auto;
    height: 27px;
}

.v-dialog .input-note:deep(.v-input__details){
    display: none;
}

.v-dialog .input-note:deep(v-dialog[data-v-27104b30] td:last-child) {
    padding: 0;   
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
