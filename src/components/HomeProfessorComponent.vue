<script setup>
import { ref } from 'vue';

const professor = [{
    title: 'Minhas turmas',
    description: 'Visualizar as turmas que o professor está incluso, podendo adicionar ou editar notas para alunos cujo leciona numa turma.',
    action: () => { dialogOpen.value = true }
}];

const dialogOpen = ref(false);
const classIndex = ref();
const classes = [
    { 
        id: '1', 
        turma: '7° ano C 2026',
        students: [
            {
                id: 1,
                name: 'Clark Kent',
                grid: [
                    { disciplina: 'Matemática', nota: 9.5 },
                    { disciplina: 'História', nota: 6.2 },
                    { disciplina: 'Português', nota: 2.5 },
                ]
            },
            {
                id: 2,
                name: 'Wally West',
                grid: [
                    { disciplina: 'Matemática', nota: 9.5 },
                    { disciplina: 'História', nota: 6.2 },
                    { disciplina: 'Português', nota: 2.5 },
                ]
            },
            {
                id: 3,
                name: 'Diana',
                grid: [
                    { disciplina: 'Matemática', nota: 9.5 },
                    { disciplina: 'História', nota: 6.2 },
                    { disciplina: 'Português', nota: 2.5 },
                ]
            },
        ]
    },
    { 
        id: '2', 
        turma: '7° ano B 2026',
        students: [
            {
                id: 4,
                name: 'Antony Stark',
                grid: [
                    { disciplina: 'Matemática', nota: 9.5 },
                    { disciplina: 'História', nota: 6.2 },
                    { disciplina: 'Português', nota: 2.5 },
                ]
            },
            {
                id: 5,
                name: 'Bruce Banner',
                grid: [
                    { disciplina: 'Matemática', nota: 9.5 },
                    { disciplina: 'História', nota: 6.2 },
                    { disciplina: 'Português', nota: 2.5 },
                ]
            },
            {
                id: 6,
                name: 'Steven Rogers',
                grid: [
                    { disciplina: 'Matemática', nota: 9.5 },
                    { disciplina: 'História', nota: 6.2 },
                    { disciplina: 'Português', nota: 2.5 },
                ]
            }
        ]
    },
    { 
        id: '3', 
        turma: '5° ano C 2026',
        students: [
            {
                id: 7,
                name: 'Gwen Stacy',
                grid: [
                    { disciplina: 'Matemática', nota: 9.5 },
                    { disciplina: 'História', nota: 6.2 },
                    { disciplina: 'Português', nota: 2.5 },
                ]
            },
            {
                id: 8,
                name: 'Peter Parker',
                grid: [
                    { disciplina: 'Matemática', nota: 9.5 },
                    { disciplina: 'História', nota: 6.2 },
                    { disciplina: 'Português', nota: 2.5 },
                ]
            },
            {
                id: 9,
                name: 'Maryjane Watson',
                grid: [
                    { disciplina: 'Matemática', nota: 9.5 },
                    { disciplina: 'História', nota: 6.2 },
                    { disciplina: 'Português', nota: 2.5 },
                ]
            }
        ]
    },
]

const btnText = ref("Voltar");
const dialogOptions = ref(false);
const selectedClass = ref('');
const className = ref('');

const selectClass = (id, index, selectedClassName) => {
    selectedClass.value = id;
    classIndex.value = index;
    className.value = selectedClassName
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
        :classIndex="classIndex"
        :className="className"
        v-model="dialogOpen"
        @selectClass="selectClass"
    />

</template>

