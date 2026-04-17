<script setup>
import { onMounted, ref } from 'vue';
import { useAuthStore } from '@/stores/authStore';
import { useStudentStore } from '@/stores/studentStore';

const auth = useAuthStore();
const studentStore = useStudentStore();
const studentNotes = ref([]);
const studentClass = ref('');
const loading = ref(false);

onMounted(async () => {
    loading.value = true;
    await studentStore.getStudentInfos(auth.user.id);
    studentNotes.value = studentStore.student?.notas || [];
    studentClass.value = `${studentStore.student?.nomeTurma} ${studentStore?.student.ano}`
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