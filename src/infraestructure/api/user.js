import axios from "axios";

export default class UserRepository {
    async getUser(login, password) {
        try {
            const response = await axios.post('http://localhost:8080/auth/login', {
                login: login,
                senha: password
            });
            return response.data;
        } catch (error) {
            console.error("Erro ao buscar aluno:", error);
        }
    }

    async getUserInfos(userId) {
        try {
            const response = await axios.get(`http://localhost:8080/alunos/${userId}/detalhes`)
            return response.data;
        } catch (error) {
            console.error("Erro ao buscar os dados do aluno", error)
        }
    }

}