import UserRepository from "@/infraestructure/api/user";
import { defineStore } from "pinia";
import { ref } from "vue";

const userRepository = new UserRepository();

export const useAuthStore = defineStore('user', () => {
    const user = ref(null);

    const loadUser = () => {
        const saved = localStorage.getItem('userInfos');
        if (saved) {
            user.value = JSON.parse(saved);
        }
    }

    const setUser = (userData) => {
        user.value = userData;
        localStorage.setItem('userInfos', JSON.stringify(userData));
    }

    const getUserInfos = async (userId) => {
        try {
            const response = await userRepository.getUserInfos(userId);
            if (!response) return false;

            setUser(response);
            return true;
        } catch (error) {
            console.log(error)
            return false;
        }
    }

    const logout = () => {
        user.value = null;
        localStorage.removeItem('userInfos');
    }


    return { user, getUserInfos, logout, loadUser }
})