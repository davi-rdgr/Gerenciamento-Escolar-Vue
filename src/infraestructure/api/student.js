import axios from "axios";


export default class StudentRepository {
    async getStudent(id) {
        try {
            const response = await axios.get(`http://localhost:8080/alunos/${id}/detalhes`);
            return response.data;
        } catch (error) {
            console.error("Erro ao buscar aluno:", error);
        }
    }
}