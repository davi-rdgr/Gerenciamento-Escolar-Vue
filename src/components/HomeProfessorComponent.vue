<script setup>
import { onMounted, ref } from 'vue';
import { useAuthStore } from '@/stores/authStore';
import { useUserStore } from '@/stores/userStore';

const auth = useAuthStore();
const user = useUserStore();
const loading = ref(false);

const professorClasses = ref([]);
const professorSubject = ref([]);

onMounted(async () => {
    loading.value = true;
    await user.getUserInfos(auth.user?.id);
    professorClasses.value = user.userInfos?.turmas || [];
    professorSubject.value = user.userInfos?.disciplinas ||[];
    loading.value = false;
})

const professor = [{
    title: 'Minhas turmas',
    description: 'Visualizar as turmas que o professor está incluso, podendo adicionar ou editar notas para alunos cujo leciona numa turma.',
    action: () => { dialogOpen.value = true }
}];

const dialogOpen = ref(false);
const classIndex = ref();

const btnText = ref("Voltar");
const dialogOptions = ref(false);
const selectedClass = ref('');

const selectClass = (id, index) => {
    selectedClass.value = id;
    classIndex.value = index;
}
</script>

<template>
    <options-card-component 
        :content="professor" 
    />
    <professor-classes-component
        :classes="professorClasses" 
        :subjects="professorSubject"
        :dialogOptions="dialogOptions" 
        :btnText="btnText"
        :selectedClass="selectedClass" 
        :classIndex="classIndex" 
        v-model="dialogOpen"
        @selectClass="selectClass" 
    />
    <loading-component
        :active="loading"
    />

</template>
