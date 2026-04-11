<script setup>
import { ref } from 'vue';

const student = [{
    title: 'Minhas notas',
    description: 'Visualizar as notas das matérias que o aluno frequenta.',
    action: () => { dialogOpen.value = true }
}];

const dialogOpen = ref(false);
const notes = [
    { disciplina: 'Matemática', nota: 9.6 },
    { disciplina: 'Português', nota: 4.9 },
    { disciplina: 'História', nota: 6.0 },
    { disciplina: 'Geografia', nota: 2.6 },
    { disciplina: 'Ed. Física', nota: 4.5 },
    { disciplina: 'Química', nota: 3.6 },
]

</script>

<template>
    <options-card-component
        :content="student" 
    />
    <student-notes-component
        :notes="notes"
        v-model="dialogOpen"
    />
</template>