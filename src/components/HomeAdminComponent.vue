<script setup>
import { ref } from 'vue';

const admin = [
    {
        title: 'Adicionar aluno',
        description: 'Adicionar um novo aluno na base de dados. O aluno recém criado deverá ter uma turma vinculada.',
        action: () => { addStudentOpen.value = true }
    },
    {
        title: 'Remover aluno',
        description: 'Remover um aluno da base de dados. Ao remover o aluno, suas notas também serão excluídas sem salvamento prévio.',
        action: () => { removeStudentOpen.value = true }
    },
    {
        title: 'Adicionar professor',
        description: 'Adicionar um novo professor na base de dados. O professor recém criado deverá ter uma turma vinculada.',
        action: () => { addProfessorOpen.value = true }
    },
    {
        title: 'Remover professor',
        description: 'Remover um aluno da base de dados. Ao remover o aluno, suas notas também serão excluídas sem salvamento prévio.',
        action: () => { removeProfessorOpen.value = true }
    },
    {
        title: 'Adicionar turma',
        description: 'Adicionar uma nova turma na base de dados. A nova turma não tem professores ou alunos vinculados na criação.',
        action: () => { addClassOpen.value = true }
    },
    {
        title: 'Remover turma',
        description: 'Remover uma turma da base de dados. Ao remover a turma, seus alunos e professores ficarão sem turmas vinculadas.',
        action: () => { removeClassOpen.value = true }
    },
]

const addStudentOpen = ref(false);
const removeStudentOpen = ref(false);
const addProfessorOpen = ref(false);
const removeProfessorOpen = ref(false);
const addClassOpen = ref(false);
const removeClassOpen = ref(false);
const loading = ref(false);

</script>

<template>
    <options-card-component
        :content="admin" 
    />
    <admin-add-student-component
        v-model="addStudentOpen"
    />
    <admin-remove-student-component 
        v-model="removeStudentOpen"
    />
    <admin-add-professor-component 
        v-model="addProfessorOpen"
    />
    <admin-remove-professor-component 
        v-model="removeProfessorOpen"
    />
    <admin-add-class-component 
        v-model="addClassOpen"
    />
    <admin-remove-class-component 
        v-model="removeClassOpen"
    />
    <loading-component
        :active="loading"
    />
</template>