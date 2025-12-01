import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL+'/authors'; // Usar variable de entorno para la URL base

export const getAllAuthors = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching all authors:', error);
        throw error;
    }
};

export const getAuthorByEmail = async (email) => {
    try {
        const response = await axios.get(`${API_URL}/${email}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching author by email:', error);
        throw error;
    }
};

export const createAuthor = async (author) => {
    try {
        const response = await axios.post(API_URL, author);
        return response.data;
    } catch (error) {
        console.error('Error creating author:', error);
        throw error;
    }
};

export const updateAuthor = async (id, author) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, author);
        return response.data;
    } catch (error) {
        console.error('Error updating author:', error);
        throw error;
    }
};

export const deleteAuthor = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting author:', error);
        throw error;
    }
};