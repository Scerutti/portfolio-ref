import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";

/**
 * Devuelve un objeto con los headers de autorización.
 * Si existe un token en localStorage, se agrega el header `Authorization: Bearer <token>`.
 * Si no existe, devuelve un objeto vacío (sin enviar cabecera).
 *
 * @function
 * @returns {Object} Objeto con headers de autorización o vacío.
 */
const getAuthHeaders = () => {
    const token = localStorage.getItem("token");
    return token ? { Authorization: `Bearer ${token}` } : {};
};

const httpPrivate = {
    get: (url: string) => {
        return axios
            .get(`${BASE_URL}${url}`, {
                headers: { ...getAuthHeaders() },
            })
            .then((response) => response.data);
    },

    post: (url: string, body: any) => {
        return axios
            .post(`${BASE_URL}${url}`, body, {
                headers: { ...getAuthHeaders() },
            })
            .then((response) => response.data);
    },

    put: (url: string, body: any) => {
        return axios
            .put(`${BASE_URL}${url}`, body, {
                headers: { ...getAuthHeaders() },
            })
            .then((response) => response.data);
    },

    patch: (url: string, body: any) => {
        return axios.patch(`${BASE_URL}${url}`, body, {
            headers: { ...getAuthHeaders() },
        });
    },

    delete: (url: string) => {
        return axios
            .delete(`${BASE_URL}${url}`, {
                headers: { ...getAuthHeaders() },
            })
            .then((response) => response.data);
    },
};

export default httpPrivate;
