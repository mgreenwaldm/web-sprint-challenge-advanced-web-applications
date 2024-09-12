import axios from "axios";

export const api = axios.create();
api.defaults.headers.common['Authorization'] = window.localStorage.getItem('authToken');

export const setLogin = (token) => {
    api.defaults.headers.common['Authorization'] = token;
}

export const logout = () => {
    delete api.defaults.headers.common['Authorization'];
}

