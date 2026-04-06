<script setup>

const professor = [{
    title: 'Minhas turmas',
    description: 'Visualizar as turmas que o professor está incluso, podendo adicionar ou editar notas para alunos cujo leciona numa turma.',
    action: () => {  }
}]
</script>

<template>
    <options-card-component
        :content="professor" 
    />
</template>

