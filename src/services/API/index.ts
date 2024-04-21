import { URL_API } from "@constants/app"

export const api = {
    urlBase: URL_API,
    get: async <R>(url: string): Promise<R> => {
        const URL = api.urlBase + url;
        const response = await fetch(URL, { method: 'GET' });
        return await response.json()
    },
    post: async <T, R>(url: string, data: T): Promise<R> => {
        const URL = api.urlBase + url;
        const response = await fetch(URL, { method: 'POST', body: JSON.stringify(data) });
        return await response.json()
    }
}