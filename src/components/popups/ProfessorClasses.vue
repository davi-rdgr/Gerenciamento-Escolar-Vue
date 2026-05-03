<script setup>
import { ref } from 'vue';

const props = defineProps([
    "classes",
    "subjects",
    "dialogOptions",
    "btnText",
    "selectedClass",
    "classIndex",
    "className",
    "modelValue"
])

const emits = defineEmits([
    "update:modelValue",
    "selectClass",
])

const addNotesOpen = ref(false);
const editNotesOpen = ref(false);

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
                class="v-title" 
                title="Minhas turmas">
                <div class="actions-content">
                    <v-btn 
                        class="btn"
                        @click="addNotesOpen = true"
                        :class="!props.selectedClass ? 'disabled-btn' : ''"
                        :disabled="!props.selectedClass"
                        text="Adicionar nota"
                    >
                    </v-btn>
                    <v-btn 
                        class="btn"
                        @click="editNotesOpen = true"
                        :class="!props.selectedClass ? 'disabled-btn' : ''"
                        :disabled="!props.selectedClass"
                        text="Editar nota"
                        >
                    </v-btn>
                </div>
                <v-table class="v-table">
                    <thead>
                        <tr>
                            <th>
                                ID
                            </th>
                            <th>
                                Turma
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr 
                            v-for="(classes, index) in props.classes" 
                                :key="index"
                                @click="emits('selectClass', classes.id, index, classes.nome)"
                                :class="classes.id == props.selectedClass ? 'selected-class' : ''"
                            >
                                <td>{{ classes.id }}</td>
                                <td>{{ classes.nome }} {{ classes.ano }}</td>
                        </tr>
                    </tbody>
                </v-table> 
                <v-card-actions class="btn-content" v-if="props.dialogOptions">
                    <v-btn 
                        class="btn btn-back" 
                        text="Voltar" 
                        @click="closeModal(isActive)">
                    </v-btn>
                    <v-btn 
                        class="btn" 
                        :text="props.btnText" 
                        @click="() => { }">
                    </v-btn>
                </v-card-actions>
                <v-card-actions class="btn-content" v-else>
                    <v-btn 
                        class="btn" 
                        :text="props.btnText" 
                        @click="closeModal(isActive)">
                    </v-btn>
                </v-card-actions>
            </v-card>
        </template>
    </v-dialog>
    <professor-add-notes-component v-if="addNotesOpen"
        v-model="addNotesOpen"
        :classIndex="props.classIndex"
        :selectedClass="props.selectedClass"
        :className="className"
        :professorSubjects="props.subjects"
    />
    <professor-edit-notes-component v-if="editNotesOpen"
        v-model="editNotesOpen"
        :classIndex="props.classIndex"
        :selectedClass="props.selectedClass"
        :className="className"
        :professorSubjects="props.subjects"
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

.v-dialog .actions-content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: right;
    gap: 10px;
    margin: 15px 0 5px 0;
}

.v-dialog .actions-content .btn {
    font-size: 16px;
    font-weight: 500;
    font-family: 'Inter', sans-serif;
    color: #ffffff;
    background-color: #00C174;
    padding: 5px 10px;
    border-radius: 10px;
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
    cursor: pointer;
}

.v-dialog :deep(th:first-child),
.v-dialog :deep(td:first-child) {
    text-align: left;
    padding-left: 15px;
}

.v-dialog :deep(th:last-child),
.v-dialog :deep(td:last-child) {
    text-align: right;
    padding-right: 15px;
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

.v-dialog .btn-content .btn-back {
    background-color: #D9D9D9 !important;
    color: #6D6D6D !important;
}

.btn-extra {
    font-size: 24px;
    font-weight: 600;
    font-family: 'Inter', sans-serif;
    color: #ffffff;
}
</style>
