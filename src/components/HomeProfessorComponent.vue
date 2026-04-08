<script setup>
import { ref } from 'vue';

const professor = [{
    title: 'Minhas turmas',
    description: 'Visualizar as turmas que o professor está incluso, podendo adicionar ou editar notas para alunos cujo leciona numa turma.',
    action: () => { dialogOpen.value = true }
}];

const dialogOpen = ref(false);
/* const addOpen = ref(false); */
/* const openAddComponent = (status) => {
    addOpen.value = status;
}; */

const classes = [
    { id: '1', turma: '7° ano C 2026' },
    { id: '2', turma: '7° ano B 2026'},
    { id: '3', turma: '5° ano C 2026'},
    { id: '4', turma: '3° ano A 2026'},
    { id: '5', turma: '7° ano D 2026'},
    { id: '6', turma: '4° ano A 2026'},
]
const btnText = ref("Voltar");
const dialogOptions = ref(false);

const selectedClass = ref('');
const selectClass = (id) => {
    selectedClass.value = id;
}


</script>

<template>
    <options-card-component
        :content="professor" 
    />
    <professor-classes-component
        :classes="classes"
        :dialogOptions="dialogOptions"
        :btnText="btnText"
        :selectedClass="selectedClass"
        v-model="dialogOpen"
        @selectClass="selectClass"
    />
    <!-- <professor-add-notes-component
        :classes="classes"
        :dialogOptions="dialogOptions"
        :btnText="btnText"
        :selectedClass="selectedClass"
        v-model="dialogOpen"
        @selectClass="selectClass"
    /> -->
</template>

