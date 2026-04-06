<script setup>
import { ref } from 'vue';

const userType = "admin";

const dialogOpen = ref(false);
const title = ref("Minha turma - 2026 / 2");
const notes = [
    { disciplina: 'Matemática', nota: 9.6 },
    { disciplina: 'Português', nota: 4.9 },
    { disciplina: 'História', nota: 6.0 },
    { disciplina: 'Geografia', nota: 2.6 },
    { disciplina: 'Ed. Física', nota: 4.5 },
    { disciplina: 'Química', nota: 3.6 },
]
const btnText = ref("Voltar");
const dialogOptions = ref(false);

const menuConfig = {
    student: [{
        title: 'Minhas notas',
        description: 'Visualizar as notas das matérias que o aluno frequenta.',
        action: () => { dialogOpen.value = true }
    }],
    professor:[{
        title: 'Minhas turmas',
        description: 'Visualizar as turmas que o professor está incluso, podendo adicionar ou editar notas para alunos cujo leciona numa turma.',
        action: () => { dialogOpen.value = true }
    }],
    admin:[
        {
            title: 'Adicionar aluno',
            description: 'Adicionar um novo aluno na base de dados. O aluno recém criado deverá ter uma turma vinculada.',
            action: () => {  }
        },
        {
            title: 'Remover aluno',
            description: 'Remover um aluno da base de dados. Ao remover o aluno, suas notas também serão excluídas sem salvamento prévio.',
            action: () => {  }
        },
        {
            title: 'Adicionar professor',
            description: 'Adicionar um novo professor na base de dados. O professor recém criado deverá ter uma turma vinculada.',
            action: () => {  }
        },
        {
            title: 'Remover professor',
            description: 'Remover um aluno da base de dados. Ao remover o aluno, suas notas também serão excluídas sem salvamento prévio.',
            action: () => {  }
        },
        {
            title: 'Adicionar turma',
            description: 'Adicionar uma nova turma na base de dados. A nova turma não tem professores ou alunos vinculados na criação.',
            action: () => {  }
        },
        {
            title: 'Remover turma',
            description: 'Remover uma turma da base de dados. Ao remover a turma, seus alunos e professores ficarão sem turmas vinculadas.',
            action: () => {  }
        },
    ]
}

</script>
<template>
    <main>
        <div class="max-width-content">
            <div class="options-rows">
                <div 
                    class="row" 
                    v-for="(item, index) in menuConfig[userType]"
                    :key="index"
                    @click="item.action"
                    >
                    <h2>
                        {{ item.title }}
                    </h2>
                    <p>
                        {{ item.description }}
                    </p>
                </div>
            </div>
        </div>
        <student-notes-component
            :title="title"
            :notes="notes"
            :dialogOptions="dialogOptions" 
            :btnText="btnText"
            v-model="dialogOpen"
        />
    </main>
</template>

<style scoped>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

html,
body {
    overflow: hidden;
    height: 100%;
}

body {
    min-height: 100vh;
}

main {
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 266px);
    background-color: #ffffff;
}

.max-width-content {
    padding: 0 60px 0 60px;
}

.options-rows {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 87px 0 86px 0;
}

.options-rows .row {
    padding: 10px 20px 30px 20px;
    background-color: #00C174;
    max-width: 486px;
    width: 100%;
    border-radius: 10px;
    cursor: pointer;
}

.options-rows .row h2 {
    font-size: 20px;
    font-weight: 500;
    font-family: 'Inter', sans-serif;
    color: #ffffff;
    margin: 0;
}

.options-rows .row p {
    font-size: 13px;
    font-weight: 500;
    font-family: 'Inter', sans-serif;
    color: #ffffff;
    margin: 13px 0 0 0;
}
</style>