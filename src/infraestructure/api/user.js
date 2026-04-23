import axios from "axios";

export default class UserRepository {
    async getUser(login, password) {
        try {
            const response = await axios.post('http://localhost:8080/usuarios/auth', {
                login: login,
                senha: password
            });
            return response.data;
        } catch (error) {
            console.error("Erro ao buscar aluno:", error);
        }
    }

    async getUserInfos(usuarioId) {
        try {
            const response = await axios.get(`http://localhost:8080/usuarios/${usuarioId}/dashboard`)
            return response.data;
        } catch (error) {
            console.error("Erro ao buscar os dados do aluno", error)
        }
    }

}