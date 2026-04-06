<template>
    <header>
        <h1>
            Sistema de Integração Escolar
        </h1>
    </header>
    <main>
        <div class="max-width-content">
            <v-form class="form" @submit.prevent="handleSubmit">
                <div>
                    <label>
                        Login:
                    </label>
                    <v-text-field 
                        class="input input-text" 
                        v-model="inputLogin" 
                        type="text" 
                        variant="outlined" 
                    />
                </div>
                <div>
                    <label>
                        Senha:
                    </label>
                    <v-text-field 
                        class="input input-pass" 
                        v-model="inputPassword" 
                        type="password" 
                        variant="outlined"
                        :error-messages="erroLogin" />
                </div>
                <v-btn class="submit" type="submit">
                    Entrar
                </v-btn>
            </v-form>
        </div>
    </main>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/authStore';
import { ref } from 'vue'


const auth = useAuthStore();
const router = useRouter();

const inputLogin = ref('');
const inputPassword = ref('');
const erroLogin = ref('');

const handleSubmit = async () => {
    const success = auth.login(inputLogin.value, inputPassword.value);
    if (success) {
        router.push('/home')
    } else {
        erroLogin.value = 'Login ou senha incorretos.'
    }
}

</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html,
body {
    overflow: hidden;
    height: 100%;
}

body {
    background-color: #1A1A1A;
    min-height: 100vh;
}

main {
    display: flex;
    align-items: center;
    min-height: calc(100vh - 48px);
}

h1 {
    font-size: 32px;
    font-weight: 600;
    font-family: 'Inter', sans-serif;
    color: #ffffff;
    text-align: center;
    margin: 45px 0 0 0;
}

.max-width-content {
    padding: 0 60px 0 60px;
}

.form {
    width: 288px;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.form label {
    font-size: 16px;
    font-weight: 500;
    font-family: 'Inter', sans-serif;
    color: #F6F6F6;
}

.form .input {
    font-size: 16px;
    font-weight: 500;
    font-family: 'Inter', sans-serif;
    color: #1A1A1A;
    height: 44px;
    margin-top: 3px;
}

.form .submit {
    font-size: 20px;
    font-weight: 600;
    font-family: 'Inter', sans-serif;
    background-color: #00C174;
    color: #F6F6F6;
    height: 50px;
    margin-top: 24px;
}

.form .input:deep(.v-field__input) {
    height: 44px;
    min-height: auto;
}

.form .input:deep(.v-field__field) {
    background-color: #ffffff;
    border-radius: 5px;
    padding: 0 10px;
    height: 44px;
}

.form .input-text:deep(.v-input__details) {
    display: none;
}

.form .input-pass:deep(.v-input__details) {
    padding: 0;
    margin-top: 3px;
}

.form .input:deep(.v-messages__message) {
    font-size: 13px;
    font-weight: 500;
    font-family: 'Inter', sans-serif;
    color: #FF6666;
}

.form .input:deep(*) {
    border: none;
}
</style>