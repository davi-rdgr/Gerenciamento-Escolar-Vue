<script setup>
import { onMounted, ref } from 'vue';
import { useAuthStore } from '@/stores/authStore';
import { useUserStore } from '@/stores/userStore';

const auth = useAuthStore();
const user = useUserStore();
const studentNotes = ref([]);
const studentClass = ref('');
const loading = ref(false);

onMounted(async () => {
    loading.value = true;
    await user.getUserInfos(auth.user?.id);
    studentNotes.value = user.userInfos?.notas || [];
    studentClass.value = `${user.userInfos?.nomeTurma} ${user.userInfos?.ano}`
    loading.value = false;
})

const student = [{
    title: 'Minhas notas',
    description: 'Visualizar as notas das matérias que o aluno frequenta.',
    action: () => { dialogOpen.value = true }
}];

const dialogOpen = ref(false);

</script>

<template>
    <options-card-component
        :content="student" 
    />
    <student-notes-component
        :notes="studentNotes"
        :class="studentClass"
        v-model="dialogOpen"
    />
    <loading-component
        :active="loading"
    />
</template>