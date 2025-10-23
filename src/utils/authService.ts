import apiService from "./apiService";


class AuthService {
    private authUrl = '/auth';
    async signUp(email: string, password: string) {
        return await apiService(`${this.authUrl}/signup`, {
            method: 'POST',
            body: JSON.stringify({ email, password })
        });
    }

    async signin(email: string, password: string) {
        return await apiService(`${this.authUrl}/signin`, {
            method: 'POST',
            body: JSON.stringify({ email, password })
        });
    }
    //TODO Fill the rest of the auth service methods
    //TODO: Logout
    //TODO: Get user profile
}

export default new AuthService();