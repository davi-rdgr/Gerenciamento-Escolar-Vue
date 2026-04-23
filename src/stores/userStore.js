import { defineStore } from "pinia";
import { ref } from "vue";
import UserRepository from "@/infraestructure/api/user";

const userRepository = new UserRepository();

export const useUserStore = defineStore('user', () => {
    const userInfos = ref(null);

    const loadUser = () => {
        const saved = localStorage.getItem('userInfos');
        if (saved) {
            userInfos.value = JSON.parse(saved);
        }
    }

    const setUser = (userData) => {
        userInfos.value = userData;
        localStorage.setItem('userInfos', JSON.stringify(userData));
    }

    const getUserInfos = async (usuarioId) => {
        console.log(usuarioId)
        try {
            const response = await userRepository.getUserInfos(usuarioId);
            if (!response) return false;

            setUser(response);
            return true;
        } catch (error) {
            console.log(error)
            return false;
        }
    }

    const logout = () => {
        userInfos.value = null;
        localStorage.removeItem('userInfos');
    }

    return { userInfos, getUserInfos, logout, loadUser }
})