<script setup>

import { useAuthStore } from '@/stores/authStore';
const auth = useAuthStore();

</script>
<template>
    <main>
        <div class="max-width-content">
            <home-student-component
                v-if="auth.user?.role == 'student'" 
            />
            <home-professor-component 
                v-if="auth.user?.role == 'professor'" 
            />
            <home-admin-component
                v-if="auth.user?.role == 'admin'" 
            />
        </div>
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
    min-height: calc(100vh - 210px);
    background-color: #ffffff;
}

.max-width-content {
    padding: 0 60px 0 60px;
}

</style>