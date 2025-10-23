import apiService from "./apiService";

class NotesService {
    private notesUrl = '/notes';
    async getNotes() {
        return await apiService(`${this.notesUrl}`, {
            method: 'GET',
        });
    }
}

export default new NotesService();