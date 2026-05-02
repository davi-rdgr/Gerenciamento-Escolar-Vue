import axios from "axios";

export default class NoteRepository {
    async addNote(studentId, classId, subjectId, note) {
        try {
            const response = await axios.post(`http://localhost:8080/notas/adicionar`, {
                alunoId: studentId,
                turmaId: classId,
                disciplinaId: subjectId,
                valor: note
            });
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
}