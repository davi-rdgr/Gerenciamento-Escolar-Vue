<script setup>
import { useAuthStore } from '@/stores/authStore';
import router from '@/router';
import { ref } from 'vue';

const title = ref('SAIR');
const subtitle = ref('Deseja realmente encerrar a sessão?');
const btnText = ref('Confirmar');
const dialogType = ref('neutral');
const dialogOptions = ref(true);

const email = "davirdgrsouza@gmail.com";
const studantClass = "Turma 2026 / 2";

const logout = () => {
    router.push('/')
}


const auth = useAuthStore();
</script>

<template>
    <header class="standart-layout">
        <h1>
            Sistema de Integração Escolar
        </h1>
        <div class="user-info">
            <div class="content">
                <span>
                    {{ auth.user?.name }}
                </span>
                <span>
                    {{ email }} {{ studantClass || '' }}
                </span>
            </div>
            <dialog-component 
                class="dialog-logout"
                :title="title" 
                :subtitle="subtitle" 
                :btnText="btnText" 
                :dialogType="dialogType"
                :dialogOptions="dialogOptions" 
                activatorText="Logout" 
                @actionBtn="logout" 
            />
        </div>
    </header>
    <slot></slot>
</template>

<style scoped>
.standart-layout {
    margin: 41px 80px 30px 80px;
}

.standart-layout h1 {
    font-size: 32px;
    font-weight: 600;
    font-family: 'Inter', sans-serif;
    color: #ffffff;
    text-align: center;
}

.standart-layout .user-info {
    margin: 80px 0 0 0;
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: space-between;
}

.standart-layout .user-info .content {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.standart-layout .user-info .content span:nth-child(1) {
    font-size: 24px;
    font-weight: 500;
    font-family: 'Inter', sans-serif;
    color: #ffffff;
}

.standart-layout .user-info .content span:nth-child(2) {
    font-size: 15px;
    font-weight: 500;
    font-family: 'Inter', sans-serif;
    color: #ffffff;
}

.standart-layout .user-info .dialog-logout {
    font-size: 20px;
}
</style>