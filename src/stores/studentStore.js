import StudentRepository from "@/infraestructure/api/student";
import { defineStore } from "pinia";
import { ref } from "vue";

const studentRepository = new StudentRepository();

export const useStudentStore = defineStore('student', () => {
    const student = ref(null);

    const loadStudent = () => {
        const saved = localStorage.getItem('studentInfos');
        if (saved) {
            student.value = JSON.parse(saved);
        }
    }

    const setStudent = (studentData) => {
        student.value = studentData;
        localStorage.setItem('studentInfos', JSON.stringify(studentData));
    }

    const getStudentInfos = async (userId) => {
        try {
            const response = await studentRepository.getStudent(userId);
            if (!response) return false;

            setStudent(response);
            return true;
        } catch (error) {
            console.log(error)
            return false;
        }
    }

    const logout = () => {
        student.value = null;
        localStorage.removeItem('studentInfos');
    }


    return { student, getStudentInfos, logout, loadStudent }
})