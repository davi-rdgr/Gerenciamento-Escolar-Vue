import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthStore = defineStore('auth', () => {
    const user = ref(null);

    const savedUser = localStorage.getItem('user')

    if (savedUser) {
        user.value = JSON.parse(savedUser)
    }

    const users = [
        {
            login: 'admin',
            password: '123456',
            role: 'admin',
            name: 'Administrador',
            email: 'admin@gmail.com'
        },
        {
            login: 'professor',
            password: '123456',
            role: 'professor',
            name: 'Professor',
            email: 'professor@gmail.com'
        },
        {
            login: 'aluno',
            password: '123456',
            role: 'student',
            name: 'Aluno',
            email: 'aluno@gmail.com'
        }
    ];

    const login = (loginTyped, passTyped) => {
        const userFind = users.find(
            u => u.login === loginTyped && u.password === passTyped
        );

        if (userFind) {
            user.value = userFind
            localStorage.setItem('user', JSON.stringify(userFind));
            return true;
        }

        return false;
    }

    const logout = () => {
        user.value = null;
        localStorage.removeItem('user');
    }

    return { user, login, logout }
})