import axios from "axios";

export default class ClassRepository {
    async getClassStudents(classId) {
        try {
            const response = await axios.get(`http://localhost:8080/turmas/${classId}/detalhes`);
            return response.data
        } catch (error) {
            console.error("Erro ao buscar turma:", error)
        }
    }
}