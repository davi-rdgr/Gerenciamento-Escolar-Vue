<script setup>
const admin = [
    {
        title: 'Adicionar aluno',
        description: 'Adicionar um novo aluno na base de dados. O aluno recém criado deverá ter uma turma vinculada.',
        action: () => { }
    },
    {
        title: 'Remover aluno',
        description: 'Remover um aluno da base de dados. Ao remover o aluno, suas notas também serão excluídas sem salvamento prévio.',
        action: () => { }
    },
    {
        title: 'Adicionar professor',
        description: 'Adicionar um novo professor na base de dados. O professor recém criado deverá ter uma turma vinculada.',
        action: () => { }
    },
    {
        title: 'Remover professor',
        description: 'Remover um aluno da base de dados. Ao remover o aluno, suas notas também serão excluídas sem salvamento prévio.',
        action: () => { }
    },
    {
        title: 'Adicionar turma',
        description: 'Adicionar uma nova turma na base de dados. A nova turma não tem professores ou alunos vinculados na criação.',
        action: () => { }
    },
    {
        title: 'Remover turma',
        description: 'Remover uma turma da base de dados. Ao remover a turma, seus alunos e professores ficarão sem turmas vinculadas.',
        action: () => { }
    },
]
</script>

<template>
    <options-card-component
        :content="admin" 
    />
</template>