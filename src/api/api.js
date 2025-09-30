// src/api/supabase.js
import axios from 'axios';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

const axiosInstance = axios.create({
    baseURL: `${supabaseUrl}/rest/v1`,
    headers: {
        'Content-Type': 'application/json',
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        Prefer: 'return=representation',
    },
});

export async function getProjects() {
        const res = await axiosInstance.get('/projects?order=created_at.desc');
        return res.data;
}

export async function getCertificates() {
    const res = await axiosInstance.get('/certificates');
    return res.data;
}

export async function getComments() {
    const res = await axiosInstance.get('/comments?order=created_at.desc');
    return res.data;
}

export async function postMessage(userMessage) {
    const res = await axiosInstance.post('/comments', userMessage);
    return res.data;
}

export async function login(email, password) {
    try {
        const { data } = await authInstance.post('/token?grant_type=password', {
            email,
            password,
        });

        // data.access_token = токен для дальнейших запросов
        // data.user = данные пользователя
        console.log("Login success:", data);

        // Пример: сохраняем токен в localStorage
        localStorage.setItem("supabase_token", data.access_token);

        return data;
    } catch (error) {
        console.error("Login error:", error.response?.data || error.message);
        return null;
    }
}
