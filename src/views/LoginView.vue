<script setup>
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/authStore';
import { ref } from 'vue'

const auth = useAuthStore();
const router = useRouter();

const inputLogin = ref('');
const inputPassword = ref('');
const erroLogin = ref('');
const loading = ref(false);

const handleSubmit = async () => {
    loading.value = true;
    const success = await auth.login(inputLogin.value, inputPassword.value);
    console.log(success)
    if (success) {
        router.push('/home')
    } else {
        erroLogin.value = 'Login ou senha incorretos.'
    }
    loading.value = false;
}
</script>
<template>
    <main>
        <div class="max-width-content">
            <v-form class="form" @submit.prevent="handleSubmit">
                <div>
                    <label for="login">
                        Login:
                    </label>
                    <v-text-field 
                        id="login"
                        class="input input-text" 
                        v-model="inputLogin" 
                        type="text" 
                        variant="outlined" 
                    />
                </div>
                <div>
                    <label for="password">
                        Senha:
                    </label>
                    <v-text-field
                        id="password"
                        class="input input-pass" 
                        v-model="inputPassword" 
                        type="password" 
                        variant="outlined"
                        :error-messages="erroLogin" />
                </div>
                <v-btn 
                    class="submit" 
                    type="submit"
                    text="Entrar">
                </v-btn>
            </v-form>
        </div>
    </main>
    <loading-component
        :active="loading"
    />
</template>

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
    padding: 0;
    
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