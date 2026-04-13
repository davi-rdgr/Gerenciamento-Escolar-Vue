<script setup>
import { useAuthStore } from '@/stores/authStore';
import router from '@/router';
import { ref } from 'vue';

const logoutOpen = ref(false)

const title = ref('SAIR');
const subtitle = ref('Deseja realmente encerrar a sessão?');
const btnText = ref('Confirmar');
const dialogType = ref('neutral');
const dialogOptions = ref(true);

const logout = () => {
    router.push('/')
}

const openModal = () => {
    logoutOpen.value = true;
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
                    {{ auth.user?.email }}
                </span>
            </div>
            <v-btn 
                class="logout-btn"
                @click="openModal">
                Logout
            </v-btn>
        </div>
    </header>
    <slot></slot>
    <dialog-component 
        class="dialog-logout"
        v-model="logoutOpen"
        :title="title" 
        :subtitle="subtitle" 
        :btnText="btnText" 
        :dialogType="dialogType"
        :dialogOptions="dialogOptions" 
        @actionBtn="logout" 
    />
</template>

<style scoped>
.standart-layout {
    padding: 25px 80px 30px 80px;
    background-color: #1a1a1a;
}

.standart-layout h1 {
    font-size: 32px;
    font-weight: 600;
    font-family: 'Inter', sans-serif;
    color: #ffffff;
    text-align: center;
    margin: 0;
}

.standart-layout .user-info {
    margin: 40px 0 0 0;
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

.standart-layout .user-info .logout-btn {
    font-size: 20px;
    background-color: #1a1a1a;
    border: none;
    box-shadow: none;
}
</style>