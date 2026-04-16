<script setup>
import { useAuthStore } from '@/stores/authStore';
import { ref, computed, onMounted } from 'vue';

const auth = useAuthStore();
const loading = ref(false);

onMounted(() => {
    loading.value = true;
    auth.loadUser();
    //console.log(auth.user)
    loading.value = false;
})

const role = computed(() => auth.user?.perfil);


</script>
<template>
    <main>
        <div class="max-width-content">
            <home-student-component
                v-if="role == 'ALUNO'" 
            />
            <home-professor-component 
                v-if="role == 'PROFESSOR'" 
            />
            <home-admin-component
                v-if="role == 'ADMIN'" 
            />
        </div>
    </main>
    <loading-component
        :active="loading"
    />
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
    min-height: calc(100vh - 210px);
    background-color: #ffffff;
}

.max-width-content {
    padding: 0 60px 0 60px;
}

</style>