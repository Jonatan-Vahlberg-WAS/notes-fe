

export default function apiService(url: string, requestInit: RequestInit) {

    const baseUrl = import.meta.env.VITE_API_URL;
    const fullUrl = `${baseUrl}${url}`;

    const headers = {
        'Content-Type': 'application/json',
        //TODO: Add authorization header through cookies
    }

    const requestInitWithHeaders: RequestInit = {
        ...requestInit,
        credentials: "include",
        headers: {
            ...headers,
            ...requestInit.headers,
        }
    }

    return fetch(fullUrl, requestInitWithHeaders);
}